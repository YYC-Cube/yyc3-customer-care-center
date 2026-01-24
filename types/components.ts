/**
 * @file 组件类型定义
 * @description YYC³ Customer Care Center 项目的组件类型定义
 * @author YYC³
 * @version 1.0.0
 */

import type { ID, DateTime, Status, Priority, Visibility, Locale, Theme, Size, Color, Alignment, Direction, Layout, Animation, Transition, LoadingState, EmptyState } from './global';

// 通用组件Props类型
export interface BaseProps {
  className?: string;
  id?: ID;
  style?: React.CSSProperties;
  testId?: string;
  children?: React.ReactNode;
}

// 按钮组件Props类型
export interface ButtonProps extends BaseProps {
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: Size;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  asChild?: boolean;
}

// 输入框组件Props类型
export interface InputProps extends BaseProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  label?: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
  required?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
}

// 文本域组件Props类型
export interface TextareaProps extends BaseProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  label?: string;
  required?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  rows?: number;
  maxLength?: number;
}

// 选择器组件Props类型
export interface SelectProps<T = string> extends BaseProps {
  value?: T;
  onChange?: (value: T) => void;
  options: Array<{ value: T; label: string; disabled?: boolean }>;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  label?: string;
  required?: boolean;
}

// 复选框组件Props类型
export interface CheckboxProps extends BaseProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  required?: boolean;
}

// 单选框组件Props类型
export interface RadioProps extends BaseProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  required?: boolean;
  value?: string;
}

// 开关组件Props类型
export interface SwitchProps extends BaseProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
}

// 滑块组件Props类型
export interface SliderProps extends BaseProps {
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  label?: string;
}

// 卡片组件Props类型
export interface CardProps extends BaseProps {
  title?: string;
  description?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  onClick?: () => void;
}

// 表格组件Props类型
export interface TableProps<T = any> extends BaseProps {
  data: T[];
  columns: TableColumn<T>[];
  onRowClick?: (row: T) => void;
  loading?: boolean;
  emptyState?: React.ReactNode;
  pagination?: {
    page: number;
    pageSize: number;
    total: number;
    onChange: (page: number, pageSize: number) => void;
  };
}

export interface TableColumn<T = any> {
  key: string;
  label: string;
  render: (row: T) => React.ReactNode;
  width?: string | number;
  sortable?: boolean;
}

// 列表组件Props类型
export interface ListProps<T = any> extends BaseProps {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  loading?: boolean;
  emptyState?: React.ReactNode;
  pagination?: {
    page: number;
    pageSize: number;
    total: number;
    onChange: (page: number, pageSize: number) => void;
  };
}

// 网格组件Props类型
export interface GridProps extends BaseProps {
  columns?: number;
  gap?: Size;
  direction?: Direction;
  alignment?: Alignment;
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}

// 网格项组件Props类型
export interface GridItemProps extends BaseProps {
  colSpan?: number;
  rowSpan?: number;
}

// 标签组件Props类型
export interface BadgeProps extends BaseProps {
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'destructive' | 'success' | 'warning' | 'info';
  size?: Size;
  dot?: boolean;
  count?: number;
  maxCount?: number;
}

// 头像组件Props类型
export interface AvatarProps extends BaseProps {
  src?: string;
  alt?: string;
  size?: Size;
  fallback?: string | React.ReactNode;
}

// 进度条组件Props类型
export interface ProgressProps extends BaseProps {
  value?: number;
  max?: number;
  variant?: 'default' | 'striped' | 'animated';
  color?: Color;
  size?: Size;
}

// 加载组件Props类型
export interface LoadingProps extends BaseProps {
  size?: Size;
  variant?: 'default' | 'spinner' | 'dots' | 'bars';
  text?: string;
}

// 空状态组件Props类型
export interface EmptyStateProps extends BaseProps {
  type?: EmptyState;
  title?: string;
  description?: string;
  action?: React.ReactNode;
}

// 错误组件Props类型
export interface ErrorProps extends BaseProps {
  error?: Error;
  message?: string;
  action?: React.ReactNode;
}

// 通知组件Props类型
export interface NotificationProps extends BaseProps {
  title?: string;
  message: string;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  duration?: number;
  onClose?: () => void;
  action?: React.ReactNode;
}

// 对话框组件Props类型
export interface DialogProps extends BaseProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  size?: Size;
  modal?: boolean;
}

// 下拉菜单组件Props类型
export interface DropdownMenuProps extends BaseProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trigger: React.ReactNode;
  children: React.ReactNode;
}

// 工具提示组件Props类型
export interface TooltipProps extends BaseProps {
  content: React.ReactNode;
  delay?: number;
  placement?: 'top' | 'bottom' | 'left' | 'right';
}

// 标签页组件Props类型
export interface TabsProps extends BaseProps {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
  variant?: 'default' | 'underline' | 'pill';
  orientation?: Direction;
}

// 标签页项组件Props类型
export interface TabsListProps extends BaseProps {
  children: React.ReactNode;
}

