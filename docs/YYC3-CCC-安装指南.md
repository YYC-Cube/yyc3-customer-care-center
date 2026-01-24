---
@file: YYC3-CCC-安装指南.md
@description: YYC3-CCC 安装指南，详细说明系统的安装和部署步骤
@author: YYC³ Team
@version: v1.0.0
@created: 2026-01-22
@updated: 2026-01-23
@status: published
@tags: [安装指南, 系统要求, 安装方式, 本地开发, 在线部署]
---

> ***YanYuCloudCube***
> 言启象限 | 语枢未来
> ***Words Initiate Quadrants, Language Serves as Core for the Future***
> 万象归元于云枢 | 深栈智启新纪元
> ***All things converge in the cloud pivot; Deep stacks ignite a new era of intelligence***

---

# 快速安装指南

本指南将帮助您在5分钟内完成系统的安装和部署。

## 系统要求

### 开发环境

- **Node.js**: 18.0 或更高版本
- **npm**: 8.0 或更高版本（或 yarn 1.22+）
- **Git**: 2.0 或更高版本

### 浏览器要求

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 安装方式

我们提供多种安装方式，您可以根据需求选择：

### 方式一：在线部署（推荐）

#### 1. Vercel 部署（最简单）

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YYC-Cube/yyc3-customer-care-center)

点击上方按钮，按照 Vercel 的提示完成部署：

1. 登录 Vercel 账号
2. 选择仓库导入
3. 配置项目名称
4. 点击 Deploy
5. 等待部署完成（通常2-3分钟）

#### 2. Netlify 部署

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/YYC-Cube/yyc3-customer-care-center)

### 方式二：本地开发

#### 1. 克隆仓库

\`\`\`bash

# 使用 HTTPS

git clone <https://github.com/YYC-Cube/yyc3-customer-care-center.git>

# 或使用 SSH

git clone <git@github.com>:YYC-Cube/yyc3-customer-care-center.git

# 进入项目目录

cd yyc3-customer-care-center  
\`\`\`

#### 2. 安装依赖

\`\`\`bash

# 使用 npm

npm install

# 或使用 yarn

yarn install

# 或使用 pnpm

pnpm install
\`\`\`

#### 3. 启动开发服务器

\`\`\`bash

# 使用 npm

npm run dev

# 或使用 yarn

yarn dev

# 或使用 pnpm

pnpm dev
\`\`\`

#### 4. 访问应用

打开浏览器，访问 [http://localhost:3200](http://localhost:3200)

**注意**：开发服务器默认运行在端口 3200，这是 YYC3 标准端口范围（3200-3500）的一部分。

### 方式三：Docker 部署

#### 1. 使用 Docker Compose（推荐）

项目提供了完整的 Docker Compose 配置，包含应用服务、Redis 缓存和 PostgreSQL 数据库：

```bash
# 克隆仓库
git clone https://github.com/YYC-Cube/yyc3-customer-care-center.git
cd yyc3-customer-care-center

# 启动所有服务
docker-compose up -d

# 查看服务状态
docker-compose ps

# 查看日志
docker-compose logs -f

# 停止服务
docker-compose down
```

**Docker Compose 包含的服务**：
- 应用服务（端口 3200）
- Redis 缓存服务（端口 6379）
- PostgreSQL 数据库服务（端口 5432）

#### 2. 使用 Docker 命令

```bash
# 构建镜像
docker build -t yyc3-customer-care-center .

# 运行容器
docker run -d \
  --name yyc3-customer-care-center \
  -p 3200:3200 \
  -e NODE_ENV=production \
  yyc3-customer-care-center
```

**注意**：应用默认运行在端口 3200，这是 YYC3 标准端口范围（3200-3500）的一部分。

## 生产环境部署

### 构建生产版本

\`\`\`bash

# 构建

npm run build

# 启动生产服务器

npm start
\`\`\`

### 环境变量配置

项目提供了完整的环境变量配置示例，详见 [`.env.example`](../.env.example) 文件。

创建 `.env.local` 文件：

```env
# 应用基础配置
NEXT_PUBLIC_APP_NAME="YYC³ Customer Care Center"
NEXT_PUBLIC_APP_VERSION="1.0.0"
NEXT_PUBLIC_APP_URL="http://localhost:3200"

