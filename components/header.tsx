"use client"

import { useState } from "react"
import { Search, Command, Bell, Settings, LogOut, User, Sparkles } from "lucide-react"
import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  const { data: session } = useSession()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [notifications] = useState(5)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/scripts?search=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border glass px-6">
      {/* Search */}
      <form onSubmit={handleSearch} className="relative w-full max-w-xl">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search assets, scripts, vehicles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-secondary/50 pl-11 pr-20 h-11 border-border/50 rounded-xl focus:border-primary focus:ring-primary/20"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-muted-foreground">
          <kbd className="px-1.5 py-0.5 text-[10px] font-medium bg-background/80 rounded border border-border">
            <Command className="h-3 w-3 inline" />
          </kbd>
          <kbd className="px-1.5 py-0.5 text-[10px] font-medium bg-background/80 rounded border border-border">K</kbd>
        </div>
      </form>

      {/* Actions */}
      <div className="flex items-center gap-2 ml-6">
        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground">
              <Bell className="h-5 w-5" />
              {notifications > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground animate-pulse">
                  {notifications}
                </span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 glass">
            <div className="p-3 border-b border-border">
              <h3 className="font-semibold text-foreground">Notifications</h3>
              <p className="text-xs text-muted-foreground">You have {notifications} unread messages</p>
            </div>
            <div className="max-h-80 overflow-y-auto">
              {[1, 2, 3].map((i) => (
                <DropdownMenuItem key={i} className="p-3 cursor-pointer">
                  <div className="flex gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Sparkles className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">New asset uploaded</p>
                      <p className="text-xs text-muted-foreground">Advanced Banking System v2.0</p>
                      <p className="text-[10px] text-muted-foreground mt-1">2 hours ago</p>
                    </div>
                  </div>
                </DropdownMenuItem>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Discord Login */}
        {!session ? (
          <Button onClick={() => signIn("discord")} className="bg-[#5865F2] hover:bg-[#4752C4] text-white gap-2 rounded-xl h-10 px-4">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
            <span className="hidden sm:inline">Login</span>
          </Button>
        ) : null}

        {/* User Menu (shown when logged in) */}
        {session && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-10 w-10 p-0 overflow-hidden border-2 border-transparent hover:border-primary/50"
            >
              <img src={session.user?.avatar || "/gamer-avatar.png"} alt="User" className="h-full w-full object-cover" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 glass">
            <div className="p-3 border-b border-border">
              <p className="font-semibold text-foreground">{session.user?.username}</p>
              <p className="text-xs text-primary">{session.user?.membership?.toUpperCase() || "FREE"} Member</p>
              <p className="text-[10px] text-muted-foreground">{session.user?.email}</p>
            </div>
            <DropdownMenuItem className="gap-2 cursor-pointer">
              <User className="h-4 w-4" /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2 cursor-pointer">
              <Settings className="h-4 w-4" /> Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => signOut()} className="gap-2 cursor-pointer text-destructive">
              <LogOut className="h-4 w-4" /> Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        )}
      </div>
    </header>
  )
}
