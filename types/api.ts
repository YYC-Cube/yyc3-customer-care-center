/**
 * @file API类型定义
 * @description YYC³ Customer Care Center 项目的API类型定义
 * @author YYC³
 * @version 1.0.0
 */

import type { ID, DateTime, Status, Priority, Visibility, Pagination, Filter, Sort, Response, PaginatedResponse, ErrorInfo } from './global';

// API基础类型
export interface ApiRequest {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  url: string;
  headers?: Record<string, string>;
  params?: Record<string, any>;
  body?: any;
}

export interface ApiResponse<T = any> extends Response<T> {
  status: number;
  statusText: string;
  headers: Record<string, string>;
}

// 分页请求类型
export interface PaginatedRequest {
  page: number;
  pageSize: number;
  filter?: Filter;
  sort?: Sort;
}

// 分页响应类型
export interface PaginatedApiResponse<T = any> extends ApiResponse {
  data?: {
    items: T[];
    pagination: Pagination;
  };
}

// 错误响应类型
export interface ErrorApiResponse {
  success: boolean;
  error: ErrorInfo;
  message: string;
  code: number;
  status: number;
  statusText: string;
  headers: Record<string, string>;
}

// 通用ID请求类型
export interface IdRequest {
  id: ID;
}

// 通用ID响应类型
export interface IdApiResponse extends ApiResponse {
  data?: {
    id: ID;
  };
}

// 通用确认请求类型
export interface ConfirmRequest {
  confirm: boolean;
}

// 通用确认响应类型
export interface ConfirmApiResponse extends ApiResponse {
  data?: {
    confirmed: boolean;
  };
}

// 认证相关类型
export interface LoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface LoginResponse {
  token: string;
  refreshToken: string;
  user: {
    id: ID;
    email: string;
    name: string;
    role: string;
  };
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
  role?: string;
}

