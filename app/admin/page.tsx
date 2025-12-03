import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { mockStats, mockAssets } from "@/lib/data"
import {
  Users,
  Package,
  Download,
  Flag,
  Plus,
  Edit,
  Trash2,
  Eye,
  Shield,
  BarChart3,
  AlertTriangle,
  CheckCircle,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"

const mockUsers = [
  {
    id: "1",
    username: "ServerOwner",
    email: "owner@server.com",
    membership: "vip",
    downloads: 45,
    posts: 28,
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    username: "MLOCreator",
    email: "creator@mlo.com",
    membership: "vip",
    downloads: 120,
    posts: 67,
    createdAt: "2024-01-05",
  },
  {
    id: "3",
    username: "NewServer",
    email: "new@server.com",
    membership: "free",
    downloads: 5,
    posts: 3,
    createdAt: "2024-02-15",
  },
  {
    id: "4",
    username: "RPServer_Owner",
    email: "rp@server.com",
    membership: "vip",
    downloads: 89,
    posts: 45,
    createdAt: "2024-01-20",
  },
  {
    id: "5",
    username: "ScriptDev",
    email: "dev@scripts.com",
    membership: "free",
    downloads: 12,
    posts: 8,
    createdAt: "2024-03-01",
  },
]

const mockReports = [
  {
    id: "1",
    type: "thread",
    reason: "Spam",
    reporter: "ServerOwner",
    target: "Buy cheap scripts!",
    status: "pending",
    createdAt: "2024-03-10",
  },
  {
    id: "2",
    type: "user",
    reason: "Inappropriate content",
    reporter: "MLOCreator",
    target: "BadUser123",
    status: "pending",
    createdAt: "2024-03-09",
  },
  {
    id: "3",
    type: "reply",
    reason: "Harassment",
    reporter: "NewServer",
    target: "Comment on thread #45",
    status: "resolved",
    createdAt: "2024-03-08",
  },
]

export default function AdminPage() {
  const pendingReports = mockReports.filter((r) => r.status === "pending")

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-72">
        <Header />
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-destructive to-chart-5 flex items-center justify-center glow-sm">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Admin Panel</h1>
                <p className="text-muted-foreground">Manage users, assets, and moderate the community</p>
              </div>
            </div>
            <Link href="/admin/analytics">
              <Button variant="outline" className="gap-2 rounded-xl bg-transparent">
                <BarChart3 className="h-4 w-4" />
                View Analytics
              </Button>
            </Link>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              {
                label: "Total Users",
                value: mockStats.totalMembers,
                change: "+12%",
                icon: Users,
                color: "text-primary",
                bg: "bg-primary/20",
              },
              {
                label: "Total Assets",
                value: mockStats.totalAssets,
                change: "+8",
                icon: Package,
                color: "text-success",
                bg: "bg-success/20",
              },
              {
                label: "Total Downloads",
                value: mockStats.totalDownloads.toLocaleString(),
                change: "+24%",
                icon: Download,
                color: "text-accent",
                bg: "bg-accent/20",
              },
              {
                label: "Pending Reports",
                value: pendingReports.length,
                change: null,
                icon: Flag,
                color: "text-destructive",
                bg: "bg-destructive/20",
                alert: pendingReports.length > 0,
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`glass rounded-2xl p-5 card-hover ${stat.alert ? "border-destructive/50" : ""}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`h-10 w-10 rounded-xl ${stat.bg} flex items-center justify-center`}>
                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                  {stat.change && <span className="text-xs text-success font-medium">{stat.change}</span>}
                  {stat.alert && <AlertTriangle className="h-4 w-4 text-destructive animate-pulse" />}
                </div>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Recent Users */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Recent Users
                </h2>
                <Link href="/admin/users">
                  <Button variant="ghost" size="sm" className="text-primary gap-1">
                    View All <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="space-y-3">
                {mockUsers.slice(0, 5).map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center justify-between rounded-xl bg-secondary/30 p-3 hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/50 to-accent/50 flex items-center justify-center font-bold text-foreground">
                        {user.username.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-foreground">{user.username}</span>
                          {user.membership === "vip" && (
                            <Badge className="bg-primary/20 text-primary text-[10px] px-1.5 py-0">VIP</Badge>
                          )}
                        </div>
                        <span className="text-xs text-muted-foreground">{user.email}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-foreground"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pending Reports */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <Flag className="h-5 w-5 text-destructive" />
                  Pending Reports
                  {pendingReports.length > 0 && (
                    <span className="px-2 py-0.5 text-xs bg-destructive text-destructive-foreground rounded-full">
                      {pendingReports.length}
                    </span>
                  )}
                </h2>
              </div>
              <div className="space-y-3">
                {pendingReports.length === 0 ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-12 w-12 text-success mx-auto mb-3" />
                    <p className="text-foreground font-medium">All clear!</p>
                    <p className="text-sm text-muted-foreground">No pending reports</p>
                  </div>
                ) : (
                  pendingReports.map((report) => (
                    <div key={report.id} className="rounded-xl bg-destructive/5 border border-destructive/20 p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs border-border">
                          {report.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {new Date(report.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="font-medium text-foreground mb-1">{report.reason}</p>
                      <p className="text-sm text-muted-foreground mb-1">
                        Target: <span className="text-foreground">{report.target}</span>
                      </p>
                      <p className="text-xs text-muted-foreground mb-3">Reported by: {report.reporter}</p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="destructive" className="flex-1 rounded-lg">
                          Take Action
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 rounded-lg bg-transparent">
                          Dismiss
                        </Button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Assets Management */}
          <div className="mt-6 glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                Recent Assets
              </h2>
              <div className="flex gap-2">
                <Link href="/admin/assets">
                  <Button variant="ghost" size="sm" className="text-primary gap-1">
                    View All <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Button size="sm" className="bg-primary hover:bg-primary/90 gap-1 rounded-xl">
                  <Plus className="h-4 w-4" />
                  Add Asset
                </Button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Asset</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Category</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Price</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Downloads</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockAssets.slice(0, 5).map((asset) => (
                    <tr
                      key={asset.id}
                      className="border-b border-border/30 last:border-0 hover:bg-secondary/20 transition-colors"
                    >
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={asset.image || "/placeholder.svg?height=40&width=40&query=asset"}
                            alt={asset.title}
                            className="h-10 w-10 rounded-lg object-cover"
                          />
                          <span className="font-medium text-foreground">{asset.title}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <Badge variant="secondary" className="capitalize rounded-lg">
                          {asset.category}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <Badge
                          className={
                            asset.price === "free" ? "bg-success/20 text-success" : "bg-primary/20 text-primary"
                          }
                        >
                          {asset.price.toUpperCase()}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-muted-foreground">{asset.downloads.toLocaleString()}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-foreground"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-foreground"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
