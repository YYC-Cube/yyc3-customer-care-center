/**
 * @file page.tsx
 * @description page component/module for YYC3 Customer Care Center
 * @module app.analytics.performance.page
 * @author YYC³ Team
 * @version 1.0.0
 * @created 2026-01-23
 * @updated 2026-01-23
 * @copyright Copyright (c) 2026 YYC³
 * @license MIT
 */

"use client"

import { PerformanceChart } from "@/components/charts/performance-chart"

export default function PerformanceAnalyticsPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-800">绩效分析</h1>
        <p className="text-slate-600 mt-2">团队和个人绩效表现全面分析</p>
      </div>
      <PerformanceChart />
    </div>
  )
}
