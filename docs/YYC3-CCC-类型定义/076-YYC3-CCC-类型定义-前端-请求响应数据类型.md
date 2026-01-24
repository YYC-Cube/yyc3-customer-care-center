---
@file: 076-YYC3-CCC-类型定义-前端-请求响应数据类型.md
@description: YYC3-CCC 前端接口请求与响应数据的类型定义，保障前后端数据一致性
@author: YYC³ Team
@version: v1.0.0
@created: 2026-01-23
@updated: 2026-01-23
@status: published
@tags: [类型定义],[前端],[接口数据]
---

> ***YanYuCloudCube***
> 言启象限 | 语枢未来
> ***Words Initiate Quadrants, Language Serves as Core for the Future***
> 万象归元于云枢 | 深栈智启新纪元
> ***All things converge in the cloud pivot; Deep stacks ignite a new era of intelligence***

---

# 076-YYC3-CCC-类型定义 前端-请求响应数据类型

## 概述

本文档详细描述YYC3-CCC-类型定义-前端-请求响应数据类型相关内容，确保项目按照YYC³标准规范进行开发和实施。

## 核心内容

### 1. 背景与目标

#### 1.1 项目背景
YYC³ Customer Care Center（YYC3-CCC）项目是一个基于「五高五标五化」理念的现代化AI代理服务落地页，采用Next.js 15.0.3构建，集成了国际化系统、3D场景交互、动画效果和响应式设计。

#### 1.2 文档目标
- 规范前端-请求响应数据类型相关的业务标准与技术落地要求
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

### 4. 前端-请求响应数据类型

#### 4.1 基础API类型

```typescript
// API请求方法类型
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD';

// API请求头类型
export interface HttpHeaders {
  [key: string]: string;
}

// API请求参数类型
export interface HttpParams {
  [key: string]: string | number | boolean | string[] | number[] | boolean[];
}

// API请求配置接口
export interface ApiRequestConfig<T = any> {
  method: HttpMethod;
  url: string;
  headers?: HttpHeaders;
  params?: HttpParams;
  data?: T;
  timeout?: number;
  withCredentials?: boolean;
  responseType?: 'json' | 'text' | 'blob' | 'arraybuffer';
}

// API响应接口
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: ApiError;
  message?: string;
  statusCode?: number;
  timestamp?: number;
}

// API错误接口
export interface ApiError {
  code: string;
  message: string;
  details?: any;
  statusCode?: number;
}
```

#### 4.2 认证相关类型

```typescript
// 登录请求接口
export interface LoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
}

// 注册请求接口
export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// 密码重置请求接口
export interface ResetPasswordRequest {
  email: string;
}

// 密码更新请求接口
export interface UpdatePasswordRequest {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

// 认证响应接口
export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: string;
  user: UserInfo;
}

// 用户信息接口
export interface UserInfo {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
  phone?: string;
  createdAt: string;
  updatedAt: string;
}
```

#### 4.3 错误处理类型

```typescript
// 错误类型
export type ErrorType = 'validation' | 'authentication' | 'authorization' | 'server' | 'network' | 'unknown';

// 错误详情接口
export interface ErrorDetail {
  field?: string;
  message: string;
  value?: any;
}

// 验证错误接口
export interface ValidationError extends ApiError {
  type: 'validation';
  details: ErrorDetail[];
}

// 认证错误接口
export interface AuthenticationError extends ApiError {
  type: 'authentication';
}

// 授权错误接口
export interface AuthorizationError extends ApiError {
  type: 'authorization';
}

// 服务器错误接口
export interface ServerError extends ApiError {
  type: 'server';
}

// 网络错误接口
export interface NetworkError extends ApiError {
  type: 'network';
  originalError?: any;
}

// 未知错误接口
export interface UnknownError extends ApiError {
  type: 'unknown';
  originalError?: any;
}

// 通用错误接口
export type GenericError = 
  | ValidationError
  | AuthenticationError
  | AuthorizationError
  | ServerError
  | NetworkError
  | UnknownError;
```

#### 4.4 分页和筛选类型

```typescript
// 分页请求参数接口
export interface PaginationRequest {
  page: number;
  pageSize: number;
}

// 分页响应接口
export interface PaginationResponse<T = any> {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}

// 排序请求参数接口
export interface SortingRequest {
  sortBy: string;
  sortDirection: 'asc' | 'desc';
}

// 筛选操作类型
export type FilterOperator = 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte' | 'contains' | 'startsWith' | 'endsWith' | 'in' | 'notIn';

// 筛选条件接口
export interface FilterCondition {
  field: string;
  operator: FilterOperator;
  value: any;
}

// 筛选请求参数接口
export interface FilterRequest {
  filters?: FilterCondition[];
  search?: string;
}

// 综合查询参数接口
export interface QueryRequest extends PaginationRequest, SortingRequest, FilterRequest {
  // 扩展字段
}
```

#### 4.5 业务API类型

##### 4.5.1 服务相关类型

