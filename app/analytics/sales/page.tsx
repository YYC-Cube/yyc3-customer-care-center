/**
 * @file page.tsx
 * @description page component/module for YYC3 Customer Care Center
 * @module app.analytics.sales.page
 * @author YYC³ Team
 * @version 1.0.0
 * @created 2026-01-23
 * @updated 2026-01-23
 * @copyright Copyright (c) 2026 YYC³
 * @license MIT
 */

"use client"

import { SalesChart } from "@/components/charts/sales-chart"

export default function SalesAnalyticsPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-800">销售分析</h1>
        <p className="text-slate-600 mt-2">深入分析销售数据，洞察业务趋势</p>
      </div>
      <SalesChart />
    </div>
  )
}
