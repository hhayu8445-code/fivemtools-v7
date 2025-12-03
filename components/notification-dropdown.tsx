"use client"

import { useState } from "react"
import { Bell, MessageCircle, Heart, Info, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { mockNotifications } from "@/lib/data"
import { cn } from "@/lib/utils"

const iconMap = {
  reply: MessageCircle,
  like: Heart,
  system: Info,
  mention: MessageCircle,
  download: Download,
}

export function NotificationDropdown() {
  const [notifications] = useState(mockNotifications)
  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-xs font-medium text-destructive-foreground">
              {unreadCount}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 bg-card border-border">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <h3 className="font-semibold text-foreground">Notifications</h3>
          <Button variant="ghost" size="sm" className="text-xs text-primary">
            Mark all read
          </Button>
        </div>
        <div className="max-h-96 overflow-y-auto">
          {notifications.map((notification) => {
            const Icon = iconMap[notification.type]
            return (
              <DropdownMenuItem
                key={notification.id}
                className={cn("flex items-start gap-3 px-4 py-3 cursor-pointer", !notification.read && "bg-primary/5")}
              >
                <div
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full",
                    notification.type === "like" && "bg-pink-500/20 text-pink-500",
                    notification.type === "reply" && "bg-blue-500/20 text-blue-500",
                    notification.type === "system" && "bg-primary/20 text-primary",
                  )}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{notification.title}</p>
                  <p className="text-xs text-muted-foreground">{notification.message}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {new Date(notification.createdAt).toLocaleDateString()}
                  </p>
                </div>
                {!notification.read && <div className="h-2 w-2 rounded-full bg-primary" />}
              </DropdownMenuItem>
            )
          })}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
