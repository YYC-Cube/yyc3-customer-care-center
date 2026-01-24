/**
 * @file header.tsx
 * @description header component/module for YYC3 Customer Care Center
 * @module components.header
 * @author YYC³ Team
 * @version 1.0.0
 * @created 2026-01-23
 * @updated 2026-01-23
 * @copyright Copyright (c) 2026 YYC³
 * @license MIT
 */

"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Search,
  Bell,
  Settings,
  User,
  LogOut,
  HelpCircle,
  Moon,
  Sun,
  Globe,
  Shield,
  Bot,
  Palette,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RefreshCw,
} from "lucide-react"

interface HeaderProps {
  activeModule?: string
  className?: string
  height?: number
  sticky?: boolean
  showOnMobile?: boolean
}

export function Header({ activeModule = "dashboard", className, height = 64, sticky = true, showOnMobile = true }: HeaderProps) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [notifications] = useState([
    { id: 1, title: "新客户注册", message: "张三刚刚注册了账户", time: "2分钟前", unread: true },
    { id: 2, title: "任务提醒", message: "项目A的截止日期临近", time: "1小时前", unread: true },
    { id: 3, title: "系统更新", message: "系统将在今晚进行维护", time: "3小时前", unread: false },
  ])

  const unreadCount = notifications.filter((n) => n.unread).length

  const getModuleTitle = (module: string) => {
    const moduleMap: Record<string, string> = {
      dashboard: "服务中心",
      analytics: "数据分析",
      reports: "报表中心",
      kpi: "指标监控",
      customers: "客户管理",
      tasks: "任务管理",
      approval: "审批管理",
      okr: "目标管理",
      finance: "财务管理",
      budget: "预算管理",
      invoices: "发票管理",
      payments: "支付管理",
      chat: "即时聊天",
      meetings: "视频会议",
      documents: "文档协作",
      notifications: "通知中心",
      "ai-analysis": "智能分析",
      "ai-prediction": "客户数据",
      "ai-automation": "智能表单",
      permissions: "权限管理",
      audit: "安全审计",
      mfa: "多因子认证",
      settings: "基础设置",
      database: "数据库管理",
      integrations: "集成管理",
      backup: "备份恢复",
      overview: "应用总览",
      mobile: "移动应用",
      performance: "性能优化",
      training: "用户培训",
      feedback: "用户反馈",
    }
    return moduleMap[module] || "服务中心"
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      console.log("搜索:", searchQuery)
      // 这里可以实现搜索功能
    }
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const refreshPage = () => {
    window.location.reload()
  }

  const openCustomerService = () => {
    // 打开客服对话框或跳转到客服页面
    console.log("打开客服")
  }

  const changeLanguage = () => {
    // 切换语言
    console.log("切换语言")
  }

  const openSettings = () => {
    router.push("/system/settings")
  }

  const openProfile = () => {
    console.log("打开个人资料")
  }

  const openSecurityCenter = () => {
    router.push("/security")
  }

  const openHelp = () => {
    console.log("打开帮助")
  }

  const logout = () => {
    console.log("退出登录")
    // 这里可以实现退出登录逻辑
  }

  return (
    <header
      className={cn(
        "bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 flex items-center justify-between shadow-sm",
        sticky ? "fixed top-0 left-0 right-0 z-40" : "relative",
        !showOnMobile && "hidden lg:flex",
        className,
      )}
      style={{ height: `${height}px` }}
    >
      {/* 左侧：日期显示 */}
      <div className="flex items-center space-x-4">
        <div>
          <p className="text-lg font-medium text-gray-900 dark:text-white">
            {new Date().toLocaleDateString("zh-CN", {
              year: "numeric",
              month: "long",
              day: "numeric",
              weekday: "long",
            })}
          </p>
        </div>
      </div>

      {/* 中间：搜索栏 */}
      <div className="flex-1 max-w-md mx-8">
        <form onSubmit={handleSearch} className="relative">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 transition-all duration-300 group-hover:text-blue-500 group-focus-within:text-blue-500 drop-shadow-sm" />
            <Input
              type="text"
              placeholder="搜索功能、数据或文档..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 focus:bg-white dark:focus:bg-gray-900 transition-all duration-300 shadow-inner hover:shadow-md focus:shadow-lg focus:border-blue-400 dark:focus:border-blue-500 rounded-lg"
              style={{
                boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.05)",
              }}
            />
          </div>
        </form>
      </div>

      {/* 右侧：操作按钮和用户菜单 */}
      <div className="flex items-center space-x-4">
        {/* 快捷操作按钮 */}
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={refreshPage}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
          >
            <RefreshCw className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={toggleDarkMode}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
          >
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={changeLanguage}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
          >
            <Globe className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMute}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={toggleFullscreen}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
          >
            {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
          </Button>
        </div>

        {/* 客服图标 */}
        <Button
          variant="ghost"
          size="sm"
          onClick={openCustomerService}
          className="relative text-purple-500 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-200"
        >
          <Bot className="h-4 w-4" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        </Button>

        {/* 通知 */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="relative hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
            >
              <Bell className="h-4 w-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" />
              {unreadCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center p-0 animate-pulse">
                  {unreadCount}
                </Badge>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel className="flex items-center justify-between">
              <span>通知中心</span>
              <Badge variant="secondary" className="text-xs">
                {unreadCount} 条未读
              </Badge>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {notifications.map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                className="flex flex-col items-start p-4 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer"
              >
                <div className="flex items-center justify-between w-full">
                  <span className="font-medium text-sm">{notification.title}</span>
                  <span className="text-xs text-gray-500">{notification.time}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{notification.message}</p>
                {notification.unread && <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />}
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-center text-blue-600 hover:text-blue-800 cursor-pointer">
              查看所有通知
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* 用户菜单 */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="relative h-8 w-8 rounded-full hover:ring-2 hover:ring-blue-200 dark:hover:ring-blue-800 transition-all duration-200"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="用户头像" />
                <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold">
                  管
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">系统管理员</p>
                <p className="text-xs leading-none text-muted-foreground">admin@yanyu.com</p>
                <div className="flex items-center space-x-2 mt-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-green-600">在线</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={openProfile} className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
              <User className="mr-2 h-4 w-4" />
              <span>个人资料</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={openSettings} className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
              <Settings className="mr-2 h-4 w-4" />
              <span>系统设置</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={openSecurityCenter}
              className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <Shield className="mr-2 h-4 w-4" />
              <span>安全中心</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
              <Palette className="mr-2 h-4 w-4" />
              <span>主题设置</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={openHelp} className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
              <HelpCircle className="mr-2 h-4 w-4" />
              <span>帮助支持</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={logout}
              className="cursor-pointer hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400"
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>退出登录</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
