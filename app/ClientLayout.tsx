/**
 * @file ClientLayout.tsx
 * @description ClientLayout component/module for YYC3 Customer Care Center
 * @module app.ClientLayout
 * @author YYC³ Team
 * @version 1.0.0
 * @created 2026-01-23
 * @updated 2026-01-23
 * @copyright Copyright (c) 2026 YYC³
 * @license MIT
 */

"use client"

import type React from "react"
import { ResponsiveLayoutProvider } from "@/components/layout/responsive-layout"
import "./globals.css"

interface ClientLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <html lang="zh-CN">
      <head>
        <title>言语云企业管理系统</title>
        <meta name="description" content="Created with 言语云" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        <ResponsiveLayoutProvider>{children}</ResponsiveLayoutProvider>
      </body>
    </html>
  )
}
