---
@file: YYC3-CCC-部署运维-环境配置文档.md
@description: YYC³ Customer Care Center 开发、测试、生产环境的配置文档，包含环境变量、配置文件、配置管理
@author: YYC³ Team
@version: v1.0.0
@created: 2026-01-23
@updated: 2026-01-23
@status: published
@tags: [部署运维],[环境配置],[配置管理]
---

> ***YanYuCloudCube***
> 言启象限 | 语枢未来
> ***Words Initiate Quadrants, Language Serves as Core for the Future***
> 万象归元于云枢 | 深栈智启新纪元
> ***All things converge in the cloud pivot; Deep stacks ignite a new era of intelligence***

---

# YYC³ Customer Care Center - 环境配置文档

## 📋 概述

YYC³ Customer Care Center 项目采用多环境配置管理，支持开发、测试、生产等不同环境的独立配置。

## 🎯 核心内容

### 1. 背景与目标

#### 1.1 项目背景

YYC³ Customer Care Center 项目是一个基于「五高五标五化」理念的现代化 AI 代理服务落地页，采用 Next.js 15.0.3 + React 19 构建，集成了国际化系统、3D 场景交互、动画效果和响应式设计。

#### 1.2 文档目标

- 规范环境配置相关的业务标准与技术落地要求
- 为项目相关人员提供清晰的参考依据
- 保障相关模块开发、实施、运维的一致性与规范性

### 2. 设计原则

#### 2.1 五高原则

- **高可用性**：确保系统 7x24 小时稳定运行
- **高性能**：优化加载速度和交互响应
- **高安全性**：保护用户数据和隐私安全
- **高扩展性**：支持业务快速扩展
- **高可维护性**：便于后续维护和升级

#### 2.2 五标体系

- **标准化**：统一的技术和流程标准
- **规范化**：严格的开发和管理规范
- **自动化**：提高开发效率和质量
- **智能化**：利用自动化工具提升能力
- **可视化**：直观的配置管理界面

#### 2.3 五化架构

- **流程化**：标准化的配置流程
- **文档化**：完善的配置文档体系
- **工具化**：高效的配置工具链
- **数字化**：数据驱动的配置决策
- **生态化**：开放的配置生态系统

### 3. 环境分类

#### 3.1 环境定义

**开发环境（Development）**：
- 用途：本地开发和测试
- 访问地址：`http://localhost:3200`
- 启动命令：`npm run dev`
- 特点：热重载、快速刷新、详细错误信息

**预发布环境（Staging）**：
- 用途：预发布测试和验证
- 访问地址：`https://yyc3-ccc-staging.vercel.app`
- 部署方式：自动部署（develop 分支）
- 特点：模拟生产环境、功能验证、性能测试

**生产环境（Production）**：
- 用途：正式上线和用户访问
- 访问地址：`https://yyc3-ccc.vercel.app`（或自定义域名）
- 部署方式：自动部署（main 分支）
- 特点：全球 CDN、自动缩放、高可用性

#### 3.2 环境隔离

- **代码隔离**：不同环境使用不同的 Git 分支
- **数据隔离**：不同环境使用独立的数据存储
- **配置隔离**：不同环境使用独立的环境变量
- **域名隔离**：不同环境使用独立的域名

### 4. 环境变量配置

#### 4.1 环境变量文件

项目使用以下环境变量文件：

- `.env` - 默认环境变量（所有环境）
- `.env.development` - 开发环境变量
- `.env.staging` - 预发布环境变量
- `.env.production` - 生产环境变量
- `.env.local` - 本地覆盖变量（不提交到 Git）
- `.env.example` - 环境变量示例

#### 4.2 环境变量说明

**应用配置**：

```env
# 应用名称
NEXT_PUBLIC_APP_NAME="YYC³ Customer Care Center"

# 应用版本
NEXT_PUBLIC_APP_VERSION="1.0.0"

# 应用环境（development | staging | production）
NEXT_PUBLIC_APP_ENV="development"

# 应用 URL
NEXT_PUBLIC_APP_URL="http://localhost:3200"
```

**API 配置**：

