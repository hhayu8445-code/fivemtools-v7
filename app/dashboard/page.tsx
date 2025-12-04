"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { SponsorBanner } from "@/components/sponsor-banner"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/components/auth-provider"
import {
  Download,
  MessageSquare,
  Heart,
  Star,
  Award,
  TrendingUp,
  Settings,
  Crown,
  Calendar,
  Clock,
  Zap,
  ArrowUpRight,
  ChevronRight,
  Shield,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/")
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="h-12 w-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!user) return null

  const mockDownloadHistory = [
    { id: "1", title: "Advanced Banking System", category: "scripts", downloadedAt: "2025-12-04" },
    { id: "2", title: "Electron AC V7", category: "scripts", downloadedAt: "2025-12-03" },
    { id: "3", title: "Lamborghini Pack", category: "vehicles", downloadedAt: "2025-12-02" },
    { id: "4", title: "Hospital MLO", category: "mlo", downloadedAt: "2025-12-01" },
  ]

  const mockAchievements = [
    {
      id: "1",
      name: "First Download",
      description: "Downloaded your first resource",
      icon: "🏆",
      unlockedAt: "2025-01-16",
    },
    { id: "2", name: "First Post", description: "Created your first forum post", icon: "💬", unlockedAt: "2025-01-20" },
    { id: "3", name: "Community Member", description: "Active for 30 days", icon: "⭐", unlockedAt: "2025-02-15" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-72">
        <Header />
        <div className="p-6">
          <SponsorBanner />

          {/* Profile Header */}
          <div className="glass rounded-2xl p-6 mb-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative flex items-start justify-between">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <img
                    src={user.avatar || "/placeholder.svg"}
                    alt={user.username}
                    className="h-24 w-24 rounded-2xl object-cover ring-4 ring-primary/20"
                  />
                  {user.membership === "admin" && (
                    <div className="absolute -bottom-2 -right-2 h-9 w-9 rounded-xl bg-destructive flex items-center justify-center glow-sm">
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                  )}
                  {user.membership === "vip" && (
                    <div className="absolute -bottom-2 -right-2 h-9 w-9 rounded-xl bg-primary flex items-center justify-center glow-sm">
                      <Crown className="h-5 w-5 text-primary-foreground" />
                    </div>
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-2xl font-bold text-foreground">{user.username}</h1>
                    <Badge
                      className={`${
                        user.membership === "admin"
                          ? "bg-destructive/20 text-destructive border-destructive/30"
                          : user.membership === "vip"
                            ? "bg-primary/20 text-primary border-primary/30"
                            : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {user.membership === "admin" && <Shield className="h-3 w-3 mr-1" />}
                      {user.membership === "vip" && <Crown className="h-3 w-3 mr-1" />}
                      {user.membership.toUpperCase()}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-2">{user.email || "No email provided"}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      Member since 2025
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Star className="h-4 w-4 text-warning" />
                      Discord Connected
                    </span>
                  </div>
                </div>
              </div>
              <Link href="/dashboard/settings">
                <Button variant="outline" className="gap-2 rounded-xl bg-background/50">
                  <Settings className="h-4 w-4" />
                  Settings
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              {
                label: "Total Downloads",
                value: 45,
                change: "+5 this week",
                icon: Download,
                color: "text-primary",
                bg: "bg-primary/20",
              },
              {
                label: "Forum Posts",
                value: 28,
                change: "+12 this week",
                icon: MessageSquare,
                color: "text-success",
                bg: "bg-success/20",
              },
              {
                label: "Likes Received",
                value: 156,
                change: "+8 this week",
                icon: Heart,
                color: "text-chart-5",
                bg: "bg-chart-5/20",
              },
              {
                label: "Total Points",
                value: 680,
                change: null,
                icon: TrendingUp,
                color: "text-warning",
                bg: "bg-warning/20",
              },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-2xl p-5 card-hover">
                <div className="flex items-center justify-between mb-3">
                  <div className={`h-10 w-10 rounded-xl ${stat.bg} flex items-center justify-center`}>
                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                  {stat.change && <span className="text-xs text-success font-medium">{stat.change}</span>}
                </div>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Achievements */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Achievements
                </h2>
                <span className="text-sm text-muted-foreground">{mockAchievements.length}/10 unlocked</span>
              </div>
              <div className="space-y-3">
                {mockAchievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="flex items-center gap-4 rounded-xl bg-secondary/30 p-3 hover:bg-secondary/50 transition-colors"
                  >
                    <div className="h-11 w-11 rounded-xl bg-background/50 flex items-center justify-center text-xl">
                      {achievement.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground">{achievement.name}</p>
                      <p className="text-sm text-muted-foreground truncate">{achievement.description}</p>
                    </div>
                    <span className="text-xs text-muted-foreground shrink-0">
                      {new Date(achievement.unlockedAt).toLocaleDateString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Download History */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Recent Downloads
                </h2>
                <Button variant="ghost" size="sm" className="text-primary gap-1">
                  View All <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-3">
                {mockDownloadHistory.map((download) => (
                  <div
                    key={download.id}
                    className="flex items-center justify-between rounded-xl bg-secondary/30 p-3 hover:bg-secondary/50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 rounded-xl bg-primary/20 flex items-center justify-center">
                        <Download className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {download.title}
                        </p>
                        <p className="text-sm text-muted-foreground capitalize">{download.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-muted-foreground">
                        {new Date(download.downloadedAt).toLocaleDateString()}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Membership Status */}
          <div className="mt-6 glass rounded-2xl p-6 border-primary/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div
                  className={`h-14 w-14 rounded-2xl flex items-center justify-center animate-pulse-glow ${
                    user.membership === "admin" ? "bg-destructive/20" : "bg-primary/20"
                  }`}
                >
                  {user.membership === "admin" ? (
                    <Shield className="h-7 w-7 text-destructive" />
                  ) : (
                    <Crown className="h-7 w-7 text-primary" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    {user.membership === "admin"
                      ? "Administrator Account"
                      : user.membership === "vip"
                        ? "VIP Membership Active"
                        : "Free Member"}
                    <Zap className="h-4 w-4 text-warning" />
                  </h3>
                  <p className="text-muted-foreground">
                    {user.membership === "admin"
                      ? "Full access to all features and admin panel."
                      : user.membership === "vip"
                        ? "Enjoy unlimited downloads, premium assets, and priority support."
                        : "Upgrade to VIP for unlimited access to premium content."}
                  </p>
                </div>
              </div>
              {user.membership === "free" && (
                <Link href="/membership">
                  <Button className="bg-primary hover:bg-primary/90 rounded-xl glow-sm">Upgrade to VIP</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
