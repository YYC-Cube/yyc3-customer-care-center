import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { TaskManagement } from '@/components/task-management';

vi.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  ),
}));

describe('TaskManagement', () => {
  it('should render task management component correctly', () => {
    render(<TaskManagement />);
    expect(screen.getByText('任务管理')).toBeInTheDocument();
    expect(screen.getByText('智能任务分配和进度跟踪系统')).toBeInTheDocument();
  });

  it('should display statistics overview', () => {
    render(<TaskManagement />);
    
    // 测试统计概览
    expect(screen.getAllByText('总任务数').length).toBeGreaterThan(0);
    expect(screen.getAllByText('已完成').length).toBeGreaterThan(0);
    expect(screen.getAllByText('进行中').length).toBeGreaterThan(0);
    expect(screen.getAllByText('紧急任务').length).toBeGreaterThan(0);
  });

  it('should handle task search functionality', () => {
    render(<TaskManagement />);
    const searchInput = screen.getByPlaceholderText('搜索任务标题、描述或负责人...');
    fireEvent.change(searchInput, { target: { value: '客户需求分析报告' } });
    expect(searchInput).toHaveValue('客户需求分析报告');
  });

  it('should handle status filter functionality', () => {
    render(<TaskManagement />);
    
    const statusFilter = screen.getAllByRole('combobox')[0];
    fireEvent.mouseDown(statusFilter);
    
    const inProgressOptions = screen.getAllByText('进行中');
    if (inProgressOptions.length > 0) {
      fireEvent.click(inProgressOptions[0]);
    }
    
    // 验证筛选后仍然显示进行中的任务
    expect(screen.getAllByText('客户需求分析报告').length).toBeGreaterThan(0);
  });

  it('should handle priority filter functionality', () => {
    render(<TaskManagement />);
    
    const priorityFilter = screen.getAllByRole('combobox')[1];
    fireEvent.mouseDown(priorityFilter);
    
    const urgentOptions = screen.getAllByText('紧急');
    if (urgentOptions.length > 0) {
      fireEvent.click(urgentOptions[0]);
    }
    
    // 验证筛选后仍然显示紧急任务
    expect(screen.getAllByText('系统安全检查').length).toBeGreaterThan(0);
  });

  it('should display task list with details', () => {
    render(<TaskManagement />);
    
    // 测试任务列表显示
    expect(screen.getByText('客户需求分析报告')).toBeInTheDocument();
    expect(screen.getByText('产品功能优化')).toBeInTheDocument();
    expect(screen.getByText('市场推广方案')).toBeInTheDocument();
    expect(screen.getByText('系统安全检查')).toBeInTheDocument();
    expect(screen.getByText('员工培训计划')).toBeInTheDocument();
  });

  it('should display task status badges', () => {
    render(<TaskManagement />);
    
    // 测试任务状态显示
    expect(screen.getAllByText('待开始').length).toBeGreaterThan(0);
    expect(screen.getAllByText('进行中').length).toBeGreaterThan(0);
    expect(screen.getAllByText('已完成').length).toBeGreaterThan(0);
  });

  it('should display task priority badges', () => {
    render(<TaskManagement />);
    
    // 测试任务优先级显示
    expect(screen.getAllByText('低优先级').length).toBeGreaterThan(0);
    expect(screen.getAllByText('中优先级').length).toBeGreaterThan(0);
    expect(screen.getAllByText('高优先级').length).toBeGreaterThan(0);
    expect(screen.getAllByText('紧急').length).toBeGreaterThan(0);
  });

  it('should display task progress bars', () => {
    render(<TaskManagement />);
    
    // 测试任务进度显示
    expect(screen.getByText('75%')).toBeInTheDocument();
    expect(screen.getByText('0%')).toBeInTheDocument();
    expect(screen.getByText('100%')).toBeInTheDocument();
    expect(screen.getByText('60%')).toBeInTheDocument();
    expect(screen.getByText('20%')).toBeInTheDocument();
  });

  it('should display task tags', () => {
    render(<TaskManagement />);
    
    // 测试任务标签显示
    expect(screen.getAllByText('分析').length).toBeGreaterThan(0);
    expect(screen.getAllByText('客户').length).toBeGreaterThan(0);
    expect(screen.getAllByText('开发').length).toBeGreaterThan(0);
    expect(screen.getAllByText('优化').length).toBeGreaterThan(0);
    expect(screen.getAllByText('市场').length).toBeGreaterThan(0);
    expect(screen.getAllByText('推广').length).toBeGreaterThan(0);
    expect(screen.getAllByText('安全').length).toBeGreaterThan(0);
    expect(screen.getAllByText('系统').length).toBeGreaterThan(0);
    expect(screen.getAllByText('培训').length).toBeGreaterThan(0);
    expect(screen.getAllByText('人力').length).toBeGreaterThan(0);
  });

  it('should display task due dates', () => {
    render(<TaskManagement />);
    
    // 测试任务截止日期显示
    expect(screen.getAllByText('2025-06-25').length).toBeGreaterThan(0);
    expect(screen.getAllByText('2025-06-30').length).toBeGreaterThan(0);
    expect(screen.getAllByText('2025-06-20').length).toBeGreaterThan(0);
    expect(screen.getAllByText('2025-06-22').length).toBeGreaterThan(0);
    expect(screen.getAllByText('2025-07-05').length).toBeGreaterThan(0);
  });

  it('should display task assignees', () => {
    render(<TaskManagement />);
    
    // 测试任务负责人显示
    expect(screen.getAllByText('张三').length).toBeGreaterThan(0);
    expect(screen.getAllByText('李四').length).toBeGreaterThan(0);
    expect(screen.getAllByText('王五').length).toBeGreaterThan(0);
    expect(screen.getAllByText('赵六').length).toBeGreaterThan(0);
    expect(screen.getAllByText('钱七').length).toBeGreaterThan(0);
  });

  it('should open create task dialog', () => {
    render(<TaskManagement />);
    
    const addButton = screen.getByText('创建任务');
    fireEvent.click(addButton);
    
    waitFor(() => {
      expect(screen.getByText('创建新任务')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('输入任务标题')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('详细描述任务内容')).toBeInTheDocument();
    });
  });

  it('should display task action buttons', () => {
    render(<TaskManagement />);
    
    // 测试操作按钮显示
    expect(screen.getAllByText('开始').length).toBeGreaterThan(0);
    expect(screen.getAllByText('暂停').length).toBeGreaterThan(0);
    expect(screen.getAllByText('完成').length).toBeGreaterThan(0);
  });

  it('should display task count in header', () => {
    render(<TaskManagement />);
    
    // 测试任务数量显示
    expect(screen.getAllByText('共找到 5 个任务').length).toBeGreaterThan(0);
  });

  it('should display task creation dates', () => {
    render(<TaskManagement />);
    
    // 测试任务创建时间显示
    expect(screen.getAllByText('创建于 2025-06-15').length).toBeGreaterThan(0);
    expect(screen.getAllByText('创建于 2025-06-18').length).toBeGreaterThan(0);
    expect(screen.getAllByText('创建于 2025-06-10').length).toBeGreaterThan(0);
    expect(screen.getAllByText('创建于 2025-06-16').length).toBeGreaterThan(0);
    expect(screen.getAllByText('创建于 2025-06-19').length).toBeGreaterThan(0);
  });
});
