import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Search, Filter, Edit, Trash2, Ban, Crown, Download, MessageSquare } from "lucide-react"
import Link from "next/link"

const mockUsers = [
  {
    id: "1",
    username: "ServerOwner",
    email: "owner@server.com",
    avatar: "/gamer-avatar.png",
    membership: "vip",
    downloads: 45,
    posts: 28,
    reputation: 125,
    status: "active",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    username: "MLOCreator",
    email: "creator@mlo.com",
    avatar: "/studio-avatar.jpg",
    membership: "vip",
    downloads: 120,
    posts: 67,
    reputation: 250,
    status: "active",
    createdAt: "2024-01-05",
  },
  {
    id: "3",
    username: "NewServer",
    email: "new@server.com",
    avatar: "/gamer-avatar-blue.jpg",
    membership: "free",
    downloads: 5,
    posts: 3,
    reputation: 10,
    status: "active",
    createdAt: "2024-02-15",
  },
  {
    id: "4",
    username: "RPServer_Owner",
    email: "rp@server.com",
    avatar: "/gamer-avatar.png",
    membership: "vip",
    downloads: 89,
    posts: 45,
    reputation: 85,
    status: "active",
    createdAt: "2024-01-20",
  },
  {
    id: "5",
    username: "ScriptDev",
    email: "dev@scripts.com",
    avatar: "/gamer-avatar-blue.jpg",
    membership: "free",
    downloads: 12,
    posts: 8,
    reputation: 35,
    status: "active",
    createdAt: "2024-03-01",
  },
  {
    id: "6",
    username: "BannedUser",
    email: "banned@example.com",
    avatar: "/gamer-avatar.png",
    membership: "free",
    downloads: 2,
    posts: 1,
    reputation: -10,
    status: "banned",
    createdAt: "2024-02-20",
  },
]

export default function AdminUsersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-72">
        <Header />
        <div className="p-6">
          {/* Back Button */}
          <Link
            href="/admin"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Admin
          </Link>

          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">User Management</h1>
              <p className="text-muted-foreground">Manage user accounts, memberships, and permissions.</p>
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search users..." className="pl-9 bg-secondary/50" />
            </div>
            <Button variant="outline" className="gap-2 bg-transparent">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <div className="flex gap-1 bg-secondary rounded-lg p-1 ml-auto">
              <Button variant="secondary" size="sm" className="bg-card">
                All
              </Button>
              <Button variant="ghost" size="sm">
                VIP
              </Button>
              <Button variant="ghost" size="sm">
                Free
              </Button>
              <Button variant="ghost" size="sm">
                Banned
              </Button>
            </div>
          </div>

          {/* Users Table */}
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-secondary/30">
                  <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">User</th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">Membership</th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">Stats</th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">Status</th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">Joined</th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockUsers.map((user) => (
                  <tr key={user.id} className="border-b border-border last:border-0 hover:bg-secondary/20">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={user.avatar || "/placeholder.svg"}
                          alt={user.username}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-foreground">{user.username}</span>
                            {user.membership === "vip" && <Crown className="h-4 w-4 text-primary" />}
                          </div>
                          <span className="text-sm text-muted-foreground">{user.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <Badge
                        className={
                          user.membership === "vip"
                            ? "bg-primary/20 text-primary"
                            : "bg-secondary text-muted-foreground"
                        }
                      >
                        {user.membership.toUpperCase()}
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Download className="h-4 w-4" />
                          {user.downloads}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          {user.posts}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <Badge
                        className={
                          user.status === "active" ? "bg-success/20 text-success" : "bg-destructive/20 text-destructive"
                        }
                      >
                        {user.status}
                      </Badge>
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">{new Date(user.createdAt).toLocaleDateString()}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Ban className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-muted-foreground">Showing 1-6 of 30 users</p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
