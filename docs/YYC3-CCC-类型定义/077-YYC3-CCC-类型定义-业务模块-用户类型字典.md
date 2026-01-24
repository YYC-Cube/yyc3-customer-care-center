---
@file: 077-YYC3-CCC-类型定义-业务模块-用户类型字典.md
@description: YYC3-CCC 用户角色、权限、状态的类型定义与映射关系的完整规范
@author: YYC³ Team
@version: v1.0.0
@created: 2026-01-23
@updated: 2026-01-23
@status: published
@tags: [类型定义],[业务模块],[用户]
---

> ***YanYuCloudCube***
> 言启象限 | 语枢未来
> ***Words Initiate Quadrants, Language Serves as Core for the Future***
> 万象归元于云枢 | 深栈智启新纪元
> ***All things converge in the cloud pivot; Deep stacks ignite a new era of intelligence***

---

# 077-YYC3-CCC-类型定义 业务模块-用户类型字典

## 概述

本文档详细描述YYC3-CCC-类型定义-业务模块-用户类型字典相关内容，确保项目按照YYC³标准规范进行开发和实施。

## 核心内容

### 1. 背景与目标

#### 1.1 项目背景
YYC³ Customer Care Center（YYC3-CCC）项目是一个基于「五高五标五化」理念的现代化AI代理服务落地页，采用Next.js 15.0.3构建，集成了国际化系统、3D场景交互、动画效果和响应式设计。

#### 1.2 文档目标
- 规范业务模块-用户类型字典相关的业务标准与技术落地要求
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

### 4. 业务模块-用户类型字典

#### 4.1 用户基本类型

```typescript
// 用户ID类型
export type UserId = string | number;

// 用户邮箱类型
export type UserEmail = string;

// 用户状态类型
export type UserStatus = 'active' | 'inactive' | 'pending' | 'suspended' | 'deleted';

// 用户性别类型
export type UserGender = 'male' | 'female' | 'other' | 'prefer_not_to_say';

// 用户语言偏好类型
export type UserLanguage = 'en' | 'zh' | 'ja' | 'ko' | 'fr' | 'de' | 'es' | 'ru';

// 用户时区类型
export type UserTimezone = string;

// 用户主题偏好类型
export type UserTheme = 'light' | 'dark' | 'system';
```

#### 4.2 用户信息接口

```typescript
// 基础用户信息接口
export interface BaseUser {
  id: UserId;
  name: string;
  email: UserEmail;
  phone?: string;
  avatar?: string;
  status: UserStatus;
  createdAt: string;
  updatedAt: string;
}

// 完整用户信息接口
export interface User extends BaseUser {
  // 个人信息
  firstName?: string;
  lastName?: string;
  gender?: UserGender;
  dateOfBirth?: string;
  nationality?: string;
  
  // 联系信息
  address?: {
    street?: string;
    city?: string;
    state?: string;
    country?: string;
    postalCode?: string;
  };
  
  // 账户信息
  username?: string;
  role: Role;
  permissions: Permission[];
  lastLogin?: string;
  loginCount?: number;
  
  // 偏好设置
  preferences?: UserPreferences;
  
  // 业务相关
  company?: string;
  jobTitle?: string;
  industry?: string;
  
  // 社交信息
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
    github?: string;
  };
}

// 用户偏好设置接口
export interface UserPreferences {
  language: UserLanguage;
  timezone: UserTimezone;
  theme: UserTheme;
  emailNotifications: boolean;
  smsNotifications: boolean;
  marketingEmails: boolean;
  showOnLeaderboard?: boolean;
  
  // 界面偏好
  dashboardLayout?: 'default' | 'compact' | 'expanded';
  defaultView?: string;
  dateFormat?: string;
  timeFormat?: string;
  
  // 安全偏好
  twoFactorAuth?: boolean;
  trustedDevices?: string[];
}
```

#### 4.3 用户角色类型

