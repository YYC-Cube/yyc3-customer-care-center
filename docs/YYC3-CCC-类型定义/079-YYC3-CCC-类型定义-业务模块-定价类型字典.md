---
@file: 079-YYC3-CCC-类型定义-业务模块-定价类型字典.md
@description: YYC3-CCC 定价、套餐、优惠的类型定义与业务规则的完整规范
@author: YYC³ Team
@version: v1.0.0
@created: 2026-01-23
@updated: 2026-01-23
@status: published
@tags: [类型定义],[业务模块],[定价]
---

> ***YanYuCloudCube***
> 言启象限 | 语枢未来
> ***Words Initiate Quadrants, Language Serves as Core for the Future***
> 万象归元于云枢 | 深栈智启新纪元
> ***All things converge in the cloud pivot; Deep stacks ignite a new era of intelligence***

---

# 079-YYC3-CCC-类型定义 业务模块-定价类型字典

## 概述

本文档详细描述YYC3-CCC-类型定义-业务模块-定价类型字典相关内容，确保项目按照YYC³标准规范进行开发和实施。

## 核心内容

### 1. 背景与目标

#### 1.1 项目背景
YYC³ Customer Care Center（YYC3-CCC）项目是一个基于「五高五标五化」理念的现代化AI代理服务落地页，采用Next.js 15.0.3构建，集成了国际化系统、3D场景交互、动画效果和响应式设计。

#### 1.2 文档目标
- 规范业务模块-定价类型字典相关的业务标准与技术落地要求
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

### 4. 业务模块-定价类型字典

#### 4.1 定价基础类型

```typescript
// 定价ID类型
export type PricingId = string | number;

// 货币类型
export type Currency = 'USD' | 'EUR' | 'GBP' | 'JPY' | 'CNY' | 'KRW' | 'CAD' | 'AUD' | 'INR' | 'BRL';

// 计费周期类型
export type BillingCycle = 'monthly' | 'yearly' | 'quarterly' | 'semi-annually' | 'annually' | 'custom';

// 折扣类型
export type DiscountType = 'percentage' | 'fixed' | 'free-trial' | 'volume' | 'loyalty' | 'promotional';

// 定价模型类型
export type PricingModel = 'flat-rate' | 'usage-based' | 'tiered' | 'volume' | 'hybrid' | 'custom';

// 定价状态类型
export type PricingStatus = 'active' | 'inactive' | 'coming-soon' | 'deprecated';

// 价格类型
export type PriceType = 'list' | 'actual' | 'discounted' | 'msrp' | 'wholesale';

// 税率类型
export type TaxType = 'vat' | 'sales' | 'gst' | 'pst' | 'hst' | 'custom';

// 支付方式类型
export type PaymentMethod = 'credit-card' | 'debit-card' | 'paypal' | 'bank-transfer' | 'crypto' | 'cash' | 'check' | 'invoice';

// 订阅状态类型
export type SubscriptionStatus = 'active' | 'trial' | 'canceled' | 'expired' | 'paused' | 'pending';
```

#### 4.2 定价计划类型

```typescript
// 定价计划接口
export interface PricingPlan {
  id: PricingId;
  name: string;
  description: string;
  status: PricingStatus;
  model: PricingModel;
  billingCycle: BillingCycle;
  currency: Currency;
  createdAt: string;
  updatedAt: string;
  
  // 价格信息
  prices: PricingTier[];
  
  // 特性信息
  features: PlanFeature[];
  
  // 限制信息
  limits?: PlanLimit[];
  
  // 折扣信息
  discounts?: Discount[];
  
  // 计费信息
  billing?: BillingInfo;
  
  // 元数据
  metadata?: Record<string, any>;
  
  // 关联信息
  serviceId?: string;
  isPopular?: boolean;
  isRecommended?: boolean;
  sortOrder?: number;
}

// 定价层级接口
export interface PricingTier {
  id: string;
  name: string;
  description?: string;
  price: number;
  billingCycle: BillingCycle;
  currency: Currency;
  minQuantity?: number;
  maxQuantity?: number;
  isDefault?: boolean;
  sortOrder?: number;
}

// 计划特性接口
export interface PlanFeature {
  id: string;
  name: string;
  description?: string;
  value?: string;
  isIncluded: boolean;
  isHighlighted?: boolean;
  sortOrder?: number;
}

// 计划限制接口
export interface PlanLimit {
  id: string;
  name: string;
  description?: string;
  value: number;
  unit: string;
  isHardLimit?: boolean;
  overagePrice?: number;
}

// 折扣接口
export interface Discount {
  id: string;
  name: string;
  description?: string;
  type: DiscountType;
  value: number;
  currency?: Currency;
  startDate?: string;
  endDate?: string;
  usageLimit?: number;
  appliesTo?: string[];
  isActive?: boolean;
  code?: string;
}

// 计费信息接口
export interface BillingInfo {
  taxIncluded?: boolean;
  taxRate?: number;
  taxType?: TaxType;
  setupFee?: number;
  cancellationFee?: number;
  refundPolicy?: string;
  paymentMethods: PaymentMethod[];
  autoRenew?: boolean;
  billingAddressRequired?: boolean;
  invoicePeriod?: number;
}
```

