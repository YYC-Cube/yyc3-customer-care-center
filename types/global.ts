/**
 * @file 全局类型声明
 * @description YYC³ Customer Care Center 项目的全局类型声明
 * @author YYC³
 * @version 1.0.0
 */

// 基础类型定义
export type ID = string | number;
export type DateTime = string;
export type Locale = 'zh-CN' | 'en-US' | 'ja-JP' | 'ko-KR';
export type Theme = 'light' | 'dark' | 'system';

// 通用状态类型
export type Status = 'pending' | 'in-progress' | 'completed' | 'failed' | 'cancelled';
export type Priority = 'low' | 'medium' | 'high' | 'urgent';
export type Visibility = 'public' | 'private' | 'internal';

// 通用分页类型
export interface Pagination {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

// 通用筛选类型
export interface Filter {
  [key: string]: any;
}

// 通用排序类型
export interface Sort {
  field: string;
  order: 'asc' | 'desc';
}

// 通用响应类型
export interface Response<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  code?: number;
}

// 通用分页响应类型
export interface PaginatedResponse<T = any> extends Response {
  data?: {
    items: T[];
    pagination: Pagination;
  };
}

// 通用错误类型
export interface ErrorInfo {
  code: number;
  message: string;
  details?: any;
}

// 通用元数据类型
export interface Metadata {
  createdAt: DateTime;
  updatedAt: DateTime;
  createdBy?: ID;
  updatedBy?: ID;
}

// 通用ID响应类型
export interface IdResponse extends Response {
  data?: {
    id: ID;
  };
}

// 通用确认响应类型
export interface ConfirmationResponse extends Response {
  data?: {
    confirmed: boolean;
  };
}

// 通用统计类型
export interface Statistics {
  total: number;
  active: number;
  completed: number;
  failed: number;
  [key: string]: number;
}

// 通用选项类型
export interface Option<T = string> {
  value: T;
  label: string;
  disabled?: boolean;
  icon?: string;
}

// 通用标签类型
export interface Tag {
  id: ID;
  name: string;
  color?: string;
  description?: string;
}

// 通用文件类型
export interface File {
  id: ID;
  name: string;
  type: string;
  size: number;
  url: string;
  thumbnailUrl?: string;
  metadata?: Record<string, any>;
}

// 通用位置类型
export interface Location {
  lat: number;
  lng: number;
  address?: string;
  city?: string;
  country?: string;
}

// 通用联系方式类型
export interface Contact {
  email?: string;
  phone?: string;
  website?: string;
  address?: string;
}

// 通用配置类型
export interface Config {
  [key: string]: any;
}

// 通用环境类型
export type Environment = 'development' | 'staging' | 'production';

// 通用模式类型
export type Mode = 'light' | 'dark' | 'system';

// 通用尺寸类型
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// 通用颜色类型
export type Color = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'gray';

// 通用对齐类型
export type Alignment = 'left' | 'center' | 'right' | 'justify';

// 通用方向类型
export type Direction = 'horizontal' | 'vertical';

// 通用布局类型
export type Layout = 'grid' | 'list' | 'card' | 'table';

// 通用动画类型
export type Animation = 'fade' | 'slide' | 'scale' | 'rotate' | 'bounce';

// 通用过渡类型
export type Transition = 'none' | 'fade' | 'slide' | 'scale';

// 通用加载状态类型
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

// 通用空状态类型
export type EmptyState = 'default' | 'no-data' | 'error' | 'loading' | 'forbidden' | 'not-found';

// 通用权限类型
export type Permission = string;

// 通用角色类型
export type Role = string;

// 通用用户类型
export type UserType = 'admin' | 'user' | 'guest';

// 通用设备类型
export type DeviceType = 'desktop' | 'tablet' | 'mobile';

// 通用浏览器类型
export type BrowserType = 'chrome' | 'firefox' | 'safari' | 'edge' | 'other';

// 通用操作系统类型
export type OsType = 'windows' | 'macos' | 'linux' | 'ios' | 'android' | 'other';

// 通用网络类型
export type NetworkType = 'online' | 'offline' | 'slow-2g' | '2g' | '3g' | '4g' | '5g';

// 通用语言类型
export type Language = string;

// 通用货币类型
export type Currency = string;

// 通用时区类型
export type Timezone = string;

// 通用区域类型
export type Region = string;

// 通用国家类型
export type Country = string;

// 通用城市类型
export type City = string;

// 通用街道类型
export type Street = string;

// 通用邮编类型
export type ZipCode = string;

// 通用地址类型
export interface Address {
  street: string;
  city: string;
  region: string;
  country: string;
  zipCode: string;
}

// 通用坐标类型
export interface Coordinates {
  latitude: number;
  longitude: number;
}

// 通用范围类型
export interface Range<T = number> {
  min: T;
  max: T;
}

// 通用尺寸范围类型
export interface SizeRange {
  width: number;
  height: number;
}

// 通用时间范围类型
export interface TimeRange {
  start: DateTime;
  end: DateTime;
}

// 通用日期范围类型
export interface DateRange {
  start: DateTime;
  end: DateTime;
}

// 通用金额范围类型
export interface AmountRange {
  min: number;
  max: number;
}

// 通用计数范围类型
export interface CountRange {
  min: number;
  max: number;
}

// 通用百分比范围类型
export interface PercentageRange {
  min: number;
  max: number;
}

// 通用评分范围类型
export interface RatingRange {
  min: number;
  max: number;
}

// 通用权重范围类型
export interface WeightRange {
  min: number;
  max: number;
}

// 通用距离范围类型
export interface DistanceRange {
  min: number;
  max: number;
}

// 通用速度范围类型
export interface SpeedRange {
  min: number;
  max: number;
}

// 通用温度范围类型
export interface TemperatureRange {
  min: number;
  max: number;
}

// 通用湿度范围类型
export interface HumidityRange {
  min: number;
  max: number;
}

// 通用压力范围类型
export interface PressureRange {
  min: number;
  max: number;
}

// 通用亮度范围类型
export interface BrightnessRange {
  min: number;
  max: number;
}

// 通用音量范围类型
export interface VolumeRange {
  min: number;
  max: number;
}

// 通用电量范围类型
export interface BatteryRange {
  min: number;
  max: number;
}

// 通用内存范围类型
export interface MemoryRange {
  min: number;
  max: number;
}

// 通用存储范围类型
export interface StorageRange {
  min: number;
  max: number;
}

// 通用CPU范围类型
export interface CpuRange {
  min: number;
  max: number;
}

// 通用GPU范围类型
export interface GpuRange {
  min: number;
  max: number;
}

