import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DashboardModule } from '@/components/dashboard-module';

describe('DashboardModule', () => {
  it('should render dashboard module correctly', () => {
    render(<DashboardModule />);
    
    // 测试页面标题
    expect(screen.getByText('企业管理仪表盘')).toBeInTheDocument();
    expect(screen.getByText('全面掌控企业运营状况')).toBeInTheDocument();
  });

  it('should display quick stats correctly', () => {
    render(<DashboardModule />);
    
    // 测试快速统计
    expect(screen.getByText('今日任务')).toBeInTheDocument();
    expect(screen.getByText('24')).toBeInTheDocument();
    expect(screen.getByText('+3')).toBeInTheDocument();
    
    expect(screen.getByText('待审批')).toBeInTheDocument();
    expect(screen.getByText('8')).toBeInTheDocument();
    expect(screen.getByText('-2')).toBeInTheDocument();
    
    expect(screen.getByText('新消息')).toBeInTheDocument();
    expect(screen.getByText('15')).toBeInTheDocument();
    expect(screen.getByText('+5')).toBeInTheDocument();
    
    expect(screen.getByText('告警')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('should display module overview correctly', () => {
    render(<DashboardModule />);
    
    // 测试模块概览
    expect(screen.getByText('客户管理')).toBeInTheDocument();
    expect(screen.getAllByText('管理客户信息和关系').length).toBeGreaterThan(0);
    expect(screen.getAllByText('85%').length).toBeGreaterThan(0);
    expect(screen.getAllByText('正常').length).toBeGreaterThan(0);
    
    expect(screen.getByText('任务管理')).toBeInTheDocument();
    expect(screen.getByText('跟踪项目进度和任务分配')).toBeInTheDocument();
    expect(screen.getByText('57%')).toBeInTheDocument();
    expect(screen.getByText('进行中')).toBeInTheDocument();
    
    expect(screen.getByText('财务管理')).toBeInTheDocument();
    expect(screen.getByText('财务数据分析和报表')).toBeInTheDocument();
    expect(screen.getByText('92%')).toBeInTheDocument();
    expect(screen.getByText('优秀')).toBeInTheDocument();
    
    expect(screen.getAllByText('OKR管理').length).toBeGreaterThan(0);
    expect(screen.getAllByText('目标与关键结果跟踪').length).toBeGreaterThan(0);
    expect(screen.getAllByText('75%').length).toBeGreaterThan(0);
    expect(screen.getAllByText('良好').length).toBeGreaterThan(0);
    
    expect(screen.getByText('审批中心')).toBeInTheDocument();
    expect(screen.getByText('工作流程和审批管理')).toBeInTheDocument();
    expect(screen.getByText('86%')).toBeInTheDocument();
    expect(screen.getByText('待处理')).toBeInTheDocument();
    
    expect(screen.getByText('沟通中心')).toBeInTheDocument();
    expect(screen.getByText('团队协作和沟通平台')).toBeInTheDocument();
    expect(screen.getByText('68%')).toBeInTheDocument();
    expect(screen.getByText('活跃')).toBeInTheDocument();
    
    expect(screen.getAllByText('KPI跟踪').length).toBeGreaterThan(0);
    expect(screen.getAllByText('关键绩效指标监控').length).toBeGreaterThan(0);
    expect(screen.getAllByText('75%').length).toBeGreaterThan(0);
    expect(screen.getAllByText('达标').length).toBeGreaterThan(0);
    
    expect(screen.getAllByText('数据分析').length).toBeGreaterThan(0);
    expect(screen.getAllByText('业务数据洞察和分析').length).toBeGreaterThan(0);
    expect(screen.getAllByText('84%').length).toBeGreaterThan(0);
    expect(screen.getAllByText('正常').length).toBeGreaterThan(0);
  });

  it('should display system status correctly', () => {
    render(<DashboardModule />);
    
    // 测试系统状态
    expect(screen.getByText('系统运行状态')).toBeInTheDocument();
    expect(screen.getByText('实时监控系统各项指标')).toBeInTheDocument();
    expect(screen.getByText('运行正常')).toBeInTheDocument();
    expect(screen.getByText('优秀 (95%)')).toBeInTheDocument();
    expect(screen.getByText('1,247 人')).toBeInTheDocument();
  });

  it('should render all module cards', () => {
    render(<DashboardModule />);

    // 测试模块卡片存在
    expect(screen.getAllByText('系统状态').length).toBeGreaterThan(0);
    expect(screen.getAllByText('性能指标').length).toBeGreaterThan(0);
  });

  it('should render all quick stat cards', () => {
    render(<DashboardModule />);

    // 测试快速统计卡片存在
    expect(screen.getAllByText('今日任务').length).toBeGreaterThan(0);
    expect(screen.getAllByText('待审批').length).toBeGreaterThan(0);
  });

  it('should display correct number of quick stats', () => {
    render(<DashboardModule />);
    
    // 测试快速统计卡片数量（4个）
    const quickStatTitles = [
      '今日任务',
      '待审批',
      '新消息',
      '告警'
    ];
    
    quickStatTitles.forEach(title => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it('should display correct number of modules', () => {
    render(<DashboardModule />);
    
    // 测试模块数量（8个）
    const moduleTitles = [
      '客户管理',
      '任务管理',
      '财务管理',
      'OKR管理',
      '审批中心',
      '沟通中心',
      'KPI跟踪',
      '数据分析'
    ];
    
    moduleTitles.forEach(title => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it('should display correct module statuses', () => {
    render(<DashboardModule />);
    
    // 测试模块状态
    const statuses = [
      '正常',
      '进行中',
      '优秀',
      '良好',
      '待处理',
      '活跃',
      '达标'
    ];
    
    statuses.forEach(status => {
      expect(screen.getAllByText(status).length).toBeGreaterThan(0);
    });
  });

  it('should display correct system status indicators', () => {
    render(<DashboardModule />);
    
    // 测试系统状态指标
    expect(screen.getByText('系统状态')).toBeInTheDocument();
    expect(screen.getByText('性能指标')).toBeInTheDocument();
    expect(screen.getByText('在线用户')).toBeInTheDocument();
  });

  it('should display correct progress percentages for modules', () => {
    render(<DashboardModule />);
    
    // 测试模块进度百分比
    const progressPercentages = [
      '85%',
      '57%',
      '92%',
      '75%',
      '86%',
      '68%',
      '84%'
    ];
    
    progressPercentages.forEach(percentage => {
      expect(screen.getAllByText(percentage).length).toBeGreaterThan(0);
    });
  });

  it('should display trend indicators for quick stats', () => {
    render(<DashboardModule />);
    
    // 测试快速统计的趋势指示
    expect(screen.getByText('+3')).toBeInTheDocument(); // 今日任务上升
    expect(screen.getByText('-2')).toBeInTheDocument(); // 待审批下降
    expect(screen.getByText('+5')).toBeInTheDocument(); // 新消息上升
    expect(screen.getByText('0')).toBeInTheDocument(); // 告警稳定
  });

  it('should display growth indicators for modules', () => {
    render(<DashboardModule />);
    
    // 测试模块的增长指示
    expect(screen.getByText('+12%')).toBeInTheDocument(); // 客户管理
    expect(screen.getByText('+8%')).toBeInTheDocument(); // 任务管理
    expect(screen.getByText('+15%')).toBeInTheDocument(); // 财务管理
    expect(screen.getByText('+5%')).toBeInTheDocument(); // OKR管理
    expect(screen.getByText('-3%')).toBeInTheDocument(); // 审批中心
    expect(screen.getByText('+25%')).toBeInTheDocument(); // 沟通中心
    expect(screen.getByText('+7%')).toBeInTheDocument(); // KPI跟踪
    expect(screen.getByText('+18%')).toBeInTheDocument(); // 数据分析
  });
});