// 标签页触发组件Props类型
export interface TabsTriggerProps extends BaseProps {
  value: string;
  children: React.ReactNode;
  disabled?: boolean;
}

// 标签页内容组件Props类型
export interface TabsContentProps extends BaseProps {
  value: string;
  children: React.ReactNode;
}

// 折叠面板组件Props类型
export interface AccordionProps extends BaseProps {
  type?: 'single' | 'multiple';
  collapsible?: boolean;
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  children: React.ReactNode;
}

// 折叠面板项组件Props类型
export interface AccordionItemProps extends BaseProps {
  value: string;
  children: React.ReactNode;
}

// 折叠面板触发组件Props类型
export interface AccordionTriggerProps extends BaseProps {
  children: React.ReactNode;
}

// 折叠面板内容组件Props类型
export interface AccordionContentProps extends BaseProps {
  children: React.ReactNode;
}

// 导航栏组件Props类型
export interface NavbarProps extends BaseProps {
  brand?: React.ReactNode;
  links?: Array<{ label: string; href: string; active?: boolean; onClick?: () => void }>;
  actions?: React.ReactNode;
  mobileMenu?: React.ReactNode;
}

// 侧边栏组件Props类型
export interface SidebarProps extends BaseProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  brand?: React.ReactNode;
  links?: Array<{ label: string; href: string; active?: boolean; onClick?: () => void }>;
  actions?: React.ReactNode;
}

// 页脚组件Props类型
export interface FooterProps extends BaseProps {
  brand?: React.ReactNode;
  links?: Array<{ title: string; items: Array<{ label: string; href: string }> }>;
  copyright?: string;
  social?: Array<{ icon: React.ReactNode; href: string; label: string }>;
}

// 卡片网格组件Props类型
export interface CardGridProps<T = any> extends BaseProps {
  data: T[];
  renderCard: (item: T, index: number) => React.ReactNode;
  columns?: number;
  gap?: Size;
  loading?: boolean;
  emptyState?: React.ReactNode;
}

// 数据表格组件Props类型
export interface DataTableProps<T = any> extends BaseProps {
  data: T[];
  columns: Array<{
    key: keyof T;
    label: string;
    render?: (value: any, row: T) => React.ReactNode;
    sortable?: boolean;
  }>;
  onRowClick?: (row: T) => void;
  loading?: boolean;
  emptyState?: React.ReactNode;
  pagination?: {
    page: number;
    pageSize: number;
    total: number;
    onChange: (page: number, pageSize: number) => void;
  };
  sortable?: boolean;
  onSort?: (column: keyof T, direction: 'asc' | 'desc') => void;
}

// 表单组件Props类型
export interface FormProps extends BaseProps {
  onSubmit: (data: Record<string, any>) => void;
  children: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
}

// 表单字段组件Props类型
export interface FormFieldProps extends BaseProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

// 过滤器组件Props类型
export interface FilterProps extends BaseProps {
  filters: Array<{
    key: string;
    label: string;
    component: React.ReactNode;
  }>;
  onReset?: () => void;
  onApply?: () => void;
}

// 搜索组件Props类型
export interface SearchProps extends BaseProps {
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  loading?: boolean;
}

// 分页组件Props类型
export interface PaginationProps extends BaseProps {
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  pageSizes?: number[];
  showPageSizes?: boolean;
  showTotal?: boolean;
}

// 面包屑组件Props类型
export interface BreadcrumbProps extends BaseProps {
  items: Array<{ label: string; href?: string; active?: boolean }>;
  separator?: React.ReactNode;
}

// 时间选择器组件Props类型
export interface TimePickerProps extends BaseProps {
  value?: DateTime;
  onChange?: (value: DateTime) => void;
  disabled?: boolean;
  error?: string;
  label?: string;
  format?: string;
}

// 日期选择器组件Props类型
export interface DatePickerProps extends BaseProps {
  value?: DateTime;
  onChange?: (value: DateTime) => void;
  disabled?: boolean;
  error?: string;
  label?: string;
  format?: string;
  minDate?: DateTime;
  maxDate?: DateTime;
}

// 日期范围选择器组件Props类型
export interface DateRangePickerProps extends BaseProps {
  value?: [DateTime, DateTime];
  onChange?: (value: [DateTime, DateTime]) => void;
  disabled?: boolean;
  error?: string;
  label?: string;
  format?: string;
  minDate?: DateTime;
  maxDate?: DateTime;
}

// 上传组件Props类型
export interface UploadProps extends BaseProps {
  onUpload?: (files: File[]) => void;
  onRemove?: (file: File) => void;
  multiple?: boolean;
  accept?: string;
  maxSize?: number;
  disabled?: boolean;
  loading?: boolean;
  files?: File[];
  placeholder?: React.ReactNode;
}

// 拖拽上传组件Props类型
export interface DragDropUploadProps extends UploadProps {
  disabled?: boolean;
  loading?: boolean;
  files?: File[];
  placeholder?: React.ReactNode;
}