// 通用网络带宽范围类型
export interface BandwidthRange {
  min: number;
  max: number;
}

// 通用延迟范围类型
export interface LatencyRange {
  min: number;
  max: number;
}

// 通用吞吐量范围类型
export interface ThroughputRange {
  min: number;
  max: number;
}

// 通用并发范围类型
export interface ConcurrencyRange {
  min: number;
  max: number;
}

// 通用请求量范围类型
export interface RequestRange {
  min: number;
  max: number;
}

// 通用响应时间范围类型
export interface ResponseTimeRange {
  min: number;
  max: number;
}

// 通用错误率范围类型
export interface ErrorRateRange {
  min: number;
  max: number;
}

// 通用成功率范围类型
export interface SuccessRateRange {
  min: number;
  max: number;
}

// 通用覆盖率范围类型
export interface CoverageRange {
  min: number;
  max: number;
}

// 通用准确率范围类型
export interface AccuracyRange {
  min: number;
  max: number;
}

// 通用召回率范围类型
export interface RecallRange {
  min: number;
  max: number;
}

// 通用F1分数范围类型
export interface F1ScoreRange {
  min: number;
  max: number;
}

// 通用精确度范围类型
export interface PrecisionRange {
  min: number;
  max: number;
}

// 通用灵敏度范围类型
export interface SensitivityRange {
  min: number;
  max: number;
}

// 通用特异性范围类型
export interface SpecificityRange {
  min: number;
  max: number;
}

// 通用阳性预测值范围类型
export interface PositivePredictiveValueRange {
  min: number;
  max: number;
}

// 通用阴性预测值范围类型
export interface NegativePredictiveValueRange {
  min: number;
  max: number;
}

// 通用ROC曲线下面积范围类型
export interface RocAucRange {
  min: number;
  max: number;
}

// 通用混淆矩阵类型
export interface ConfusionMatrix {
  truePositive: number;
  trueNegative: number;
  falsePositive: number;
  falseNegative: number;
}

// 通用评估指标类型
export interface EvaluationMetrics {
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
  rocAuc?: number;
  confusionMatrix?: ConfusionMatrix;
}

// 通用性能指标类型
export interface PerformanceMetrics {
  responseTime: number;
  throughput: number;
  errorRate: number;
  successRate: number;
  latency: number;
  bandwidth: number;
  concurrency: number;
  requestsPerSecond: number;
}

// 通用系统指标类型
export interface SystemMetrics {
  cpuUsage: number;
  memoryUsage: number;
  diskUsage: number;
  networkUsage: number;
  gpuUsage?: number;
  temperature?: number;
  uptime: number;
}

// 通用业务指标类型
export interface BusinessMetrics {
  revenue: number;
  profit: number;
  cost: number;
  conversionRate: number;
  retentionRate: number;
  churnRate: number;
  customerLifetimeValue: number;
  averageOrderValue: number;
  ordersPerCustomer: number;
  customersAcquired: number;
  customersRetained: number;
  customersChurned: number;
}

// 通用用户指标类型
export interface UserMetrics {
  activeUsers: number;
  newUsers: number;
  returningUsers: number;
  userRetentionRate: number;
  userChurnRate: number;
  averageSessionDuration: number;
  sessionsPerUser: number;
  pageViewsPerSession: number;
  bounceRate: number;
  conversionRate: number;
}

// 通用产品指标类型
export interface ProductMetrics {
  sales: number;
  revenue: number;
  profit: number;
  cost: number;
  inventory: number;
  stockoutRate: number;
  overstockRate: number;
  averageLeadTime: number;
  orderFulfillmentRate: number;
  returnRate: number;
  refundRate: number;
  customerSatisfaction: number;
}

// 通用营销指标类型
export interface MarketingMetrics {
  campaignPerformance: number;
  clickThroughRate: number;
  conversionRate: number;
  costPerClick: number;
  costPerAcquisition: number;
  returnOnAdSpend: number;
  brandAwareness: number;
  engagementRate: number;
  socialMediaReach: number;
  emailOpenRate: number;
  emailClickRate: number;
  emailConversionRate: number;
}

// 通用客服指标类型
export interface CustomerServiceMetrics {
  averageResponseTime: number;
  averageResolutionTime: number;
  firstResponseResolutionRate: number;
  customerSatisfaction: number;
  netPromoterScore: number;
  customerEffortScore: number;
  ticketVolume: number;
  ticketBacklog: number;
  ticketResolutionRate: number;
  agentProductivity: number;
  agentUtilization: number;
}

// 通用物流指标类型
export interface LogisticsMetrics {
  onTimeDeliveryRate: number;
  averageDeliveryTime: number;
  shippingCost: number;
  orderFulfillmentRate: number;
  inventoryAccuracy: number;
  warehouseUtilization: number;
  transportationCost: number;
  fuelCost: number;
  vehicleUtilization: number;
  driverProductivity: number;
}

// 通用供应链指标类型
export interface SupplyChainMetrics {
  supplierPerformance: number;
  leadTime: number;
  orderAccuracy: number;
  deliveryReliability: number;
  inventoryTurnover: number;
  daysOfInventoryOnHand: number;
  stockoutRate: number;
  overstockRate: number;
  procurementCost: number;
  supplierQuality: number;
}

// 通用财务指标类型
export interface FinancialMetrics {
  revenue: number;
  profit: number;
  cost: number;
  grossMargin: number;
  operatingMargin: number;
  netMargin: number;
  returnOnAssets: number;
  returnOnEquity: number;
  returnOnInvestment: number;
  cashFlow: number;
  workingCapital: number;
  currentRatio: number;
  quickRatio: number;
  debtToEquityRatio: number;
  interestCoverageRatio: number;
  assetTurnover: number;
  inventoryTurnover: number;
  accountsReceivableTurnover: number;
  accountsPayableTurnover: number;
}

// 通用人力资源指标类型
export interface HumanResourcesMetrics {
  employeeTurnoverRate: number;
  employeeRetentionRate: number;
  employeeSatisfaction: number;
  employeeEngagement: number;
  productivity: number;
  absenteeismRate: number;
  trainingEffectiveness: number;
  recruitmentCost: number;
  timeToFillPositions: number;
  employeePerformance: number;
  diversityIndex: number;
  inclusionIndex: number;
}

