"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { cn } from "@/lib/utils"

interface AdaptiveSidebarProps {
  children: React.ReactNode
  defaultModule?: string
  className?: string
}

export function AdaptiveSidebar({ children, defaultModule = "dashboard", className }: AdaptiveSidebarProps) {
  const [activeModule, setActiveModule] = useState(defaultModule)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <div className={cn("flex h-screen bg-gray-50 dark:bg-gray-900", className)}>
      {/* 侧边栏 */}
      <Sidebar
        activeModule={activeModule}
        setActiveModule={setActiveModule}
        className={cn("transition-all duration-300 ease-in-out", isMobile && "absolute z-50 h-full")}
      />

      {/* 主内容区域 */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* 顶部导航栏 */}
        <Header activeModule={activeModule} className="flex-shrink-0" />

        {/* 页面内容 */}
        <main className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-900 p-6">
          <div className="max-w-full mx-auto">{children}</div>
        </main>
      </div>
    </div>
  )
}