// 图片预览组件Props类型
export interface ImagePreviewProps extends BaseProps {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  loading?: 'eager' | 'lazy';
}

// 视频组件Props类型
export interface VideoProps extends BaseProps {
  src: string;
  controls?: boolean;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  width?: number | string;
  height?: number | string;
}

// 音频组件Props类型
export interface AudioProps extends BaseProps {
  src: string;
  controls?: boolean;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
}

// 地图组件Props类型
export interface MapProps extends BaseProps {
  center?: { lat: number; lng: number };
  zoom?: number;
  markers?: Array<{ id: string; position: { lat: number; lng: number }; title?: string }>;
  onMarkerClick?: (marker: any) => void;
  onMapClick?: (position: { lat: number; lng: number }) => void;
}

// 图表组件Props类型
export interface ChartProps extends BaseProps {
  data: any;
  type?: 'line' | 'bar' | 'pie' | 'doughnut' | 'radar' | 'polarArea' | 'scatter' | 'bubble';
  options?: any;
  height?: number | string;
  width?: number | string;
}

// 仪表盘组件Props类型
export interface DashboardProps extends BaseProps {
  widgets: Array<{
    id: string;
    title: string;
    component: React.ReactNode;
    size?: { width: number; height: number };
  }>;
  layout?: 'grid' | 'list';
}

// 卡片组件Props类型
export interface WidgetProps extends BaseProps {
  title: string;
  description?: string;
  value?: string | number;
  trend?: 'up' | 'down' | 'stable';
  trendValue?: string | number;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

// 步骤组件Props类型
export interface StepsProps extends BaseProps {
  current: number;
  steps: Array<{ title: string; description?: string }>;
  orientation?: Direction;
  onStepClick?: (step: number) => void;
}

// 轮播组件Props类型
export interface CarouselProps extends BaseProps {
  items: React.ReactNode[];
  autoplay?: boolean;
  interval?: number;
  controls?: boolean;
  indicators?: boolean;
  loop?: boolean;
}

// 滚动区域组件Props类型
export interface ScrollAreaProps extends BaseProps {
  children: React.ReactNode;
  height?: number | string;
  width?: number | string;
}

// 分隔线组件Props类型
export interface SeparatorProps extends BaseProps {
  orientation?: Direction;
  variant?: 'solid' | 'dashed' | 'dotted';
  color?: Color;
  thickness?: number;
}

// 背景组件Props类型
export interface BackgroundProps extends BaseProps {
  variant?: 'gradient' | 'pattern' | 'image';
  gradient?: string;
  pattern?: string;
  image?: string;
  children: React.ReactNode;
}

// 动画组件Props类型
export interface AnimationProps extends BaseProps {
  variant?: Animation;
  duration?: number;
  delay?: number;
  repeat?: number;
  repeatType?: 'loop' | 'reverse' | 'mirror';
  children: React.ReactNode;
}

// 过渡组件Props类型
export interface TransitionProps extends BaseProps {
  in: boolean;
  out?: boolean;
  duration?: number;
  delay?: number;
  children: React.ReactNode;
}

// 响应式容器组件Props类型
export interface ResponsiveContainerProps extends BaseProps {
  children: React.ReactNode;
  breakpoints?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    '2xl'?: number;
  };
}

// 响应式网格组件Props类型
export interface ResponsiveGridProps extends BaseProps {
  children: React.ReactNode;
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    '2xl'?: number;
  };
  gap?: {
    sm?: Size;
    md?: Size;
    lg?: Size;
    xl?: Size;
    '2xl'?: Size;
  };
}

// 响应式网格项组件Props类型
export interface ResponsiveGridItemProps extends BaseProps {
  colSpan?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    '2xl'?: number;
  };
  rowSpan?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    '2xl'?: number;
  };
  children: React.ReactNode;
}

// 移动端菜单组件Props类型
export interface MobileMenuProps extends BaseProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

// 移动端导航组件Props类型
export interface MobileNavigationProps extends BaseProps {
  links?: Array<{ label: string; href: string; active?: boolean; onClick?: () => void }>;
  actions?: React.ReactNode;
}

// 移动端底部导航组件Props类型
export interface MobileBottomNavigationProps extends BaseProps {
  value: string;
  onValueChange: (value: string) => void;
  items: Array<{ value: string; label: string; icon: React.ReactNode; badge?: number }>;
}

// 深色模式切换组件Props类型
export interface DarkModeToggleProps extends BaseProps {
  value?: Theme;
  onChange?: (value: Theme) => void;
}

// 语言切换组件Props类型
export interface LanguageToggleProps extends BaseProps {
  value?: Locale;
  onChange?: (value: Locale) => void;
  languages?: Array<{ value: Locale; label: string; icon?: React.ReactNode }>;
}