```typescript
// 服务分类类型
export type ServiceCategory = 'ai' | 'customer-support' | 'sales' | 'marketing' | 'it' | 'hr' | 'finance';

// 服务状态类型
export type ServiceStatus = 'active' | 'inactive' | 'coming-soon';

// 服务请求接口
export interface Service {
  id: string;
  name: string;
  description: string;
  category: ServiceCategory;
  status: ServiceStatus;
  price: {
    monthly: number;
    yearly: number;
  };
  features: string[];
  imageUrl?: string;
  videoUrl?: string;
  createdAt: string;
  updatedAt: string;
}

// 服务列表请求接口
export interface ServiceListRequest extends QueryRequest {
  category?: ServiceCategory;
  status?: ServiceStatus;
  minPrice?: number;
  maxPrice?: number;
}

// 服务详情请求接口
export interface ServiceDetailRequest {
  id: string;
}

// 服务创建请求接口
export interface ServiceCreateRequest {
  name: string;
  description: string;
  category: ServiceCategory;
  status: ServiceStatus;
  price: {
    monthly: number;
    yearly: number;
  };
  features: string[];
  imageUrl?: string;
  videoUrl?: string;
}

// 服务更新请求接口
export interface ServiceUpdateRequest {
  id: string;
  name?: string;
  description?: string;
  category?: ServiceCategory;
  status?: ServiceStatus;
  price?: {
    monthly: number;
    yearly: number;
  };
  features?: string[];
  imageUrl?: string;
  videoUrl?: string;
}

// 服务删除请求接口
export interface ServiceDeleteRequest {
  id: string;
}
```

##### 4.5.2 联系相关类型

```typescript
// 联系请求接口
export interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  serviceId?: string;
  preferredContactMethod?: 'email' | 'phone' | 'sms';
}

// 联系响应接口
export interface ContactResponse {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  serviceId?: string;
  preferredContactMethod?: 'email' | 'phone' | 'sms';
  status: 'pending' | 'processing' | 'completed' | 'failed';
  createdAt: string;
  updatedAt: string;
}

// 联系列表请求接口
export interface ContactListRequest extends QueryRequest {
  status?: 'pending' | 'processing' | 'completed' | 'failed';
}
```

##### 4.5.3 定价相关类型

```typescript
// 计费周期类型
export type BillingCycle = 'monthly' | 'yearly' | 'quarterly' | 'custom';

// 折扣类型
export type DiscountType = 'percentage' | 'fixed' | 'free-trial';

// 定价计划接口
export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  billingCycle: BillingCycle;
  features: string[];
  isPopular?: boolean;
  isRecommended?: boolean;
  discount?: {
    type: DiscountType;
    value: number;
    expiresAt?: string;
  };
  createdAt: string;
  updatedAt: string;
}

// 定价计划列表请求接口
export interface PricingPlanListRequest extends QueryRequest {
  billingCycle?: BillingCycle;
  minPrice?: number;
  maxPrice?: number;
}

// 定价计划详情请求接口
export interface PricingPlanDetailRequest {
  id: string;
}

// 定价计划创建请求接口
export interface PricingPlanCreateRequest {
  name: string;
  description: string;
  price: number;
  billingCycle: BillingCycle;
  features: string[];
  isPopular?: boolean;
  isRecommended?: boolean;
  discount?: {
    type: DiscountType;
    value: number;
    expiresAt?: string;
  };
}

// 定价计划更新请求接口
export interface PricingPlanUpdateRequest {
  id: string;
  name?: string;
  description?: string;
  price?: number;
  billingCycle?: BillingCycle;
  features?: string[];
  isPopular?: boolean;
  isRecommended?: boolean;
  discount?: {
    type: DiscountType;
    value: number;
    expiresAt?: string;
  };
}
```

#### 4.6 国际化相关类型

```typescript
// 语言代码类型
export type Locale = 'en' | 'zh' | 'ja' | 'ko' | 'fr' | 'de' | 'es' | 'ru';

// 翻译请求接口
export interface TranslationRequest {
  locale: Locale;
  key: string;
  fallback?: string;
}

// 翻译响应接口
export interface TranslationResponse {
  key: string;
  value: string;
  locale: Locale;
}

// 本地化配置请求接口
export interface LocalizationConfigRequest {
  locale: Locale;
}

// 本地化配置响应接口
export interface LocalizationConfigResponse {
  locale: Locale;
  fallbackLocale: Locale;
  availableLocales: Locale[];
  translations: Record<string, string>;
}
```

#### 4.7 上传相关类型

```typescript
// 文件类型
export type FileType = 'image' | 'video' | 'audio' | 'document' | 'other';

// 文件上传请求接口
export interface FileUploadRequest {
  file: File;
  type: FileType;
  folder?: string;
  public?: boolean;
}

// 文件上传响应接口
export interface FileUploadResponse {
  id: string;
  name: string;
  url: string;
  type: FileType;
  size: number;
  mimeType: string;
  folder?: string;
  public: boolean;
  createdAt: string;
  updatedAt: string;
}

// 文件列表请求接口
export interface FileListRequest extends QueryRequest {
  type?: FileType;
  folder?: string;
  public?: boolean;
}

// 文件删除请求接口
export interface FileDeleteRequest {
  id: string;
}
```

#### 4.8 WebSocket相关类型

```typescript
// WebSocket事件类型
export type WebSocketEvent = 'connect' | 'disconnect' | 'error' | 'message' | 'ping' | 'pong';

// WebSocket消息类型
export type WebSocketMessageType = 'text' | 'json' | 'binary';

// WebSocket消息接口
export interface WebSocketMessage {
  type: WebSocketMessageType;
  data: any;
  timestamp: number;
  sender?: string;
  recipient?: string;
}

// WebSocket连接配置接口
export interface WebSocketConfig {
  url: string;
  protocols?: string[];
  reconnect?: boolean;
  reconnectInterval?: number;
  maxReconnectAttempts?: number;
}

// WebSocket状态类型
export type WebSocketStatus = 'connecting' | 'connected' | 'disconnecting' | 'disconnected' | 'error';
```

---

> 「***YanYuCloudCube***」
> 「***<admin@0379.email>***」
> 「***Words Initiate Quadrants, Language Serves as Core for the Future***」
> 「***All things converge in the cloud pivot; Deep stacks ignite a new era of intelligence***」
