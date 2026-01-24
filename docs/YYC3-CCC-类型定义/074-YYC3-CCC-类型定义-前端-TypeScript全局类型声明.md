---
@file: 074-YYC3-CCC-类型定义-前端-TypeScript全局类型声明.md
@description: YYC3-CCC 前端TS全局公共类型、接口、枚举的统一声明与约束
@author: YYC³ Team
@version: v1.0.0
@created: 2026-01-23
@updated: 2026-01-23
@status: published
@tags: [类型定义],[前端],[TypeScript]
---

> ***YanYuCloudCube***
> 言启象限 | 语枢未来
> ***Words Initiate Quadrants, Language Serves as Core for the Future***
> 万象归元于云枢 | 深栈智启新纪元
> ***All things converge in the cloud pivot; Deep stacks ignite a new era of intelligence***

---

# 074-YYC3-CCC-类型定义 前端-TypeScript全局类型声明

## 概述

本文档详细描述YYC3-CCC-类型定义-前端-TypeScript全局类型声明相关内容，确保项目按照YYC³标准规范进行开发和实施。

## 核心内容

### 1. 背景与目标

#### 1.1 项目背景
YYC³ Customer Care Center（YYC3-CCC）项目是一个基于「五高五标五化」理念的现代化AI代理服务落地页，采用Next.js 15.0.3构建，集成了国际化系统、3D场景交互、动画效果和响应式设计。

#### 1.2 文档目标
- 规范前端-TypeScript全局类型声明相关的业务标准与技术落地要求
- 为项目相关人员提供清晰的参考依据
- 保障相关模块开发、实施、运维的一致性与规范性

### 2. 设计原则

#### 2.1 五高原则
- **高可用性**：确保系统7x24小时稳定运行
- **高性能**：优化加载速度和交互响应
- **高安全性**：保护用户数据和隐私安全
- **高扩展性**：支持业务快速扩展
- **高可维护性**：便于后续维护和升级

#### 2.2 五标体系
- **标准化**：统一的技术和流程标准
- **规范化**：严格的开发和管理规范
- **自动化**：提高开发效率和质量
- **智能化**：利用AI技术提升能力
- **可视化**：直观的监控和管理界面

#### 2.3 五化架构
- **流程化**：标准化的开发流程
- **文档化**：完善的文档体系
- **工具化**：高效的开发工具链
- **数字化**：数据驱动的决策
- **生态化**：开放的生态系统

### 3. 技术栈

- Next.js 15.0.3
- React 19
- TypeScript 5.6.2
- Tailwind CSS 3.4.17
- shadcn/ui + Radix UI
- Framer Motion 11.11.17
- @splinetool/react-spline 4.1.0
- @tsparticles/react 3.0.0
- Vercel (部署平台)

### 4. 前端-TypeScript全局类型声明

#### 4.1 基础类型

```typescript
// 基础类型定义
export type ID = string | number;
export type DateTime = string;
export type Email = string;
export type URL = string;
export type Phone = string;
export type Currency = string;
export type LanguageCode = string;

// 状态类型
export type Status = 'active' | 'inactive' | 'pending' | 'deleted';
export type Priority = 'low' | 'medium' | 'high' | 'urgent';
export type Mode = 'light' | 'dark' | 'system';
export type Direction = 'ltr' | 'rtl';

// 空类型
export type Nullable<T> = T | null | undefined;
export type Optional<T> = T | undefined;
export type Required<T> = T;
export type EmptyObject = Record<string, never>;
export type AnyObject = Record<string, any>;
```

#### 4.2 通用接口