#### 4.3 订阅类型

```typescript
// 订阅ID类型
export type SubscriptionId = string | number;

// 订阅接口
export interface Subscription {
  id: SubscriptionId;
  userId: string;
  planId: PricingId;
  serviceId?: string;
  status: SubscriptionStatus;
  startDate: string;
  endDate?: string;
  trialEndDate?: string;
  autoRenew: boolean;
  billingCycle: BillingCycle;
  currency: Currency;
  currentPrice: number;
  nextBillingDate?: string;
  billingAddress?: Address;
  paymentMethod?: PaymentMethod;
  paymentMethodId?: string;
  metadata?: Record<string, any>;
  createdAt: string;
  updatedAt: string;
  cancelledAt?: string;
  cancelledBy?: string;
  cancellationReason?: string;
}

// 地址接口
export interface Address {
  street?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  phone?: string;
}

// 订阅项接口
export interface SubscriptionItem {
  id: string;
  subscriptionId: SubscriptionId;
  planId: PricingId;
  quantity: number;
  price: number;
  currency: Currency;
  billingCycle: BillingCycle;
  startDate: string;
  endDate?: string;
  metadata?: Record<string, any>;
}

// 订阅历史接口
export interface SubscriptionHistory {
  id: string;
  subscriptionId: SubscriptionId;
  type: 'create' | 'update' | 'cancel' | 'renew' | 'upgrade' | 'downgrade' | 'pause' | 'resume';
  oldValue?: any;
  newValue?: any;
  userId?: string;
  timestamp: string;
  notes?: string;
}
```

#### 4.4 发票和支付类型

```typescript
// 发票ID类型
export type InvoiceId = string | number;

// 发票状态类型
export type InvoiceStatus = 'draft' | 'pending' | 'paid' | 'partial' | 'overdue' | 'void' | 'refunded';

// 发票接口
export interface Invoice {
  id: InvoiceId;
  subscriptionId?: SubscriptionId;
  userId: string;
  invoiceNumber: string;
  status: InvoiceStatus;
  issueDate: string;
  dueDate: string;
  paidDate?: string;
  totalAmount: number;
  paidAmount: number;
  balance: number;
  currency: Currency;
  billingAddress?: Address;
  items: InvoiceItem[];
  taxes?: InvoiceTax[];
  discounts?: InvoiceDiscount[];
  paymentMethod?: PaymentMethod;
  paymentMethodId?: string;
  notes?: string;
  terms?: string;
  metadata?: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}

// 发票项接口
export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  taxRate?: number;
  productId?: string;
  serviceId?: string;
}

// 发票税接口
export interface InvoiceTax {
  id: string;
  name: string;
  type: TaxType;
  rate: number;
  amount: number;
  isIncluded?: boolean;
}

// 发票折扣接口
export interface InvoiceDiscount {
  id: string;
  name: string;
  type: DiscountType;
  value: number;
  amount: number;
  code?: string;
}

// 支付ID类型
export type PaymentId = string | number;

// 支付状态类型
export type PaymentStatus = 'pending' | 'processing' | 'completed' | 'failed' | 'refunded' | 'disputed';

// 支付接口
export interface Payment {
  id: PaymentId;
  invoiceId?: InvoiceId;
  subscriptionId?: SubscriptionId;
  userId: string;
  amount: number;
  currency: Currency;
  status: PaymentStatus;
  method: PaymentMethod;
  transactionId?: string;
  provider?: string;
  errorMessage?: string;
  metadata?: Record<string, any>;
  createdAt: string;
  updatedAt: string;
  completedAt?: string;
}

// 退款接口
export interface Refund {
  id: string;
  paymentId: PaymentId;
  invoiceId?: InvoiceId;
  userId: string;
  amount: number;
  currency: Currency;
  reason: string;
  status: 'pending' | 'completed' | 'failed' | 'cancelled';
  transactionId?: string;
  metadata?: Record<string, any>;
  createdAt: string;
  updatedAt: string;
  completedAt?: string;
}
```