// 通知中心组件Props类型
export interface NotificationCenterProps extends BaseProps {
  notifications: Array<{
    id: string;
    title: string;
    message: string;
    read: boolean;
    timestamp: DateTime;
    action?: React.ReactNode;
  }>;
  onMarkAsRead?: (id: string) => void;
  onMarkAllAsRead?: () => void;
  onDelete?: (id: string) => void;
  onDeleteAll?: () => void;
  emptyState?: React.ReactNode;
}

// 消息组件Props类型
export interface MessageProps extends BaseProps {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  title?: string;
  description?: string;
  action?: React.ReactNode;
  onClose?: () => void;
  duration?: number;
}

// 确认对话框组件Props类型
export interface ConfirmDialogProps extends BaseProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  variant?: 'default' | 'destructive';
}

// 上下文菜单组件Props类型
export interface ContextMenuProps extends BaseProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
}

// 上下文菜单项组件Props类型
export interface ContextMenuItemProps extends BaseProps {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

// 上下文菜单分隔符组件Props类型
export interface ContextMenuSeparatorProps extends BaseProps {
}

// 工具条组件Props类型
export interface ToolbarProps extends BaseProps {
  children: React.ReactNode;
  variant?: 'default' | 'compact';
  alignment?: Alignment;
}

// 工具条项组件Props类型
export interface ToolbarItemProps extends BaseProps {
  children: React.ReactNode;
  disabled?: boolean;
}

// 工具栏按钮组件Props类型
export interface ToolbarButtonProps extends ButtonProps {
  icon?: React.ReactNode;
  label?: string;
  variant?: 'default' | 'outline' | 'ghost';
}

// 工具栏下拉菜单组件Props类型
export interface ToolbarDropdownProps extends BaseProps {
  label: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

// 工具栏分割器组件Props类型
export interface ToolbarSeparatorProps extends BaseProps {
}

// 卡片操作组件Props类型
export interface CardActionsProps extends BaseProps {
  children: React.ReactNode;
  alignment?: Alignment;
}

// 卡片头部组件Props类型
export interface CardHeaderProps extends BaseProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
}

// 卡片内容组件Props类型
export interface CardContentProps extends BaseProps {
  children: React.ReactNode;
}

// 卡片底部组件Props类型
export interface CardFooterProps extends BaseProps {
  children: React.ReactNode;
  alignment?: Alignment;
}

// 输入组组件Props类型
export interface InputGroupProps extends BaseProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline';
}

// 输入组前组件Props类型
export interface InputGroupPrefixProps extends BaseProps {
  children: React.ReactNode;
}

// 输入组后组件Props类型
export interface InputGroupSuffixProps extends BaseProps {
  children: React.ReactNode;
}

// 表单标签组件Props类型
export interface LabelProps extends BaseProps {
  htmlFor?: string;
  children: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
}

// 表单错误组件Props类型
export interface FormErrorProps extends BaseProps {
  children: React.ReactNode;
}

// 表单提示组件Props类型
export interface FormHintProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组件Props类型
export interface FormControlProps extends BaseProps {
  children: React.ReactNode;
  disabled?: boolean;
  required?: boolean;
  error?: string;
}

// 表单控制组组件Props类型
export interface FormControlGroupProps extends BaseProps {
  children: React.ReactNode;
  disabled?: boolean;
  required?: boolean;
  error?: string;
}

// 表单控制组标签组件Props类型
export interface FormControlGroupLabelProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组描述组件Props类型
export interface FormControlGroupDescriptionProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组错误组件Props类型
export interface FormControlGroupErrorProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组提示组件Props类型
export interface FormControlGroupHintProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组操作组件Props类型
export interface FormControlGroupActionsProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组验证组件Props类型
export interface FormControlGroupValidationProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组状态组件Props类型
export interface FormControlGroupStatusProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组消息组件Props类型
export interface FormControlGroupMessageProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组帮助组件Props类型
export interface FormControlGroupHelpProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组信息组件Props类型
export interface FormControlGroupInfoProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组警告组件Props类型
export interface FormControlGroupWarningProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组成功组件Props类型
export interface FormControlGroupSuccessProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组失败组件Props类型
export interface FormControlGroupFailureProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组加载组件Props类型
export interface FormControlGroupLoadingProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组空状态组件Props类型
export interface FormControlGroupEmptyProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组占位符组件Props类型
export interface FormControlGroupPlaceholderProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀组件Props类型
export interface FormControlGroupPrefixProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀组件Props类型
export interface FormControlGroupSuffixProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀图标组件Props类型
export interface FormControlGroupPrefixIconProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀图标组件Props类型
export interface FormControlGroupSuffixIconProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀文本组件Props类型
export interface FormControlGroupPrefixTextProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀文本组件Props类型
export interface FormControlGroupSuffixTextProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀按钮组件Props类型
export interface FormControlGroupPrefixButtonProps extends BaseProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

// 表单控制组后缀按钮组件Props类型
export interface FormControlGroupSuffixButtonProps extends BaseProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