```typescript
// 分页接口
export interface Pagination {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

// 分页请求参数
export interface PaginationParams {
  page?: number;
  pageSize?: number;
}

// 排序接口
export interface Sorting {
  field: string;
  direction: 'asc' | 'desc';
}

// 排序请求参数
export interface SortingParams {
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
}

// 筛选接口
export interface Filter {
  [key: string]: any;
}

// 位置接口
export interface Position {
  x: number;
  y: number;
  z?: number;
}

// 尺寸接口
export interface Size {
  width: number;
  height: number;
  depth?: number;
}

// 颜色接口
export interface Color {
  r: number;
  g: number;
  b: number;
  a?: number;
}

// 错误接口
export interface Error {
  code: string;
  message: string;
  details?: any;
}

// 结果接口
export interface Result<T> {
  success: boolean;
  data?: T;
  error?: Error;
}
```

#### 4.3 工具类型

```typescript
// 工具类型
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
export type Partial<T> = {
  [P in keyof T]?: T[P];
};
export type Required<T> = {
  [P in keyof T]-?: T[P];
};
export type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
export type Record<K extends keyof any, T> = {
  [P in K]: T;
};

// 联合类型工具
export type Extract<T, U> = T extends U ? T : never;
export type Exclude<T, U> = T extends U ? never : T;

// 函数类型工具
export type Parameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never;
export type ReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any;

// 条件类型工具
export type NonNullable<T> = T extends null | undefined ? never : T;
export type Nullable<T> = T | null | undefined;

// 字符串类型工具
export type StringLiteral<T extends string> = T;
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

// 数组类型工具
export type ArrayElement<T extends Array<any>> = T extends Array<infer E> ? E : never;
export type Tuple<T, N extends number> = N extends N ? number extends N ? T[] : _TupleOf<T, N, []> : never;
type _TupleOf<T, N extends number, R extends unknown[]> = R['length'] extends N ? R : _TupleOf<T, N, [T, ...R]>;
```

#### 4.4 环境类型

```typescript
// 环境类型
export type Environment = 'development' | 'production' | 'testing';

// 环境配置接口
export interface EnvironmentConfig {
  apiUrl: string;
  baseUrl: string;
  environment: Environment;
  debug: boolean;
  sentryDsn?: string;
  googleAnalyticsId?: string;
  stripePublicKey?: string;
}

// 构建信息接口
export interface BuildInfo {
  version: string;
  commit: string;
  branch: string;
  timestamp: number;
}
```

#### 4.5 国际化类型

```typescript
// 语言代码类型
export type Locale = 'en' | 'zh' | 'ja' | 'ko' | 'fr' | 'de' | 'es' | 'ru';

// 翻译接口
export interface Translation {
  [key: string]: string | Translation;
}

// 本地化配置接口
export interface LocalizationConfig {
  locale: Locale;
  fallbackLocale: Locale;
  availableLocales: Locale[];
  translations: {
    [locale in Locale]?: Translation;
  };
}
```

#### 4.6 主题类型

```typescript
// 主题模式类型
export type ThemeMode = 'light' | 'dark' | 'system';

// 主题颜色类型
export type ThemeColor = 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'info' | 'background' | 'foreground';

// 主题配置接口
export interface ThemeConfig {
  mode: ThemeMode;
  colors: {
    [color in ThemeColor]: string;
  };
  fonts: {
    sans: string[];
    serif: string[];
    mono: string[];
  };
  spacing: {
    [key: string]: number;
  };
  breakpoints: {
    [key: string]: string;
  };
}
```

#### 4.7 路由类型

```typescript
// 路由参数接口
export interface RouteParams {
  [key: string]: string | string[];
}

// 路由查询参数接口
export interface RouteQuery {
  [key: string]: string | string[];
}

// 导航选项接口
export interface NavigateOptions {
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
}

// 路由状态接口
export interface RouterState {
  pathname: string;
  params: RouteParams;
  query: RouteQuery;
}
```

---

> 「***YanYuCloudCube***」
> 「***<admin@0379.email>***」
> 「***Words Initiate Quadrants, Language Serves as Core for the Future***」
> 「***All things converge in the cloud pivot; Deep stacks ignite a new era of intelligence***」
