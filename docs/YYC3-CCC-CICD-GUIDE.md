# YYC3-CCC CI/CD 完整指南

## 📋 目录

- [概述](#概述)
- [工作流架构](#工作流架构)
- [环境配置](#环境配置)
- [部署流程](#部署流程)
- [监控与告警](#监控与告警)
- [回滚策略](#回滚策略)
- [最佳实践](#最佳实践)
- [故障排除](#故障排除)

## 概述

YYC3 Customer Care Center 项目采用全自动化的 CI/CD 流水线，实现从代码提交到生产部署的全流程自动化。基于 GitHub Actions 和 Vercel 平台，提供高效、可靠的持续集成和持续部署能力。

### 核心特性

- ✅ **多环境部署**: 开发、预发布、生产环境
- ✅ **自动化测试**: 单元测试、集成测试、代码覆盖率
- ✅ **代码质量检查**: ESLint、Prettier、TypeScript 类型检查
- ✅ **容器化部署**: Docker 支持和 Docker Compose 编排
- ✅ **安全监控**: Sentry 错误追踪和性能监控
- ✅ **IP 访问控制**: CIDR 匹配和访问控制中间件
- ✅ **Slack 通知**: 部署状态实时通知

### 技术栈

- **CI/CD 平台**: GitHub Actions
- **部署平台**: Vercel
- **容器化**: Docker + Docker Compose
- **监控**: Sentry
- **测试框架**: Vitest + Testing Library
- **代码质量**: ESLint + Prettier

## 工作流架构

### 1. 持续集成 (CI)

**工作流文件**: [`.github/workflows/ci.yml`](../.github/workflows/ci.yml)

**触发条件**: 代码推送到 `main` 或 `develop` 分支，或创建 Pull Request

**流程**:
```
代码推送 → 代码质量检查 → 类型检查 → 单元测试 → 构建验证 → 上传构建产物
```

**质量门禁**:
- ✅ ESLint 检查通过
- ✅ Prettier 格式检查通过
- ✅ TypeScript 类型检查通过
- ✅ 单元测试全部通过
- ✅ 代码覆盖率报告生成

**详细步骤**:

1. **Lint 检查**
   - 运行 ESLint 进行代码质量检查
   - 运行 Prettier 进行代码格式检查
   - 运行 TypeScript 类型检查

2. **测试执行**
   - 运行所有单元测试
   - 生成测试覆盖率报告
   - 上传覆盖率到 Codecov

3. **构建验证**
   - 执行 Next.js 生产构建
   - 验证构建产物
   - 上传构建产物供后续使用

### 2. 持续部署 - 预发布环境 (CD-Staging)

**工作流文件**: [`.github/workflows/cd.yml`](../.github/workflows/cd.yml)

**触发条件**: 代码推送到 `main` 分支

**流程**:
```
代码推送 → 运行测试 → 构建项目 → 部署到 Vercel 预发布环境 → Slack 通知
```

**自动化程度**: 100% 自动化

**部署验证**:
- 自动运行单元测试
- 构建项目验证
- Vercel 部署验证
- Slack 通知部署状态

### 3. 持续部署 - 生产环境 (CD-Production)

**工作流文件**: [`.github/workflows/cd.yml`](../.github/workflows/cd.yml)

**触发条件**: 代码推送到 `main` 分支或手动触发

**流程**:
```
代码推送/手动触发 → 运行测试 → 构建项目 → 人工审批（可选）→ 部署到 Vercel 生产环境 → Slack 通知
```

**安全措施**:
- 必须通过所有测试
- 构建验证通过
- Vercel 部署验证
- 实时 Slack 通知

## 环境配置

### 必需的 GitHub Secrets

#### 基础配置
```bash
NODE_ENV=production
VERCEL_TOKEN=your-vercel-token
VERCEL_ORG_ID=your-org-id
VERCEL_PROJECT_ID=your-project-id
```

#### Sentry 配置
```bash
SENTRY_DSN=https://your-sentry-dsn@sentry.io/project-id
SENTRY_ENVIRONMENT=production
SENTRY_TRACES_SAMPLE_RATE=0.1
SENTRY_REPLAY_SESSION_SAMPLE_RATE=0.01
SENTRY_REPLAY_ON_ERROR_SAMPLE_RATE=0.1
```

#### Slack 通知
```bash
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/WEBHOOK/URL
```

### 环境变量文件

1. **本地开发**: [`.env.development`](../.env.development)
   - 开发环境专用配置
   - 本地数据库连接
   - 开发工具配置

2. **生产环境**: [`.env.production`](../.env.production)
   - 生产环境专用配置
   - 生产数据库连接
   - 生产服务配置

3. **环境变量示例**: [`.env.example`](../.env.example)
   - 完整的环境变量参考
   - 包含所有可用配置项

详见各环境的 `.env` 文件。

## 部署流程

### 本地开发环境

1. **启动开发服务器**:
   ```bash
   npm install
   npm run dev
   ```

2. **访问应用**:
   - 开发服务器运行在端口 3200
   - 访问: `http://localhost:3200`

### Docker 部署

1. **使用 Docker Compose 启动所有服务**:
   ```bash
   docker-compose up -d
   ```

2. **查看服务状态**:
   ```bash
   docker-compose ps
   ```

3. **查看日志**:
   ```bash
   docker-compose logs -f
   ```

4. **停止服务**:
   ```bash
   docker-compose down
   ```

**Docker Compose 包含的服务**:
- 应用服务 (端口 3200)
- Redis 缓存服务 (端口 6379)
- PostgreSQL 数据库服务 (端口 5432)

### 预发布环境部署

1. **自动触发**:
   ```bash
   git push origin main
   ```

2. **流程监控**:
   - 访问 GitHub Actions 查看部署进度
   - Slack 接收实时通知

3. **部署完成**:
   - 自动通知团队
   - 预发布环境 URL 由 Vercel 提供

### 生产环境部署

1. **自动触发**:
   ```bash
   git push origin main
   ```

2. **监控部署**:
   - 访问 GitHub Actions 查看部署进度
   - Slack 接收实时通知
   - Vercel Dashboard 查看部署状态

3. **部署验证**:
   - 自动运行单元测试
   - 构建验证通过
   - Vercel 部署成功

### 手动触发部署

1. 访问 GitHub Actions
2. 选择 "CD - Deploy to Production" 或 "CD - Deploy to Staging"
3. 点击 "Run workflow"
4. 等待部署完成

## 监控与告警

### Sentry 监控配置

**客户端配置**: [`sentry.client.config.ts`](../sentry.client.config.ts)
**服务端配置**: [`sentry.server.config.ts`](../sentry.server.config.ts)
**工具库**: [`lib/sentry.ts`](../lib/sentry.ts)

**监控功能**:
- 错误追踪和报告
- 性能监控
- 用户会话重放
- 面包屑导航追踪
- 自定义错误上下文

### 实时监控指标

- **错误率**: 阈值 < 1%
- **响应时间**: P95 < 500ms
- **页面加载时间**: FCP < 1.5s, LCP < 2.5s
- **用户体验**: FID < 100ms, CLS < 0.1

### 告警渠道

1. **Slack**: 实时通知团队频道
   - 部署开始通知
   - 部署完成通知
   - 部署失败通知

2. **Sentry**: 错误和性能告警
   - 实时错误通知
   - 性能异常告警
   - 仪表板可视化

### 监控周期

- **健康检查**: 由 Docker Compose 自动执行（每 30 秒）
- **错误监控**: Sentry 实时监控
- **性能监控**: Sentry 实时监控
- **部署监控**: GitHub Actions 实时监控

## 回滚策略

### Vercel 自动回滚

**触发条件**:
- 部署验证失败
- 错误率超过阈值
- 响应时间异常
- 健康检查失败

**执行流程**:
1. 访问 Vercel Dashboard
2. 选择失败的部署
3. 点击 "Rollback" 按钮
4. 确认回滚到上一版本
5. Vercel 自动切换流量

### Git 版本回滚

1. **回滚到上一版本**:
   ```bash
   git reset --hard HEAD~1
   git push origin main --force
   ```

2. **回滚到特定版本**:
   ```bash
   git checkout <commit-hash>
   git push origin main --force
   ```

3. **重新触发部署**:
   - GitHub Actions 自动触发
   - 部署指定版本

### Docker 回滚

1. **停止当前服务**:
   ```bash
   docker-compose down
   ```

2. **回滚到上一镜像**:
   ```bash
   docker-compose pull
   docker-compose up -d
   ```

3. **查看回滚状态**:
   ```bash
   docker-compose ps
   docker-compose logs
   ```

## 最佳实践

### 1. 代码提交

- 使用语义化提交信息
- 遵循 Conventional Commits 规范
- 提交前运行本地测试
- 确保代码格式正确

### 2. 分支策略

- `main`: 生产代码，自动部署到生产环境
- `develop`: 开发分支，可配置自动部署到预发布环境
- `feature/*`: 功能分支
- `hotfix/*`: 紧急修复分支

### 3. 测试要求

- 单元测试覆盖率 ≥ 80%
- 关键路径必须有测试
- 新功能必须包含测试
- 所有测试必须通过才能合并

### 4. 部署时机

- **避免高峰期**: 不在用户活跃时段部署
- **工作时间**: 尽量在工作时间部署
- **提前通知**: 重大更新提前通知用户

### 5. 安全实践

- 定期更新依赖
- 使用环境变量管理敏感信息
- 启用 Sentry 错误监控
- 配置 IP 访问控制

### 6. 监控实践

- 设置合理的告警阈值
- 定期检查监控仪表板
- 及时响应错误和性能问题
- 定期审查 Sentry 报告

## 故障排除

### 常见问题

#### 1. GitHub Actions 失败

**原因**: 测试失败或构建错误

**解决**:
```bash
# 本地运行测试
npm run test

# 本地运行构建
npm run build

# 检查类型错误
npm run type-check

# 检查代码格式
npm run format:check
```

#### 2. Vercel 部署失败

**原因**: 环境变量缺失或配置错误

**解决**:
- 检查 Vercel 环境变量配置
- 验证 GitHub Secrets 配置
- 查看 Vercel 部署日志
- 检查构建日志

#### 3. Docker 容器启动失败

**原因**: 端口冲突或配置错误

**解决**:
```bash
# 检查端口占用
lsof -i :3200
lsof -i :6379
lsof -i :5432

# 查看容器日志
docker-compose logs

# 重新构建容器
docker-compose down
docker-compose up -d --build
```

#### 4. Sentry 错误过多

**原因**: 代码问题或配置错误

**解决**:
1. 检查 Sentry 仪表板
2. 分析错误模式和频率
3. 查看错误堆栈和上下文
4. 修复高优先级错误
5. 部署修复版本

#### 5. IP 访问被拒绝

**原因**: IP 不在允许的 CIDR 范围内

**解决**:
- 检查客户端 IP 地址
- 验证 CIDR 配置是否正确
- 更新 [`middleware.ts`](../middleware.ts) 中的访问控制规则
- 重新部署应用

### 紧急联系方式

- **技术负责人**: admin@0379.email
- **运维团队**: ops@0379.email
- **Slack**: #emergency-response

### 事故响应流程

1. **发现问题**: 监控告警或用户报告
2. **评估影响**: 确定严重程度和影响范围
3. **立即响应**: 回滚或修复
4. **通知用户**: 更新状态页或发送通知
5. **事后分析**: 编写事故报告
6. **改进措施**: 防止类似问题

## 相关文档

- [环境变量配置指南](../.env.example)
- [Docker 部署指南](../docker-compose.yml)
- [Sentry 配置文档](../lib/sentry.ts)
- [IP 访问控制文档](../lib/cidr.ts)
- [测试配置指南](../vitest.config.ts)
- [项目审核报告](./YYC3-CCC-审核报告/YYC3-CCC-项目标准化审核报告.md)

## 附录

### A. GitHub Secrets 配置清单

在 GitHub 仓库中配置以下 Secrets：

| Secret 名称 | 描述 | 必需 | 示例 |
|------------|--------|--------|--------|
| `VERCEL_TOKEN` | Vercel 部署令牌 | 是 | `xxxxxxxxxxxxx` |
| `VERCEL_ORG_ID` | Vercel 组织 ID | 是 | `team_xxxxxx` |
| `VERCEL_PROJECT_ID` | Vercel 项目 ID | 是 | `prj_xxxxxx` |
| `SLACK_WEBHOOK_URL` | Slack 通知 Webhook | 否 | `https://hooks.slack.com/...` |
| `SENTRY_DSN` | Sentry DSN | 否 | `https://...@sentry.io/...` |

### B. 端口配置

| 服务 | 端口 | 说明 |
|------|--------|------|
| 应用 | 3200 | YYC3 标准端口范围 |
| Redis | 6379 | 默认 Redis 端口 |
| PostgreSQL | 5432 | 默认 PostgreSQL 端口 |

### C. 文件结构

```
.github/
├── workflows/
│   ├── ci.yml          # 持续集成工作流
│   └── cd.yml          # 持续部署工作流
docker/
├── Dockerfile           # Docker 镜像构建文件
├── docker-compose.yml   # Docker Compose 编排文件
└── .dockerignore      # Docker 构建忽略文件
lib/
├── sentry.ts          # Sentry 工具库
├── cidr.ts            # CIDR 工具库
└── ...
tests/
├── unit/              # 单元测试
├── integration/        # 集成测试
├── setup.ts           # 测试环境配置
└── vitest.config.ts   # Vitest 配置
```

---

**最后更新**: 2026-01-23  
**维护人**: YYC³ Team  
**版本**: v1.0.0

---

> 「***YanYuCloudCube***」
> 「***<admin@0379.email>***」
> 「***Words Initiate Quadrants, Language Serves as Core for the Future***」
> 「***All things converge in the cloud pivot; Deep stacks ignite a new era of intelligence***」
