/**
 * @file page.tsx
 * @description page component/module for YYC3 Customer Care Center
 * @module app.okr.page
 * @author YYC³ Team
 * @version 1.0.0
 * @created 2026-01-23
 * @updated 2026-01-24
 * @copyright Copyright (c) 2026 YYC³
 * @license MIT
 */

"use client"

import { ResponsiveLayout } from "@/components/layout/responsive-layout"
import { OKRManagement } from "@/components/okr-management"

export default function OKRPage() {
  return (
    <ResponsiveLayout showSidebar={true} showHeader={true}>
      <OKRManagement />
    </ResponsiveLayout>
  )
}
