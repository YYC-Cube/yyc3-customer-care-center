
<div align="center">
  <img src="./public/yyc3-article-cover-03.png" alt="YYC³ Customer Care Center" width="100%" style="max-width: 1200px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);" />
</div>

<div align="center" style="margin: 2rem 0;">
  <a href="https://github.com/YYC-Cube/yyc3-customer-care-center" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/github/stars/YYC-Cube/yyc3-customer-care-center.svg?style=social&label=Stars" alt="GitHub Stars" />
  </a>
  <a href="https://github.com/YYC-Cube/yyc3-customer-care-center" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/github/forks/YYC-Cube/yyc3-customer-care-center.svg?style=social&label=Forks" alt="GitHub Forks" />
  </a>
  <img src="https://img.shields.io/badge/Next.js-15.0.3-blue" alt="Next.js Version" />
  <img src="https://img.shields.io/badge/React-19.0.0-blue" alt="React Version" />
  <img src="https://img.shields.io/badge/TypeScript-5.0.0-blue" alt="TypeScript Version" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4.17-blue" alt="TailwindCSS Version" />
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License" />
</div>

# YYC³ Customer Care Center

> 现代化AI代理服务落地页，基于Next.js 14+构建，集成国际化系统、3D场景交互、动画效果和响应式设计

> ***YanYuCloudCube***
> 言启象限 | 语枢未来
> ***Words Initiate Quadrants, Language Serves as Core for the Future***

> 万象归元于云枢 | 深栈智启新纪元
> ***All things converge in the cloud pivot; Deep stacks ignite a new era of intelligence***

---

## 📋 项目概述

YYC³ Customer Care Center（YYC3-CCC）项目是一个基于「五高五标五化」理念的现代化AI代理服务落地页，采用Next.js 14+构建，集成了国际化系统、3D场景交互、动画效果和响应式设计。

项目旨在为企业提供智能、高效、安全的客户关怀中心解决方案，通过AI技术提升客户服务质量和效率。

## 🚀 核心特性

### 智能服务
- **AI代理服务**：智能客服、智能表单、智能数据分析
- **预测分析**：基于历史数据的智能预测和推荐
- **自动化工作流**：智能审批、自动任务分配

### 现代化架构
- **Next.js 14+ App Router**：现代化的路由系统
- **React 19**：最新的React特性和性能优化
- **TypeScript 5**：类型安全的代码base
- **Tailwind CSS**：实用优先的CSS框架

### 沉浸式体验
- **Spline 3D场景**：交互式3D界面
- **Framer Motion动画**：流畅的动画效果
- **粒子效果**：动态视觉效果
- **响应式设计**：完美适配各种设备

### 国际化支持
- **多语言切换**：内置国际化系统
- **本地化适配**：支持不同地区的语言和文化
- **RTL支持**：支持从右到左的语言

### 高性能优化
- **图片懒加载**：优化加载速度
- **代码分割**：减少初始加载时间
- **预渲染**：提升首屏性能
- **缓存策略**：优化重复访问

## 🛠️ 技术栈

| 类别 | 技术 | 版本 |
|------|------|------|
| 前端框架 | Next.js | 15.0.3 |
| UI库 | React | 19.0.0 |
| 类型系统 | TypeScript | 5.0.0 |
| 样式方案 | Tailwind CSS | 3.4.17 |
| UI组件 | shadcn/ui + Radix UI | 最新版 |
| 动画库 | Framer Motion | 最新版 |
| 3D场景 | @splinetool/react-spline | 最新版 |
| 粒子效果 | @tsparticles/react | 最新版 |
| 图表库 | recharts | 最新版 |
| 图标库 | lucide-react | 0.454.0 |
| 部署平台 | Vercel | - |

## 📦 快速开始

### 环境要求

- Node.js 18.0+
- npm 9.0+ 或 yarn 1.22+

### 安装

```bash
# 克隆仓库
git clone https://github.com/YYC-Cube/yyc3-customer-care-center.git

# 进入项目目录
cd yyc3-customer-care-center

# 安装依赖
npm install
# 或
yarn install
```

### 开发运行

```bash
# 启动开发服务器（端口 3200）
npm run dev
# 或
yarn dev

# 构建生产版本
npm run build
# 或
yarn build

# 预览生产构建（端口 3200）
npm start
# 或
yarn start

# 代码格式化
npm run format
# 或
yarn format

# 代码格式检查
npm run format:check
# 或
yarn format:check

# 代码检查
npm run lint
# 或
yarn lint

# 类型检查
npm run type-check
# 或
yarn type-check

# 运行测试
npm run test
# 或
yarn test

# 运行单元测试
npm run test:unit
# 或
yarn test:unit

# 生成测试覆盖率报告
npm run test:coverage
# 或
yarn test:coverage

# 运行测试 UI
npm run test:ui
# 或
yarn test:ui

# 监视模式运行测试
npm run test:watch
# 或
yarn test:watch
```

### 🚀 部署

### Vercel 部署（推荐）

项目默认配置为 Vercel 部署：

1. 登录 Vercel 账户
2. 导入项目仓库
3. 配置环境变量
4. 点击部署按钮

