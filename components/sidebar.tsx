"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { cn } from "@/lib/utils"
import {
  MessageSquare,
  Compass,
  Code,
  MapPin,
  Car,
  Shirt,
  Mail,
  Crown,
  Key,
  Rocket,
  LayoutDashboard,
  Shield,
  ChevronLeft,
  Users,
  Zap,
} from "lucide-react"

const navItems = [
  { label: "Community Forum", href: "/forum", icon: MessageSquare, badge: "HOT" },
  { label: "Discover", href: "/", icon: Compass },
  { label: "Scripts", href: "/scripts", icon: Code, count: 450 },
  { label: "Maps & MLO", href: "/mlo", icon: MapPin, count: 120 },
  { label: "Vehicles", href: "/vehicles", icon: Car, count: 280 },
  { label: "EUP & Clothing", href: "/clothing", icon: Shirt, count: 95 },
  { label: "Messages", href: "/messages", icon: Mail, notification: 3 },
  { label: "Membership", href: "/membership", icon: Crown },
  { label: "Decrypt CFX V7", href: "/decrypt", icon: Key },
  { label: "Upvotes Server", href: "/upvotes", icon: Rocket },
]

const userItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Admin Panel", href: "/admin", icon: Shield },
]

export function Sidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen border-r border-border bg-sidebar transition-all duration-300",
        collapsed ? "w-20" : "w-72",
      )}
    >
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex items-center justify-between border-b border-sidebar-border px-4 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-xl bg-gradient-to-br from-primary to-accent p-0.5 glow-sm">
              <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-sidebar">
                <Zap className="h-6 w-6 text-primary" />
              </div>
            </div>
            {!collapsed && (
              <div>
                <h1 className="text-lg font-bold text-foreground">FiveM Tools</h1>
                <p className="text-xs text-primary font-medium">V7 Premium</p>
              </div>
            )}
          </Link>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className={cn(
              "p-1.5 rounded-lg hover:bg-sidebar-accent transition-colors",
              collapsed && "absolute -right-3 top-6 bg-sidebar border border-border",
            )}
          >
            <ChevronLeft
              className={cn("h-4 w-4 text-muted-foreground transition-transform", collapsed && "rotate-180")}
            />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 scrollbar-thin">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
              const Icon = item.icon

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-primary/15 text-primary glow-sm"
                      : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground",
                  )}
                >
                  <Icon className={cn("h-5 w-5 shrink-0", isActive && "text-primary")} />
                  {!collapsed && (
                    <>
                      <span className="flex-1">{item.label}</span>
                      {item.badge && (
                        <span className="px-2 py-0.5 text-[10px] font-bold bg-destructive text-destructive-foreground rounded-full animate-pulse">
                          {item.badge}
                        </span>
                      )}
                      {item.count && <span className="text-xs text-muted-foreground">{item.count}</span>}
                      {item.notification && (
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                          {item.notification}
                        </span>
                      )}
                    </>
                  )}
                </Link>
              )
            })}
          </div>

          {/* User Section */}
          <div className="pt-4 mt-4 border-t border-sidebar-border">
            {!collapsed && (
              <p className="px-3 mb-2 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                Account
              </p>
            )}
            {userItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
              const Icon = item.icon

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-primary/15 text-primary glow-sm"
                      : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground",
                  )}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  {!collapsed && <span>{item.label}</span>}
                </Link>
              )
            })}
          </div>
        </nav>

        {/* Status Card */}
        {!collapsed && (
          <div className="border-t border-sidebar-border p-4">
            <div className="glass rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative">
                  <div className="h-2 w-2 rounded-full status-online absolute -top-0.5 -right-0.5" />
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">Server Status</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-center">
                <div className="rounded-lg bg-background/50 p-2">
                  <p className="text-lg font-bold text-primary">247</p>
                  <p className="text-[10px] text-muted-foreground">Online</p>
                </div>
                <div className="rounded-lg bg-background/50 p-2">
                  <p className="text-lg font-bold text-foreground">15.2K</p>
                  <p className="text-[10px] text-muted-foreground">Members</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  )
}