// 表单控制组前缀下拉菜单组件Props类型
export interface FormControlGroupPrefixDropdownProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀下拉菜单组件Props类型
export interface FormControlGroupSuffixDropdownProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀工具提示组件Props类型
export interface FormControlGroupPrefixTooltipProps extends BaseProps {
  children: React.ReactNode;
  content: React.ReactNode;
}

// 表单控制组后缀工具提示组件Props类型
export interface FormControlGroupSuffixTooltipProps extends BaseProps {
  children: React.ReactNode;
  content: React.ReactNode;
}

// 表单控制组前缀通知组件Props类型
export interface FormControlGroupPrefixNotificationProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀通知组件Props类型
export interface FormControlGroupSuffixNotificationProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀徽章组件Props类型
export interface FormControlGroupPrefixBadgeProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀徽章组件Props类型
export interface FormControlGroupSuffixBadgeProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀头像组件Props类型
export interface FormControlGroupPrefixAvatarProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀头像组件Props类型
export interface FormControlGroupSuffixAvatarProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀进度条组件Props类型
export interface FormControlGroupPrefixProgressProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀进度条组件Props类型
export interface FormControlGroupSuffixProgressProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀加载组件Props类型
export interface FormControlGroupPrefixLoadingProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀加载组件Props类型
export interface FormControlGroupSuffixLoadingProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀空状态组件Props类型
export interface FormControlGroupPrefixEmptyProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀空状态组件Props类型
export interface FormControlGroupSuffixEmptyProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀错误组件Props类型
export interface FormControlGroupPrefixErrorProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀错误组件Props类型
export interface FormControlGroupSuffixErrorProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀警告组件Props类型
export interface FormControlGroupPrefixWarningProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀警告组件Props类型
export interface FormControlGroupSuffixWarningProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀成功组件Props类型
export interface FormControlGroupPrefixSuccessProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀成功组件Props类型
export interface FormControlGroupSuffixSuccessProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀信息组件Props类型
export interface FormControlGroupPrefixInfoProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀信息组件Props类型
export interface FormControlGroupSuffixInfoProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀帮助组件Props类型
export interface FormControlGroupPrefixHelpProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀帮助组件Props类型
export interface FormControlGroupSuffixHelpProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀提示组件Props类型
export interface FormControlGroupPrefixHintProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀提示组件Props类型
export interface FormControlGroupSuffixHintProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀验证组件Props类型
export interface FormControlGroupPrefixValidationProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀验证组件Props类型
export interface FormControlGroupSuffixValidationProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀状态组件Props类型
export interface FormControlGroupPrefixStatusProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀状态组件Props类型
export interface FormControlGroupSuffixStatusProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀消息组件Props类型
export interface FormControlGroupPrefixMessageProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀消息组件Props类型
export interface FormControlGroupSuffixMessageProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀分隔符组件Props类型
export interface FormControlGroupPrefixSeparatorProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀分隔符组件Props类型
export interface FormControlGroupSuffixSeparatorProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀图标组件Props类型
export interface FormControlGroupPrefixIconProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀图标组件Props类型
export interface FormControlGroupSuffixIconProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀文本组件Props类型
export interface FormControlGroupPrefixTextProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀文本组件Props类型
export interface FormControlGroupSuffixTextProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀按钮组件Props类型
export interface FormControlGroupPrefixButtonProps extends BaseProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

// 表单控制组后缀按钮组件Props类型
export interface FormControlGroupSuffixButtonProps extends BaseProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

// 表单控制组前缀下拉菜单组件Props类型
export interface FormControlGroupPrefixDropdownProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀下拉菜单组件Props类型
export interface FormControlGroupSuffixDropdownProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀工具提示组件Props类型
export interface FormControlGroupPrefixTooltipProps extends BaseProps {
  children: React.ReactNode;
  content: React.ReactNode;
}

// 表单控制组后缀工具提示组件Props类型
export interface FormControlGroupSuffixTooltipProps extends BaseProps {
  children: React.ReactNode;
  content: React.ReactNode;
}

