/**
 * @file page.tsx
 * @description page component/module for YYC3 Customer Care Center
 * @module app.finance.reports.page
 * @author YYC³ Team
 * @version 1.0.0
 * @created 2026-01-23
 * @updated 2026-01-23
 * @copyright Copyright (c) 2026 YYC³
 * @license MIT
 */

"use client"

import { FinanceChart } from "@/components/charts/finance-chart"

export default function FinanceReportsPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-800">财务报表</h1>
        <p className="text-slate-600 mt-2">详细的财务数据分析和报表</p>
      </div>
      <FinanceChart />
    </div>
  )
}