// 通用IT指标类型
export interface ItMetrics {
  systemAvailability: number;
  systemReliability: number;
  systemPerformance: number;
  systemScalability: number;
  systemSecurity: number;
  systemMaintainability: number;
  systemUsability: number;
  systemAccessibility: number;
  systemCompatibility: number;
  systemInteroperability: number;
  systemCompliance: number;
  systemAuditScore: number;
  systemRiskScore: number;
  systemVulnerabilityScore: number;
  systemPatchLevel: number;
  systemBackupFrequency: number;
  systemRecoveryTime: number;
  systemDisasterRecoveryPlan: number;
  systemBusinessContinuityPlan: number;
  systemIncidentResponseTime: number;
  systemIncidentResolutionTime: number;
  systemIncidentFrequency: number;
  systemIncidentSeverity: number;
  systemChangeRequestVolume: number;
  systemChangeRequestSuccessRate: number;
  systemChangeRequestFailureRate: number;
  systemChangeRequestBacklog: number;
  systemChangeRequestLeadTime: number;
  systemServiceRequestVolume: number;
  systemServiceRequestSuccessRate: number;
  systemServiceRequestFailureRate: number;
  systemServiceRequestBacklog: number;
  systemServiceRequestLeadTime: number;
  systemProblemReportVolume: number;
  systemProblemReportSuccessRate: number;
  systemProblemReportFailureRate: number;
  systemProblemReportBacklog: number;
  systemProblemReportLeadTime: number;
  systemPerformanceMetrics: PerformanceMetrics;
  systemSystemMetrics: SystemMetrics;
  systemUserMetrics: UserMetrics;
  systemBusinessMetrics: BusinessMetrics;
}

// 通用环境指标类型
export interface EnvironmentalMetrics {
  carbonFootprint: number;
  energyConsumption: number;
  waterConsumption: number;
  wasteGeneration: number;
  wasteRecyclingRate: number;
  airQuality: number;
  waterQuality: number;
  soilQuality: number;
  biodiversity: number;
  ecosystemHealth: number;
  renewableEnergyUsage: number;
  energyEfficiency: number;
  waterEfficiency: number;
  resourceEfficiency: number;
  circularEconomyScore: number;
  sustainabilityScore: number;
  environmentalCompliance: number;
  environmentalAuditScore: number;
  environmentalRiskScore: number;
  environmentalOpportunityScore: number;
}

// 通用社会指标类型
export interface SocialMetrics {
  communityEngagement: number;
  socialImpact: number;
  stakeholderSatisfaction: number;
  employeeWellbeing: number;
  customerWellbeing: number;
  supplierWellbeing: number;
  communityWellbeing: number;
  socialInclusion: number;
  socialEquity: number;
  socialJustice: number;
  socialCohesion: number;
  socialTrust: number;
  socialCapital: number;
  socialLicenseToOperate: number;
  socialCompliance: number;
  socialAuditScore: number;
  socialRiskScore: number;
  socialOpportunityScore: number;
}

// 通用治理指标类型
export interface GovernanceMetrics {
  boardEffectiveness: number;
  executiveEffectiveness: number;
  managementEffectiveness: number;
  operationalEffectiveness: number;
  strategicEffectiveness: number;
  tacticalEffectiveness: number;
  governanceStructure: number;
  governanceProcess: number;
  governancePolicy: number;
  governanceProcedure: number;
  governanceControl: number;
  governanceRisk: number;
  governanceCompliance: number;
  governanceEthics: number;
  governanceTransparency: number;
  governanceAccountability: number;
  governanceResponsibility: number;
  governanceSustainability: number;
  governanceInnovation: number;
  governanceDigitalization: number;
  governanceTransformation: number;
  governanceAuditScore: number;
  governanceRiskScore: number;
  governanceOpportunityScore: number;
}

// 通用ESG指标类型
export interface EsgMetrics {
  environmental: EnvironmentalMetrics;
  social: SocialMetrics;
  governance: GovernanceMetrics;
  overallScore: number;
  industryRank: number;
  globalRank: number;
  trend: 'improving' | 'stable' | 'declining';
  risks: string[];
  opportunities: string[];
  recommendations: string[];
}

// 通用风险指标类型
export interface RiskMetrics {
  likelihood: number;
  impact: number;
  severity: number;
  mitigationStatus: 'identified' | 'assessed' | 'mitigated' | 'monitored';
  mitigationPlan: string;
  owner: string;
  deadline: DateTime;
  status: Status;
}

// 通用机会指标类型
export interface OpportunityMetrics {
  likelihood: number;
  impact: number;
  value: number;
  exploitationStatus: 'identified' | 'assessed' | 'exploited' | 'monitored';
  exploitationPlan: string;
  owner: string;
  deadline: DateTime;
  status: Status;
}

// 通用项目指标类型
export interface ProjectMetrics {
  scheduleVariance: number;
  costVariance: number;
  scopeVariance: number;
  qualityVariance: number;
  riskVariance: number;
  opportunityVariance: number;
  resourceVariance: number;
  communicationVariance: number;
  stakeholderVariance: number;
  overallVariance: number;
  schedulePerformanceIndex: number;
  costPerformanceIndex: number;
  scopePerformanceIndex: number;
  qualityPerformanceIndex: number;
  riskPerformanceIndex: number;
  opportunityPerformanceIndex: number;
  resourcePerformanceIndex: number;
  communicationPerformanceIndex: number;
  stakeholderPerformanceIndex: number;
  overallPerformanceIndex: number;
}

// 通用任务指标类型
export interface TaskMetrics {
  completionRate: number;
  onTimeCompletionRate: number;
  qualityRate: number;
  efficiencyRate: number;
  effectivenessRate: number;
  satisfactionRate: number;
  averageCompletionTime: number;
  averageQualityScore: number;
  averageEfficiencyScore: number;
  averageEffectivenessScore: number;
  averageSatisfactionScore: number;
}

// 通用流程指标类型
export interface ProcessMetrics {
  cycleTime: number;
  leadTime: number;
  throughput: number;
  efficiency: number;
  effectiveness: number;
  quality: number;
  cost: number;
  capacity: number;
  utilization: number;
  bottleneck: number;
  waste: number;
  valueAddedTime: number;
  nonValueAddedTime: number;
  processCapability: number;
  processPerformance: number;
  processMaturity: number;
  processCompliance: number;
  processAuditScore: number;
  processRiskScore: number;
  processOpportunityScore: number;
}