// 表单控制组前缀通知组件Props类型
export interface FormControlGroupPrefixNotificationProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀通知组件Props类型
export interface FormControlGroupSuffixNotificationProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀徽章组件Props类型
export interface FormControlGroupPrefixBadgeProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀徽章组件Props类型
export interface FormControlGroupSuffixBadgeProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀头像组件Props类型
export interface FormControlGroupPrefixAvatarProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀头像组件Props类型
export interface FormControlGroupSuffixAvatarProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀进度条组件Props类型
export interface FormControlGroupPrefixProgressProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀进度条组件Props类型
export interface FormControlGroupSuffixProgressProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀加载组件Props类型
export interface FormControlGroupPrefixLoadingProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀加载组件Props类型
export interface FormControlGroupSuffixLoadingProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀空状态组件Props类型
export interface FormControlGroupPrefixEmptyProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀空状态组件Props类型
export interface FormControlGroupSuffixEmptyProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀错误组件Props类型
export interface FormControlGroupPrefixErrorProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀错误组件Props类型
export interface FormControlGroupSuffixErrorProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀警告组件Props类型
export interface FormControlGroupPrefixWarningProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀警告组件Props类型
export interface FormControlGroupSuffixWarningProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀成功组件Props类型
export interface FormControlGroupPrefixSuccessProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀成功组件Props类型
export interface FormControlGroupSuffixSuccessProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀信息组件Props类型
export interface FormControlGroupPrefixInfoProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀信息组件Props类型
export interface FormControlGroupSuffixInfoProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀帮助组件Props类型
export interface FormControlGroupPrefixHelpProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀帮助组件Props类型
export interface FormControlGroupSuffixHelpProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀提示组件Props类型
export interface FormControlGroupPrefixHintProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀提示组件Props类型
export interface FormControlGroupSuffixHintProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀验证组件Props类型
export interface FormControlGroupPrefixValidationProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀验证组件Props类型
export interface FormControlGroupSuffixValidationProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀状态组件Props类型
export interface FormControlGroupPrefixStatusProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀状态组件Props类型
export interface FormControlGroupSuffixStatusProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀消息组件Props类型
export interface FormControlGroupPrefixMessageProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀消息组件Props类型
export interface FormControlGroupSuffixMessageProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀分隔符组件Props类型
export interface FormControlGroupPrefixSeparatorProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀分隔符组件Props类型
export interface FormControlGroupSuffixSeparatorProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀图标组件Props类型
export interface FormControlGroupPrefixIconProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀图标组件Props类型
export interface FormControlGroupSuffixIconProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀文本组件Props类型
export interface FormControlGroupPrefixTextProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀文本组件Props类型
export interface FormControlGroupSuffixTextProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀按钮组件Props类型
export interface FormControlGroupPrefixButtonProps extends BaseProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

// 表单控制组后缀按钮组件Props类型
export interface FormControlGroupSuffixButtonProps extends BaseProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

// 表单控制组前缀下拉菜单组件Props类型
export interface FormControlGroupPrefixDropdownProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀下拉菜单组件Props类型
export interface FormControlGroupSuffixDropdownProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀工具提示组件Props类型
export interface FormControlGroupPrefixTooltipProps extends BaseProps {
  children: React.ReactNode;
  content: React.ReactNode;
}

// 表单控制组后缀工具提示组件Props类型
export interface FormControlGroupSuffixTooltipProps extends BaseProps {
  children: React.ReactNode;
  content: React.ReactNode;
}

// 表单控制组前缀通知组件Props类型
export interface FormControlGroupPrefixNotificationProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀通知组件Props类型
export interface FormControlGroupSuffixNotificationProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀徽章组件Props类型
export interface FormControlGroupPrefixBadgeProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀徽章组件Props类型
export interface FormControlGroupSuffixBadgeProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀头像组件Props类型
export interface FormControlGroupPrefixAvatarProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀头像组件Props类型
export interface FormControlGroupSuffixAvatarProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀进度条组件Props类型
export interface FormControlGroupPrefixProgressProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀进度条组件Props类型
export interface FormControlGroupSuffixProgressProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀加载组件Props类型
export interface FormControlGroupPrefixLoadingProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀加载组件Props类型
export interface FormControlGroupSuffixLoadingProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀空状态组件Props类型
export interface FormControlGroupPrefixEmptyProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀空状态组件Props类型
export interface FormControlGroupSuffixEmptyProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀错误组件Props类型
export interface FormControlGroupPrefixErrorProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀错误组件Props类型
export interface FormControlGroupSuffixErrorProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀警告组件Props类型
export interface FormControlGroupPrefixWarningProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀警告组件Props类型
export interface FormControlGroupSuffixWarningProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀成功组件Props类型
export interface FormControlGroupPrefixSuccessProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀成功组件Props类型
export interface FormControlGroupSuffixSuccessProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀信息组件Props类型
export interface FormControlGroupPrefixInfoProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀信息组件Props类型
export interface FormControlGroupSuffixInfoProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀帮助组件Props类型
export interface FormControlGroupPrefixHelpProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀帮助组件Props类型
export interface FormControlGroupSuffixHelpProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀提示组件Props类型
export interface FormControlGroupPrefixHintProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀提示组件Props类型
export interface FormControlGroupSuffixHintProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀验证组件Props类型
export interface FormControlGroupPrefixValidationProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀验证组件Props类型
export interface FormControlGroupSuffixValidationProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀状态组件Props类型
export interface FormControlGroupPrefixStatusProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀状态组件Props类型
export interface FormControlGroupSuffixStatusProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀消息组件Props类型
export interface FormControlGroupPrefixMessageProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀消息组件Props类型
export interface FormControlGroupSuffixMessageProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀分隔符组件Props类型
export interface FormControlGroupPrefixSeparatorProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀分隔符组件Props类型
export interface FormControlGroupSuffixSeparatorProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀图标组件Props类型
export interface FormControlGroupPrefixIconProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀图标组件Props类型
export interface FormControlGroupSuffixIconProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀文本组件Props类型
export interface FormControlGroupPrefixTextProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀文本组件Props类型
export interface FormControlGroupSuffixTextProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀按钮组件Props类型
export interface FormControlGroupPrefixButtonProps extends BaseProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

