/**
 * @file 用户类型定义
 * @description YYC³ Customer Care Center 项目的用户类型定义
 * @author YYC³
 * @version 1.0.0
 */

import type { ID, DateTime, Status, Priority, Visibility, Metadata } from './global';

// 用户基础类型
export interface User {
  id: ID;
  email: string;
  name: string;
  avatar?: string;
  role: Role;
  status: UserStatus;
  metadata: UserMetadata;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户元数据类型
export interface UserMetadata {
  lastLogin?: DateTime;
  loginCount?: number;
  lastActivity?: DateTime;
  preferences?: UserPreferences;
  settings?: UserSettings;
  [key: string]: any;
}

// 用户偏好设置类型
export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  locale: string;
  timezone: string;
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
  dashboard: {
    layout: string;
    widgets: string[];
  };
  [key: string]: any;
}

// 用户设置类型
export interface UserSettings {
  twoFactorAuth: boolean;
  passwordExpiry: boolean;
  sessionTimeout: number;
  language: string;
  dateFormat: string;
  timeFormat: string;
  currency: string;
  [key: string]: any;
}

// 用户状态类型
export type UserStatus = 'active' | 'inactive' | 'suspended' | 'deleted' | 'pending';

// 用户角色类型
export type Role = 'admin' | 'user' | 'guest' | 'manager' | 'support' | 'developer';