// 通用服务指标类型
export interface ServiceMetrics {
  availability: number;
  reliability: number;
  performance: number;
  scalability: number;
  security: number;
  maintainability: number;
  usability: number;
  accessibility: number;
  compatibility: number;
  interoperability: number;
  compliance: number;
  auditScore: number;
  riskScore: number;
  vulnerabilityScore: number;
  patchLevel: number;
  backupFrequency: number;
  recoveryTime: number;
  disasterRecoveryPlan: number;
  businessContinuityPlan: number;
  incidentResponseTime: number;
  incidentResolutionTime: number;
  incidentFrequency: number;
  incidentSeverity: number;
  changeRequestVolume: number;
  changeRequestSuccessRate: number;
  changeRequestFailureRate: number;
  changeRequestBacklog: number;
  changeRequestLeadTime: number;
  serviceRequestVolume: number;
  serviceRequestSuccessRate: number;
  serviceRequestFailureRate: number;
  serviceRequestBacklog: number;
  serviceRequestLeadTime: number;
  problemReportVolume: number;
  problemReportSuccessRate: number;
  problemReportFailureRate: number;
  problemReportBacklog: number;
  problemReportLeadTime: number;
  performanceMetrics: PerformanceMetrics;
  systemMetrics: SystemMetrics;
  userMetrics: UserMetrics;
  businessMetrics: BusinessMetrics;
}

// 通用应用指标类型
export interface ApplicationMetrics {
  availability: number;
  reliability: number;
  performance: number;
  scalability: number;
  security: number;
  maintainability: number;
  usability: number;
  accessibility: number;
  compatibility: number;
  interoperability: number;
  compliance: number;
  auditScore: number;
  riskScore: number;
  vulnerabilityScore: number;
  patchLevel: number;
  backupFrequency: number;
  recoveryTime: number;
  disasterRecoveryPlan: number;
  businessContinuityPlan: number;
  incidentResponseTime: number;
  incidentResolutionTime: number;
  incidentFrequency: number;
  incidentSeverity: number;
  changeRequestVolume: number;
  changeRequestSuccessRate: number;
  changeRequestFailureRate: number;
  changeRequestBacklog: number;
  changeRequestLeadTime: number;
  serviceRequestVolume: number;
  serviceRequestSuccessRate: number;
  serviceRequestFailureRate: number;
  serviceRequestBacklog: number;
  serviceRequestLeadTime: number;
  problemReportVolume: number;
  problemReportSuccessRate: number;
  problemReportFailureRate: number;
  problemReportBacklog: number;
  problemReportLeadTime: number;
  performanceMetrics: PerformanceMetrics;
  systemMetrics: SystemMetrics;
  userMetrics: UserMetrics;
  businessMetrics: BusinessMetrics;
}

// 通用数据库指标类型
export interface DatabaseMetrics {
  availability: number;
  reliability: number;
  performance: number;
  scalability: number;
  security: number;
  maintainability: number;
  usability: number;
  accessibility: number;
  compatibility: number;
  interoperability: number;
  compliance: number;
  auditScore: number;
  riskScore: number;
  vulnerabilityScore: number;
  patchLevel: number;
  backupFrequency: number;
  recoveryTime: number;
  disasterRecoveryPlan: number;
  businessContinuityPlan: number;
  incidentResponseTime: number;
  incidentResolutionTime: number;
  incidentFrequency: number;
  incidentSeverity: number;
  changeRequestVolume: number;
  changeRequestSuccessRate: number;
  changeRequestFailureRate: number;
  changeRequestBacklog: number;
  changeRequestLeadTime: number;
  serviceRequestVolume: number;
  serviceRequestSuccessRate: number;
  serviceRequestFailureRate: number;
  serviceRequestBacklog: number;
  serviceRequestLeadTime: number;
  problemReportVolume: number;
  problemReportSuccessRate: number;
  problemReportFailureRate: number;
  problemReportBacklog: number;
  problemReportLeadTime: number;
  queryPerformance: number;
  queryExecutionTime: number;
  queryCount: number;
  queryCacheHitRate: number;
  queryCacheMissRate: number;
  connectionCount: number;
  connectionPoolUsage: number;
  transactionCount: number;
  transactionSuccessRate: number;
  transactionFailureRate: number;
  transactionDuration: number;
  deadlockCount: number;
  lockWaitTime: number;
  indexUsage: number;
  tableScanCount: number;
  indexScanCount: number;
  fullTableScanCount: number;
  fullIndexScanCount: number;
  joinCount: number;
  nestedLoopJoinCount: number;
  hashJoinCount: number;
  mergeJoinCount: number;
  temporaryTableCount: number;
  temporaryFileCount: number;
  sortCount: number;
  sortMemoryUsage: number;
  sortDiskUsage: number;
  bufferCacheHitRate: number;
  bufferCacheMissRate: number;
  sharedBufferUsage: number;
  workMemoryUsage: number;
  maintenanceWorkMemoryUsage: number;
  walBufferUsage: number;
  walFileCount: number;
  walSegmentCount: number;
  archiveCommandStatus: number;
  replicationLag: number;
  replicationStatus: number;
  synchronousCommit: number;
  checkpointInterval: number;
  checkpointCompletionTarget: number;
  maxConnections: number;
  maxPreparedTransactions: number;
  maxLocksPerTransaction: number;
  maxSlotsPerNode: number;
  maxWorkerProcesses: number;
  maxParallelWorkers: number;
  maxParallelWorkersPerGather: number;
  randomPageCost: number;
  seqPageCost: number;
  effectiveCacheSize: number;
  maintenanceWorkMem: number;
  workMem: number;
  sharedBuffers: number;
  walBuffers: number;
  minWalSize: number;
  maxWalSize: number;
  checkpointTimeout: number;
  superuserReservedConnections: number;
  idleInTransactionSessionTimeout: number;
  idleSessionTimeout: number;
  statementTimeout: number;
  lockTimeout: number;
  deadlockTimeout: number;
  logMinDurationStatement: number;
  logStatement: number;
  logLockWaits: number;
  logTempFiles: number;
  logTempBlocks: number;
  logMinMessages: number;
  logErrorVerbosity: number;
  logDestination: number;
  loggingCollector: number;
  logDirectory: number;
  logFilename: number;
  logRotationAge: number;
  logRotationSize: number;
  logTruncateOnRotation: number;
  logCheckpoints: number;
  logConnections: number;
  logDisconnections: number;
  logDuration: number;
  logHostname: number;
  logLinePrefix: number;
  logTimezone: number;
  clusterName: number;
  update_process_title: number;
  sharedMemoryType: number;
  dynamicSharedMemoryType: number;
  unixSocketDirectory: number;
  unixSocketPermissions: number;
  listenAddresses: number;
  port: number;
  maxConcurrentLogicalReplicationWorkers: number;
  maxConcurrentWalsenders: number;
  maxParallelMaintenanceWorkers: number;
  parallelWorkerRequirements: number;
  walLevel: number;
  fsync: number;
  walSyncMethod: number;
  fullPageWrites: number;
  walCompression: number;
  walLogHints: number;
  walWriterDelay: number;
  walWriterFlushAfter: number;
  commitDelay: number;
  commitSchedulerDelay: number;
  checkpointMinDuration: number;
  checkpointFlushAfter: number;
  archiveMode: number;
  archiveCommand: number;
  archiveTimeout: number;
  maxWalSenders: number;
  walSenderTimeout: number;
  hotStandby: number;
  maxStandbysWalSenders: number;
  hotStandbyFeedback: number;
  walReceiverTimeout: number;
  recoveryMinApplyDelay: number;
  recoveryTarget: number;
  recoveryTargetName: number;
  recoveryTargetTimeline: number;
  recoveryTargetXid: number;
  recoveryTargetLSN: number;
  recoveryTargetAction: number;
  recoveryTargetInclusive: number;
  recoveryStopAtEOL: number;
  recoveryEndCommand: number;
  internalTempMaxFilesPerProcess: number;
  tempFileLimit: number;
  logMinErrorStatement: number;
  logParquetErrors: number;
  clientMinMessages: number;
}

