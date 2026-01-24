---
@file: YYC3-CCC-部署运维-CICD配置文档.md
@description: YYC³ Customer Care Center 持续集成和持续部署的配置文档，包含 GitHub Actions、自动构建、自动部署
@author: YYC³ Team
@version: v1.0.0
@created: 2026-01-23
@updated: 2026-01-23
@status: published
@tags: [部署运维],[CI/CD],[自动化部署]
---

> ***YanYuCloudCube***
> 言启象限 | 语枢未来
> ***Words Initiate Quadrants, Language Serves as Core for the Future***
> 万象归元于云枢 | 深栈智启新纪元
> ***All things converge in the cloud pivot; Deep stacks ignite a new era of intelligence***

---

# YYC³ Customer Care Center - CI/CD 配置文档

## 📋 概述

YYC³ Customer Care Center 项目使用 GitHub Actions 实现完整的 CI/CD 自动化流程，包括代码检查、测试、构建和部署。

## 🎯 核心内容

### 1. 背景与目标

#### 1.1 项目背景

YYC³ Customer Care Center 项目是一个基于「五高五标五化」理念的现代化 AI 代理服务落地页，采用 Next.js 15.0.3 + React 19 构建，集成了国际化系统、3D 场景交互、动画效果和响应式设计。

#### 1.2 文档目标

- 规范 CI/CD 配置相关的业务标准与技术落地要求
- 为项目相关人员提供清晰的参考依据
- 保障相关模块开发、实施、运维的一致性与规范性

### 2. 设计原则

#### 2.1 五高原则

- **高可用性**：确保 CI/CD 流程 7x24 小时稳定运行
- **高性能**：优化构建速度和部署效率
- **高安全性**：保护部署密钥和敏感信息
- **高扩展性**：支持多环境部署和快速扩展
- **高可维护性**：便于后续维护和升级

#### 2.2 五标体系

- **标准化**：统一的 CI/CD 流程和配置标准
- **规范化**：严格的代码审查和部署规范
- **自动化**：提高开发效率和质量
- **智能化**：利用自动化工具提升能力
- **可视化**：直观的部署状态和监控界面

#### 2.3 五化架构

- **流程化**：标准化的 CI/CD 流程
- **文档化**：完善的 CI/CD 文档体系
- **工具化**：高效的 CI/CD 工具链
- **数字化**：数据驱动的部署决策
- **生态化**：开放的部署生态系统

### 3. CI/CD 架构

#### 3.1 整体架构

```
┌─────────────────────────────────────────────────────────┐
│                  GitHub 仓库                     │
│                                                 │
│  ┌────────────────────────────────────────────┐    │
│  │         Push / PR 事件              │    │
│  └────────────────┬───────────────────────┘    │
│                 │                               │
│                 ▼                               │
│  ┌────────────────────────────────────┐    │
│  │   GitHub Actions CI 工作流    │    │
│  │  - Lint 检查                  │    │
│  │  - TypeScript 检查             │    │
│  │  - 单元测试                    │    │
│  │  - 构建验证                   │    │
│  └────────────┬───────────────────────┘    │
│               │                             │
│               ▼                             │
│  ┌────────────────────────────────────┐    │
│  │   GitHub Actions CD 工作流    │    │
│  │  - 部署到 Staging           │    │
│  │  - 部署到 Production        │    │
│  │  - Slack 通知                 │    │
│  └────────────┬───────────────────────┘    │
│               │                             │
│               ▼                             │
│  ┌────────────────────────────────────┐    │
│  │      Vercel 平台              │    │
│  │  - Staging 环境               │    │
│  │  - Production 环境            │    │
│  └────────────────────────────────────┘    │
└─────────────────────────────────────────────────┘
```

#### 3.2 技术栈

- **版本控制**：GitHub
- **CI 平台**：GitHub Actions
- **CD 平台**：Vercel
- **测试框架**：Vitest 2.1.5
- **代码质量**：ESLint + Prettier
- **类型检查**：TypeScript 5.0.0
- **通知服务**：Slack（可选）
- **监控服务**：Sentry

### 4. GitHub Secrets 配置

#### 4.1 必需配置

在 GitHub 仓库的 Settings → Secrets and variables → Actions 中配置以下 Secrets：

##### Vercel 部署配置