// 用户权限类型
export interface Permission {
  id: ID;
  name: string;
  description: string;
  resource: string;
  action: string;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户权限组类型
export interface PermissionGroup {
  id: ID;
  name: string;
  description: string;
  permissions: Permission[];
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 角色权限类型
export interface RolePermission {
  roleId: ID;
  permissionId: ID;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户角色类型
export interface UserRole {
  userId: ID;
  roleId: ID;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户登录历史类型
export interface LoginHistory {
  id: ID;
  userId: ID;
  ip: string;
  userAgent: string;
  success: boolean;
  error?: string;
  timestamp: DateTime;
}

// 用户活动类型
export interface UserActivity {
  id: ID;
  userId: ID;
  type: string;
  action: string;
  resource: string;
  resourceId?: ID;
  ip: string;
  userAgent: string;
  timestamp: DateTime;
}

// 用户通知类型
export interface UserNotification {
  id: ID;
  userId: ID;
  type: string;
  title: string;
  message: string;
  read: boolean;
  url?: string;
  metadata?: any;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户设备类型
export interface UserDevice {
  id: ID;
  userId: ID;
  deviceId: string;
  deviceType: string;
  deviceName: string;
  lastLogin: DateTime;
  ip: string;
  userAgent: string;
  active: boolean;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户会话类型
export interface UserSession {
  id: ID;
  userId: ID;
  token: string;
  refreshToken: string;
  deviceId: string;
  ip: string;
  userAgent: string;
  expiresAt: DateTime;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户密码历史类型
export interface PasswordHistory {
  id: ID;
  userId: ID;
  passwordHash: string;
  createdAt: DateTime;
}

// 用户邮箱验证类型
export interface EmailVerification {
  id: ID;
  userId: ID;
  email: string;
  token: string;
  verified: boolean;
  expiresAt: DateTime;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户电话验证类型
export interface PhoneVerification {
  id: ID;
  userId: ID;
  phone: string;
  token: string;
  verified: boolean;
  expiresAt: DateTime;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户地址类型
export interface UserAddress {
  id: ID;
  userId: ID;
  type: 'billing' | 'shipping' | 'home' | 'work';
  street: string;
  city: string;
  region: string;
  country: string;
  zipCode: string;
  phone?: string;
  default: boolean;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户支付方式类型
export interface UserPaymentMethod {
  id: ID;
  userId: ID;
  type: 'credit_card' | 'debit_card' | 'paypal' | 'bank_transfer';
  last4?: string;
  expiryMonth?: number;
  expiryYear?: number;
  brand?: string;
  default: boolean;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户订阅类型
export interface UserSubscription {
  id: ID;
  userId: ID;
  planId: ID;
  status: 'active' | 'cancelled' | 'expired' | 'pending';
  startDate: DateTime;
  endDate: DateTime;
  autoRenew: boolean;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户计划类型
export interface UserPlan {
  id: ID;
  name: string;
  description: string;
  price: number;
  currency: string;
  duration: number;
  durationUnit: 'day' | 'week' | 'month' | 'year';
  features: string[];
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户账单类型
export interface UserInvoice {
  id: ID;
  userId: ID;
  subscriptionId: ID;
  amount: number;
  currency: string;
  status: 'pending' | 'paid' | 'failed' | 'refunded';
  invoiceDate: DateTime;
  dueDate: DateTime;
  paymentDate?: DateTime;
  paymentMethod?: string;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户退款类型
export interface UserRefund {
  id: ID;
  userId: ID;
  invoiceId: ID;
  amount: number;
  currency: string;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
  requestedAt: DateTime;
  processedAt?: DateTime;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户支持票类型
export interface UserSupportTicket {
  id: ID;
  userId: ID;
  subject: string;
  message: string;
  status: 'open' | 'in-progress' | 'closed' | 'resolved';
  priority: Priority;
  category: string;
  assignedTo?: ID;
  messages: SupportMessage[];
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 支持消息类型
export interface SupportMessage {
  id: ID;
  ticketId: ID;
  userId: ID;
  message: string;
  type: 'user' | 'support';
  attachments?: string[];
  createdAt: DateTime;
}

// 用户反馈类型
export interface UserFeedback {
  id: ID;
  userId: ID;
  type: 'bug' | 'feature' | 'suggestion' | 'question';
  subject: string;
  message: string;
  rating?: number;
  status: 'pending' | 'in-progress' | 'resolved' | 'closed';
  attachments?: string[];
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户评论类型
export interface UserReview {
  id: ID;
  userId: ID;
  resourceId: ID;
  resourceType: string;
  rating: number;
  comment: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户标签类型
export interface UserTag {
  id: ID;
  name: string;
  color: string;
  description: string;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户标签关联类型
export interface UserTagAssociation {
  userId: ID;
  tagId: ID;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户群组类型
export interface UserGroup {
  id: ID;
  name: string;
  description: string;
  members: User[];
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户群组关联类型
export interface UserGroupAssociation {
  userId: ID;
  groupId: ID;
  role: string;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户邀请类型
export interface UserInvitation {
  id: ID;
  email: string;
  name: string;
  role: Role;
  token: string;
  inviterId: ID;
  status: 'pending' | 'accepted' | 'expired' | 'cancelled';
  expiresAt: DateTime;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户重置密码类型
export interface UserPasswordReset {
  id: ID;
  userId: ID;
  token: string;
  status: 'pending' | 'completed' | 'expired' | 'cancelled';
  expiresAt: DateTime;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户API密钥类型
export interface UserApiKey {
  id: ID;
  userId: ID;
  name: string;
  key: string;
  secret?: string;
  permissions: string[];
  expiresAt?: DateTime;
  lastUsed?: DateTime;
  status: 'active' | 'inactive' | 'revoked';
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户集成类型
export interface UserIntegration {
  id: ID;
  userId: ID;
  type: string;
  name: string;
  status: 'connected' | 'disconnected' | 'error';
  config: any;
  lastSync?: DateTime;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户webhook类型
export interface UserWebhook {
  id: ID;
  userId: ID;
  name: string;
  url: string;
  events: string[];
  secret: string;
  status: 'active' | 'inactive' | 'error';
  lastDelivery?: DateTime;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户webhook交付类型
export interface WebhookDelivery {
  id: ID;
  webhookId: ID;
  event: string;
  payload: any;
  status: 'pending' | 'success' | 'failed';
  response?: any;
  error?: string;
  deliveredAt?: DateTime;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户审计日志类型
export interface UserAuditLog {
  id: ID;
  userId: ID;
  action: string;
  resource: string;
  resourceId?: ID;
  details: any;
  ip: string;
  userAgent: string;
  timestamp: DateTime;
}

// 用户统计类型
export interface UserStats {
  totalUsers: number;
  activeUsers: number;
  inactiveUsers: number;
  suspendedUsers: number;
  deletedUsers: number;
  pendingUsers: number;
  userGrowth: number;
  userRetention: number;
  averageSessionDuration: number;
  averageLoginFrequency: number;
  [key: string]: number;
}

// 用户趋势类型
export interface UserTrend {
  date: DateTime;
  newUsers: number;
  activeUsers: number;
  churnedUsers: number;
  retentionRate: number;
  [key: string]: any;
}

// 用户分析类型
export interface UserAnalysis {
  demographics: {
    age: number[];
    gender: Record<string, number>;
    location: Record<string, number>;
  };
  behavior: {
    loginFrequency: number;
    averageSessionDuration: number;
    featureUsage: Record<string, number>;
    conversionRate: number;
  };
  engagement: {
    activeDays: number;
    averageMessages: number;
    averageTasks: number;
    averageSupportTickets: number;
  };
  satisfaction: {
    nps: number;
    csat: number;
    ces: number;
    averageRating: number;
  };
}

// 用户预测类型
export interface UserPrediction {
  userId: ID;
  churnRisk: number;
  engagementScore: number;
  lifetimeValue: number;
  nextPurchaseProbability: number;
  recommendedProducts: string[];
  recommendedContent: string[];
  [key: string]: any;
}

// 用户分段类型
export interface UserSegment {
  id: ID;
  name: string;
  description: string;
  conditions: any;
  count: number;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户分段关联类型
export interface UserSegmentAssociation {
  userId: ID;
  segmentId: ID;
  score: number;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户自动化类型
export interface UserAutomation {
  id: ID;
  name: string;
  description: string;
  trigger: any;
  actions: any[];
  status: 'active' | 'inactive';
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户自动化运行类型
export interface UserAutomationRun {
  id: ID;
  automationId: ID;
  userId: ID;
  status: 'pending' | 'success' | 'failed';
  error?: string;
  startedAt: DateTime;
  completedAt?: DateTime;
}

// 用户工作流类型
export interface UserWorkflow {
  id: ID;
  name: string;
  description: string;
  steps: WorkflowStep[];
  status: 'active' | 'inactive';
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 工作流步骤类型
export interface WorkflowStep {
  id: ID;
  workflowId: ID;
  name: string;
  type: string;
  configuration: any;
  order: number;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户工作流实例类型
export interface UserWorkflowInstance {
  id: ID;
  workflowId: ID;
  userId: ID;
  status: 'pending' | 'in-progress' | 'completed' | 'failed';
  currentStep: number;
  steps: WorkflowStepInstance[];
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 工作流步骤实例类型
export interface WorkflowStepInstance {
  id: ID;
  instanceId: ID;
  stepId: ID;
  status: 'pending' | 'in-progress' | 'completed' | 'failed';
  result: any;
  error?: string;
  startedAt: DateTime;
  completedAt?: DateTime;
}

// 用户导入类型
export interface UserImport {
  id: ID;
  name: string;
  file: string;
  status: 'pending' | 'in-progress' | 'completed' | 'failed';
  total: number;
  success: number;
  failed: number;
  errors: string[];
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户导出类型
export interface UserExport {
  id: ID;
  name: string;
  format: string;
  status: 'pending' | 'in-progress' | 'completed' | 'failed';
  file?: string;
  total: number;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户备份类型
export interface UserBackup {
  id: ID;
  name: string;
  type: string;
  file: string;
  size: number;
  status: 'pending' | 'completed' | 'failed';
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户恢复类型
export interface UserRestore {
  id: ID;
  backupId: ID;
  status: 'pending' | 'in-progress' | 'completed' | 'failed';
  error?: string;
  startedAt: DateTime;
  completedAt?: DateTime;
}

// 用户数据类型
export interface UserData {
  id: ID;
  userId: ID;
  type: string;
  key: string;
  value: any;
  visibility: Visibility;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户元数据类型
export interface UserMetadataType {
  id: ID;
  name: string;
  description: string;
  type: 'string' | 'number' | 'boolean' | 'object' | 'array';
  required: boolean;
  defaultValue: any;
  validation: any;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户自定义字段类型
export interface UserCustomField {
  id: ID;
  name: string;
  label: string;
  type: 'text' | 'number' | 'boolean' | 'date' | 'select' | 'multiselect';
  required: boolean;
  defaultValue: any;
  options?: string[];
  validation: any;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户自定义字段值类型
export interface UserCustomFieldValue {
  userId: ID;
  fieldId: ID;
  value: any;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户API请求类型
export interface UserApiRequest {
  id: ID;
  userId: ID;
  method: string;
  url: string;
  status: number;
  responseTime: number;
  ip: string;
  userAgent: string;
  timestamp: DateTime;
}

// 用户API响应类型
export interface UserApiResponse {
  id: ID;
  requestId: ID;
  status: number;
  body: any;
  headers: any;
  timestamp: DateTime;
}

// 用户安全事件类型
export interface UserSecurityEvent {
  id: ID;
  userId: ID;
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  details: any;
  ip: string;
  userAgent: string;
  status: 'pending' | 'investigating' | 'resolved' | 'dismissed';
  timestamp: DateTime;
  updatedAt: DateTime;
}

// 用户安全评分类型
export interface UserSecurityScore {
  userId: ID;
  score: number;
  factors: {
    passwordStrength: number;
    twoFactorAuth: number;
    recentActivity: number;
    suspiciousLogins: number;
    [key: string]: number;
  };
  updatedAt: DateTime;
}

// 用户隐私设置类型
export interface UserPrivacySettings {
  userId: ID;
  dataSharing: boolean;
  marketingEmails: boolean;
  thirdPartyCookies: boolean;
  analytics: boolean;
  tracking: boolean;
  updatedAt: DateTime;
}

// 用户数据导出类型
export interface UserDataExport {
  id: ID;
  userId: ID;
  status: 'pending' | 'in-progress' | 'completed' | 'failed';
  file?: string;
  requestedAt: DateTime;
  completedAt?: DateTime;
}

// 用户数据删除类型
export interface UserDataDeletion {
  id: ID;
  userId: ID;
  status: 'pending' | 'in-progress' | 'completed' | 'failed';
  requestedAt: DateTime;
  completedAt?: DateTime;
  retentionPeriod: number;
}

// 用户同意类型
export interface UserConsent {
  id: ID;
  userId: ID;
  type: string;
  version: string;
  consented: boolean;
  timestamp: DateTime;
  ip: string;
  userAgent: string;
}

// 用户条款类型
export interface UserTerms {
  id: ID;
  type: string;
  version: string;
  title: string;
  content: string;
  active: boolean;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户培训类型
export interface UserTraining {
  id: ID;
  name: string;
  description: string;
  type: string;
  duration: number;
  modules: TrainingModule[];
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 培训模块类型
export interface TrainingModule {
  id: ID;
  trainingId: ID;
  name: string;
  description: string;
  content: string;
  order: number;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户培训完成类型
export interface UserTrainingCompletion {
  userId: ID;
  trainingId: ID;
  status: 'in-progress' | 'completed' | 'failed';
  progress: number;
  completedAt?: DateTime;
  updatedAt: DateTime;
}

// 用户培训模块完成类型
export interface UserTrainingModuleCompletion {
  userId: ID;
  moduleId: ID;
  completed: boolean;
  score?: number;
  completedAt: DateTime;
}

// 用户认证类型
export interface UserAuthentication {
  id: ID;
  userId: ID;
  type: string;
  provider: string;
  providerId: string;
  token: string;
  refreshToken?: string;
  expiresAt?: DateTime;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户会话类型
export interface UserSessionData {
  id: ID;
  userId: ID;
  data: any;
  expiresAt: DateTime;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户缓存类型
export interface UserCache {
  id: ID;
  userId: ID;
  key: string;
  value: any;
  expiresAt: DateTime;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户队列类型
export interface UserQueue {
  id: ID;
  name: string;
  type: string;
  status: 'active' | 'inactive';
  priority: number;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户队列项类型
export interface UserQueueItem {
  id: ID;
  queueId: ID;
  userId: ID;
  data: any;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  priority: number;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户通知模板类型
export interface UserNotificationTemplate {
  id: ID;
  name: string;
  type: string;
  subject: string;
  body: string;
  variables: string[];
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户邮件模板类型
export interface UserEmailTemplate {
  id: ID;
  name: string;
  subject: string;
  body: string;
  variables: string[];
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户短信模板类型
export interface UserSmsTemplate {
  id: ID;
  name: string;
  content: string;
  variables: string[];
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户推送模板类型
export interface UserPushTemplate {
  id: ID;
  name: string;
  title: string;
  body: string;
  variables: string[];
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户消息模板类型
export interface UserMessageTemplate {
  id: ID;
  name: string;
  type: string;
  content: string;
  variables: string[];
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户模板类型
export interface UserTemplate {
  id: ID;
  name: string;
  type: string;
  content: any;
  variables: string[];
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户模板使用类型
export interface UserTemplateUsage {
  id: ID;
  templateId: ID;
  userId: ID;
  variables: any;
  result: any;
  createdAt: DateTime;
}

// 用户API密钥使用类型
export interface UserApiKeyUsage {
  id: ID;
  keyId: ID;
  userId: ID;
  method: string;
  url: string;
  status: number;
  responseTime: number;
  timestamp: DateTime;
}

// 用户API限制类型
export interface UserApiLimit {
  userId: ID;
  endpoint: string;
  method: string;
  limit: number;
  remaining: number;
  resetAt: DateTime;
  updatedAt: DateTime;
}

// 用户速率限制类型
export interface UserRateLimit {
  userId: ID;
  ip: string;
  endpoint: string;
  method: string;
  count: number;
  limit: number;
  resetAt: DateTime;
  updatedAt: DateTime;
}

// 用户封禁类型
export interface UserBan {
  id: ID;
  userId: ID;
  ip: string;
  reason: string;
  expiresAt: DateTime;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户警告类型
export interface UserWarning {
  id: ID;
  userId: ID;
  reason: string;
  severity: 'low' | 'medium' | 'high';
  status: 'active' | 'expired' | 'dismissed';
  expiresAt: DateTime;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户成就类型
export interface UserAchievement {
  id: ID;
  name: string;
  description: string;
  icon: string;
  points: number;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户成就获取类型
export interface UserAchievementUnlock {
  userId: ID;
  achievementId: ID;
  unlockedAt: DateTime;
}

// 用户积分类型
export interface UserPoints {
  userId: ID;
  points: number;
  lastUpdated: DateTime;
}

// 用户积分交易类型
export interface UserPointsTransaction {
  id: ID;
  userId: ID;
  amount: number;
  type: 'earn' | 'spend';
  reason: string;
  balance: number;
  createdAt: DateTime;
}

// 用户等级类型
export interface UserLevel {
  id: ID;
  name: string;
  minPoints: number;
  maxPoints: number;
  benefits: string[];
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户等级历史类型
export interface UserLevelHistory {
  userId: ID;
  levelId: ID;
  achievedAt: DateTime;
}

// 用户徽章类型
export interface UserBadge {
  id: ID;
  name: string;
  description: string;
  icon: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户徽章获取类型
export interface UserBadgeUnlock {
  userId: ID;
  badgeId: ID;
  unlockedAt: DateTime;
  reason: string;
}

// 用户排行榜类型
export interface UserLeaderboard {
  id: ID;
  name: string;
  type: string;
  period: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'all-time';
  criteria: string;
  limit: number;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户排行榜条目类型
export interface UserLeaderboardEntry {
  id: ID;
  leaderboardId: ID;
  userId: ID;
  score: number;
  rank: number;
  period: string;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户活动统计类型
export interface UserActivityStats {
  userId: ID;
  loginCount: number;
  messageCount: number;
  taskCount: number;
  ticketCount: number;
  reviewCount: number;
  feedbackCount: number;
  lastLogin: DateTime;
  lastActivity: DateTime;
  averageSessionDuration: number;
}

// 用户参与度类型
export interface UserEngagement {
  userId: ID;
  score: number;
  loginFrequency: number;
  sessionDuration: number;
  featureUsage: Record<string, number>;
  contentConsumption: number;
  socialInteraction: number;
  updatedAt: DateTime;
}

// 用户流失风险类型
export interface UserChurnRisk {
  userId: ID;
  riskScore: number;
  factors: {
    loginFrequency: number;
    sessionDuration: number;
    featureUsage: number;
    supportTickets: number;
    [key: string]: number;
  };
  recommendations: string[];
  updatedAt: DateTime;
}

// 用户生命周期类型
export interface UserLifecycle {
  userId: ID;
  stage: 'acquisition' | 'activation' | 'retention' | 'revenue' | 'referral';
  milestones: {
    signup: DateTime;
    firstLogin: DateTime;
    firstPurchase?: DateTime;
    firstReferral?: DateTime;
    [key: string]: DateTime | undefined;
  };
  metrics: {
    lifetimeValue: number;
    purchaseCount: number;
    referralCount: number;
    [key: string]: number;
  };
  updatedAt: DateTime;
}

// 用户行为分析类型
export interface UserBehaviorAnalysis {
  userId: ID;
  segments: {
    demographic: string;
    behavioral: string;
    psychographic: string;
    [key: string]: string;
  };
  patterns: {
    login: {
      days: number[];
      times: number[];
    };
    purchase: {
      frequency: number;
      averageAmount: number;
    };
    [key: string]: any;
  };
  predictions: {
    nextPurchase?: DateTime;
    churnRisk: number;
    lifetimeValue: number;
    [key: string]: any;
  };
  recommendations: {
    products: string[];
    content: string[];
    actions: string[];
    [key: string]: string[];
  };
  updatedAt: DateTime;
}

// 用户个性化类型
export interface UserPersonalization {
  userId: ID;
  preferences: {
    products: string[];
    content: string[];
    features: string[];
    [key: string]: string[];
  };
  recommendations: {
    products: string[];
    content: string[];
    actions: string[];
    [key: string]: string[];
  };
  segments: string[];
  tags: string[];
  updatedAt: DateTime;
}

// 用户体验类型
export interface UserExperience {
  userId: ID;
  satisfaction: {
    overall: number;
    features: Record<string, number>;
    support: number;
    [key: string]: number | Record<string, number>;
  };
  usability: {
    easeOfUse: number;
    navigation: number;
    speed: number;
    [key: string]: number;
  };
  engagement: {
    frequency: number;
    duration: number;
    depth: number;
    [key: string]: number;
  };
  issues: {
    bugs: number;
    errors: number;
    crashes: number;
    [key: string]: number;
  };
  feedback: string[];
  suggestions: string[];
  updatedAt: DateTime;
}

// 用户反馈分析类型
export interface UserFeedbackAnalysis {
  id: ID;
  type: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  topics: string[];
  keywords: string[];
  summary: string;
  feedbackId: ID;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户情绪分析类型
export interface UserSentimentAnalysis {
  userId: ID;
  score: number;
  trend: number[];
  topics: {
    [key: string]: number;
  };
  updatedAt: DateTime;
}

// 用户语音分析类型
export interface UserVoiceAnalysis {
  id: ID;
  userId: ID;
  transcript: string;
  sentiment: number;
  emotions: {
    [key: string]: number;
  };
  topics: string[];
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户文本分析类型
export interface UserTextAnalysis {
  id: ID;
  userId: ID;
  text: string;
  sentiment: number;
  emotions: {
    [key: string]: number;
  };
  topics: string[];
  entities: {
    [key: string]: string[];
  };
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户图像分析类型
export interface UserImageAnalysis {
  id: ID;
  userId: ID;
  image: string;
  objects: string[];
  faces: number;
  emotions: {
    [key: string]: number;
  };
  tags: string[];
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户视频分析类型
export interface UserVideoAnalysis {
  id: ID;
  userId: ID;
  video: string;
  duration: number;
  objects: string[];
  faces: number;
  emotions: {
    [key: string]: number;
  };
  scenes: string[];
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户数据分析类型
export interface UserDataAnalysis {
  id: ID;
  userId: ID;
  type: string;
  data: any;
  analysis: any;
  insights: string[];
  recommendations: string[];
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI模型类型
export interface UserAiModel {
  id: ID;
  name: string;
  type: string;
  provider: string;
  model: string;
  configuration: any;
  status: 'active' | 'inactive';
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI模型使用类型
export interface UserAiModelUsage {
  id: ID;
  modelId: ID;
  userId: ID;
  input: any;
  output: any;
  tokens: number;
  cost: number;
  timestamp: DateTime;
}

// 用户AI模型反馈类型
export interface UserAiModelFeedback {
  id: ID;
  usageId: ID;
  userId: ID;
  rating: number;
  feedback: string;
  timestamp: DateTime;
}

// 用户AI助手类型
export interface UserAiAssistant {
  id: ID;
  name: string;
  description: string;
  model: string;
  instructions: string;
  tools: string[];
  files: string[];
  status: 'active' | 'inactive';
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI对话类型
export interface UserAiConversation {
  id: ID;
  assistantId: ID;
  userId: ID;
  messages: AiMessage[];
  status: 'active' | 'completed';
  createdAt: DateTime;
  updatedAt: DateTime;
}

// AI消息类型
export interface AiMessage {
  id: ID;
  conversationId: ID;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: DateTime;
}

// 用户AI工具类型
export interface UserAiTool {
  id: ID;
  name: string;
  description: string;
  function: string;
  parameters: any;
  status: 'active' | 'inactive';
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI工具使用类型
export interface UserAiToolUsage {
  id: ID;
  toolId: ID;
  conversationId: ID;
  input: any;
  output: any;
  timestamp: DateTime;
}

// 用户AI数据集类型
export interface UserAiDataset {
  id: ID;
  name: string;
  description: string;
  type: string;
  file: string;
  size: number;
  records: number;
  status: 'uploading' | 'processing' | 'ready' | 'error';
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI训练类型
export interface UserAiTraining {
  id: ID;
  name: string;
  datasetId: ID;
  model: string;
  parameters: any;
  status: 'pending' | 'training' | 'completed' | 'failed';
  metrics: any;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI部署类型
export interface UserAiDeployment {
  id: ID;
  name: string;
  trainingId: ID;
  model: string;
  endpoint: string;
  status: 'deploying' | 'deployed' | 'failed';
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI监控类型
export interface UserAiMonitoring {
  id: ID;
  deploymentId: ID;
  metrics: {
    requests: number;
    errors: number;
    latency: number;
    [key: string]: number;
  };
  logs: string[];
  alerts: string[];
  updatedAt: DateTime;
}

// 用户AI成本类型
export interface UserAiCost {
  userId: ID;
  period: string;
  total: number;
  breakdown: {
    models: Record<string, number>;
    tokens: Record<string, number>;
    storage: number;
    [key: string]: any;
  };
  updatedAt: DateTime;
}

// 用户AI安全类型
export interface UserAiSecurity {
  id: ID;
  userId: ID;
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  details: any;
  status: 'pending' | 'investigating' | 'resolved' | 'dismissed';
  timestamp: DateTime;
  updatedAt: DateTime;
}

// 用户AI伦理类型
export interface UserAiEthics {
  id: ID;
  userId: ID;
  type: string;
  scenario: string;
  response: string;
  evaluation: {
    fairness: number;
    transparency: number;
    accountability: number;
    privacy: number;
    [key: string]: number;
  };
  timestamp: DateTime;
  updatedAt: DateTime;
}

// 用户AI合规类型
export interface UserAiCompliance {
  id: ID;
  userId: ID;
  regulation: string;
  status: 'compliant' | 'non-compliant' | 'pending';
  issues: string[];
  recommendations: string[];
  updatedAt: DateTime;
}

// 用户AI性能类型
export interface UserAiPerformance {
  id: ID;
  deploymentId: ID;
  metrics: {
    accuracy: number;
    precision: number;
    recall: number;
    f1Score: number;
    [key: string]: number;
  };
  benchmarks: {
    latency: number;
    throughput: number;
    [key: string]: number;
  };
  updatedAt: DateTime;
}

// 用户AI可解释性类型
export interface UserAiExplainability {
  id: ID;
  userId: ID;
  predictionId: ID;
  model: string;
  input: any;
  output: any;
  explanation: {
    features: Record<string, number>;
    confidence: number;
    [key: string]: any;
  };
  timestamp: DateTime;
  updatedAt: DateTime;
}

// 用户AI隐私类型
export interface UserAiPrivacy {
  userId: ID;
  settings: {
    dataUsage: boolean;
    modelTraining: boolean;
    sharing: boolean;
    [key: string]: boolean;
  };
  dataDeletion: boolean;
  optOut: boolean;
  updatedAt: DateTime;
}

// 用户AI治理类型
export interface UserAiGovernance {
  id: ID;
  userId: ID;
  policy: string;
  guidelines: string[];
  controls: {
    access: boolean;
    monitoring: boolean;
    auditing: boolean;
    [key: string]: boolean;
  };
  updatedAt: DateTime;
}

// 用户AI战略类型
export interface UserAiStrategy {
  id: ID;
  userId: ID;
  goals: string[];
  useCases: string[];
  roadmap: any;
  metrics: {
    roi: number;
    adoption: number;
    impact: number;
    [key: string]: number;
  };
  updatedAt: DateTime;
}

// 用户AI文化类型
export interface UserAiCulture {
  userId: ID;
  readiness: number;
  awareness: number;
  skills: number;
  adoption: number;
  challenges: string[];
  opportunities: string[];
  updatedAt: DateTime;
}

// 用户AI生态系统类型
export interface UserAiEcosystem {
  userId: ID;
  providers: string[];
  tools: string[];
  integrations: string[];
  partnerships: string[];
  updatedAt: DateTime;
}

// 用户AI未来类型
export interface UserAiFuture {
  userId: ID;
  trends: string[];
  predictions: string[];
  opportunities: string[];
  threats: string[];
  updatedAt: DateTime;
}

// 用户AI转型类型
export interface UserAiTransformation {
  id: ID;
  userId: ID;
  stage: 'assessment' | 'planning' | 'implementation' | 'optimization' | 'scale';
  milestones: any;
  metrics: {
    progress: number;
    roi: number;
    impact: number;
    [key: string]: number;
  };
  updatedAt: DateTime;
}

// 用户AI创新类型
export interface UserAiInnovation {
  id: ID;
  userId: ID;
  idea: string;
  description: string;
  stage: 'ideation' | 'prototyping' | 'testing' | 'implementation' | 'scale';
  metrics: {
    potential: number;
    feasibility: number;
    impact: number;
    [key: string]: number;
  };
  updatedAt: DateTime;
}

// 用户AI领导力类型
export interface UserAiLeadership {
  userId: ID;
  vision: string;
  strategy: string;
  capabilities: {
    technical: number;
    business: number;
    ethical: number;
    [key: string]: number;
  };
  challenges: string[];
  opportunities: string[];
  updatedAt: DateTime;
}

// 用户AI人才类型
export interface UserAiTalent {
  userId: ID;
  skills: {
    technical: string[];
    business: string[];
    ethical: string[];
    [key: string]: string[];
  };
  training: string[];
  certifications: string[];
  gaps: string[];
  development: string[];
  updatedAt: DateTime;
}

// 用户AI投资类型
export interface UserAiInvestment {
  id: ID;
  userId: ID;
  type: string;
  amount: number;
  roi: number;
  metrics: {
    cost: number;
    benefit: number;
    paybackPeriod: number;
    [key: string]: number;
  };
  updatedAt: DateTime;
}

// 用户AI风险管理类型
export interface UserAiRiskManagement {
  id: ID;
  userId: ID;
  risks: {
    technical: string[];
    business: string[];
    ethical: string[];
    regulatory: string[];
    [key: string]: string[];
  };
  mitigation: {
    [key: string]: string[];
  };
  updatedAt: DateTime;
}

// 用户AI机会类型
export interface UserAiOpportunity {
  id: ID;
  userId: ID;
  type: string;
  description: string;
  value: number;
  feasibility: number;
  impact: number;
  status: 'identified' | 'evaluating' | 'pursuing' | 'implemented' | 'dismissed';
  updatedAt: DateTime;
}

// 用户AI威胁类型
export interface UserAiThreat {
  id: ID;
  userId: ID;
  type: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  likelihood: 'low' | 'medium' | 'high';
  impact: 'low' | 'medium' | 'high' | 'critical';
  status: 'identified' | 'assessing' | 'mitigating' | 'monitored' | 'dismissed';
  updatedAt: DateTime;
}

// 用户AI趋势类型
export interface UserAiTrend {
  id: ID;
  name: string;
  description: string;
  category: string;
  impact: 'low' | 'medium' | 'high';
  timing: 'short-term' | 'medium-term' | 'long-term';
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI预测类型
export interface UserAiPrediction {
  id: ID;
  userId: ID;
  type: string;
  input: any;
  output: any;
  confidence: number;
  timestamp: DateTime;
  updatedAt: DateTime;
}

// 用户AI洞察类型
export interface UserAiInsight {
  id: ID;
  userId: ID;
  type: string;
  description: string;
  source: string;
  confidence: number;
  impact: 'low' | 'medium' | 'high';
  action: string;
  status: 'new' | 'reviewed' | 'acted' | 'dismissed';
  timestamp: DateTime;
  updatedAt: DateTime;
}

// 用户AI建议类型
export interface UserAiRecommendation {
  id: ID;
  userId: ID;
  type: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  expectedImpact: number;
  effort: 'low' | 'medium' | 'high';
  status: 'new' | 'accepted' | 'rejected' | 'implemented';
  timestamp: DateTime;
  updatedAt: DateTime;
}

// 用户AI最佳实践类型
export interface UserAiBestPractice {
  id: ID;
  name: string;
  description: string;
  category: string;
  steps: string[];
  benefits: string[];
  challenges: string[];
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI案例研究类型
export interface UserAiCaseStudy {
  id: ID;
  name: string;
  industry: string;
  problem: string;
  solution: string;
  results: {
    [key: string]: number;
  };
  lessons: string[];
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI资源类型
export interface UserAiResource {
  id: ID;
  name: string;
  type: string;
  url: string;
  description: string;
  tags: string[];
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI学习类型
export interface UserAiLearning {
  id: ID;
  userId: ID;
  resourceId: ID;
  progress: number;
  completed: boolean;
  score?: number;
  feedback?: string;
  startedAt: DateTime;
  completedAt?: DateTime;
  updatedAt: DateTime;
}

// 用户AI社区类型
export interface UserAiCommunity {
  id: ID;
  name: string;
  description: string;
  members: number;
  topics: string[];
  resources: string[];
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI社区成员类型
export interface UserAiCommunityMember {
  userId: ID;
  communityId: ID;
  role: string;
  joinedAt: DateTime;
  lastActive: DateTime;
}

// 用户AI社区帖子类型
export interface UserAiCommunityPost {
  id: ID;
  communityId: ID;
  userId: ID;
  title: string;
  content: string;
  type: string;
  status: 'pending' | 'approved' | 'rejected';
  views: number;
  likes: number;
  comments: number;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI社区评论类型
export interface UserAiCommunityComment {
  id: ID;
  postId: ID;
  userId: ID;
  content: string;
  status: 'pending' | 'approved' | 'rejected';
  likes: number;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI社区活动类型
export interface UserAiCommunityEvent {
  id: ID;
  communityId: ID;
  name: string;
  description: string;
  type: string;
  date: DateTime;
  location: string;
  organizer: ID;
  attendees: number;
  status: 'upcoming' | 'ongoing' | 'past' | 'cancelled';
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI社区活动参与类型
export interface UserAiCommunityEventParticipation {
  userId: ID;
  eventId: ID;
  status: 'registered' | 'attended' | 'cancelled';
  feedback?: string;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI社区投票类型
export interface UserAiCommunityPoll {
  id: ID;
  communityId: ID;
  userId: ID;
  title: string;
  description: string;
  options: string[];
  multiple: boolean;
  expiry: DateTime;
  status: 'active' | 'closed' | 'archived';
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI社区投票参与类型
export interface UserAiCommunityPollVote {
  userId: ID;
  pollId: ID;
  option: string;
  createdAt: DateTime;
}

// 用户AI社区问答类型
export interface UserAiCommunityQuestion {
  id: ID;
  communityId: ID;
  userId: ID;
  title: string;
  content: string;
  tags: string[];
  status: 'open' | 'answered' | 'closed';
  views: number;
  likes: number;
  answers: number;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI社区回答类型
export interface UserAiCommunityAnswer {
  id: ID;
  questionId: ID;
  userId: ID;
  content: string;
  status: 'pending' | 'approved' | 'rejected';
  likes: number;
  accepted: boolean;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI社区知识类型
export interface UserAiCommunityKnowledge {
  id: ID;
  communityId: ID;
  title: string;
  content: string;
  tags: string[];
  author: ID;
  status: 'draft' | 'published' | 'archived';
  views: number;
  likes: number;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI社区知识评论类型
export interface UserAiCommunityKnowledgeComment {
  id: ID;
  knowledgeId: ID;
  userId: ID;
  content: string;
  status: 'pending' | 'approved' | 'rejected';
  likes: number;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI社区资源类型
export interface UserAiCommunityResource {
  id: ID;
  communityId: ID;
  userId: ID;
  name: string;
  type: string;
  url: string;
  description: string;
  tags: string[];
  status: 'pending' | 'approved' | 'rejected';
  views: number;
  downloads: number;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI社区资源评论类型
export interface UserAiCommunityResourceComment {
  id: ID;
  resourceId: ID;
  userId: ID;
  content: string;
  status: 'pending' | 'approved' | 'rejected';
  likes: number;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI社区工具类型
export interface UserAiCommunityTool {
  id: ID;
  communityId: ID;
  userId: ID;
  name: string;
  description: string;
  type: string;
  url: string;
  tags: string[];
  status: 'pending' | 'approved' | 'rejected';
  views: number;
  downloads: number;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI社区工具评论类型
export interface UserAiCommunityToolComment {
  id: ID;
  toolId: ID;
  userId: ID;
  content: string;
  status: 'pending' | 'approved' | 'rejected';
  likes: number;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI社区工作类型
export interface UserAiCommunityJob {
  id: ID;
  communityId: ID;
  userId: ID;
  title: string;
  description: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  url: string;
  status: 'active' | 'expired' | 'filled';
  applications: number;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI社区工作申请类型
export interface UserAiCommunityJobApplication {
  userId: ID;
  jobId: ID;
  resume: string;
  coverLetter: string;
  status: 'pending' | 'reviewing' | 'accepted' | 'rejected';
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI社区竞赛类型
export interface UserAiCommunityCompetition {
  id: ID;
  communityId: ID;
  name: string;
  description: string;
  startDate: DateTime;
  endDate: DateTime;
  prizes: string[];
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  participants: number;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI社区竞赛参与类型
export interface UserAiCommunityCompetitionParticipation {
  userId: ID;
  competitionId: ID;
  submission: string;
  status: 'registered' | 'submitted' | 'evaluating' | 'winner' | 'participant';
  score?: number;
  feedback?: string;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI社区挑战类型
export interface UserAiCommunityChallenge {
  id: ID;
  communityId: ID;
  name: string;
  description: string;
  startDate: DateTime;
  endDate: DateTime;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  participants: number;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI社区挑战参与类型
export interface UserAiCommunityChallengeParticipation {
  userId: ID;
  challengeId: ID;
  submission: string;
  status: 'registered' | 'submitted' | 'completed' | 'failed';
  score?: number;
  feedback?: string;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI社区黑客松类型
export interface UserAiCommunityHackathon {
  id: ID;
  communityId: ID;
  name: string;
  description: string;
  startDate: DateTime;
  endDate: DateTime;
  theme: string;
  prizes: string[];
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  participants: number;
  teams: number;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI社区黑客松团队类型
export interface UserAiCommunityHackathonTeam {
  id: ID;
  hackathonId: ID;
  name: string;
  members: ID[];
  submission: string;
  status: 'registered' | 'submitted' | 'evaluating' | 'winner' | 'participant';
  score?: number;
  feedback?: string;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI社区黑客松参与类型
export interface UserAiCommunityHackathonParticipation {
  userId: ID;
  hackathonId: ID;
  teamId: ID;
  role: string;
  createdAt: DateTime;
}

// 用户AI社区会议类型
export interface UserAiCommunityMeeting {
  id: ID;
  communityId: ID;
  name: string;
  description: string;
  date: DateTime;
  duration: number;
  location: string;
  organizer: ID;
  attendees: number;
  status: 'upcoming' | 'ongoing' | 'past' | 'cancelled';
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI社区会议参与类型
export interface UserAiCommunityMeetingParticipation {
  userId: ID;
  meetingId: ID;
  status: 'registered' | 'attended' | 'cancelled';
  feedback?: string;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI社区网络研讨会类型
export interface UserAiCommunityWebinar {
  id: ID;
  communityId: ID;
  name: string;
  description: string;
  date: DateTime;
  duration: number;
  speaker: string;
  url: string;
  attendees: number;
  status: 'upcoming' | 'ongoing' | 'past' | 'cancelled';
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI社区网络研讨会参与类型
export interface UserAiCommunityWebinarParticipation {
  userId: ID;
  webinarId: ID;
  status: 'registered' | 'attended' | 'cancelled';
  feedback?: string;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI社区课程类型
export interface UserAiCommunityCourse {
  id: ID;
  communityId: ID;
  name: string;
  description: string;
  instructor: string;
  duration: number;
  modules: string[];
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  status: 'draft' | 'published' | 'archived';
  enrolled: number;
  completed: number;
  rating: number;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI社区课程参与类型
export interface UserAiCommunityCourseParticipation {
  userId: ID;
  courseId: ID;
  progress: number;
  completed: boolean;
  rating?: number;
  feedback?: string;
  startedAt: DateTime;
  completedAt?: DateTime;
  updatedAt: DateTime;
}

// 用户AI社区课程模块类型
export interface UserAiCommunityCourseModule {
  id: ID;
  courseId: ID;
  name: string;
  description: string;
  content: string;
  order: number;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI社区课程模块参与类型
export interface UserAiCommunityCourseModuleParticipation {
  userId: ID;
  moduleId: ID;
  completed: boolean;
  score?: number;
  completedAt: DateTime;
}

// 用户AI社区课程测验类型
export interface UserAiCommunityCourseQuiz {
  id: ID;
  moduleId: ID;
  name: string;
  description: string;
  questions: QuizQuestion[];
  passingScore: number;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 测验问题类型
export interface QuizQuestion {
  id: ID;
  quizId: ID;
  question: string;
  type: 'multiple-choice' | 'true-false' | 'short-answer' | 'essay';
  options?: string[];
  correctAnswer: string;
  points: number;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI社区课程测验参与类型
export interface UserAiCommunityCourseQuizParticipation {
  userId: ID;
  quizId: ID;
  score: number;
  passed: boolean;
  answers: Record<string, string>;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI社区认证类型
export interface UserAiCommunityCertification {
  id: ID;
  communityId: ID;
  name: string;
  description: string;
  requirements: string[];
  exam: string;
  validity: number;
  status: 'active' | 'inactive' | 'archived';
  issued: number;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI社区认证参与类型
export interface UserAiCommunityCertificationParticipation {
  userId: ID;
  certificationId: ID;
  status: 'registered' | 'preparing' | 'exam' | 'passed' | 'failed';
  score?: number;
  certificate?: string;
  issuedAt?: DateTime;
  expiresAt?: DateTime;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI社区会员类型
export interface UserAiCommunityMembership {
  id: ID;
  communityId: ID;
  name: string;
  description: string;
  price: number;
  currency: string;
  duration: number;
  benefits: string[];
  status: 'active' | 'inactive' | 'archived';
  members: number;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI社区会员订阅类型
export interface UserAiCommunityMembershipSubscription {
  userId: ID;
  membershipId: ID;
  status: 'active' | 'cancelled' | 'expired';
  startDate: DateTime;
  endDate: DateTime;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI社区捐赠类型
export interface UserAiCommunityDonation {
  id: ID;
  communityId: ID;
  userId: ID;
  amount: number;
  currency: string;
  type: 'one-time' | 'monthly' | 'yearly';
  status: 'pending' | 'completed' | 'failed';
  transactionId: string;
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI社区赞助商类型
export interface UserAiCommunitySponsor {
  id: ID;
  communityId: ID;
  name: string;
  logo: string;
  website: string;
  level: string;
  amount: number;
  currency: string;
  startDate: DateTime;
  endDate: DateTime;
  status: 'active' | 'expired' | 'cancelled';
  createdAt: DateTime;
  updatedAt: DateTime;
}

// 用户AI社区广告类型
export interface UserAiCommunityAdvertisement {
  id: ID;
}