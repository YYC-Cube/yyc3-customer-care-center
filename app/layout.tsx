/**
 * @file layout.tsx
 * @description layout component/module for YYC3 Customer Care Center
 * @module app.layout
 * @author YYC³ Team
 * @version 1.0.0
 * @created 2026-01-23
 * @updated 2026-01-23
 * @copyright Copyright (c) 2026 YYC³
 * @license MIT
 */

import type React from "react"
import type { Metadata, Viewport } from "next"
import { ResponsiveLayoutProvider } from "@/components/layout/responsive-layout"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3201'),
  title: "言语云企业管理系统",
  description: "Created with 言语云",
  generator: "v0.dev",
  openGraph: {
    images: ["/yyc3-pwa-icon.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/yyc3-pwa-icon.png"],
    creator: "言语云",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased" suppressHydrationWarning>
        <ResponsiveLayoutProvider>{children}</ResponsiveLayoutProvider>
      </body>
    </html>
  )
}