```env
# API 基础 URL
NEXT_PUBLIC_API_URL="http://localhost:3200/api"

# API 超时时间（毫秒）
NEXT_PUBLIC_API_TIMEOUT="30000"

# API 重试次数
NEXT_PUBLIC_API_RETRY_COUNT="3"
```

**Sentry 配置**：

```env
# Sentry DSN（客户端）
NEXT_PUBLIC_SENTRY_DSN="https://your-dsn@sentry.io/project-id"

# Sentry DSN（服务端）
SENTRY_DSN="https://your-dsn@sentry.io/project-id"

# Sentry 环境
SENTRY_ENVIRONMENT="development"

# 性能追踪采样率（0-1）
SENTRY_TRACES_SAMPLE_RATE="1.0"

# 会话重放采样率（0-1）
SENTRY_REPLAY_SESSION_SAMPLE_RATE="1.0"

# 错误时重放采样率（0-1）
SENTRY_REPLAY_ON_ERROR_SAMPLE_RATE="1.0"
```

**功能开关**：

```env
# 启用分析
NEXT_PUBLIC_ENABLE_ANALYTICS="false"

# 启用 Sentry
NEXT_PUBLIC_ENABLE_SENTRY="false"

# 启用国际化
NEXT_PUBLIC_ENABLE_I18N="true"

# 启用 3D 场景
NEXT_PUBLIC_ENABLE_3D="true"

# 启用动画
NEXT_PUBLIC_ENABLE_ANIMATIONS="true"

# 启用 PWA
NEXT_PUBLIC_ENABLE_PWA="false"
```

**IP 访问控制**：

```env
# 启用 IP 访问控制
NEXT_PUBLIC_ENABLE_IP_ACCESS_CONTROL="false"

# 允许的 IP 范围（CIDR 格式，逗号分隔）
ALLOWED_IP_RANGES="0.0.0.0/0"

# 拒绝的 IP 范围（CIDR 格式，逗号分隔）
DENIED_IP_RANGES=""
```

**国际化配置**：

```env
# 默认语言
NEXT_PUBLIC_DEFAULT_LANGUAGE="zh-CN"

# 支持的语言列表（逗号分隔）
NEXT_PUBLIC_SUPPORTED_LANGUAGES="zh-CN,en-US"

# 语言切换持久化
NEXT_PUBLIC_I18N_PERSISTENCE="true"
```

**数据库配置**：

```env
# 数据库 URL
DATABASE_URL="postgresql://user:password@localhost:5432/yyc3_ccc"

# Redis URL
REDIS_URL="redis://localhost:6379"
```

**其他配置**：

```env
# Node.js 环境
NODE_ENV="development"

# 端口号
PORT="3200"

# 时区
TZ="Asia/Shanghai"
```

#### 4.3 环境变量优先级

环境变量的优先级从高到低：

1. 系统环境变量
2. `.env.local`
3. `.env.[environment]`
4. `.env`

### 5. 配置文件管理

#### 5.1 Next.js 配置

**next.config.mjs**：

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  
  images: {
    domains: ['yyc3.cube.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons'],
  },
  
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  typescript: {
    ignoreBuildErrors: false,
  },
  
  eslint: {
    ignoreDuringBuilds: false,
  },
  
  env: {
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
    NEXT_PUBLIC_APP_VERSION: process.env.NEXT_PUBLIC_APP_VERSION,
    NEXT_PUBLIC_APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
  },
};

export default nextConfig;
```

#### 5.2 TypeScript 配置

**tsconfig.json**：

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

#### 5.3 ESLint 配置

**.eslintrc.json**：

```json
{
  "extends": [
    "next/core-web-vitals",
    "next/typescript",
    "prettier"
  ],
  "rules": {
    "no-console": ["warn", { "allow": ["warn", "error"] }],
    "prefer-const": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error", {
      "argsIgnorePattern": "^_",
      "varsIgnorePattern": "^_"
    }]
  }
}
```

#### 5.4 Prettier 配置

**.prettierrc**：

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "arrowParens": "always",
  "endOfLine": "lf"
}
```

#### 5.5 Vitest 配置