// 通用缓存指标类型
export interface CacheMetrics {
  hitRate: number;
  missRate: number;
  hitCount: number;
  missCount: number;
  totalCount: number;
  size: number;
  maxSize: number;
  utilization: number;
  evictionCount: number;
  evictionRate: number;
  averageGetTime: number;
  averageSetTime: number;
  averageDeleteTime: number;
  getCount: number;
  setCount: number;
  deleteCount: number;
  incrementCount: number;
  decrementCount: number;
  expireCount: number;
  persistCount: number;
  ttlAverage: number;
  ttlMedian: number;
  ttl95th: number;
  ttl99th: number;
  memoryUsage: number;
  memoryLimit: number;
  memoryUtilization: number;
  cpuUsage: number;
  networkIn: number;
  networkOut: number;
  connections: number;
  maxConnections: number;
  connectionUtilization: number;
  commandsProcessed: number;
  commandsPerSecond: number;
  errors: number;
  errorRate: number;
  uptime: number;
  version: string;
}

// 通用消息队列指标类型
export interface MessageQueueMetrics {
  queueDepth: number;
  messageCount: number;
  messageRate: number;
  consumerCount: number;
  producerCount: number;
  deliveryRate: number;
  deliveryLatency: number;
  consumptionRate: number;
  consumptionLatency: number;
  retryCount: number;
  retryRate: number;
  errorCount: number;
  errorRate: number;
  deadLetterCount: number;
  deadLetterRate: number;
  throughput: number;
  bandwidth: number;
  memoryUsage: number;
  diskUsage: number;
  cpuUsage: number;
  uptime: number;
  version: string;
}

// 通用负载均衡器指标类型
export interface LoadBalancerMetrics {
  requestCount: number;
  requestRate: number;
  errorCount: number;
  errorRate: number;
  connectionCount: number;
  connectionRate: number;
  backendServerCount: number;
  healthyBackendServerCount: number;
  unhealthyBackendServerCount: number;
  averageResponseTime: number;
  p95ResponseTime: number;
  p99ResponseTime: number;
  throughput: number;
  bandwidth: number;
  cpuUsage: number;
  memoryUsage: number;
  uptime: number;
  version: string;
}

// 通用API网关指标类型
export interface ApiGatewayMetrics {
  requestCount: number;
  requestRate: number;
  errorCount: number;
  errorRate: number;
  successCount: number;
  successRate: number;
  averageResponseTime: number;
  p95ResponseTime: number;
  p99ResponseTime: number;
  throughput: number;
  bandwidth: number;
  cacheHitRate: number;
  cacheMissRate: number;
  authenticationSuccessRate: number;
  authenticationFailureRate: number;
  authorizationSuccessRate: number;
  authorizationFailureRate: number;
  rateLimitCount: number;
  rateLimitRate: number;
  throttlingCount: number;
  throttlingRate: number;
  cpuUsage: number;
  memoryUsage: number;
  uptime: number;
  version: string;
}

// 通用CDN指标类型
export interface CdnMetrics {
  requestCount: number;
  requestRate: number;
  errorCount: number;
  errorRate: number;
  cacheHitCount: number;
  cacheHitRate: number;
  cacheMissCount: number;
  cacheMissRate: number;
  throughput: number;
  bandwidth: number;
  averageResponseTime: number;
  p95ResponseTime: number;
  p99ResponseTime: number;
  originRequestCount: number;
  originRequestRate: number;
  originErrorCount: number;
  originErrorRate: number;
  originResponseTime: number;
  geographicDistribution: Record<string, number>;
  deviceDistribution: Record<string, number>;
  browserDistribution: Record<string, number>;
  osDistribution: Record<string, number>;
  contentTypes: Record<string, number>;
  statusCodes: Record<string, number>;
  uptime: number;
  version: string;
}

// 通用DNS指标类型
export interface DnsMetrics {
  queryCount: number;
  queryRate: number;
  errorCount: number;
  errorRate: number;
  successCount: number;
  successRate: number;
  averageResponseTime: number;
  p95ResponseTime: number;
  p99ResponseTime: number;
  cacheHitCount: number;
  cacheHitRate: number;
  cacheMissCount: number;
  cacheMissRate: number;
  recordTypes: Record<string, number>;
  statusCodes: Record<string, number>;
  geographicDistribution: Record<string, number>;
  uptime: number;
  version: string;
}

// 通用WAF指标类型
export interface WafMetrics {
  requestCount: number;
  requestRate: number;
  blockedCount: number;
  blockedRate: number;
  allowedCount: number;
  allowedRate: number;
  detectedCount: number;
  detectedRate: number;
  falsePositiveCount: number;
  falsePositiveRate: number;
  falseNegativeCount: number;
  falseNegativeRate: number;
  ruleMatches: Record<string, number>;
  attackTypes: Record<string, number>;
  geographicDistribution: Record<string, number>;
  sourceIps: Record<string, number>;
  userAgents: Record<string, number>;
  statusCodes: Record<string, number>;
  throughput: number;
  bandwidth: number;
  cpuUsage: number;
  memoryUsage: number;
  uptime: number;
  version: string;
}