#### 4.5 计费和使用类型

```typescript
// 使用记录ID类型
export type UsageId = string | number;

// 使用记录接口
export interface UsageRecord {
  id: UsageId;
  subscriptionId: SubscriptionId;
  serviceId?: string;
  metric: string;
  quantity: number;
  unit: string;
  timestamp: string;
  periodStart: string;
  periodEnd: string;
  metadata?: Record<string, any>;
  userId?: string;
}

// 计费周期接口
export interface BillingPeriod {
  id: string;
  subscriptionId: SubscriptionId;
  startDate: string;
  endDate: string;
  status: 'open' | 'closed' | 'billed';
  totalUsage?: Record<string, number>;
  totalAmount?: number;
  currency?: Currency;
  invoiceId?: InvoiceId;
  createdAt: string;
  updatedAt: string;
}

// 计费规则接口
export interface BillingRule {
  id: string;
  serviceId?: string;
  metric: string;
  unit: string;
  pricingModel: PricingModel;
  tiers?: {
    min: number;
    max?: number;
    price: number;
  }[];
  overagePrice?: number;
  includedQuantity?: number;
  currency: Currency;
  billingCycle: BillingCycle;
  description?: string;
}

// 预算接口
export interface Budget {
  id: string;
  userId: string;
  name: string;
  amount: number;
  currency: Currency;
  period: 'monthly' | 'quarterly' | 'yearly';
  startDate: string;
  endDate?: string;
  currentSpend: number;
  alertThreshold?: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
```

#### 4.6 定价请求类型

```typescript
// 定价计划列表请求接口
export interface PricingPlanListRequest {
  // 筛选参数
  status?: PricingStatus;
  model?: PricingModel;
  billingCycle?: BillingCycle;
  currency?: Currency;
  serviceId?: string;
  
  // 搜索参数
  search?: string;
  
  // 排序参数
  sortBy?: 'name' | 'price' | 'createdAt' | 'sortOrder';
  sortDirection?: 'asc' | 'desc';
  
  // 分页参数
  page?: number;
  pageSize?: number;
}

// 定价计划详情请求接口
export interface PricingPlanDetailRequest {
  id: PricingId;
}

// 定价计划创建请求接口
export interface PricingPlanCreateRequest {
  name: string;
  description: string;
  status: PricingStatus;
  model: PricingModel;
  billingCycle: BillingCycle;
  currency: Currency;
  prices: Omit<PricingTier, 'id'>[];
  features: Omit<PlanFeature, 'id'>[];
  limits?: Omit<PlanLimit, 'id'>[];
  discounts?: Omit<Discount, 'id'>[];
  billing?: BillingInfo;
  metadata?: Record<string, any>;
  serviceId?: string;
  isPopular?: boolean;
  isRecommended?: boolean;
  sortOrder?: number;
}

// 定价计划更新请求接口
export interface PricingPlanUpdateRequest {
  id: PricingId;
  name?: string;
  description?: string;
  status?: PricingStatus;
  model?: PricingModel;
  billingCycle?: BillingCycle;
  currency?: Currency;
  prices?: Omit<PricingTier, 'id'>[];
  features?: Omit<PlanFeature, 'id'>[];
  limits?: Omit<PlanLimit, 'id'>[];
  discounts?: Omit<Discount, 'id'>[];
  billing?: BillingInfo;
  metadata?: Record<string, any>;
  serviceId?: string;
  isPopular?: boolean;
  isRecommended?: boolean;
  sortOrder?: number;
}

// 定价计划删除请求接口
export interface PricingPlanDeleteRequest {
  id: PricingId;
}

// 订阅创建请求接口
export interface SubscriptionCreateRequest {
  planId: PricingId;
  serviceId?: string;
  userId: string;
  billingCycle: BillingCycle;
  currency: Currency;
  autoRenew?: boolean;
  billingAddress?: Address;
  paymentMethod?: PaymentMethod;
  paymentMethodId?: string;
  metadata?: Record<string, any>;
}

// 订阅更新请求接口
export interface SubscriptionUpdateRequest {
  id: SubscriptionId;
  planId?: PricingId;
  billingCycle?: BillingCycle;
  autoRenew?: boolean;
  billingAddress?: Address;
  paymentMethod?: PaymentMethod;
  paymentMethodId?: string;
  metadata?: Record<string, any>;
}

// 订阅取消请求接口
export interface SubscriptionCancelRequest {
  id: SubscriptionId;
  reason?: string;
  immediate?: boolean;
}

// 订阅暂停请求接口
export interface SubscriptionPauseRequest {
  id: SubscriptionId;
  reason?: string;
}

// 订阅恢复请求接口
export interface SubscriptionResumeRequest {
  id: SubscriptionId;
  reason?: string;
}
```