**vitest.config.ts**：

```typescript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'tests/',
        '**/*.config.*',
        '**/*.d.ts',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});
```

### 6. 配置管理最佳实践

#### 6.1 安全性

- **敏感信息保护**：不将敏感信息提交到 Git
- **环境变量加密**：使用加密工具保护敏感配置
- **访问控制**：限制环境变量的访问权限
- **定期轮换**：定期更新密钥和凭证

#### 6.2 可维护性

- **文档化**：详细记录所有环境变量的用途
- **版本控制**：使用 `.env.example` 作为模板
- **一致性**：保持不同环境配置的一致性
- **验证**：添加配置验证机制

#### 6.3 可扩展性

- **模块化**：按功能模块组织配置
- **动态加载**：支持动态配置加载
- **配置继承**：支持配置继承和覆盖
- **配置热更新**：支持配置热更新

### 7. 配置验证

#### 7.1 环境变量验证

```typescript
// lib/config.ts
const requiredEnvVars = [
  'NEXT_PUBLIC_APP_NAME',
  'NEXT_PUBLIC_APP_VERSION',
  'NEXT_PUBLIC_APP_ENV',
  'NEXT_PUBLIC_API_URL',
];

export function validateEnvVars() {
  const missingVars: string[] = [];
  
  requiredEnvVars.forEach((varName) => {
    if (!process.env[varName]) {
      missingVars.push(varName);
    }
  });
  
  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
  }
}
```

#### 7.2 配置测试

```typescript
// tests/config.test.ts
import { describe, it, expect } from 'vitest';
import { validateEnvVars } from '@/lib/config';

describe('Configuration', () => {
  it('should validate required environment variables', () => {
    expect(() => validateEnvVars()).not.toThrow();
  });
});
```

### 8. 配置部署

#### 8.1 Vercel 环境变量

在 Vercel 控制台中配置环境变量：

1. 访问项目设置
2. 点击 "Environment Variables"
3. 添加环境变量
4. 选择环境（Production / Preview / Development）
5. 保存配置

#### 8.2 GitHub Secrets

在 GitHub 仓库中配置 Secrets：

1. 访问仓库设置
2. 点击 "Secrets and variables" → "Actions"
3. 添加 New repository secret
4. 输入名称和值
5. 保存配置

### 9. 配置监控

#### 9.1 配置变更监控

- 记录所有配置变更
- 监控配置变更的影响
- 设置配置变更告警
- 定期审查配置

#### 9.2 配置性能监控

- 监控配置加载时间
- 分析配置对性能的影响
- 优化配置加载策略
- 提升配置加载效率

### 10. 故障排查

#### 10.1 常见问题

**问题：环境变量未生效**

- 检查环境变量文件是否存在
- 验证环境变量名称是否正确
- 重启开发服务器
- 清除缓存

**问题：配置冲突**

- 检查配置优先级
- 验证配置覆盖规则
- 查看配置日志
- 调试配置加载

**问题：配置错误**

- 验证配置格式
- 检查配置语法
- 查看错误日志
- 使用配置验证工具

#### 10.2 调试技巧

- 使用 `console.log` 输出配置
- 使用环境变量调试工具
- 查看构建日志
- 使用浏览器开发者工具

### 11. 相关文档

- [YYC3-CCC-安装指南.md](../YYC3-CCC-安装指南.md) - 安装和配置指南
- [YYC3-CCC-部署运维-部署方案文档.md](./090-YYC3-CCC-部署运维-部署方案文档.md) - 部署方案
- [YYC3-CCC-部署运维-CICD配置文档.md](./091-YYC3-CCC-部署运维-CICD配置文档.md) - CI/CD 配置
- [YYC3-CCC-部署运维-监控告警文档.md](./093-YYC3-CCC-部署运维-监控告警文档.md) - 监控告警配置

---

<div align="center">

> 「***YanYuCloudCube***」
> 「***<admin@0379.email>***」
> 「***Words Initiate Quadrants, Language Serves as Core for the Future***」
> 「***All things converge in the cloud pivot; Deep stacks ignite a new era of intelligence***」
</div>