// 通用防火墙指标类型
export interface FirewallMetrics {
  packetCount: number;
  packetRate: number;
  bytesCount: number;
  bytesRate: number;
  droppedCount: number;
  droppedRate: number;
  acceptedCount: number;
  acceptedRate: number;
  rejectedCount: number;
  rejectedRate: number;
  connectionCount: number;
  connectionRate: number;
  sessionCount: number;
  sessionRate: number;
  ruleMatches: Record<string, number>;
  protocolDistribution: Record<string, number>;
  portDistribution: Record<string, number>;
  sourceIps: Record<string, number>;
  destinationIps: Record<string, number>;
  geographicDistribution: Record<string, number>;
  cpuUsage: number;
  memoryUsage: number;
  uptime: number;
  version: string;
}

// 通用VPN指标类型
export interface VpnMetrics {
  connectionCount: number;
  maxConnections: number;
  connectionUtilization: number;
  activeUsers: number;
  totalUsers: number;
  userUtilization: number;
  throughput: number;
  bandwidth: number;
  averageSessionDuration: number;
  sessionCount: number;
  sessionRate: number;
  errorCount: number;
  errorRate: number;
  authenticationSuccessRate: number;
  authenticationFailureRate: number;
  encryptionAlgorithm: string;
  compressionEnabled: boolean;
  cpuUsage: number;
  memoryUsage: number;
  uptime: number;
  version: string;
}

// 通用身份认证指标类型
export interface AuthenticationMetrics {
  loginCount: number;
  loginRate: number;
  logoutCount: number;
  logoutRate: number;
  authenticationSuccessCount: number;
  authenticationSuccessRate: number;
  authenticationFailureCount: number;
  authenticationFailureRate: number;
  mfaSuccessCount: number;
  mfaSuccessRate: number;
  mfaFailureCount: number;
  mfaFailureRate: number;
  sessionCount: number;
  activeSessions: number;
  expiredSessions: number;
  invalidatedSessions: number;
  tokenCount: number;
  validTokens: number;
  invalidTokens: number;
  expiredTokens: number;
  averageSessionDuration: number;
  averageTokenLifetime: number;
  bruteForceAttempts: number;
  accountLockouts: number;
  passwordChanges: number;
  passwordResetRequests: number;
  passwordResetSuccesses: number;
  passwordResetFailures: number;
  uptime: number;
  version: string;
}

// 通用授权指标类型
export interface AuthorizationMetrics {
  permissionCheckCount: number;
  permissionCheckRate: number;
  permissionGrantedCount: number;
  permissionGrantedRate: number;
  permissionDeniedCount: number;
  permissionDeniedRate: number;
  roleAssignmentCount: number;
  roleAssignmentRate: number;
  roleRevocationCount: number;
  roleRevocationRate: number;
  policyEvaluationCount: number;
  policyEvaluationRate: number;
  policyEvaluationTime: number;
  cacheHitRate: number;
  cacheMissRate: number;
  errorCount: number;
  errorRate: number;
  uptime: number;
  version: string;
}

// 通用审计指标类型
export interface AuditMetrics {
  eventCount: number;
  eventRate: number;
  successCount: number;
  successRate: number;
  failureCount: number;
  failureRate: number;
  eventTypes: Record<string, number>;
  userActions: Record<string, number>;
  resourceAccesses: Record<string, number>;
  ipAddresses: Record<string, number>;
  userAgents: Record<string, number>;
  statusCodes: Record<string, number>;
  averageProcessingTime: number;
  storageUsage: number;
  retentionPeriod: number;
  complianceScore: number;
  auditScore: number;
  uptime: number;
  version: string;
}

// 通用监控指标类型
export interface MonitoringMetrics {
  alertCount: number;
  alertRate: number;
  criticalAlerts: number;
  warningAlerts: number;
  infoAlerts: number;
  resolvedAlerts: number;
  activeAlerts: number;
  suppressedAlerts: number;
  alertResolutionTime: number;
  monitoringCoverage: number;
  metricCount: number;
  dashboardCount: number;
  reportCount: number;
  uptime: number;
  version: string;
}

// 通用日志指标类型
export interface LogMetrics {
  logCount: number;
  logRate: number;
  errorCount: number;
  errorRate: number;
  warningCount: number;
  warningRate: number;
  infoCount: number;
  infoRate: number;
  debugCount: number;
  debugRate: number;
  traceCount: number;
  traceRate: number;
  logSources: Record<string, number>;
  logLevels: Record<string, number>;
  logFormats: Record<string, number>;
  storageUsage: number;
  retentionPeriod: number;
  averageProcessingTime: number;
  searchQueryCount: number;
  searchQueryRate: number;
  searchQueryTime: number;
  uptime: number;
  version: string;
}

// 通用备份指标类型
export interface BackupMetrics {
  backupCount: number;
  backupRate: number;
  successCount: number;
  successRate: number;
  failureCount: number;
  failureRate: number;
  backupSize: number;
  backupTime: number;
  restoreCount: number;
  restoreRate: number;
  restoreSuccessCount: number;
  restoreSuccessRate: number;
  restoreFailureCount: number;
  restoreFailureRate: number;
  restoreTime: number;
  retentionPeriod: number;
  storageUsage: number;
  compressionRatio: number;
  deduplicationRatio: number;
  uptime: number;
  version: string;
}

// 通用灾备指标类型
export interface DisasterRecoveryMetrics {
  recoveryPointObjective: number;
  recoveryTimeObjective: number;
  actualRecoveryPoint: number;
  actualRecoveryTime: number;
  testCount: number;
  testSuccessCount: number;
  testSuccessRate: number;
  testTime: number;
  drillCount: number;
  drillSuccessCount: number;
  drillSuccessRate: number;
  drillTime: number;
  failoverCount: number;
  failoverSuccessCount: number;
  failoverSuccessRate: number;
  failoverTime: number;
  failbackCount: number;
  failbackSuccessCount: number;
  failbackSuccessRate: number;
  failbackTime: number;
  uptime: number;
  version: string;
}

// 通用合规指标类型
export interface ComplianceMetrics {
  complianceScore: number;
  auditScore: number;
  riskScore: number;
  controlEffectiveness: number;
  policyAdherence: number;
  procedureCompliance: number;
  regulationCompliance: number;
  standardCompliance: number;
  certificationStatus: string;
  auditCount: number;
  auditSuccessCount: number;
  auditSuccessRate: number;
  findingCount: number;
  criticalFindings: number;
  highFindings: number;
  mediumFindings: number;
  lowFindings: number;
  findingRemediationRate: number;
  findingRemediationTime: number;
  uptime: number;
  version: string;
}