# API 配置（如果需要）
NEXT_PUBLIC_API_URL="http://localhost:3200/api"

# 数据库配置
DATABASE_URL="postgresql://user:password@localhost:5432/yyc3_ccc"
POSTGRES_USER="postgres"
POSTGRES_PASSWORD="your_password"
POSTGRES_DB="yyc3_ccc"

# Redis 配置
REDIS_URL="redis://localhost:6379"

# Sentry 配置
NEXT_PUBLIC_SENTRY_DSN="your-sentry-dsn"
SENTRY_DSN="your-sentry-dsn"
SENTRY_ENVIRONMENT="development"
SENTRY_TRACES_SAMPLE_RATE=0.1
SENTRY_REPLAY_SESSION_SAMPLE_RATE=0.01
SENTRY_REPLAY_ON_ERROR_SAMPLE_RATE=0.1

# 分析工具（可选）
NEXT_PUBLIC_GA_ID="your-ga-id"

# 功能开关
NEXT_PUBLIC_ENABLE_AI=true
NEXT_PUBLIC_ENABLE_OFFLINE=true

# 认证配置
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3200"

# OAuth 配置
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"

# 邮件配置
SMTP_HOST="smtp.example.com"
SMTP_PORT="587"
SMTP_USER="your-email@example.com"
SMTP_PASSWORD="your-email-password"
SMTP_FROM="noreply@example.com"

# 文件上传配置
MAX_FILE_SIZE="10485760"
ALLOWED_FILE_TYPES="image/jpeg,image/png,application/pdf"

# 速率限制
RATE_LIMIT_MAX="100"
RATE_LIMIT_WINDOW="900000"

# CORS 配置
CORS_ORIGIN="http://localhost:3200"

# 分析工具
NEXT_PUBLIC_GA_ID="your-ga-id"
NEXT_PUBLIC_GTM_ID="your-gtm-id"

# 功能标志
NEXT_PUBLIC_ENABLE_AI=true
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_NOTIFICATIONS=true

# 第三方服务
OPENAI_API_KEY="your-openai-api-key"
ANTHROPIC_API_KEY="your-anthropic-api-key"

# 监控配置
SENTRY_DSN="your-sentry-dsn"
SENTRY_ENVIRONMENT="production"
SENTRY_TRACES_SAMPLE_RATE=0.1
SENTRY_REPLAY_SESSION_SAMPLE_RATE=0.01
SENTRY_REPLAY_ON_ERROR_SAMPLE_RATE=0.1

# 缓存配置
CACHE_TTL="3600"
CACHE_MAX_SIZE="100"

# 会话配置
SESSION_SECRET="your-session-secret"
SESSION_MAX_AGE="86400"

# 安全头
SECURITY_HEADERS_ENABLED="true"
CSP_ENABLED="true"

# 本地化
NEXT_PUBLIC_DEFAULT_LOCALE="zh-CN"
NEXT_PUBLIC_LOCALES="zh-CN,en-US"

# 时区
NEXT_PUBLIC_TIMEZONE="Asia/Shanghai"
```

**重要提示**：
- 不要将 `.env.local` 文件提交到版本控制系统
- 生产环境使用 `.env.production` 文件
- 所有敏感信息都应使用环境变量管理
- 详见 [`.env.example`](../.env.example) 获取完整的配置说明

### 性能优化配置

在 `next.config.mjs` 中：

\`\`\`javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用 React 严格模式
  reactStrictMode: true,
  
  // 图片优化
  images: {
    domains: ['your-cdn-domain.com'],
    formats: ['image/avif', 'image/webp'],
  },
  
  // 压缩
  compress: true,
  
  // PWA 配置
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
}

export default nextConfig
\`\`\`

## 验证安装

### 1. 访问主页

打开浏览器，访问您的部署地址，应该能看到登录界面。

### 2. 检查功能

- ✅ 页面正常加载
- ✅ 侧边栏可以展开/收起
- ✅ 导航菜单正常工作
- ✅ 数据能够正常保存
- ✅ 离线功能正常

### 3. 运行测试

项目使用 Vitest 作为测试框架，提供多种测试命令：

```bash
# 运行所有测试（交互模式）
npm run test
# 或
yarn test