- `VERCEL_TOKEN`：Vercel API 令牌
  - 获取方式：Vercel 控制台 → Settings → Tokens
  - 权限要求：Full Account
  - 用途：自动化部署

- `VERCEL_ORG_ID`：Vercel 组织 ID
  - 获取方式：Vercel 控制台 → Settings → General
  - 格式：team_xxxxxxxxxxxxxx

- `VERCEL_PROJECT_ID`：Vercel 项目 ID
  - 获取方式：Vercel 控制台 → 项目 → Settings → General
  - 格式：prj_xxxxxxxxxxxxxx

#### 4.2 可选配置

##### Sentry 配置

- `SENTRY_AUTH_TOKEN`：Sentry 认证令牌
  - 获取方式：Sentry 控制台 → Settings → Auth Tokens
  - 权限要求：project:releases

- `SENTRY_DSN`：Sentry DSN（可选，已在代码中配置）
  - 获取方式：Sentry 控制台 → 项目 → Settings → Client Keys (DSN)

##### 通知配置

- `SLACK_WEBHOOK_URL`：Slack Webhook URL
  - 获取方式：Slack 工作区 → Apps → Incoming Webhooks
  - 用途：部署状态通知

### 5. CI 工作流配置

#### 5.1 CI 工作流文件

**文件路径**：`.github/workflows/ci.yml`

**触发条件**：
- Push 到 `main` 或 `develop` 分支
- Pull Request 到 `main` 或 `develop` 分支

**工作流步骤**：

```yaml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  lint:
    name: Lint
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run ESLint
        run: npm run lint

      - name: Run Prettier check
        run: npm run format:check

      - name: Run TypeScript check
        run: npm run type-check

  test:
    name: Test
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run unit tests
        run: npm run test:unit

      - name: Generate coverage report
        run: npm run test:coverage

      - name: Upload coverage to Codecov
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/coverage-final.json
          flags: unittests
          name: codecov-umbrella

  build:
    name: Build
    runs-on: ubuntu-latest
    needs: [lint, test]
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build project
        run: npm run build

      - name: Upload build artifacts
        uses: actions/upload-artifact@v3
        with:
          name: build-artifacts
          path: .next
          retention-days: 7
```

#### 5.2 工作流说明

**Lint 作业**：
- 检查代码风格一致性
- 验证 TypeScript 类型安全
- 运行 Prettier 格式检查
- 预计耗时：2-3 分钟

**Test 作业**：
- 运行所有单元测试
- 生成代码覆盖率报告
- 上传覆盖率到 Codecov
- 预计耗时：3-5 分钟

**Build 作业**：
- 构建 Next.js 生产版本
- 上传构建产物
- 依赖 Lint 和 Test 作业成功
- 预计耗时：5-8 分钟

### 6. CD 工作流配置

#### 6.1 CD 工作流文件

**文件路径**：`.github/workflows/cd.yml`

**触发条件**：
- Push 到 `main` 分支
- 手动触发（workflow_dispatch）

**工作流步骤**：

```yaml
name: CD

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  deploy-production:
    name: Deploy to Production
    runs-on: ubuntu-latest
    environment: production
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm run test:unit

      - name: Build project
        run: npm run build

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'

      - name: Notify deployment status
        if: always()
        uses: 8398a7/action-slack@v3
        with:
          status: ${{ job.status }}
          text: 'Deployment to production completed'
          webhook_url: ${{ secrets.SLACK_WEBHOOK_URL }}
        env:
          SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}

  deploy-staging:
    name: Deploy to Staging
    runs-on: ubuntu-latest
    environment: staging
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm run test:unit

      - name: Build project
        run: npm run build

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prebuilt'

      - name: Notify deployment status
        if: always()
        uses: 8398a7/action-slack@v3
        with:
          status: ${{ job.status }}
          text: 'Deployment to staging completed'
          webhook_url: ${{ secrets.SLACK_WEBHOOK_URL }}
        env:
          SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}
```

#### 6.2 部署环境

**Staging 环境**：
- URL：`https://yyc3-ccc-staging.vercel.app`
- 用途：预发布测试
- 触发：Push 到 `main` 分支或手动触发
- 部署方式：预构建部署

**Production 环境**：
- URL：`https://yyc3-ccc.vercel.app`（或自定义域名）
- 用途：生产环境
- 触发：Push 到 `main` 分支
- 部署方式：生产部署