// 通用安全指标类型
export interface SecurityMetrics {
  vulnerabilityCount: number;
  criticalVulnerabilities: number;
  highVulnerabilities: number;
  mediumVulnerabilities: number;
  lowVulnerabilities: number;
  vulnerabilityRemediationRate: number;
  vulnerabilityRemediationTime: number;
  patchLevel: number;
  patchCompliance: number;
  securityScore: number;
  riskScore: number;
  threatCount: number;
  threatDetectionRate: number;
  threatResponseTime: number;
  incidentCount: number;
  incidentResponseTime: number;
  incidentResolutionTime: number;
  securityAuditScore: number;
  securityComplianceScore: number;
  uptime: number;
  version: string;
}

// 通用网络指标类型
export interface NetworkMetrics {
  bandwidthIn: number;
  bandwidthOut: number;
  bandwidthTotal: number;
  packetCountIn: number;
  packetCountOut: number;
  packetCountTotal: number;
  errorCountIn: number;
  errorCountOut: number;
  errorCountTotal: number;
  dropCountIn: number;
  dropCountOut: number;
  dropCountTotal: number;
  latency: number;
  jitter: number;
  packetLoss: number;
  throughput: number;
  connectionCount: number;
  sessionCount: number;
  interfaceUtilization: Record<string, number>;
  deviceHealth: Record<string, number>;
  uptime: number;
  version: string;
}

// 通用存储指标类型
export interface StorageMetrics {
  capacity: number;
  used: number;
  available: number;
  utilization: number;
  iopsRead: number;
  iopsWrite: number;
  iopsTotal: number;
  throughputRead: number;
  throughputWrite: number;
  throughputTotal: number;
  latencyRead: number;
  latencyWrite: number;
  latencyAverage: number;
  queueDepth: number;
  averageQueueLength: number;
  requestSizeAverage: number;
  errorCount: number;
  errorRate: number;
  uptime: number;
  version: string;
}

// 通用计算指标类型
export interface ComputeMetrics {
  cpuUsage: number;
  memoryUsage: number;
  diskUsage: number;
  networkUsage: number;
  gpuUsage?: number;
  temperature?: number;
  uptime: number;
  loadAverage: number;
  processCount: number;
  threadCount: number;
  handleCount: number;
  contextSwitches: number;
  interrupts: number;
  systemCalls: number;
  pageFaults: number;
  diskReads: number;
  diskWrites: number;
  networkIn: number;
  networkOut: number;
  batteryLevel?: number;
  batteryStatus?: string;
}

// 通用容器指标类型
export interface ContainerMetrics {
  cpuUsage: number;
  memoryUsage: number;
  memoryLimit: number;
  memoryUtilization: number;
  diskUsage: number;
  diskLimit: number;
  diskUtilization: number;
  networkIn: number;
  networkOut: number;
  networkTotal: number;
  restartCount: number;
  uptime: number;
  status: string;
  image: string;
  imageSize: number;
  containerCount: number;
  runningContainers: number;
  stoppedContainers: number;
  pausedContainers: number;
  healthCheckStatus: string;
  healthCheckCount: number;
  healthCheckFailures: number;
  healthCheckSuccesses: number;
}

// 通用集群指标类型
export interface ClusterMetrics {
  nodeCount: number;
  runningNodes: number;
  stoppedNodes: number;
  unhealthyNodes: number;
  podCount: number;
  runningPods: number;
  pendingPods: number;
  failedPods: number;
  succeededPods: number;
  cpuUsage: number;
  cpuLimit: number;
  cpuUtilization: number;
  memoryUsage: number;
  memoryLimit: number;
  memoryUtilization: number;
  diskUsage: number;
  diskLimit: number;
  diskUtilization: number;
  networkIn: number;
  networkOut: number;
  networkTotal: number;
  serviceCount: number;
  deploymentCount: number;
  replicaSetCount: number;
  statefulSetCount: number;
  daemonSetCount: number;
  jobCount: number;
  cronJobCount: number;
  configMapCount: number;
  secretCount: number;
  persistentVolumeCount: number;
  persistentVolumeClaimCount: number;
  namespaceCount: number;
  ingressCount: number;
  egressCount: number;
  uptime: number;
  version: string;
}

// 通用云服务指标类型
export interface CloudServiceMetrics {
  serviceCount: number;
  resourceCount: number;
  cost: number;
  costTrend: 'increasing' | 'decreasing' | 'stable';
  utilization: number;
  availability: number;
  reliability: number;
  performance: number;
  scalability: number;
  security: number;
  maintainability: number;
  compliance: number;
  auditScore: number;
  riskScore: number;
  uptime: number;
  version: string;
}

// 通用边缘计算指标类型
export interface EdgeComputingMetrics {
  edgeNodeCount: number;
  runningEdgeNodes: number;
  stoppedEdgeNodes: number;
  unhealthyEdgeNodes: number;
  deviceCount: number;
  connectedDevices: number;
  disconnectedDevices: number;
  dataIngestionRate: number;
  dataProcessingRate: number;
  dataTransferRate: number;
  latency: number;
  jitter: number;
  packetLoss: number;
  throughput: number;
  bandwidth: number;
  cpuUsage: number;
  memoryUsage: number;
  diskUsage: number;
  networkUsage: number;
  uptime: number;
  version: string;
}

// 通用物联网指标类型
export interface IotMetrics {
  deviceCount: number;
  connectedDevices: number;
  disconnectedDevices: number;
  deviceConnectivityRate: number;
  dataIngestionRate: number;
  dataProcessingRate: number;
  dataStorageRate: number;
  messageCount: number;
  messageRate: number;
  errorCount: number;
  errorRate: number;
  alertCount: number;
  alertRate: number;
  deviceTypes: Record<string, number>;
  deviceLocations: Record<string, number>;
  deviceHealth: Record<string, number>;
  deviceBattery: Record<string, number>;
  deviceSignal: Record<string, number>;
  uptime: number;
  version: string;
}

// 通用人工智能指标类型
export interface AiMetrics {
  modelCount: number;
  modelVersions: number;
  inferenceCount: number;
  inferenceRate: number;
  trainingCount: number;
  trainingRate: number;
  inferenceLatency: number;
  trainingTime: number;
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
  rocAuc: number;
  confusionMatrix: ConfusionMatrix;
  errorCount: number;
  errorRate: number;
  cpuUsage: number;
  memoryUsage: number;
  gpuUsage: number;
  gpuMemoryUsage: number;
  dataProcessed: number;
  dataStorage: number;
  uptime: number;
  version: string;
}

