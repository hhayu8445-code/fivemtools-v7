"use client"

import { Download, MessageSquare, Heart, UserPlus, Star, Clock } from "lucide-react"

const activities = [
  {
    type: "download",
    user: "RPServer_Owner",
    action: "downloaded",
    target: "Prism Banking",
    time: "2m ago",
    icon: Download,
    color: "text-primary",
  },
  {
    type: "post",
    user: "MLOCreator",
    action: "posted in",
    target: "Showcase",
    time: "5m ago",
    icon: MessageSquare,
    color: "text-success",
  },
  {
    type: "like",
    user: "NewServer",
    action: "liked",
    target: "Advanced Garage",
    time: "8m ago",
    icon: Heart,
    color: "text-chart-5",
  },
  {
    type: "join",
    user: "ScriptDev",
    action: "joined the community",
    target: "",
    time: "12m ago",
    icon: UserPlus,
    color: "text-accent",
  },
  {
    type: "review",
    user: "FiveM Admin",
    action: "reviewed",
    target: "Electron AC",
    time: "15m ago",
    icon: Star,
    color: "text-warning",
  },
  {
    type: "download",
    user: "ServerHost",
    action: "downloaded",
    target: "Police EUP Pack",
    time: "18m ago",
    icon: Download,
    color: "text-primary",
  },
]

export function ActivityFeed() {
  return (
    <div className="glass rounded-2xl p-6">
      <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
        <Clock className="h-5 w-5 text-muted-foreground" />
        Activity Feed
      </h3>
      <div className="space-y-3">
        {activities.map((activity, i) => {
          const Icon = activity.icon
          return (
            <div key={i} className="flex items-start gap-3 text-sm">
              <div className={`h-8 w-8 rounded-lg bg-secondary/80 flex items-center justify-center shrink-0`}>
                <Icon className={`h-4 w-4 ${activity.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-foreground">
                  <span className="font-medium">{activity.user}</span>
                  <span className="text-muted-foreground"> {activity.action} </span>
                  {activity.target && <span className="font-medium text-primary">{activity.target}</span>}
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          )
        })}
      </div>
      <button className="w-full mt-4 text-sm text-primary hover:text-primary/80 transition-colors text-center">
        View all activity
      </button>
    </div>
  )
}