// 表单控制组后缀按钮组件Props类型
export interface FormControlGroupSuffixButtonProps extends BaseProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

// 表单控制组前缀下拉菜单组件Props类型
export interface FormControlGroupPrefixDropdownProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀下拉菜单组件Props类型
export interface FormControlGroupSuffixDropdownProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀工具提示组件Props类型
export interface FormControlGroupPrefixTooltipProps extends BaseProps {
  children: React.ReactNode;
  content: React.ReactNode;
}

// 表单控制组后缀工具提示组件Props类型
export interface FormControlGroupSuffixTooltipProps extends BaseProps {
  children: React.ReactNode;
  content: React.ReactNode;
}

// 表单控制组前缀通知组件Props类型
export interface FormControlGroupPrefixNotificationProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀通知组件Props类型
export interface FormControlGroupSuffixNotificationProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀徽章组件Props类型
export interface FormControlGroupPrefixBadgeProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀徽章组件Props类型
export interface FormControlGroupSuffixBadgeProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀头像组件Props类型
export interface FormControlGroupPrefixAvatarProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀头像组件Props类型
export interface FormControlGroupSuffixAvatarProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀进度条组件Props类型
export interface FormControlGroupPrefixProgressProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀进度条组件Props类型
export interface FormControlGroupSuffixProgressProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀加载组件Props类型
export interface FormControlGroupPrefixLoadingProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀加载组件Props类型
export interface FormControlGroupSuffixLoadingProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀空状态组件Props类型
export interface FormControlGroupPrefixEmptyProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀空状态组件Props类型
export interface FormControlGroupSuffixEmptyProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀错误组件Props类型
export interface FormControlGroupPrefixErrorProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀错误组件Props类型
export interface FormControlGroupSuffixErrorProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀警告组件Props类型
export interface FormControlGroupPrefixWarningProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀警告组件Props类型
export interface FormControlGroupSuffixWarningProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀成功组件Props类型
export interface FormControlGroupPrefixSuccessProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀成功组件Props类型
export interface FormControlGroupSuffixSuccessProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀信息组件Props类型
export interface FormControlGroupPrefixInfoProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀信息组件Props类型
export interface FormControlGroupSuffixInfoProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀帮助组件Props类型
export interface FormControlGroupPrefixHelpProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀帮助组件Props类型
export interface FormControlGroupSuffixHelpProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀提示组件Props类型
export interface FormControlGroupPrefixHintProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀提示组件Props类型
export interface FormControlGroupSuffixHintProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀验证组件Props类型
export interface FormControlGroupPrefixValidationProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀验证组件Props类型
export interface FormControlGroupSuffixValidationProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀状态组件Props类型
export interface FormControlGroupPrefixStatusProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀状态组件Props类型
export interface FormControlGroupSuffixStatusProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀消息组件Props类型
export interface FormControlGroupPrefixMessageProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀消息组件Props类型
export interface FormControlGroupSuffixMessageProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀分隔符组件Props类型
export interface FormControlGroupPrefixSeparatorProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀分隔符组件Props类型
export interface FormControlGroupSuffixSeparatorProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀图标组件Props类型
export interface FormControlGroupPrefixIconProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀图标组件Props类型
export interface FormControlGroupSuffixIconProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀文本组件Props类型
export interface FormControlGroupPrefixTextProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀文本组件Props类型
export interface FormControlGroupSuffixTextProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀按钮组件Props类型
export interface FormControlGroupPrefixButtonProps extends BaseProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

// 表单控制组后缀按钮组件Props类型
export interface FormControlGroupSuffixButtonProps extends BaseProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

// 表单控制组前缀下拉菜单组件Props类型
export interface FormControlGroupPrefixDropdownProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀下拉菜单组件Props类型
export interface FormControlGroupSuffixDropdownProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀工具提示组件Props类型
export interface FormControlGroupPrefixTooltipProps extends BaseProps {
  children: React.ReactNode;
  content: React.ReactNode;
}

// 表单控制组后缀工具提示组件Props类型
export interface FormControlGroupSuffixTooltipProps extends BaseProps {
  children: React.ReactNode;
  content: React.ReactNode;
}

