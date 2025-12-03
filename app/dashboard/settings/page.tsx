import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, User, Bell, Shield, CreditCard, Trash2, Camera, Crown, Check } from "lucide-react"
import Link from "next/link"

const mockUser = {
  username: "ServerOwner",
  email: "owner@server.com",
  avatar: "/gamer-avatar.png",
  discordId: "123456789",
}

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-72">
        <Header />
        <div className="p-6 max-w-4xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/dashboard" className="hover:text-foreground transition-colors flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              Dashboard
            </Link>
            <span>/</span>
            <span className="text-foreground">Settings</span>
          </div>

          <h1 className="text-3xl font-bold text-foreground mb-8">Settings</h1>

          {/* Profile Settings */}
          <div className="glass rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <User className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">Profile Settings</h2>
            </div>

            <div className="flex items-center gap-6 mb-6">
              <div className="relative group">
                <img
                  src={mockUser.avatar || "/placeholder.svg?height=80&width=80&query=user avatar"}
                  alt={mockUser.username}
                  className="h-20 w-20 rounded-2xl object-cover ring-2 ring-border"
                />
                <button className="absolute inset-0 rounded-2xl bg-background/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <Camera className="h-6 w-6 text-foreground" />
                </button>
              </div>
              <div>
                <Button variant="outline" size="sm" className="rounded-xl bg-transparent">
                  Change Avatar
                </Button>
                <p className="text-xs text-muted-foreground mt-2">JPG, PNG or GIF. Max 2MB.</p>
              </div>
            </div>

            <div className="grid gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Username</label>
                <Input
                  defaultValue={mockUser.username}
                  className="max-w-md h-11 bg-secondary/50 border-border/50 rounded-xl"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <Input
                  defaultValue={mockUser.email}
                  type="email"
                  className="max-w-md h-11 bg-secondary/50 border-border/50 rounded-xl"
                  disabled
                />
                <p className="text-xs text-muted-foreground mt-1">Email is linked to your Discord account</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Bio</label>
                <textarea
                  className="w-full max-w-md h-24 rounded-xl border border-border/50 bg-secondary/50 p-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/50 focus:outline-none resize-none"
                  placeholder="Tell us about yourself..."
                />
              </div>
            </div>

            <div className="mt-6">
              <Button className="bg-primary hover:bg-primary/90 rounded-xl glow-sm">Save Changes</Button>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="glass rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-warning/20 flex items-center justify-center">
                <Bell className="h-5 w-5 text-warning" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">Notifications</h2>
            </div>

            <div className="space-y-1">
              {[
                {
                  label: "Email notifications",
                  description: "Receive email notifications for important updates",
                  default: true,
                },
                {
                  label: "Forum replies",
                  description: "Get notified when someone replies to your posts",
                  default: true,
                },
                {
                  label: "New downloads",
                  description: "Get notified about new resources in your favorite categories",
                  default: false,
                },
                { label: "Promotions", description: "Receive promotional emails and special offers", default: false },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-4 border-b border-border/30 last:border-0">
                  <div>
                    <p className="font-medium text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked={item.default} className="sr-only peer" />
                    <div className="w-11 h-6 bg-secondary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Security */}
          <div className="glass rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-success/20 flex items-center justify-center">
                <Shield className="h-5 w-5 text-success" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">Security</h2>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between py-4 border-b border-border/30">
                <div>
                  <p className="font-medium text-foreground">Discord Connection</p>
                  <p className="text-sm text-muted-foreground">Connected as {mockUser.discordId}</p>
                </div>
                <Badge className="bg-success/20 text-success border-success/30">
                  <Check className="h-3 w-3 mr-1" />
                  Connected
                </Badge>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-border/30">
                <div>
                  <p className="font-medium text-foreground">Two-Factor Authentication</p>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                </div>
                <Button variant="outline" size="sm" className="rounded-xl bg-transparent">
                  Enable
                </Button>
              </div>
              <div className="flex items-center justify-between py-4">
                <div>
                  <p className="font-medium text-foreground">Active Sessions</p>
                  <p className="text-sm text-muted-foreground">Manage your active login sessions</p>
                </div>
                <Button variant="outline" size="sm" className="rounded-xl bg-transparent">
                  View Sessions
                </Button>
              </div>
            </div>
          </div>

          {/* Billing */}
          <div className="glass rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-accent/20 flex items-center justify-center">
                <CreditCard className="h-5 w-5 text-accent" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">Billing</h2>
            </div>

            <div className="flex items-center justify-between p-5 rounded-xl bg-primary/10 border border-primary/30">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Crown className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">VIP Membership</p>
                  <p className="text-sm text-muted-foreground">$15/month - Renews April 15, 2024</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="rounded-xl bg-transparent">
                Manage Subscription
              </Button>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="glass rounded-2xl p-6 border-destructive/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-destructive/20 flex items-center justify-center">
                <Trash2 className="h-5 w-5 text-destructive" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">Danger Zone</h2>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Delete Account</p>
                <p className="text-sm text-muted-foreground">Permanently delete your account and all data</p>
              </div>
              <Button variant="destructive" size="sm" className="rounded-xl">
                Delete Account
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
