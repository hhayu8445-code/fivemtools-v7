"use client"

import { mockStats } from "@/lib/data"

export function StatusCard() {
  return (
    <div className="space-y-3">
      {/* Server Status */}
      <div className="flex items-center justify-between rounded-lg bg-secondary/50 px-4 py-3">
        <div>
          <p className="text-sm font-medium text-foreground">Status Server</p>
          <p className="text-xs text-muted-foreground">All systems operational</p>
        </div>
        <div className="h-3 w-3 rounded-full bg-success animate-pulse" />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-lg bg-success/10 px-4 py-3">
          <div className="flex items-center gap-1 text-xs text-success">
            <span className="h-2 w-2 rounded-full bg-success" />
            ONLINE
          </div>
          <p className="mt-1 text-2xl font-bold text-foreground">{mockStats.onlineUsers}</p>
          <p className="text-xs text-muted-foreground">Active users</p>
        </div>
        <div className="rounded-lg bg-primary/10 px-4 py-3">
          <div className="flex items-center gap-1 text-xs text-primary">
            <span>👥</span>
            MEMBERS
          </div>
          <p className="mt-1 text-2xl font-bold text-foreground">{mockStats.totalMembers}</p>
          <p className="text-xs text-muted-foreground">Registered</p>
        </div>
      </div>
    </div>
  )
}