# 运行单元测试（生成覆盖率报告）
npm run test:unit
# 或
yarn test:unit

# 生成测试覆盖率报告
npm run test:coverage
# 或
yarn test:coverage

# 启动测试 UI 界面
npm run test:ui
# 或
yarn test:ui

# 监视模式运行测试（文件变化时自动重新运行）
npm run test:watch
# 或
yarn test:watch
```

**测试命令说明**：

| 命令 | 说明 | 适用场景 |
|------|------|---------|
| `npm run test` | 交互式运行所有测试 | 开发调试 |
| `npm run test:unit` | 运行单元测试并生成覆盖率 | CI/CD 流程 |
| `npm run test:coverage` | 生成详细的覆盖率报告 | 代码质量检查 |
| `npm run test:ui` | 启动可视化测试界面 | 可视化调试 |
| `npm run test:watch` | 监视模式，自动重新运行 | 开发时持续测试 |

**测试覆盖率目标**：
- 代码行覆盖率：≥ 80%
- 函数覆盖率：≥ 80%
- 分支覆盖率：≥ 80%
- 语句覆盖率：≥ 80**

**查看测试报告**：

```bash
# 生成覆盖率报告后，查看 HTML 报告
open coverage/index.html
# 或
start coverage/index.html
```

### 4. 性能检查

使用 Chrome DevTools 的 Lighthouse 检查：

\`\`\`bash
npm run lighthouse
\`\`\`

期望得分：

- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

## CI/CD 配置

项目使用 GitHub Actions 实现 CI/CD 自动化流程，包括代码检查、测试、构建和部署。

### 1. GitHub Secrets 配置

在 GitHub 仓库中配置以下 Secrets：

#### Vercel 部署配置

- `VERCEL_TOKEN`：Vercel API 令牌
- `VERCEL_ORG_ID`：Vercel 组织 ID
- `VERCEL_PROJECT_ID`：Vercel 项目 ID

#### Sentry 配置

- `SENTRY_AUTH_TOKEN`：Sentry 认证令牌
- `SENTRY_DSN`：Sentry DSN

#### 其他配置

- `SLACK_WEBHOOK_URL`：Slack 通知 Webhook URL（可选）

### 2. CI 工作流

CI 工作流在每次 push 和 pull request 时自动运行：

```yaml
# .github/workflows/ci.yml
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

### 3. CD 工作流

CD 工作流在推送到 main 分支时自动部署：

```yaml
# .github/workflows/cd.yml
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

### 4. 本地 CI/CD 测试

在推送代码前，可以本地运行 CI/CD 流程：

```bash
# 运行所有 CI 检查
npm run lint
npm run format:check
npm run type-check
npm run test:unit
npm run build

# 或使用脚本
npm run ci
```

### 5. 监控部署

查看 GitHub Actions 工作流状态：

1. 访问仓库的 "Actions" 标签页
2. 查看工作流运行历史
3. 检查每个步骤的日志
4. 查看部署状态

### 6. 回滚策略

如果部署出现问题，可以快速回滚：

```bash
# 使用 Vercel CLI 回滚
vercel rollback <deployment-url>

# 或通过 Vercel 控制台回滚
# 1. 访问 Vercel 控制台
# 2. 选择项目
# 3. 点击 "Deployments"
# 4. 找到要回滚的部署
# 5. 点击 "..." 菜单
# 6. 选择 "Promote to Production"
```

### 7. 环境变量管理

在不同环境中使用不同的环境变量：

```bash
# 开发环境
.env.local

