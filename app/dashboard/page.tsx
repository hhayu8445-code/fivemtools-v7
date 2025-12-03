import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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
} from "lucide-react"
import Link from "next/link"

const mockUser = {
  id: "user1",
  username: "ServerOwner",
  email: "owner@server.com",
  avatar: "/gamer-avatar.png",
  discordId: "123456789",
  membership: "vip" as const,
  downloads: 45,
  reputation: 125,
  points: 680,
  createdAt: "2024-01-15",
}

const mockAchievements = [
  {
    id: "1",
    name: "First Download",
    description: "Downloaded your first resource",
    icon: "🏆",
    unlockedAt: "2024-01-16",
  },
  { id: "2", name: "First Post", description: "Created your first forum post", icon: "💬", unlockedAt: "2024-01-20" },
  {
    id: "3",
    name: "Helpful Member",
    description: "Received 10 likes on your posts",
    icon: "❤️",
    unlockedAt: "2024-02-01",
  },
  { id: "4", name: "VIP Member", description: "Upgraded to VIP membership", icon: "👑", unlockedAt: "2024-02-15" },
]

const mockDownloadHistory = [
  { id: "1", title: "Prism - Banking", category: "scripts", downloadedAt: "2024-03-10" },
  { id: "2", title: "Electron AC", category: "scripts", downloadedAt: "2024-03-09" },
  { id: "3", title: "Lamborghini Pack", category: "vehicles", downloadedAt: "2024-03-08" },
  { id: "4", title: "Hospital MLO", category: "mlo", downloadedAt: "2024-03-07" },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-72">
        <Header />
        <div className="p-6">
          {/* Profile Header */}
          <div className="glass rounded-2xl p-6 mb-6 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative flex items-start justify-between">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <img
                    src={mockUser.avatar || "/placeholder.svg?height=96&width=96&query=user avatar"}
                    alt={mockUser.username}
                    className="h-24 w-24 rounded-2xl object-cover ring-4 ring-primary/20"
                  />
                  {mockUser.membership === "vip" && (
                    <div className="absolute -bottom-2 -right-2 h-9 w-9 rounded-xl bg-primary flex items-center justify-center glow-sm">
                      <Crown className="h-5 w-5 text-primary-foreground" />
                    </div>
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-2xl font-bold text-foreground">{mockUser.username}</h1>
                    {mockUser.membership === "vip" && (
                      <Badge className="bg-primary/20 text-primary border-primary/30">
                        <Crown className="h-3 w-3 mr-1" />
                        VIP
                      </Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-2">{mockUser.email}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      Joined {new Date(mockUser.createdAt).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Star className="h-4 w-4 text-warning" />
                      {mockUser.reputation} reputation
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
                value: mockUser.downloads,
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
                value: mockUser.points,
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
                  View All
                  <ChevronRight className="h-4 w-4" />
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
                <div className="h-14 w-14 rounded-2xl bg-primary/20 flex items-center justify-center animate-pulse-glow">
                  <Crown className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    VIP Membership Active
                    <Zap className="h-4 w-4 text-warning" />
                  </h3>
                  <p className="text-muted-foreground">
                    Enjoy unlimited downloads, premium assets, and priority support.
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Renews on</p>
                <p className="font-semibold text-foreground">April 15, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