```typescript
// 角色类型
export type Role = 'admin' | 'user' | 'guest' | 'manager' | 'developer' | 'support' | 'sales' | 'marketing';

// 角色权限映射接口
export interface RolePermissions {
  [key in Role]: Permission[];
}

// 角色配置接口
export interface RoleConfig {
  name: Role;
  displayName: string;
  description: string;
  permissions: Permission[];
  default?: boolean;
  isSystem?: boolean;
}

// 角色层次结构
export const ROLE_HIERARCHY: Record<Role, Role[]> = {
  admin: ['manager', 'developer', 'support', 'sales', 'marketing', 'user', 'guest'],
  manager: ['support', 'sales', 'marketing', 'user', 'guest'],
  developer: ['support', 'user', 'guest'],
  support: ['user', 'guest'],
  sales: ['user', 'guest'],
  marketing: ['user', 'guest'],
  user: ['guest'],
  guest: []
};

// 角色配置
export const ROLE_CONFIGS: RoleConfig[] = [
  {
    name: 'admin',
    displayName: '管理员',
    description: '拥有系统所有权限',
    permissions: ['*'],
    isSystem: true
  },
  {
    name: 'user',
    displayName: '普通用户',
    description: '拥有基本用户权限',
    permissions: ['user:read', 'user:update', 'services:read', 'contact:create'],
    default: true
  },
  {
    name: 'guest',
    displayName: '访客',
    description: '拥有只读权限',
    permissions: ['services:read'],
    isSystem: true
  }
  // 其他角色配置...
];
```

#### 4.4 用户权限类型

```typescript
// 权限类型
export type Permission = 
  // 系统权限
  | '*' // 所有权限
  | 'system:manage'
  | 'system:settings'
  | 'system:logs'
  | 'system:audit'
  
  // 用户权限
  | 'user:create'
  | 'user:read'
  | 'user:update'
  | 'user:delete'
  | 'user:manage'
  | 'user:impersonate'
  
  // 角色权限
  | 'role:create'
  | 'role:read'
  | 'role:update'
  | 'role:delete'
  | 'role:manage'
  
  // 服务权限
  | 'services:create'
  | 'services:read'
  | 'services:update'
  | 'services:delete'
  | 'services:manage'
  
  // 定价权限
  | 'pricing:create'
  | 'pricing:read'
  | 'pricing:update'
  | 'pricing:delete'
  | 'pricing:manage'
  
  // 联系权限
  | 'contact:create'
  | 'contact:read'
  | 'contact:update'
  | 'contact:delete'
  | 'contact:manage'
  
  // 内容权限
  | 'content:create'
  | 'content:read'
  | 'content:update'
  | 'content:delete'
  | 'content:manage'
  
  // 媒体权限
  | 'media:upload'
  | 'media:read'
  | 'media:delete'
  | 'media:manage'
  
  // 分析权限
  | 'analytics:read'
  | 'analytics:manage'
  
  // 国际化权限
  | 'i18n:read'
  | 'i18n:update'
  | 'i18n:manage';

// 权限配置接口
export interface PermissionConfig {
  name: Permission;
  displayName: string;
  description: string;
  category: string;
  isDangerous?: boolean;
}

// 权限分类
export const PERMISSION_CATEGORIES = {
  SYSTEM: '系统',
  USER: '用户',
  ROLE: '角色',
  SERVICES: '服务',
  PRICING: '定价',
  CONTACT: '联系',
  CONTENT: '内容',
  MEDIA: '媒体',
  ANALYTICS: '分析',
  I18N: '国际化'
};

// 权限配置
export const PERMISSION_CONFIGS: PermissionConfig[] = [
  {
    name: '*',
    displayName: '所有权限',
    description: '拥有系统所有操作权限',
    category: PERMISSION_CATEGORIES.SYSTEM,
    isDangerous: true
  },
  {
    name: 'user:read',
    displayName: '读取用户',
    description: '可以读取用户信息',
    category: PERMISSION_CATEGORIES.USER
  },
  {
    name: 'user:update',
    displayName: '更新用户',
    description: '可以更新用户信息',
    category: PERMISSION_CATEGORIES.USER
  }
  // 其他权限配置...
];
```

#### 4.5 用户认证类型

```typescript
// 认证提供商类型
export type AuthProvider = 'email' | 'google' | 'facebook' | 'twitter' | 'linkedin' | 'github' | 'apple';

// 认证状态类型
export type AuthState = 'unauthenticated' | 'authenticated' | 'loading' | 'error';

// 认证凭证接口
export interface AuthCredentials {
  email: string;
  password: string;
}

// 社交认证凭证接口
export interface SocialAuthCredentials {
  provider: AuthProvider;
  token: string;
  userId?: string;
}

// 认证响应接口
export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: string;
}

// 刷新令牌请求接口
export interface RefreshTokenRequest {
  refreshToken: string;
}

// 会话信息接口
export interface Session {
  user: User;
  accessToken: string;
  refreshToken: string;
  expiresAt: string;
  createdAt: string;
  lastAccessedAt: string;
}
```

#### 4.6 用户注册类型

