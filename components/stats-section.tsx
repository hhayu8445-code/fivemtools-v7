"use client"

import { useStatsStore } from "@/lib/store"
import { Package, Download, Users, Zap, TrendingUp } from "lucide-react"

export function StatsSection() {
  const { stats } = useStatsStore()

  return (
    <div className="glass rounded-2xl p-6">
      <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
        <TrendingUp className="h-5 w-5 text-primary" />
        Platform Stats
      </h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <Package className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Assets</p>
              <p className="font-bold text-foreground">{stats.totalAssets.toLocaleString()}</p>
            </div>
          </div>
          <span className="text-xs text-success font-medium">+12%</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-success/20 flex items-center justify-center">
              <Download className="h-5 w-5 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Downloads</p>
              <p className="font-bold text-foreground">{stats.totalDownloads.toLocaleString()}</p>
            </div>
          </div>
          <span className="text-xs text-success font-medium">+24%</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-accent/20 flex items-center justify-center">
              <Users className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Members</p>
              <p className="font-bold text-foreground">{stats.totalMembers.toLocaleString()}</p>
            </div>
          </div>
          <span className="text-xs text-success font-medium">+8%</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-warning/20 flex items-center justify-center">
              <div className="relative">
                <Zap className="h-5 w-5 text-warning" />
                <div className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full status-online" />
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Online Now</p>
              <p className="font-bold text-foreground">{stats.onlineUsers}</p>
            </div>
          </div>
          <span className="text-[10px] text-warning font-medium px-2 py-0.5 bg-warning/20 rounded-full">LIVE</span>
        </div>
      </div>
    </div>
  )
}
