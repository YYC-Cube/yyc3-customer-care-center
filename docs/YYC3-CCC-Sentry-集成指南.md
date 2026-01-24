---
@file: YYC3-CCC-Sentry-集成指南.md
@description YYC³ Customer Care Center Sentry 监控集成完整指南
@module docs
@author YYC³ Team
@version 1.0.0
@created 2026-01-23
@updated 2026-01-23
@copyright Copyright (c) 2026 YYC³
@license MIT
---

# YYC³ Customer Care Center - Sentry 监控集成指南

## 📋 概述

YYC³ Customer Care Center 集成了 [Sentry](https://sentry.io/) 错误追踪和性能监控平台，提供全面的错误监控、性能分析和用户会话重放功能。

## 🎯 功能特性

### 错误追踪
- 自动捕获 JavaScript 错误
- React 组件错误边界
- API 请求错误监控
- 未处理的异常捕获

### 性能监控
- 页面加载性能
- API 响应时间
- 用户交互延迟
- 资源加载时间

### 会话重放
- 用户操作录制
- 错误发生时的上下文
- 视频回放功能
- 性能分析

### 告警通知
- 实时错误通知
- Slack 集成
- 邮件通知
- 自定义告警规则

## 🚀 快速开始

### 1. 创建 Sentry 项目

1. 访问 [Sentry.io](https://sentry.io/) 并注册账户
2. 创建新项目，选择 "Next.js" 平台
3. 获取 DSN (Data Source Name)

### 2. 安装依赖

```bash
npm install @sentry/nextjs
# 或
yarn add @sentry/nextjs
# 或
pnpm add @sentry/nextjs
```

### 3. 配置环境变量

在 `.env.local` 或 `.env.production` 文件中添加：

```env
# Sentry 配置
NEXT_PUBLIC_SENTRY_DSN="https://your-dsn@sentry.io/project-id"
SENTRY_DSN="https://your-dsn@sentry.io/project-id"
SENTRY_ENVIRONMENT="development"
SENTRY_TRACES_SAMPLE_RATE=0.1
SENTRY_REPLAY_SESSION_SAMPLE_RATE=0.01
SENTRY_REPLAY_ON_ERROR_SAMPLE_RATE=0.1
```

### 4. 初始化 Sentry

```bash
npx @sentry/wizard@latest -i nextjs
```

按照向导完成配置，向导会自动创建必要的配置文件。

## 📁 配置文件

### sentry.client.config.ts

客户端 Sentry 配置，用于浏览器端错误监控：

```typescript
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // 环境信息
  environment: process.env.SENTRY_ENVIRONMENT || process.env.NODE_ENV,

  // 性能监控
  tracesSampleRate: parseFloat(process.env.SENTRY_TRACES_SAMPLE_RATE || "0.1"),

  // 会话重放
  replaysSessionSampleRate: parseFloat(
    process.env.SENTRY_REPLAY_SESSION_SAMPLE_RATE || "0.01"
  ),
  replaysOnErrorSampleRate: parseFloat(
    process.env.SENTRY_REPLAY_ON_ERROR_SAMPLE_RATE || "0.1"
  ),

  // 集成配置
  integrations: [
    Sentry.replayIntegration({
      // 会话重放配置
      maskAllText: true,
      blockAllMedia: true,
    }),
    Sentry.browserTracingIntegration({
      // 性能追踪配置
      tracePropagationTargets: [
        "localhost",
        /^https:\/\/yourdomain\.com/,
      ],
    }),
  ],

  // 过滤敏感信息
  beforeSend(event, hint) {
    // 移除敏感信息
    if (event.request) {
      delete event.request.cookies;
      delete event.request.headers;
    }
    return event;
  },
});
```

### sentry.server.config.ts

服务端 Sentry 配置，用于 Node.js 环境错误监控：

```typescript
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN,

  // 环境信息
  environment: process.env.SENTRY_ENVIRONMENT || process.env.NODE_ENV,

  // 性能监控
  tracesSampleRate: parseFloat(process.env.SENTRY_TRACES_SAMPLE_RATE || "0.1"),

  // 集成配置
  integrations: [
    Sentry.httpIntegration({
      // HTTP 请求追踪
      tracing: true,
    }),
  ],

  // 过滤敏感信息
  beforeSend(event, hint) {
    // 移除敏感信息
    if (event.request) {
      delete event.request.cookies;
      delete event.request.headers;
    }
    return event;
  },

  // 错误上下文
  beforeSendTransaction(event) {
    // 过滤不需要追踪的事务
    if (event.transaction === "/health") {
      return null;
    }
    return event;
  },
});
```

### sentry.edge.config.ts

边缘运行时 Sentry 配置：

```typescript
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.SENTRY_ENVIRONMENT || process.env.NODE_ENV,
  tracesSampleRate: parseFloat(process.env.SENTRY_TRACES_SAMPLE_RATE || "0.1"),
});
```

## 🔧 高级配置

### 自定义错误上下文

```typescript
import * as Sentry from "@sentry/nextjs";

// 添加用户信息
Sentry.setUser({
  id: "user-123",
  email: "user@example.com",
  username: "johndoe",
});

// 添加自定义标签
Sentry.setTag("page", "dashboard");
Sentry.setTag("userRole", "admin");

// 添加额外上下文
Sentry.setContext("order", {
  orderId: "order-456",
  amount: 99.99,
  currency: "USD",
});

// 手动捕获错误
try {
  // 可能出错的代码
  await someAsyncOperation();
} catch (error) {
  Sentry.captureException(error, {
    level: "error",
    tags: {
      feature: "payment",
    },
  });
}
```

### 性能追踪

```typescript
import * as Sentry from "@sentry/nextjs";

// 创建自定义事务
const transaction = Sentry.startTransaction({
  op: "task",
  name: "process-order",
});

try {
  // 创建子操作
  const validateStep = transaction.startChild({
    op: "validation",
    description: "validate-order-data",
  });

  // 验证逻辑
  await validateOrder(orderData);
  validateStep.finish();

  // 处理订单
  const processStep = transaction.startChild({
    op: "processing",
    description: "process-payment",
  });

  await processPayment(orderData);
  processStep.finish();
} finally {
  transaction.finish();
}
```

### 面包屑日志

```typescript
import * as Sentry from "@sentry/nextjs";

// 添加面包屑
Sentry.addBreadcrumb({
  category: "user",
  message: "User clicked checkout button",
  level: "info",
});

Sentry.addBreadcrumb({
  category: "http",
  message: "API request to /api/orders",
  level: "info",
  data: {
    method: "POST",
    status: 200,
  },
});
```

## 🔐 安全配置

### 敏感信息过滤

```typescript
Sentry.init({
  // ...其他配置

  beforeSend(event, hint) {
    // 过滤敏感信息
    if (event.request) {
      // 移除 cookies
      delete event.request.cookies;

      // 过滤 headers
      if (event.request.headers) {
        const { authorization, cookie, ...safeHeaders } = event.request.headers;
        event.request.headers = safeHeaders;
      }
    }

    // 过滤用户数据
    if (event.user) {
      const { password, token, ...safeUser } = event.user;
      event.user = safeUser;
    }

    // 过滤额外上下文
    if (event.contexts) {
      Object.keys(event.contexts).forEach(key => {
        const context = event.contexts[key];
        if (context) {
          // 移除敏感字段
          delete context.password;
          delete context.token;
          delete context.creditCard;
        }
      });
    }

    return event;
  },
});
```

### IP 地址匿名化

```typescript
Sentry.init({
  // ...其他配置

  beforeSend(event) {
    // 匿名化 IP 地址
    if (event.request?.headers) {
      const ip = event.request.headers['x-forwarded-for'];
      if (ip) {
        event.request.headers['x-forwarded-for'] = anonymizeIP(ip);
      }
    }
    return event;
  },
});

function anonymizeIP(ip: string): string {
  const parts = ip.split('.');
  if (parts.length === 4) {
    return `${parts[0]}.${parts[1]}.0.0`;
  }
  return ip;
}
```

## 📊 监控指标

### 关键性能指标 (KPIs)

- **错误率**：每分钟错误数量
- **崩溃率**：应用崩溃频率
- **页面加载时间**：FCP、LCP、TTFB
- **API 响应时间**：平均响应时间
- **用户满意度**：Apdex 分数

### 告警规则配置

在 Sentry 控制台设置告警规则：

```javascript
// 错误率告警
{
  name: "High Error Rate",
  query: "error.rate > 10",
  threshold: 10,
  timeWindow: "5m",
  alertType: "percentage"
}

// 性能告警
{
  name: "Slow API Response",
  query: "transaction.duration > 1000",
  threshold: 1000,
  timeWindow: "5m",
  alertType: "duration"
}
```

## 🔔 通知集成

### Slack 集成

1. 在 Sentry 控制台配置 Slack 集成
2. 选择要通知的 Slack 频道
3. 配置通知规则

### 邮件通知

```typescript
Sentry.init({
  // ...其他配置

  // 配置邮件通知
  beforeBreadcrumb(breadcrumb, hint) {
    // 自定义面包屑
    return breadcrumb;
  },
});
```

### Webhook 集成

```typescript
// 自定义 Webhook 处理
Sentry.init({
  // ...其他配置

  integrations: [
    new Sentry.Integrations.CaptureConsole({
      levels: ['error', 'warn']
    }),
  ],
});
```

## 🧪 测试配置

### 本地测试

```typescript
// 测试错误捕获
import * as Sentry from "@sentry/nextjs";

// 测试基本错误
Sentry.captureException(new Error("Test error"));

// 测试自定义消息
Sentry.captureMessage("Test message", "info");

// 测试性能
const transaction = Sentry.startTransaction({
  op: "test",
  name: "test-transaction",
});
transaction.finish();
```

### 验证集成

```bash
# 运行测试脚本
npm run test:sentry

# 检查 Sentry 控制台
# 应该看到测试错误和性能数据
```

## 📈 最佳实践

### 1. 错误分类

```typescript
// 使用错误代码
class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public severity: "low" | "medium" | "high"
  ) {
    super(message);
    this.name = "AppError";
  }
}

// 使用示例
throw new AppError("Payment failed", "PAYMENT_ERROR", "high");
```

### 2. 错误恢复

```typescript
// 错误边界
import * as Sentry from "@sentry/nextjs";

class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    Sentry.captureException(error, {
      contexts: {
        react: {
          componentStack: errorInfo.componentStack,
        },
      },
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}
```

### 3. 性能优化

```typescript
// 采样率配置
const tracesSampleRate = process.env.NODE_ENV === 'production' ? 0.1 : 1.0;
const replaysSessionSampleRate = process.env.NODE_ENV === 'production' ? 0.01 : 1.0;
```

## 🚨 故障排查

### 常见问题

#### 1. 错误未上报

**问题**：错误没有出现在 Sentry 控制台

**解决方案**：
- 检查 DSN 是否正确
- 验证网络连接
- 检查 CORS 配置
- 查看浏览器控制台错误

#### 2. 性能数据不准确

**问题**：性能数据与实际情况不符

**解决方案**：
- 调整采样率
- 检查时间戳配置
- 验证时区设置
- 排除健康检查端点

#### 3. 会话重放不工作

**问题**：会话重放功能不可用

**解决方案**：
- 检查采样率配置
- 验证浏览器兼容性
- 检查存储权限
- 确认 Replay 集成已启用

## 📚 相关资源

- [Sentry 官方文档](https://docs.sentry.io/)
- [Next.js 集成指南](https://docs.sentry.io/platforms/javascript/guides/nextjs/)
- [性能监控最佳实践](https://docs.sentry.io/product/performance/)
- [会话重放文档](https://docs.sentry.io/platforms/javascript/session-replay/)

## 🤝 贡献

如果您发现文档有误或需要改进，欢迎提交 Issue 或 Pull Request。

---

**维护者**: YYC³ Team  
**最后更新**: 2026-01-23  
**文档版本**: v1.0.0

---

> 「***YanYuCloudCube***」
> 「***<admin@0379.email>***」
> 「***Words Initiate Quadrants, Language Serves as Core for the Future***」
> 「***All things converge in the cloud pivot; Deep stacks ignite a new era of intelligence***」