### 7. 部署流程

#### 7.1 开发流程

```mermaid
graph LR
    A[开发代码] --> B[提交到 Git]
    B --> C[推送到 develop]
    C --> D[触发 CI 工作流]
    D --> E[代码检查]
    E --> F[运行测试]
    F --> G[构建验证]
    G --> H[CI 通过]
    H --> I[创建 PR]
    I --> J[代码审查]
    J --> K[合并到 main]
```

#### 7.2 部署流程

```mermaid
graph LR
    A[合并到 main] --> B[触发 CD 工作流]
    B --> C[运行测试]
    C --> D[构建项目]
    D --> E[部署到 Staging]
    E --> F[Staging 验证]
    F --> G[部署到 Production]
    G --> H[生产验证]
    H --> I[Slack 通知]
```

### 8. 监控和告警

#### 8.1 部署监控

- **GitHub Actions**：查看工作流运行状态和日志
- **Vercel 控制台**：查看部署历史和性能指标
- **Sentry**：监控错误和性能问题
- **Slack 通知**：实时接收部署状态更新

#### 8.2 告警规则

**部署失败告警**：
- CI 工作流失败
- CD 工作流失败
- 测试失败
- 构建失败

**性能告警**：
- 部署时间超过 10 分钟
- 页面加载时间超过 3 秒
- 错误率超过 5%

### 9. 回滚策略

#### 9.1 快速回滚

**使用 Vercel CLI**：

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 查看部署历史
vercel ls

# 回滚到指定部署
vercel rollback <deployment-url>
```

**使用 Vercel 控制台**：

1. 访问 Vercel 控制台
2. 选择项目
3. 点击 "Deployments"
4. 找到要回滚的部署
5. 点击 "..." 菜单
6. 选择 "Promote to Production"

#### 9.2 回滚检查清单

- [ ] 验证回滚后的功能正常
- [ ] 检查错误日志
- [ ] 确认性能指标
- [ ] 通知相关团队
- [ ] 更新文档和变更记录

### 10. 最佳实践

#### 10.1 代码提交

- 使用语义化版本号（Semantic Versioning）
- 编写清晰的提交信息
- 遵循 Conventional Commits 规范
- 关联相关的 Issue 和 PR

#### 10.2 Pull Request

- 确保所有 CI 检查通过
- 提供详细的 PR 描述
- 请求代码审查
- 保持 PR 规模适中

#### 10.3 部署前检查

- [ ] 所有测试通过
- [ ] 代码审查完成
- [ ] 文档更新
- [ ] 变更日志记录
- [ ] 回滚计划准备

#### 10.4 部署后验证

- [ ] 验证核心功能
- [ ] 检查错误日志
- [ ] 监控性能指标
- [ ] 验证用户访问
- [ ] 通知相关方

### 11. 故障排查

#### 11.1 常见问题

**问题：CI 工作流失败**

- 检查 GitHub Secrets 配置
- 查看工作流日志
- 验证依赖项版本
- 检查代码格式和类型错误

**问题：CD 部署失败**

- 检查 Vercel 凭证
- 验证构建产物
- 查看部署日志
- 确认环境变量配置

**问题：测试失败**

- 本地运行测试验证
- 检查测试环境配置
- 查看测试覆盖率报告
- 更新测试用例

#### 11.2 调试技巧

- 使用 GitHub Actions 调试功能
- 启用详细日志输出
- 使用 Vercel CLI 本地测试
- 查看 Sentry 错误追踪

### 12. 相关文档

- [YYC3-CCC-安装指南.md](../YYC3-CCC-安装指南.md) - 安装和配置指南
- [YYC3-CCC-Sentry-集成指南.md](../YYC3-CCC-Sentry-集成指南.md) - Sentry 监控集成
- [YYC3-CCC-部署运维-监控告警文档.md](./093-YYC3-CCC-部署运维-监控告警文档.md) - 监控告警配置
- [YYC3-CCC-部署运维-故障处理文档.md](./098-YYC3-CCC-部署运维-故障处理文档.md) - 故障处理流程

---

<div align="center">

> 「***YanYuCloudCube***」
> 「***<admin@0379.email>***」
> 「***Words Initiate Quadrants, Language Serves as Core for the Future***」
> 「***All things converge in the cloud pivot; Deep stacks ignite a new era of intelligence***」
</div>
