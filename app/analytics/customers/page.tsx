/**
 * @file page.tsx
 * @description page component/module for YYC3 Customer Care Center
 * @module app.analytics.customers.page
 * @author YYC³ Team
 * @version 1.0.0
 * @created 2026-01-23
 * @updated 2026-01-23
 * @copyright Copyright (c) 2026 YYC³
 * @license MIT
 */

"use client"

import { CustomerManagement } from "@/components/customer-management"

export default function CustomerAnalyticsPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-800">客户分析</h1>
        <p className="text-slate-600 mt-2">全面了解客户行为和价值分布</p>
      </div>
      <CustomerManagement />
    </div>
  )
}