// 表单控制组前缀通知组件Props类型
export interface FormControlGroupPrefixNotificationProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀通知组件Props类型
export interface FormControlGroupSuffixNotificationProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀徽章组件Props类型
export interface FormControlGroupPrefixBadgeProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀徽章组件Props类型
export interface FormControlGroupSuffixBadgeProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀头像组件Props类型
export interface FormControlGroupPrefixAvatarProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀头像组件Props类型
export interface FormControlGroupSuffixAvatarProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀进度条组件Props类型
export interface FormControlGroupPrefixProgressProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀进度条组件Props类型
export interface FormControlGroupSuffixProgressProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀加载组件Props类型
export interface FormControlGroupPrefixLoadingProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀加载组件Props类型
export interface FormControlGroupSuffixLoadingProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀空状态组件Props类型
export interface FormControlGroupPrefixEmptyProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀空状态组件Props类型
export interface FormControlGroupSuffixEmptyProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀错误组件Props类型
export interface FormControlGroupPrefixErrorProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀错误组件Props类型
export interface FormControlGroupSuffixErrorProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀警告组件Props类型
export interface FormControlGroupPrefixWarningProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀警告组件Props类型
export interface FormControlGroupSuffixWarningProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀成功组件Props类型
export interface FormControlGroupPrefixSuccessProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀成功组件Props类型
export interface FormControlGroupSuffixSuccessProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀信息组件Props类型
export interface FormControlGroupPrefixInfoProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀信息组件Props类型
export interface FormControlGroupSuffixInfoProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀帮助组件Props类型
export interface FormControlGroupPrefixHelpProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀帮助组件Props类型
export interface FormControlGroupSuffixHelpProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀提示组件Props类型
export interface FormControlGroupPrefixHintProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀提示组件Props类型
export interface FormControlGroupSuffixHintProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀验证组件Props类型
export interface FormControlGroupPrefixValidationProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀验证组件Props类型
export interface FormControlGroupSuffixValidationProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀状态组件Props类型
export interface FormControlGroupPrefixStatusProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀状态组件Props类型
export interface FormControlGroupSuffixStatusProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀消息组件Props类型
export interface FormControlGroupPrefixMessageProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀消息组件Props类型
export interface FormControlGroupSuffixMessageProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀分隔符组件Props类型
export interface FormControlGroupPrefixSeparatorProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀分隔符组件Props类型
export interface FormControlGroupSuffixSeparatorProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀图标组件Props类型
export interface FormControlGroupPrefixIconProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀图标组件Props类型
export interface FormControlGroupSuffixIconProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀文本组件Props类型
export interface FormControlGroupPrefixTextProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀文本组件Props类型
export interface FormControlGroupSuffixTextProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀按钮组件Props类型
export interface FormControlGroupPrefixButtonProps extends BaseProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

// 表单控制组后缀按钮组件Props类型
export interface FormControlGroupSuffixButtonProps extends BaseProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

// 表单控制组前缀下拉菜单组件Props类型
export interface FormControlGroupPrefixDropdownProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀下拉菜单组件Props类型
export interface FormControlGroupSuffixDropdownProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀工具提示组件Props类型
export interface FormControlGroupPrefixTooltipProps extends BaseProps {
  children: React.ReactNode;
  content: React.ReactNode;
}

// 表单控制组后缀工具提示组件Props类型
export interface FormControlGroupSuffixTooltipProps extends BaseProps {
  children: React.ReactNode;
  content: React.ReactNode;
}

// 表单控制组前缀通知组件Props类型
export interface FormControlGroupPrefixNotificationProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀通知组件Props类型
export interface FormControlGroupSuffixNotificationProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀徽章组件Props类型
export interface FormControlGroupPrefixBadgeProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀徽章组件Props类型
export interface FormControlGroupSuffixBadgeProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀头像组件Props类型
export interface FormControlGroupPrefixAvatarProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀头像组件Props类型
export interface FormControlGroupSuffixAvatarProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀进度条组件Props类型
export interface FormControlGroupPrefixProgressProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀进度条组件Props类型
export interface FormControlGroupSuffixProgressProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀加载组件Props类型
export interface FormControlGroupPrefixLoadingProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀加载组件Props类型
export interface FormControlGroupSuffixLoadingProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀空状态组件Props类型
export interface FormControlGroupPrefixEmptyProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀空状态组件Props类型
export interface FormControlGroupSuffixEmptyProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀错误组件Props类型
export interface FormControlGroupPrefixErrorProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀错误组件Props类型
export interface FormControlGroupSuffixErrorProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组前缀警告组件Props类型
export interface FormControlGroupPrefixWarningProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制组后缀警告组件Props类型
export interface FormControlGroupSuffixWarningProps extends BaseProps {
  children: React.ReactNode;
}

// 表单控制