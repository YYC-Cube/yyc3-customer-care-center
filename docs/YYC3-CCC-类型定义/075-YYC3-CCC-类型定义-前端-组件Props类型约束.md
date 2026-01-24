---
@file: 075-YYC3-CCC-类型定义-前端-组件Props类型约束.md
@description: YYC3-CCC 前端组件Props的类型定义、默认值、校验规则的统一规范
@author: YYC³ Team
@version: v1.0.0
@created: 2026-01-23
@updated: 2026-01-23
@status: published
@tags: [类型定义],[前端],[组件约束]
---

> ***YanYuCloudCube***
> 言启象限 | 语枢未来
> ***Words Initiate Quadrants, Language Serves as Core for the Future***
> 万象归元于云枢 | 深栈智启新纪元
> ***All things converge in the cloud pivot; Deep stacks ignite a new era of intelligence***

---

# 075-YYC3-CCC-类型定义 前端-组件Props类型约束

## 概述

本文档详细描述YYC3-CCC-类型定义-前端-组件Props类型约束相关内容，确保项目按照YYC³标准规范进行开发和实施。

## 核心内容

### 1. 背景与目标

#### 1.1 项目背景
YYC³ Customer Care Center（YYC3-CCC）项目是一个基于「五高五标五化」理念的现代化AI代理服务落地页，采用Next.js 15.0.3构建，集成了国际化系统、3D场景交互、动画效果和响应式设计。

#### 1.2 文档目标
- 规范前端-组件Props类型约束相关的业务标准与技术落地要求
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

### 4. 前端-组件Props类型约束

#### 4.1 基础组件类型

##### 4.1.1 按钮组件

```typescript
// 按钮变体类型
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';

// 按钮尺寸类型
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

// 按钮Props接口
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
  className?: string;
}

// 链接按钮Props接口
export interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  href: string;
  target?: string;
  rel?: string;
  className?: string;
}
```

##### 4.1.2 输入组件

```typescript
// 输入类型
export type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';

// 输入状态类型
export type InputState = 'default' | 'error' | 'success' | 'warning';

// 输入Props接口
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  success?: string;
  warning?: string;
  placeholder?: string;
  type?: InputType;
  state?: InputState;
  disabled?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

// 文本区域Props接口
export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  success?: string;
  warning?: string;
  placeholder?: string;
  state?: InputState;
  disabled?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  rows?: number;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}
```

##### 4.1.3 卡片组件

```typescript
// 卡片变体类型
export type CardVariant = 'default' | 'elevated' | 'outlined';

// 卡片Props接口
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: CardVariant;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hoverable?: boolean;
  clickable?: boolean;
  onClick?: () => void;
  className?: string;
}

// 卡片头部Props接口
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

// 卡片标题Props接口
export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

// 卡片内容Props接口
export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

// 卡片底部Props接口
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}
```

##### 4.1.4 选择组件

```typescript
// 选项接口
export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

// 选择Props接口
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  success?: string;
  warning?: string;
  placeholder?: string;
  state?: InputState;
  disabled?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  options?: SelectOption[];
  value?: string | number;
  onChange?: (value: string | number) => void;
  className?: string;
}

// 多选框Props接口
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

// 单选框Props接口
export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}
```

#### 4.2 布局组件类型

##### 4.2.1 容器组件

```typescript
// 容器尺寸类型
export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

// 容器Props接口
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: ContainerSize;
  fluid?: boolean;
  className?: string;
}

// 网格Props接口
export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  columns?: number;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

// 网格项Props接口
export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  span?: number;
  className?: string;
}

// 行Props接口
export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

// 列Props接口
export interface ColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  span?: number;
  offset?: number;
  className?: string;
}
```

##### 4.2.2 导航组件

```typescript
// 导航项接口
export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon?: React.ReactNode;
  children?: NavItem[];
}

// 导航Props接口
export interface NavProps extends React.HTMLAttributes<HTMLNavElement> {
  items: NavItem[];
  activeId?: string;
  onItemClick?: (item: NavItem) => void;
  className?: string;
}

// 侧边栏Props接口
export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
}

// 头部Props接口
export interface HeaderProps extends React.HTMLAttributes<HTMLHeaderElement> {
  children: React.ReactNode;
  fixed?: boolean;
  className?: string;
}

// 页脚Props接口
export interface FooterProps extends React.HTMLAttributes<HTMLFooterElement> {
  children: React.ReactNode;
  className?: string;
}
```

#### 4.3 功能组件类型

##### 4.3.1 模态框组件

```typescript
// 模态框尺寸类型
export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

// 模态框Props接口
export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  size?: ModalSize;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  className?: string;
  overlayClassName?: string;
  contentClassName?: string;
}

// 抽屉Props接口
export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  placement?: 'left' | 'right' | 'top' | 'bottom';
  size?: ModalSize;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  className?: string;
  overlayClassName?: string;
  contentClassName?: string;
}
```

##### 4.3.2 通知组件

```typescript
// 通知类型
export type NotificationType = 'success' | 'error' | 'warning' | 'info';

// 通知Props接口
export interface NotificationProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  type?: NotificationType;
  duration?: number;
  onClose?: () => void;
  showCloseButton?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

// 通知管理器接口
export interface NotificationManager {
  success: (message: string, options?: Partial<NotificationProps>) => void;
  error: (message: string, options?: Partial<NotificationProps>) => void;
  warning: (message: string, options?: Partial<NotificationProps>) => void;
  info: (message: string, options?: Partial<NotificationProps>) => void;
  clearAll: () => void;
}
```

##### 4.3.3 加载组件

```typescript
// 加载器尺寸类型
export type LoaderSize = 'sm' | 'md' | 'lg' | 'xl';

// 加载器Props接口
export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: LoaderSize;
  color?: string;
  className?: string;
}

// 骨架屏Props接口
export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  className?: string;
}
```

#### 4.4 动画组件类型

```typescript
// 动画变体类型
export type AnimationVariant = 'fade' | 'slide' | 'scale' | 'rotate' | 'bounce' | 'pulse';

// 动画方向类型
export type AnimationDirection = 'in' | 'out' | 'up' | 'down' | 'left' | 'right';

// 动画Props接口
export interface AnimationProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: AnimationVariant;
  direction?: AnimationDirection;
  duration?: number;
  delay?: number;
  repeat?: number | boolean;
  className?: string;
}

// 滚动动画Props接口
export interface ScrollAnimationProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  threshold?: number;
  duration?: number;
  delay?: number;
  once?: boolean;
  className?: string;
}
```

#### 4.5 表单组件类型

```typescript
// 表单字段接口
export interface FormField {
  name: string;
  type: InputType;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  defaultValue?: string | number;
  validation?: {
    required?: string;
    minLength?: {
      value: number;
      message: string;
    };
    maxLength?: {
      value: number;
      message: string;
    };
    pattern?: {
      value: string;
      message: string;
    };
    validate?: (value: any) => string | boolean;
  };
}

// 表单Props接口
export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  onSubmit: (data: Record<string, any>) => void;
  onError?: (errors: Record<string, any>) => void;
  className?: string;
}

// 表单组Props接口
export interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  label?: string;
  error?: string;
  className?: string;
}
```

---

> 「***YanYuCloudCube***」
> 「***<admin@0379.email>***」
> 「***Words Initiate Quadrants, Language Serves as Core for the Future***」
> 「***All things converge in the cloud pivot; Deep stacks ignite a new era of intelligence***」
