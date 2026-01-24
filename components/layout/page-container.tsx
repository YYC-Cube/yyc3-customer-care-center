/**
 * @file page-container.tsx
 * @description page-container component/module for YYC3 Customer Care Center
 * @module components.layout.page-container
 * @author YYC³ Team
 * @version 1.0.0
 * @created 2026-01-23
 * @updated 2026-01-23
 * @copyright Copyright (c) 2026 YYC³
 * @license MIT
 */

import { cn } from "@/lib/utils"
import { commonStyles } from "@/lib/design-system"
import type { ReactNode } from "react"

interface PageContainerProps {
  children: ReactNode
  className?: string
  title?: string
  description?: string
}

export function PageContainer({ children, className, title, description }: PageContainerProps) {
  return (
    <div className={cn(commonStyles.layout.container, className)}>
      {(title || description) && (
        <div className="mb-8">
          {title && <h1 className="text-3xl font-bold text-slate-800 mb-2">{title}</h1>}
          {description && <p className="text-sky-600 text-lg">{description}</p>}
        </div>
      )}
      {children}
    </div>
  )
}