# 预发布环境
.env.staging

# 生产环境
.env.production
```

**CI/CD 最佳实践**：

- ✅ 始终在推送前运行本地测试
- ✅ 使用语义化版本号
- ✅ 编写清晰的提交信息
- ✅ 使用 Pull Request 进行代码审查
- ✅ 监控部署状态和错误日志
- ✅ 定期更新依赖项

详见 [CI/CD 完整指南](./YYC3-CCC-CICD-GUIDE.md)。

## 常见问题排查

### 问题：安装依赖失败

**症状**：`npm install` 失败，出现网络或权限错误

**解决方案**：

```bash
# 清理缓存
npm cache clean --force

# 删除 node_modules 和 lock 文件
rm -rf node_modules package-lock.json

# 重新安装
npm install

# 如果仍然失败，尝试使用 yarn
yarn install

# 或使用 pnpm
pnpm install
```

### 问题：端口被占用

**症状**：启动开发服务器时提示端口已被使用

**解决方案**：

```bash
# 查找占用端口的进程
lsof -i :3200

# 杀死进程
kill -9 <PID>

# 或者使用其他端口（不推荐，建议使用标准端口 3200）
PORT=3201 npm run dev
```

**注意**：YYC3 标准端口范围为 3200-3500，建议使用 3200 作为默认端口。

### 问题：构建失败

**症状**：`npm run build` 失败，出现编译错误

**解决方案**：

```bash
# 检查 Node.js 版本
node --version

# 更新到最新的 LTS 版本
nvm install --lts
nvm use --lts

# 清理构建缓存
rm -rf .next

# 重新构建
npm run build

# 如果 TypeScript 错误，运行类型检查
npm run type-check
```

### 问题：页面白屏

**症状**：访问应用时显示空白页面

**解决方案**：

1. 打开浏览器控制台查看错误信息
2. 检查是否有 JavaScript 错误
3. 清除浏览器缓存
4. 尝试无痕模式访问
5. 检查网络连接
6. 查看服务器日志

### 问题：Sentry 错误未上报

**症状**：应用错误没有出现在 Sentry 控制台

**解决方案**：

1. 检查 DSN 配置是否正确
2. 验证网络连接
3. 检查 CORS 配置
4. 查看浏览器控制台错误
5. 确认 Sentry 初始化代码正确

详见 [Sentry 集成指南](./YYC3-CCC-Sentry-集成指南.md)。

### 问题：IP 访问被拒绝

**症状**：合法 IP 无法访问应用

**解决方案**：

1. 检查 CIDR 规则是否正确
2. 验证 IP 地址格式
3. 检查代理服务器配置
4. 查看中间件日志
5. 确认 IP 在允许范围内

详见 [IP 访问控制指南](./YYC3-CCC-IP访问控制指南.md)。

### 问题：测试失败

**症状**：单元测试或集成测试失败

**解决方案**：

```bash
# 运行特定测试文件
npm run test -- path/to/test.test.ts

# 查看详细错误信息
npm run test:unit -- --reporter=verbose

# 更新快照
npm run test -- -u

# 清理测试缓存
rm -rf node_modules/.vitest
```

### 问题：Docker 容器无法启动

**症状**：`docker-compose up` 失败

**解决方案**：

```bash
# 查看容器日志
docker-compose logs

# 重新构建镜像
docker-compose build --no-cache

# 检查端口冲突
docker ps -a

# 清理未使用的资源
docker system prune -a