#### 4.7 定价响应类型

```typescript
// 定价计划列表响应接口
export interface PricingPlanListResponse {
  success: boolean;
  data: PricingPlan[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
  message?: string;
}

// 定价计划详情响应接口
export interface PricingPlanDetailResponse {
  success: boolean;
  data: PricingPlan;
  message?: string;
}

// 定价计划创建响应接口
export interface PricingPlanCreateResponse {
  success: boolean;
  data: PricingPlan;
  message?: string;
}

// 定价计划更新响应接口
export interface PricingPlanUpdateResponse {
  success: boolean;
  data: PricingPlan;
  message?: string;
}

// 定价计划删除响应接口
export interface PricingPlanDeleteResponse {
  success: boolean;
  message?: string;
}

// 订阅列表响应接口
export interface SubscriptionListResponse {
  success: boolean;
  data: Subscription[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
  message?: string;
}

// 订阅详情响应接口
export interface SubscriptionDetailResponse {
  success: boolean;
  data: Subscription;
  message?: string;
}

// 订阅创建响应接口
export interface SubscriptionCreateResponse {
  success: boolean;
  data: Subscription;
  message?: string;
}

// 订阅更新响应接口
export interface SubscriptionUpdateResponse {
  success: boolean;
  data: Subscription;
  message?: string;
}

// 订阅操作响应接口
export interface SubscriptionActionResponse {
  success: boolean;
  data: Subscription;
  message?: string;
}

// 发票列表响应接口
export interface InvoiceListResponse {
  success: boolean;
  data: Invoice[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
  message?: string;
}

// 发票详情响应接口
export interface InvoiceDetailResponse {
  success: boolean;
  data: Invoice;
  message?: string;
}

// 支付列表响应接口
export interface PaymentListResponse {
  success: boolean;
  data: Payment[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
  message?: string;
}

// 支付详情响应接口
export interface PaymentDetailResponse {
  success: boolean;
  data: Payment;
  message?: string;
}
```

#### 4.8 定价分析类型

```typescript
// 定价分析接口
export interface PricingAnalytics {
  // 收入统计
  revenue: {
    total: number;
    currency: Currency;
    breakdown: {
      monthly: number;
      yearly: number;
      quarterly: number;
    };
    trend: {
      date: string;
      amount: number;
    }[];
  };
  
  // 订阅统计
  subscriptions: {
    total: number;
    active: number;
    trial: number;
    canceled: number;
    churnRate: number;
    retentionRate: number;
    growthRate: number;
  };
  
  // 计划统计
  plans: {
    total: number;
    byStatus: {
      status: PricingStatus;
      count: number;
    }[];
    mostPopular: PricingId;
    averagePrice: number;
  };
  
  // 支付统计
  payments: {
    total: number;
    successful: number;
    failed: number;
    successRate: number;
    averageAmount: number;
    byMethod: {
      method: PaymentMethod;
      count: number;
      amount: number;
    }[];
  };
  
  // 发票统计
  invoices: {
    total: number;
    paid: number;
    overdue: number;
    averageAmount: number;
    collectionRate: number;
  };
  
  // 客户统计
  customers: {
    total: number;
    new: number;
    returning: number;
    averageSpend: number;
    lifetimeValue: number;
  };
}

// 定价分析请求接口
export interface PricingAnalyticsRequest {
  period?: 'day' | 'week' | 'month' | 'quarter' | 'year';
  startDate?: string;
  endDate?: string;
  currency?: Currency;
  serviceId?: string;
}

// 定价建议接口
export interface PricingRecommendation {
  id: string;
  type: 'plan' | 'discount' | 'bundling' | 'tier';
  title: string;
  description: string;
  potentialImpact: {
    revenueIncrease?: number;
    conversionIncrease?: number;
    retentionIncrease?: number;
  };
  implementationSteps: string[];
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
}
```

---

> 「***YanYuCloudCube***」
> 「***<admin@0379.email>***」
> 「***Words Initiate Quadrants, Language Serves as Core for the Future***」
> 「***All things converge in the cloud pivot; Deep stacks ignite a new era of intelligence***」