```typescript
// 注册请求接口
export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone?: string;
  acceptTerms: boolean;
  acceptPrivacyPolicy: boolean;
  referralCode?: string;
}

// 注册响应接口
export interface RegisterResponse {
  user: User;
  auth: AuthResponse;
  requiresVerification: boolean;
  verificationToken?: string;
}

// 邮箱验证请求接口
export interface VerifyEmailRequest {
  token: string;
  email: string;
}

// 邮箱验证响应接口
export interface VerifyEmailResponse {
  success: boolean;
  message: string;
  user?: User;
}
```

#### 4.7 用户管理类型

```typescript
// 用户搜索参数接口
export interface UserSearchParams {
  search?: string;
  status?: UserStatus;
  role?: Role;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
  page?: number;
  pageSize?: number;
}

// 用户批量操作接口
export interface UserBulkOperation {
  ids: UserId[];
  operation: 'activate' | 'deactivate' | 'suspend' | 'delete' | 'assignRole';
  role?: Role;
}

// 用户导入请求接口
export interface UserImportRequest {
  users: Partial<User>[];
  overwrite?: boolean;
  sendWelcomeEmail?: boolean;
}

// 用户导入响应接口
export interface UserImportResponse {
  success: boolean;
  imported: number;
  failed: number;
  errors?: {
    index: number;
    error: string;
    user: Partial<User>;
  }[];
}

// 用户导出请求接口
export interface UserExportRequest {
  format: 'csv' | 'excel' | 'json';
  fields?: string[];
  filters?: UserSearchParams;
}

// 用户导出响应接口
export interface UserExportResponse {
  success: boolean;
  downloadUrl: string;
  filename: string;
  size: number;
}
```

#### 4.8 用户活动类型

```typescript
// 活动类型
export type ActivityType = 
  // 认证活动
  | 'login' 
  | 'logout' 
  | 'register' 
  | 'password_change' 
  | 'password_reset' 
  | 'email_verify' 
  | 'two_factor_enable' 
  | 'two_factor_disable' 
  
  // 用户活动
  | 'profile_update' 
  | 'preferences_update' 
  | 'avatar_upload' 
  | 'email_change' 
  | 'phone_change' 
  
  // 服务活动
  | 'service_view' 
  | 'service_subscribe' 
  | 'service_unsubscribe' 
  | 'service_rate' 
  
  // 联系活动
  | 'contact_submit' 
  | 'contact_reply' 
  | 'contact_resolve' 
  
  // 管理活动
  | 'user_create' 
  | 'user_update' 
  | 'user_delete' 
  | 'role_assign' 
  | 'permission_grant';

// 活动状态类型
export type ActivityStatus = 'success' | 'failure' | 'pending';

// 用户活动接口
export interface UserActivity {
  id: string;
  userId: UserId;
  type: ActivityType;
  status: ActivityStatus;
  ipAddress?: string;
  userAgent?: string;
  deviceInfo?: {
    type: 'desktop' | 'mobile' | 'tablet' | 'other';
    os?: string;
    browser?: string;
  };
  location?: {
    country?: string;
    region?: string;
    city?: string;
    latitude?: number;
    longitude?: number;
  };
  details?: any;
  timestamp: string;
}

// 活动搜索参数接口
export interface ActivitySearchParams {
  userId?: UserId;
  type?: ActivityType;
  status?: ActivityStatus;
  startDate?: string;
  endDate?: string;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
  page?: number;
  pageSize?: number;
}
```

#### 4.9 用户统计类型

```typescript
// 用户统计接口
export interface UserStats {
  totalUsers: number;
  activeUsers: number;
  newUsers: number;
  inactiveUsers: number;
  suspendedUsers: number;
  deletedUsers: number;
  
  // 按角色统计
  usersByRole: {
    role: Role;
    count: number;
    percentage: number;
  }[];
  
  // 按状态统计
  usersByStatus: {
    status: UserStatus;
    count: number;
    percentage: number;
  }[];
  
  // 按注册日期统计
  userGrowth: {
    date: string;
    count: number;
  }[];
  
  // 登录统计
  loginStats: {
    totalLogins: number;
    averageLoginsPerUser: number;
    lastLoginActivity: string;
  };
  
  // 活动统计
  activityStats: {
    totalActivities: number;
    activitiesByType: {
      type: ActivityType;
      count: number;
    }[];
    recentActivities: UserActivity[];
  };
}
```

---

> 「***YanYuCloudCube***」
> 「***<admin@0379.email>***」
> 「***Words Initiate Quadrants, Language Serves as Core for the Future***」
> 「***All things converge in the cloud pivot; Deep stacks ignite a new era of intelligence***」