# 检查 Docker 版本
docker --version
docker-compose --version
```

### 问题：环境变量未生效

**症状**：环境变量配置后应用未读取

**解决方案**：

1. 确认文件名正确（`.env.local` 或 `.env.production`）
2. 检查变量名拼写
3. 重启开发服务器
4. 检查 `.gitignore` 是否排除了环境变量文件
5. 确认变量以 `NEXT_PUBLIC_` 开头（客户端访问）

### 问题：CI/CD 工作流失败

**症状**：GitHub Actions 工作流执行失败

**解决方案**：

1. 检查 GitHub Secrets 配置
2. 查看工作流日志
3. 验证依赖项版本
4. 检查代码格式和类型错误
5. 确认测试在本地通过

详见 [CI/CD 配置](#cicd-配置)。

### 问题：性能问题

**症状**：应用响应慢或卡顿

**解决方案**：

1. 使用 Chrome DevTools 分析性能
2. 检查网络请求
3. 优化图片和资源
4. 启用代码分割
5. 使用缓存策略
6. 检查 Sentry 性能监控数据

### 问题：样式不正确

**症状**：Tailwind CSS 样式未生效

**解决方案**：

```bash
# 清理缓存
rm -rf .next node_modules/.cache

# 重新构建
npm run build

# 检查 Tailwind 配置
# tailwind.config.js

# 确认样式文件正确
# app/globals.css
```

### 问题：国际化不工作

**症状**：语言切换失败或翻译缺失

**解决方案**：

1. 检查语言文件路径
2. 验证翻译键名
3. 确认默认语言配置
4. 检查中间件语言检测
5. 查看浏览器语言设置

### 问题：数据库连接失败

**症状**：无法连接到 PostgreSQL 或 Redis

**解决方案**：

```bash
# 检查服务状态
docker-compose ps

# 查看服务日志
docker-compose logs postgres
docker-compose logs redis

# 检查连接字符串
# DATABASE_URL
# REDIS_URL

# 测试连接
psql -h localhost -U postgres -d yyc3_ccc
redis-cli ping
```

### 问题：权限错误

**症状**：文件或目录访问被拒绝

**解决方案**：

```bash
# 修改文件权限
chmod 755 directory

# 修改文件所有者
chown -R user:group directory

# 检查磁盘空间
df -h
```

### 问题：内存不足

**症状**：构建或运行时内存溢出

**解决方案**：

```bash
# 增加 Node.js 内存限制
NODE_OPTIONS=--max-old-space-size=4096 npm run build

# 清理不必要的进程
# 使用系统监控工具

# 优化代码和依赖
# 移除未使用的包
```

## 获取更多帮助

如果上述解决方案无法解决您的问题：

- 📖 [故障排查指南](../07-deployment/07-troubleshooting.md)
- 📖 [Sentry 集成指南](./YYC3-CCC-Sentry-集成指南.md)
- 📖 [IP 访问控制指南](./YYC3-CCC-IP访问控制指南.md)
- 📖 [CI/CD 完整指南](./YYC3-CCC-CICD-GUIDE.md)
- 💬 [社区讨论](https://github.com/YYC-Cube/yyc3-customer-care-center/discussions)
- 🐛 [提交问题](https://github.com/YYC-Cube/yyc3-customer-care-center/issues/new)

## 后续步骤

安装成功后，您可以：

1. [基础配置](./03-configuration.md) - 配置系统参数
2. [首次使用](./04-first-steps.md) - 开始使用系统
3. [用户指南](../02-user-guide/01-dashboard.md) - 了解详细功能
4. [CI/CD 指南](./YYC3-CCC-CICD-GUIDE.md) - 了解自动化部署流程
5. [测试指南](../YYC3-CCC-测试文档/README.md) - 运行和编写测试

## 获取帮助

如果遇到安装问题：

- 📖 [故障排查指南](../07-deployment/07-troubleshooting.md)
- 💬 [社区讨论](https://github.com/your-org/yanyu-ems/discussions)
- 🐛 [提交问题](https://github.com/your-org/yanyu-ems/issues/new)

---

**上一步**: [系统简介](./01-introduction.md) ←  
**下一步**: [基础配置](./03-configuration.md) →

---

> 「***YanYuCloudCube***」
> 「***<admin@0379.email>***」
> 「***Words Initiate Quadrants, Language Serves as Core for the Future***」
> 「***All things converge in the cloud pivot; Deep stacks ignite a new era of intelligence***」
