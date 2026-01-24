import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { CustomerManagement } from '@/components/customer-management';

vi.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  ),
}));

describe('CustomerManagement', () => {
  it('should render customer management component correctly', () => {
    render(<CustomerManagement />);
    expect(screen.getByText('客户管理')).toBeInTheDocument();
    expect(screen.getByText('全生命周期客户关系管理系统')).toBeInTheDocument();
  });

  it('should display customer statistics overview', () => {
    render(<CustomerManagement />);

    // 测试统计概览
    expect(screen.getAllByText('总客户数').length).toBeGreaterThan(0);
    expect(screen.getAllByText('活跃客户').length).toBeGreaterThan(0);
    expect(screen.getAllByText('客户价值').length).toBeGreaterThan(0);
    expect(screen.getAllByText('满意度').length).toBeGreaterThan(0);
  });

  it('should handle customer search functionality', () => {
    render(<CustomerManagement />);
    const searchInput = screen.getByPlaceholderText('搜索客户姓名、公司或邮箱...');
    fireEvent.change(searchInput, { target: { value: '张明华' } });
    expect(searchInput).toHaveValue('张明华');
  });

  it('should handle status filter functionality', () => {
    render(<CustomerManagement />);

    const statusFilter = screen.getByRole('combobox');
    fireEvent.mouseDown(statusFilter);

    const vipOption = screen.getByText('VIP客户');
    fireEvent.click(vipOption);

    // 验证筛选后仍然显示VIP客户
    expect(screen.getAllByText('张明华').length).toBeGreaterThan(0);
  });

  it('should display customer list with details', () => {
    render(<CustomerManagement />);

    // 测试客户列表显示
    expect(screen.getAllByText('张明华').length).toBeGreaterThan(0);
    expect(screen.getAllByText('科技有限公司').length).toBeGreaterThan(0);
    expect(screen.getAllByText('138-0000-1234').length).toBeGreaterThan(0);
    expect(screen.getAllByText('北京市朝阳区').length).toBeGreaterThan(0);
  });

  it('should display customer status badges', () => {
    render(<CustomerManagement />);

    // 测试客户状态显示
    expect(screen.getAllByText('VIP客户').length).toBeGreaterThan(0);
    expect(screen.getAllByText('活跃客户').length).toBeGreaterThan(0);
    expect(screen.getAllByText('潜在客户').length).toBeGreaterThan(0);
    expect(screen.getAllByText('非活跃').length).toBeGreaterThan(0);
  });

  it('should display customer satisfaction metrics', () => {
    render(<CustomerManagement />);

    // 测试客户满意度显示
    expect(screen.getAllByText('95%').length).toBeGreaterThan(0);
    expect(screen.getAllByText('87%').length).toBeGreaterThan(0);
    expect(screen.getAllByText('72%').length).toBeGreaterThan(0);
    expect(screen.getAllByText('91%').length).toBeGreaterThan(0);
    expect(screen.getAllByText('65%').length).toBeGreaterThan(0);
  });

  it('should display customer tags', () => {
    render(<CustomerManagement />);

    // 测试客户标签显示
    expect(screen.getAllByText('重要客户').length).toBeGreaterThan(0);
    expect(screen.getAllByText('长期合作').length).toBeGreaterThan(0);
    expect(screen.getAllByText('新客户').length).toBeGreaterThan(0);
    expect(screen.getAllByText('潜力大').length).toBeGreaterThan(0);
  });

  it('should display customer value metrics', () => {
    render(<CustomerManagement />);

    // 测试客户价值显示
    expect(screen.getAllByText('¥85万').length).toBeGreaterThan(0);
    expect(screen.getAllByText('¥32万').length).toBeGreaterThan(0);
    expect(screen.getAllByText('¥15万').length).toBeGreaterThan(0);
    expect(screen.getAllByText('¥28万').length).toBeGreaterThan(0);
    expect(screen.getAllByText('¥12万').length).toBeGreaterThan(0);
  });

  it('should open create customer dialog', () => {
    render(<CustomerManagement />);

    const addButton = screen.getByText('添加客户');
    fireEvent.click(addButton);

    waitFor(() => {
      expect(screen.getByText('添加新客户')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('输入客户姓名')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('输入公司名称')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('输入邮箱地址')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('输入联系电话')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('输入详细地址')).toBeInTheDocument();
    });
  });

  it('should display customer action buttons', () => {
    render(<CustomerManagement />);

    // 测试操作按钮显示
    expect(screen.getAllByText('查看').length).toBeGreaterThan(0);
    expect(screen.getAllByText('编辑').length).toBeGreaterThan(0);
    expect(screen.getAllByText('联系').length).toBeGreaterThan(0);
    expect(screen.getAllByText('跟进').length).toBeGreaterThan(0);
  });

  it('should display last contact dates', () => {
    render(<CustomerManagement />);

    // 测试最后联系日期显示
    expect(screen.getByText('2025-06-20')).toBeInTheDocument();
    expect(screen.getByText('2025-06-18')).toBeInTheDocument();
    expect(screen.getByText('2025-06-15')).toBeInTheDocument();
    expect(screen.getByText('2025-06-19')).toBeInTheDocument();
    expect(screen.getByText('2025-05-28')).toBeInTheDocument();
  });

  it('should display customer count in header', () => {
    render(<CustomerManagement />);

    // 测试客户数量显示
    expect(screen.getByText('共找到 5 位客户')).toBeInTheDocument();
  });
});