### Docker 部署

项目支持 Docker 容器化部署：

```bash
# 使用 Docker Compose 启动所有服务
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

详见 [Docker 部署指南](./docs/YYC3-CCC-CICD-GUIDE.md#docker-部署)

## 📁 项目结构

```
yyc3-customer-care-center/
├── app/                 # Next.js App Router
│   ├── ai/              # AI相关功能
│   ├── analysis/        # 数据分析
│   ├── analytics/       # 分析仪表板
│   ├── approval/        # 审批流程
│   ├── communication/   # 沟通功能
│   ├── customers/       # 客户管理
│   ├── finance/         # 财务管理
│   ├── components/      # 组件
│   ├── lib/             # 工具库
│   ├── locales/         # 国际化文件
│   ├── page.tsx         # 首页
│   └── layout.tsx       # 布局
├── components/          # 共享组件
│   ├── ai/              # AI组件
│   ├── analytics/       # 分析组件
│   ├── ui/              # UI组件
│   └── ...              # 其他组件
├── public/              # 静态资源
├── docs/                # 文档目录
├── package.json         # 项目配置
├── tsconfig.json        # TypeScript配置
├── tailwind.config.js   # Tailwind配置
└── README.md            # 项目说明
```

## 📚 文档体系

项目采用完整的文档体系，包含以下类别：

### 核心文档
- **需求规划**：项目章程、需求说明书等
- **项目规划**：项目管理计划、进度计划等
- **架构设计**：系统架构、数据架构等
- **详细设计**：模块设计、UI/UX规范等
- **API文档**：接口设计、测试用例等

### 技术文档
- **类型定义**：TypeScript类型声明
- **测试文档**：测试规范、测试方案等
- **部署运维**：部署方案、监控告警等
- **用户手册**：快速开始、常见问题等

### CI/CD 文档
- **CI/CD 指南**：[YYC3-CCC-CICD-GUIDE.md](./docs/YYC3-CCC-CICD-GUIDE.md)
  - GitHub Actions 工作流配置
  - Docker 部署流程
  - Sentry 监控集成
  - IP 访问控制配置

### 监控与安全文档
- **Sentry 集成指南**：[Sentry 配置文档](./docs/YYC3-CCC-CICD-GUIDE.md#sentry-监控集成)
  - 错误追踪配置
  - 性能监控设置
  - 用户会话重放
  - 告警通知配置
- **IP 访问控制**：[访问控制文档](./docs/YYC3-CCC-CICD-GUIDE.md#ip-访问控制)
  - CIDR 匹配规则
  - 访问策略配置
  - 安全策略实施

### 审核文档
- **文档审查报告**：[YYC3-CCC-文档审查报告.md](./docs/YYC3-CCC-文档审查报告.md)
  - 文档与实际配置对比
  - 差异分析和修复建议

## 🤝 贡献指南

### 开发流程

1. **分支管理**：
   - `main`：生产分支
   - `develop`：开发分支
   - `feature/*`：功能分支
   - `bugfix/*`：Bug修复分支

2. **提交规范**：
   - 使用Conventional Commits规范
   - 提交信息格式：`<类型>[可选 范围]: <描述>`

3. **代码审查**：
   - 所有PR必须经过代码审查
   - 确保代码符合TypeScript类型检查
   - 确保通过ESLint检查

### 开发规范

- **代码风格**：遵循ESLint和Prettier配置
- **命名规范**：
  - 组件文件：PascalCase.tsx
  - 工具文件：camelCase.ts
  - 配置文件：kebab-case.config.js
- **文档规范**：遵循项目文档模板

## 🔒 安全规范

- **认证系统**：基于JWT的无状态认证
- **权限控制**：基于角色的访问控制(RBAC)
- **数据加密**：敏感数据传输和存储加密
- **输入验证**：所有用户输入的验证和清理
- **安全审计**：定期的安全审计和漏洞扫描

## 📊 性能指标

### 前端性能
- **首次内容绘制(FCP)**：< 1.5秒
- **最大内容绘制(LCP)**：< 2.5秒
- **首次输入延迟(FID)**：< 100毫秒
- **累积布局偏移(CLS)**：< 0.1
- **首次字节时间(TTFB)**：< 800毫秒

### 后端性能
- **API响应时间**：< 200毫秒 (95th percentile)
- **数据库查询时间**：< 100毫秒 (平均)
- **缓存命中率**：> 90%
- **并发处理能力**：> 1000 请求/秒
- **系统可用性**：> 99.9%

## 📞 联系方式

- **项目维护**：YYC³ Team
- **邮箱**：admin@0379.email
- **网站**：https://www.yanyucloud.com
- **GitHub**：https://github.com/YYC-Cube/yyc3-customer-care-center

## 📄 许可证

MIT License

---

<div align="center">

> 「***YanYuCloudCube***」
> 「***<admin@0379.email>***」
> 「***Words Initiate Quadrants, Language Serves as Core for the Future***」
> 「***All things converge in the cloud pivot; Deep stacks ignite a new era of intelligence***」

</div>

**最后更新时间**: 2026-01-23
**文档版本**: v1.0.0