// 通用机器学习指标类型
export interface MachineLearningMetrics {
  modelCount: number;
  modelVersions: number;
  trainingJobs: number;
  inferenceJobs: number;
  trainingTime: number;
  inferenceTime: number;
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
  rocAuc: number;
  confusionMatrix: ConfusionMatrix;
  featureImportance: Record<string, number>;
  hyperparameters: Record<string, any>;
  trainingDataSize: number;
  validationDataSize: number;
  testDataSize: number;
  dataProcessingTime: number;
  modelDeploymentTime: number;
  modelServingLatency: number;
  modelServingThroughput: number;
  errorCount: number;
  errorRate: number;
  cpuUsage: number;
  memoryUsage: number;
  gpuUsage: number;
  gpuMemoryUsage: number;
  uptime: number;
  version: string;
}

// 通用深度学习指标类型
export interface DeepLearningMetrics {
  modelCount: number;
  modelVersions: number;
  trainingJobs: number;
  inferenceJobs: number;
  trainingTime: number;
  inferenceTime: number;
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
  rocAuc: number;
  confusionMatrix: ConfusionMatrix;
  layerCount: number;
  parameterCount: number;
  featureMapSize: number;
  batchSize: number;
  learningRate: number;
  epochs: number;
  loss: number;
  validationLoss: number;
  trainingDataSize: number;
  validationDataSize: number;
  testDataSize: number;
  dataProcessingTime: number;
  modelDeploymentTime: number;
  modelServingLatency: number;
  modelServingThroughput: number;
  errorCount: number;
  errorRate: number;
  cpuUsage: number;
  memoryUsage: number;
  gpuUsage: number;
  gpuMemoryUsage: number;
  uptime: number;
  version: string;
}

// 通用自然语言处理指标类型
export interface NaturalLanguageProcessingMetrics {
  modelCount: number;
  modelVersions: number;
  inferenceCount: number;
  inferenceRate: number;
  trainingCount: number;
  trainingRate: number;
  inferenceLatency: number;
  trainingTime: number;
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
  bleuScore: number;
  rougeScore: number;
  perplexity: number;
  wordErrorRate: number;
  characterErrorRate: number;
  intentAccuracy: number;
  entityRecognitionAccuracy: number;
  sentimentAnalysisAccuracy: number;
  topicModelingCoherence: number;
  summarizationQuality: number;
  translationQuality: number;
  errorCount: number;
  errorRate: number;
  cpuUsage: number;
  memoryUsage: number;
  gpuUsage: number;
  gpuMemoryUsage: number;
  dataProcessed: number;
  dataStorage: number;
  uptime: number;
  version: string;
}

// 通用计算机视觉指标类型
export interface ComputerVisionMetrics {
  modelCount: number;
  modelVersions: number;
  inferenceCount: number;
  inferenceRate: number;
  trainingCount: number;
  trainingRate: number;
  inferenceLatency: number;
  trainingTime: number;
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
  meanAveragePrecision: number;
  intersectionOverUnion: number;
  pixelAccuracy: number;
  meanIoU: number;
  diceCoefficient: number;
  jaccardIndex: number;
  errorCount: number;
  errorRate: number;
  cpuUsage: number;
  memoryUsage: number;
  gpuUsage: number;
  gpuMemoryUsage: number;
  dataProcessed: number;
  dataStorage: number;
  uptime: number;
  version: string;
}

// 通用语音识别指标类型
export interface SpeechRecognitionMetrics {
  modelCount: number;
  modelVersions: number;
  inferenceCount: number;
  inferenceRate: number;
  trainingCount: number;
  trainingRate: number;
  inferenceLatency: number;
  trainingTime: number;
  wordErrorRate: number;
  characterErrorRate: number;
  sentenceErrorRate: number;
  intentAccuracy: number;
  entityRecognitionAccuracy: number;
  speakerRecognitionAccuracy: number;
  languageIdentificationAccuracy: number;
  errorCount: number;
  errorRate: number;
  cpuUsage: number;
  memoryUsage: number;
  gpuUsage: number;
  gpuMemoryUsage: number;
  dataProcessed: number;
  dataStorage: number;
  uptime: number;
  version: string;
}

// 通用推荐系统指标类型
export interface RecommendationSystemMetrics {
  modelCount: number;
  modelVersions: number;
  inferenceCount: number;
  inferenceRate: number;
  trainingCount: number;
  trainingRate: number;
  inferenceLatency: number;
  trainingTime: number;
  precisionAtK: number;
  recallAtK: number;
  f1ScoreAtK: number;
  meanAveragePrecisionAtK: number;
  normalizedDiscountedCumulativeGainAtK: number;
  hitRateAtK: number;
  averageReciprocalHitRank: number;
  userSatisfaction: number;
  conversionRate: number;
  clickThroughRate: number;
  engagementRate: number;
  errorCount: number;
  errorRate: number;
  cpuUsage: number;
  memoryUsage: number;
  gpuUsage: number;
  gpuMemoryUsage: number;
  dataProcessed: number;
  dataStorage: number;
  uptime: number;
  version: string;
}

// 通用预测分析指标类型
export interface PredictiveAnalyticsMetrics {
  modelCount: number;
  modelVersions: number;
  inferenceCount: number;
  inferenceRate: number;
  trainingCount: number;
  trainingRate: number;
  inferenceLatency: number;
  trainingTime: number;
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
  meanAbsoluteError: number;
  meanSquaredError: number;
  rootMeanSquaredError: number;
  meanAbsolutePercentageError: number;
  rSquared: number;
  adjustedRSquared: number;
  errorCount: number;
  errorRate: number;
  cpuUsage: number;
  memoryUsage: number;
  gpuUsage: number;
  gpuMemoryUsage: number;
  dataProcessed: number;
  dataStorage: number;
  uptime: number;
  version: string;
}

// 通用大数据指标类型
export interface BigDataMetrics {
  dataVolume: number;
  dataIngestionRate: number;
  dataProcessingRate: number;
  dataStorageUsage: number;
  dataRetentionPeriod: number;
  queryCount: number;
  queryRate: number;
  queryLatency: number;
  queryThroughput: number;
  jobCount: number;
  jobRate: number;
  jobCompletionTime: number;
  jobSuccessRate: number;
  errorCount: number;
  errorRate: number;
  clusterNodes: number;
  clusterHealth: number;
  cpuUsage: number;
  memoryUsage: number;
  diskUsage: number;
  networkUsage: number;
  uptime: number;
  version: string;
}

// 通用数据仓库指标类型
export interface DataWarehouseMetrics {
  dataVolume: number;
  dataIngestionRate: number;
  dataProcessingRate: number;
  dataStorageUsage: number;
  dataRetentionPeriod: number;
  tableCount: number;
  columnCount: number;
  rowCount: number;
  queryCount: number;
  queryRate: number;
  queryLatency: number;
}