export interface RegisterResponse {
  id: ID;
  email: string;
  name: string;
  role: string;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

export interface RefreshTokenResponse {
  token: string;
  refreshToken: string;
}

export interface LogoutRequest {
  refreshToken?: string;
}

export interface LogoutResponse {
  success: boolean;
}

// 用户相关类型
export interface GetUserRequest extends IdRequest {
}

export interface GetUserResponse {
  id: ID;
  email: string;
  name: string;
  role: string;
  status: string;
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface GetUsersRequest extends PaginatedRequest {
  filter?: {
    email?: string;
    name?: string;
    role?: string;
    status?: string;
  };
}

export interface GetUsersResponse extends PaginatedResponse {
  data?: {
    items: Array<{
      id: ID;
      email: string;
      name: string;
      role: string;
      status: string;
      createdAt: DateTime;
      updatedAt: DateTime;
    }>;
    pagination: Pagination;
  };
}

export interface CreateUserRequest {
  email: string;
  password: string;
  name: string;
  role: string;
  status?: string;
}

export interface CreateUserResponse {
  id: ID;
  email: string;
  name: string;
  role: string;
  status: string;
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface UpdateUserRequest extends IdRequest {
  email?: string;
  password?: string;
  name?: string;
  role?: string;
  status?: string;
}

export interface UpdateUserResponse {
  id: ID;
  email: string;
  name: string;
  role: string;
  status: string;
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface DeleteUserRequest extends IdRequest {
}

export interface DeleteUserResponse {
  success: boolean;
}

// 服务相关类型
export interface GetServiceRequest extends IdRequest {
}

export interface GetServiceResponse {
  id: ID;
  name: string;
  description: string;
  category: string;
  status: string;
  price: number;
  duration: number;
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface GetServicesRequest extends PaginatedRequest {
  filter?: {
    name?: string;
    category?: string;
    status?: string;
    minPrice?: number;
    maxPrice?: number;
  };
}

export interface GetServicesResponse extends PaginatedResponse {
  data?: {
    items: Array<{
      id: ID;
      name: string;
      description: string;
      category: string;
      status: string;
      price: number;
      duration: number;
      createdAt: DateTime;
      updatedAt: DateTime;
    }>;
    pagination: Pagination;
  };
}

export interface CreateServiceRequest {
  name: string;
  description: string;
  category: string;
  status?: string;
  price: number;
  duration: number;
}

export interface CreateServiceResponse {
  id: ID;
  name: string;
  description: string;
  category: string;
  status: string;
  price: number;
  duration: number;
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface UpdateServiceRequest extends IdRequest {
  name?: string;
  description?: string;
  category?: string;
  status?: string;
  price?: number;
  duration?: number;
}

export interface UpdateServiceResponse {
  id: ID;
  name: string;
  description: string;
  category: string;
  status: string;
  price: number;
  duration: number;
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface DeleteServiceRequest extends IdRequest {
}

export interface DeleteServiceResponse {
  success: boolean;
}

// 定价相关类型
export interface GetPricingRequest extends IdRequest {
}

export interface GetPricingResponse {
  id: ID;
  name: string;
  description: string;
  type: string;
  price: number;
  currency: string;
  duration: number;
  features: string[];
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface GetPricingsRequest extends PaginatedRequest {
  filter?: {
    name?: string;
    type?: string;
    minPrice?: number;
    maxPrice?: number;
    currency?: string;
  };
}

export interface GetPricingsResponse extends PaginatedResponse {
  data?: {
    items: Array<{
      id: ID;
      name: string;
      description: string;
      type: string;
      price: number;
      currency: string;
      duration: number;
      features: string[];
      createdAt: DateTime;
      updatedAt: DateTime;
    }>;
    pagination: Pagination;
  };
}

export interface CreatePricingRequest {
  name: string;
  description: string;
  type: string;
  price: number;
  currency: string;
  duration: number;
  features: string[];
}

export interface CreatePricingResponse {
  id: ID;
  name: string;
  description: string;
  type: string;
  price: number;
  currency: string;
  duration: number;
  features: string[];
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface UpdatePricingRequest extends IdRequest {
  name?: string;
  description?: string;
  type?: string;
  price?: number;
  currency?: string;
  duration?: number;
  features?: string[];
}

export interface UpdatePricingResponse {
  id: ID;
  name: string;
  description: string;
  type: string;
  price: number;
  currency: string;
  duration: number;
  features: string[];
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface DeletePricingRequest extends IdRequest {
}

export interface DeletePricingResponse {
  success: boolean;
}

// 任务相关类型
export interface GetTaskRequest extends IdRequest {
}

export interface GetTaskResponse {
  id: ID;
  title: string;
  description: string;
  status: Status;
  priority: Priority;
  dueDate: DateTime;
  assigneeId: ID;
  creatorId: ID;
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface GetTasksRequest extends PaginatedRequest {
  filter?: {
    title?: string;
    status?: Status;
    priority?: Priority;
    assigneeId?: ID;
    creatorId?: ID;
    dueDateFrom?: DateTime;
    dueDateTo?: DateTime;
  };
}

export interface GetTasksResponse extends PaginatedResponse {
  data?: {
    items: Array<{
      id: ID;
      title: string;
      description: string;
      status: Status;
      priority: Priority;
      dueDate: DateTime;
      assigneeId: ID;
      creatorId: ID;
      createdAt: DateTime;
      updatedAt: DateTime;
    }>;
    pagination: Pagination;
  };
}

export interface CreateTaskRequest {
  title: string;
  description: string;
  status?: Status;
  priority?: Priority;
  dueDate?: DateTime;
  assigneeId?: ID;
  creatorId?: ID;
}

export interface CreateTaskResponse {
  id: ID;
  title: string;
  description: string;
  status: Status;
  priority: Priority;
  dueDate: DateTime;
  assigneeId: ID;
  creatorId: ID;
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface UpdateTaskRequest extends IdRequest {
  title?: string;
  description?: string;
  status?: Status;
  priority?: Priority;
  dueDate?: DateTime;
  assigneeId?: ID;
  creatorId?: ID;
}

export interface UpdateTaskResponse {
  id: ID;
  title: string;
  description: string;
  status: Status;
  priority: Priority;
  dueDate: DateTime;
  assigneeId: ID;
  creatorId: ID;
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface DeleteTaskRequest extends IdRequest {
}

export interface DeleteTaskResponse {
  success: boolean;
}

// 客户相关类型
export interface GetCustomerRequest extends IdRequest {
}

export interface GetCustomerResponse {
  id: ID;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: string;
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface GetCustomersRequest extends PaginatedRequest {
  filter?: {
    name?: string;
    email?: string;
    phone?: string;
    company?: string;
    status?: string;
  };
}

export interface GetCustomersResponse extends PaginatedResponse {
  data?: {
    items: Array<{
      id: ID;
      name: string;
      email: string;
      phone: string;
      company: string;
      status: string;
      createdAt: DateTime;
      updatedAt: DateTime;
    }>;
    pagination: Pagination;
  };
}

export interface CreateCustomerRequest {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  status?: string;
}

export interface CreateCustomerResponse {
  id: ID;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: string;
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface UpdateCustomerRequest extends IdRequest {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  status?: string;
}

export interface UpdateCustomerResponse {
  id: ID;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: string;
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface DeleteCustomerRequest extends IdRequest {
}

export interface DeleteCustomerResponse {
  success: boolean;
}

// 通知相关类型
export interface GetNotificationRequest extends IdRequest {
}

export interface GetNotificationResponse {
  id: ID;
  title: string;
  message: string;
  type: string;
  read: boolean;
  userId: ID;
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface GetNotificationsRequest extends PaginatedRequest {
  filter?: {
    type?: string;
    read?: boolean;
    userId?: ID;
  };
}

export interface GetNotificationsResponse extends PaginatedResponse {
  data?: {
    items: Array<{
      id: ID;
      title: string;
      message: string;
      type: string;
      read: boolean;
      userId: ID;
      createdAt: DateTime;
      updatedAt: DateTime;
    }>;
    pagination: Pagination;
  };
}

export interface CreateNotificationRequest {
  title: string;
  message: string;
  type: string;
  read?: boolean;
  userId: ID;
}

export interface CreateNotificationResponse {
  id: ID;
  title: string;
  message: string;
  type: string;
  read: boolean;
  userId: ID;
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface UpdateNotificationRequest extends IdRequest {
  read?: boolean;
}

export interface UpdateNotificationResponse {
  id: ID;
  title: string;
  message: string;
  type: string;
  read: boolean;
  userId: ID;
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface DeleteNotificationRequest extends IdRequest {
}

export interface DeleteNotificationResponse {
  success: boolean;
}

export interface MarkAllNotificationsAsReadRequest {
  userId: ID;
}

export interface MarkAllNotificationsAsReadResponse {
  success: boolean;
  count: number;
}

export interface DeleteAllNotificationsRequest {
  userId: ID;
}

export interface DeleteAllNotificationsResponse {
  success: boolean;
  count: number;
}

// 统计相关类型
export interface GetStatisticsRequest {
  startDate?: DateTime;
  endDate?: DateTime;
  type?: string;
  filter?: Filter;
}

export interface GetStatisticsResponse extends ApiResponse {
  data?: {
    totalUsers: number;
    activeUsers: number;
    totalServices: number;
    activeServices: number;
    totalTasks: number;
    completedTasks: number;
    totalCustomers: number;
    activeCustomers: number;
    totalRevenue: number;
    monthlyRevenue: number;
    dailyRevenue: number;
    [key: string]: any;
  };
}

// 健康检查相关类型
export interface HealthCheckRequest {
}

export interface HealthCheckResponse extends ApiResponse {
  data?: {
    status: string;
    timestamp: DateTime;
    services: {
      api: string;
      database: string;
      cache: string;
      queue: string;
      [key: string]: string;
    };
    version: string;
  };
}

// 配置相关类型
export interface GetConfigRequest {
  key?: string;
}

export interface GetConfigResponse extends ApiResponse {
  data?: {
    [key: string]: any;
  };
}

export interface UpdateConfigRequest {
  key: string;
  value: any;
}

export interface UpdateConfigResponse extends ApiResponse {
  data?: {
    key: string;
    value: any;
    updatedAt: DateTime;
  };
}

// 上传相关类型
export interface UploadFileRequest {
  file: File;
  type?: string;
  folder?: string;
}

export interface UploadFileResponse extends ApiResponse {
  data?: {
    id: ID;
    name: string;
    type: string;
    size: number;
    url: string;
    thumbnailUrl?: string;
    folder: string;
    createdAt: DateTime;
  };
}

export interface GetFileRequest extends IdRequest {
}

export interface GetFileResponse extends ApiResponse {
  data?: {
    id: ID;
    name: string;
    type: string;
    size: number;
    url: string;
    thumbnailUrl?: string;
    folder: string;
    createdAt: DateTime;
  };
}

export interface DeleteFileRequest extends IdRequest {
}

export interface DeleteFileResponse extends ApiResponse {
  data?: {
    success: boolean;
  };
}

// AI相关类型
export interface AiChatRequest {
  message: string;
  model?: string;
  context?: any;
  userId?: ID;
}

export interface AiChatResponse extends ApiResponse {
  data?: {
    id: ID;
    message: string;
    response: string;
    model: string;
    context?: any;
    userId?: ID;
    createdAt: DateTime;
  };
}

export interface AiAnalysisRequest {
  data: any;
  type?: string;
  model?: string;
  userId?: ID;
}

export interface AiAnalysisResponse extends ApiResponse {
  data?: {
    id: ID;
    type: string;
    result: any;
    model: string;
    userId?: ID;
    createdAt: DateTime;
  };
}

export interface AiPredictionRequest {
  data: any;
  type?: string;
  model?: string;
  userId?: ID;
}

export interface AiPredictionResponse extends ApiResponse {
  data?: {
    id: ID;
    type: string;
    prediction: any;
    confidence: number;
    model: string;
    userId?: ID;
    createdAt: DateTime;
  };
}

// 国际化相关类型
export interface GetTranslationRequest {
  locale: string;
  namespace?: string;
}

export interface GetTranslationResponse extends ApiResponse {
  data?: {
    locale: string;
    namespace?: string;
    translations: Record<string, string>;
  };
}

export interface UpdateTranslationRequest {
  locale: string;
  namespace?: string;
  translations: Record<string, string>;
}

export interface UpdateTranslationResponse extends ApiResponse {
  data?: {
    locale: string;
    namespace?: string;
    updated: boolean;
    updatedAt: DateTime;
  };
}

// 主题相关类型
export interface GetThemeRequest {
  userId?: ID;
}

export interface GetThemeResponse extends ApiResponse {
  data?: {
    theme: string;
    userId?: ID;
  };
}

export interface UpdateThemeRequest {
  theme: string;
  userId?: ID;
}

export interface UpdateThemeResponse extends ApiResponse {
  data?: {
    theme: string;
    userId?: ID;
    updatedAt: DateTime;
  };
}

// 搜索相关类型
export interface SearchRequest {
  query: string;
  type?: string;
  limit?: number;
  offset?: number;
}

export interface SearchResponse extends ApiResponse {
  data?: {
    query: string;
    type?: string;
    results: Array<{
      id: ID;
      type: string;
      title: string;
      description?: string;
      url?: string;
      score: number;
    }>;
    total: number;
  };
}

// 导出相关类型
export interface ExportRequest {
  type: string;
  format: string;
  filter?: Filter;
  fields?: string[];
}

export interface ExportResponse extends ApiResponse {
  data?: {
    id: ID;
    type: string;
    format: string;
    url: string;
    size: number;
    createdAt: DateTime;
  };
}

// 导入相关类型
export interface ImportRequest {
  type: string;
  file: File;
  format: string;
  options?: any;
}

export interface ImportResponse extends ApiResponse {
  data?: {
    id: ID;
    type: string;
    format: string;
    total: number;
    success: number;
    failed: number;
    errors?: Array<{
      line: number;
      message: string;
    }>;
    createdAt: DateTime;
  };
}

// 备份相关类型
export interface CreateBackupRequest {
  type: string;
  name?: string;
  description?: string;
  exclude?: string[];
}

export interface CreateBackupResponse extends ApiResponse {
  data?: {
    id: ID;
    type: string;
    name: string;
    description: string;
    size: number;
    status: string;
    createdAt: DateTime;
  };
}

export interface GetBackupRequest extends IdRequest {
}

export interface GetBackupResponse extends ApiResponse {
  data?: {
    id: ID;
    type: string;
    name: string;
    description: string;
    size: number;
    status: string;
    url: string;
    createdAt: DateTime;
  };
}

export interface GetBackupsRequest extends PaginatedRequest {
  filter?: {
    type?: string;
    status?: string;
  };
}

export interface GetBackupsResponse extends PaginatedResponse {
  data?: {
    items: Array<{
      id: ID;
      type: string;
      name: string;
      description: string;
      size: number;
      status: string;
      createdAt: DateTime;
    }>;
    pagination: Pagination;
  };
}

export interface DeleteBackupRequest extends IdRequest {
}

export interface DeleteBackupResponse extends ApiResponse {
  data?: {
    success: boolean;
  };
}

export interface RestoreBackupRequest extends IdRequest {
}

export interface RestoreBackupResponse extends ApiResponse {
  data?: {
    id: ID;
    status: string;
    startedAt: DateTime;
    completedAt?: DateTime;
  };
}

// 日志相关类型
export interface GetLogsRequest extends PaginatedRequest {
  filter?: {
    level?: string;
    message?: string;
    service?: string;
    timestampFrom?: DateTime;
    timestampTo?: DateTime;
  };
}

export interface GetLogsResponse extends PaginatedResponse {
  data?: {
    items: Array<{
      id: ID;
      level: string;
      message: string;
      service: string;
      metadata: any;
      timestamp: DateTime;
    }>;
    pagination: Pagination;
  };
}

// 监控相关类型
export interface GetMetricsRequest {
  type: string;
  startDate?: DateTime;
  endDate?: DateTime;
  interval?: string;
  filter?: Filter;
}

export interface GetMetricsResponse extends ApiResponse {
  data?: {
    type: string;
    startDate: DateTime;
    endDate: DateTime;
    interval: string;
    metrics: Array<{
      timestamp: DateTime;
      value: number;
      [key: string]: any;
    }>;
  };
}

// 告警相关类型
export interface GetAlertRequest extends IdRequest {
}

export interface GetAlertResponse extends ApiResponse {
  data?: {
    id: ID;
    type: string;
    level: string;
    message: string;
    status: string;
    service: string;
    metadata: any;
    createdAt: DateTime;
    updatedAt: DateTime;
  };
}

export interface GetAlertsRequest extends PaginatedRequest {
  filter?: {
    type?: string;
    level?: string;
    status?: string;
    service?: string;
  };
}

export interface GetAlertsResponse extends PaginatedResponse {
  data?: {
    items: Array<{
      id: ID;
      type: string;
      level: string;
      message: string;
      status: string;
      service: string;
      metadata: any;
      createdAt: DateTime;
      updatedAt: DateTime;
    }>;
    pagination: Pagination;
  };
}

export interface UpdateAlertRequest extends IdRequest {
  status?: string;
  metadata?: any;
}

export interface UpdateAlertResponse extends ApiResponse {
  data?: {
    id: ID;
    status: string;
    updatedAt: DateTime;
  };
}

export interface DeleteAlertRequest extends IdRequest {
}

export interface DeleteAlertResponse extends ApiResponse {
  data?: {
    success: boolean;
  };
}

// 审计相关类型
export interface GetAuditLogRequest extends IdRequest {
}

export interface GetAuditLogResponse extends ApiResponse {
  data?: {
    id: ID;
    action: string;
    user: {
      id: ID;
      email: string;
      name: string;
    };
    resource: {
      type: string;
      id: ID;
      name?: string;
    };
    details: any;
    ip: string;
    userAgent: string;
    createdAt: DateTime;
  };
}

export interface GetAuditLogsRequest extends PaginatedRequest {
  filter?: {
    action?: string;
    userId?: ID;
    resourceType?: string;
    resourceId?: ID;
    createdAtFrom?: DateTime;
    createdAtTo?: DateTime;
  };
}

export interface GetAuditLogsResponse extends PaginatedResponse {
  data?: {
    items: Array<{
      id: ID;
      action: string;
      user: {
        id: ID;
        email: string;
        name: string;
      };
      resource: {
        type: string;
        id: ID;
        name?: string;
      };
      details: any;
      ip: string;
      userAgent: string;
      createdAt: DateTime;
    }>;
    pagination: Pagination;
  };
}

// 权限相关类型
export interface GetPermissionRequest extends IdRequest {
}

export interface GetPermissionResponse extends ApiResponse {
  data?: {
    id: ID;
    name: string;
    description: string;
    resource: string;
    action: string;
    createdAt: DateTime;
    updatedAt: DateTime;
  };
}

export interface GetPermissionsRequest extends PaginatedRequest {
  filter?: {
    name?: string;
    resource?: string;
    action?: string;
  };
}

export interface GetPermissionsResponse extends PaginatedResponse {
  data?: {
    items: Array<{
      id: ID;
      name: string;
      description: string;
      resource: string;
      action: string;
      createdAt: DateTime;
      updatedAt: DateTime;
    }>;
    pagination: Pagination;
  };
}

export interface CreatePermissionRequest {
  name: string;
  description: string;
  resource: string;
  action: string;
}

export interface CreatePermissionResponse extends ApiResponse {
  data?: {
    id: ID;
    name: string;
    description: string;
    resource: string;
    action: string;
    createdAt: DateTime;
    updatedAt: DateTime;
  };
}

export interface UpdatePermissionRequest extends IdRequest {
  name?: string;
  description?: string;
  resource?: string;
  action?: string;
}

export interface UpdatePermissionResponse extends ApiResponse {
  data?: {
    id: ID;
    name: string;
    description: string;
    resource: string;
    action: string;
    createdAt: DateTime;
    updatedAt: DateTime;
  };
}

export interface DeletePermissionRequest extends IdRequest {
}

export interface DeletePermissionResponse extends ApiResponse {
  data?: {
    success: boolean;
  };
}

// 角色相关类型
export interface GetRoleRequest extends IdRequest {
}

export interface GetRoleResponse extends ApiResponse {
  data?: {
    id: ID;
    name: string;
    description: string;
    permissions: Array<{
      id: ID;
      name: string;
    }>;
    createdAt: DateTime;
    updatedAt: DateTime;
  };
}

export interface GetRolesRequest extends PaginatedRequest {
  filter?: {
    name?: string;
  };
}

export interface GetRolesResponse extends PaginatedResponse {
  data?: {
    items: Array<{
      id: ID;
      name: string;
      description: string;
      permissions: Array<{
        id: ID;
        name: string;
      }>;
      createdAt: DateTime;
      updatedAt: DateTime;
    }>;
    pagination: Pagination;
  };
}

export interface CreateRoleRequest {
  name: string;
  description: string;
  permissionIds?: ID[];
}

export interface CreateRoleResponse extends ApiResponse {
  data?: {
    id: ID;
    name: string;
    description: string;
    permissions: Array<{
      id: ID;
      name: string;
    }>;
    createdAt: DateTime;
    updatedAt: DateTime;
  };
}

export interface UpdateRoleRequest extends IdRequest {
  name?: string;
  description?: string;
  permissionIds?: ID[];
}

export interface UpdateRoleResponse extends ApiResponse {
  data?: {
    id: ID;
    name: string;
    description: string;
    permissions: Array<{
      id: ID;
      name: string;
    }>;
    createdAt: DateTime;
    updatedAt: DateTime;
  };
}

export interface DeleteRoleRequest extends IdRequest {
}

export interface DeleteRoleResponse extends ApiResponse {
  data?: {
    success: boolean;
  };
}

// 用户角色相关类型
export interface AssignRoleRequest {
  userId: ID;
  roleId: ID;
}

export interface AssignRoleResponse extends ApiResponse {
  data?: {
    userId: ID;
    roleId: ID;
    assigned: boolean;
    assignedAt: DateTime;
  };
}

export interface RemoveRoleRequest {
  userId: ID;
  roleId: ID;
}

export interface RemoveRoleResponse extends ApiResponse {
  data?: {
    userId: ID;
    roleId: ID;
    removed: boolean;
    removedAt: DateTime;
  };
}

export interface GetUserRolesRequest {
  userId: ID;
}

export interface GetUserRolesResponse extends ApiResponse {
  data?: {
    userId: ID;
    roles: Array<{
      id: ID;
      name: string;
      description: string;
    }>;
  };
}

// 用户权限相关类型
export interface GetUserPermissionsRequest {
  userId: ID;
}

export interface GetUserPermissionsResponse extends ApiResponse {
  data?: {
    userId: ID;
    permissions: Array<{
      id: ID;
      name: string;
      description: string;
      resource: string;
      action: string;
    }>;
  };
}

// 验证相关类型
export interface ValidateTokenRequest {
  token: string;
}

export interface ValidateTokenResponse extends ApiResponse {
  data?: {
    valid: boolean;
    userId: ID;
    expiresAt: DateTime;
  };
}

export interface ValidateEmailRequest {
  email: string;
}

export interface ValidateEmailResponse extends ApiResponse {
  data?: {
    valid: boolean;
    exists: boolean;
  };
}

export interface ValidatePasswordRequest {
  password: string;
  userId?: ID;
}

export interface ValidatePasswordResponse extends ApiResponse {
  data?: {
    valid: boolean;
    strength: number;
    feedback: {
      lowerCase: boolean;
      upperCase: boolean;
      numbers: boolean;
      symbols: boolean;
      length: boolean;
    };
  };
}

// 重置密码相关类型
export interface ResetPasswordRequest {
  email: string;
}

export interface ResetPasswordResponse extends ApiResponse {
  data?: {
    success: boolean;
    message: string;
  };
}

export interface SetPasswordRequest {
  token: string;
  password: string;
}

export interface SetPasswordResponse extends ApiResponse {
  data?: {
    success: boolean;
    message: string;
  };
}

// 激活账户相关类型
export interface ActivateAccountRequest {
  token: string;
}

export interface ActivateAccountResponse extends ApiResponse {
  data?: {
    success: boolean;
    message: string;
  };
}

// 邀请用户相关类型
export interface InviteUserRequest {
  email: string;
  name: string;
  role: string;
  message?: string;
}

export interface InviteUserResponse extends ApiResponse {
  data?: {
    success: boolean;
    email: string;
    token: string;
    expiresAt: DateTime;
  };
}

// 接受邀请相关类型
export interface AcceptInviteRequest {
  token: string;
  password: string;
}

export interface AcceptInviteResponse extends ApiResponse {
  data?: {
    success: boolean;
    user: {
      id: ID;
      email: string;
      name: string;
      role: string;
    };
    token: string;
    refreshToken: string;
  };
}
