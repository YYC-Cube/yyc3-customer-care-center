"use client"

import type * as React from "react"
import { createContext, useContext, useState, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-mobile"
import { Button } from "@/components/ui/button"
import { PanelLeftClose, PanelLeft, X } from "lucide-react"

// 侧边栏上下文类型定义
interface SidebarContextType {
  isOpen: boolean
  isMobile: boolean
  toggle: () => void
  open: () => void
  close: () => void
  isCollapsed: boolean
  setIsCollapsed: (collapsed: boolean) => void
}

// 创建侧边栏上下文
const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

// 自定义 Hook：使用侧边栏上下文
export function useSidebarContext() {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebarContext must be used within SidebarProvider")
  }
  return context
}

// 侧边栏提供者组件属性
interface SidebarProviderProps {
  children: React.ReactNode
  defaultOpen?: boolean
  defaultCollapsed?: boolean
}

// 侧边栏提供者组件
export function SidebarProvider({ children, defaultOpen = true, defaultCollapsed = false }: SidebarProviderProps) {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)

  // 移动端默认关闭侧边栏
  useEffect(() => {
    if (isMobile) {
      setIsOpen(false)
    }
  }, [isMobile])

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const open = useCallback(() => {
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  const contextValue: SidebarContextType = {
    isOpen,
    isMobile,
    toggle,
    open,
    close,
    isCollapsed,
    setIsCollapsed,
  }

  return <SidebarContext.Provider value={contextValue}>{children}</SidebarContext.Provider>
}

// 自适应侧边栏组件属性
interface AdaptiveSidebarProps {
  children: React.ReactNode
  className?: string
  width?: string
  collapsedWidth?: string
}

// 自适应侧边栏主组件
export function AdaptiveSidebar({
  children,
  className,
  width = "280px",
  collapsedWidth = "80px",
}: AdaptiveSidebarProps) {
  const { isOpen, isMobile, close, isCollapsed } = useSidebarContext()

  // 移动端渲染
  if (isMobile) {
    return (
      <>
        {/* 遮罩层 */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={close}
            />
          )}
        </AnimatePresence>

        {/* 侧边栏 */}
        <AnimatePresence>
          {isOpen && (
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className={cn("fixed left-0 top-0 z-50 h-full bg-white shadow-2xl", className)}
              style={{ width }}
            >
              {/* 关闭按钮 */}
              <div className="flex justify-end p-4">
                <Button variant="ghost" size="icon" onClick={close} className="rounded-full">
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* 侧边栏内容 */}
              <div className="overflow-y-auto h-[calc(100%-64px)]">{children}</div>
            </motion.aside>
          )}
        </AnimatePresence>
      </>
    )
  }

  // 桌面端渲染
  return (
    <motion.aside
      animate={{
        width: isCollapsed ? collapsedWidth : width,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn("relative h-full bg-white border-r border-gray-200 overflow-hidden", className)}
    >
      {/* 侧边栏内容 */}
      <div className="h-full overflow-y-auto">{children}</div>
    </motion.aside>
  )
}

// 侧边栏切换按钮组件
export function SidebarToggle() {
  const { toggle, isMobile, isCollapsed, setIsCollapsed } = useSidebarContext()

  if (isMobile) {
    return (
      <Button variant="ghost" size="icon" onClick={toggle} className="rounded-lg">
        <PanelLeft className="h-5 w-5" />
        <span className="sr-only">切换侧边栏</span>
      </Button>
    )
  }

  return (
    <Button variant="ghost" size="icon" onClick={() => setIsCollapsed(!isCollapsed)} className="rounded-lg">
      {isCollapsed ? <PanelLeft className="h-5 w-5" /> : <PanelLeftClose className="h-5 w-5" />}
      <span className="sr-only">{isCollapsed ? "展开侧边栏" : "收起侧边栏"}</span>
    </Button>
  )
}

// 侧边栏内容区域组件
interface SidebarContentProps {
  children: React.ReactNode
  className?: string
}

export function SidebarContent({ children, className }: SidebarContentProps) {
  return <div className={cn("flex flex-col gap-2 p-4", className)}>{children}</div>
}

// 侧边栏头部组件
interface SidebarHeaderProps {
  children: React.ReactNode
  className?: string
}

export function SidebarHeader({ children, className }: SidebarHeaderProps) {
  return <div className={cn("px-4 py-6 border-b border-gray-200", className)}>{children}</div>
}

// 侧边栏底部组件
interface SidebarFooterProps {
  children: React.ReactNode
  className?: string
}

export function SidebarFooter({ children, className }: SidebarFooterProps) {
  return <div className={cn("px-4 py-4 mt-auto border-t border-gray-200", className)}>{children}</div>
}
