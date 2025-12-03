import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { mockThreads } from "@/lib/data"
import {
  ArrowLeft,
  MessageSquare,
  Eye,
  Share2,
  Flag,
  Pin,
  Lock,
  ThumbsUp,
  ThumbsDown,
  Crown,
  Shield,
  Reply,
  MoreHorizontal,
  Bookmark,
  Clock,
  Send,
  ImageIcon,
  Link2,
  AtSign,
} from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const mockReplies = [
  {
    id: "1",
    content: "Great post! This is really helpful for new server owners. Thanks for sharing!",
    author: {
      id: "user2",
      username: "RPServer_Owner",
      avatar: "/gamer-avatar-blue.jpg",
      membership: "vip",
      reputation: 85,
    },
    likes: 12,
    createdAt: "2024-03-02",
    isEdited: false,
  },
  {
    id: "2",
    content:
      "I had the same issue. Make sure you have all dependencies installed first. Check your server.cfg for the correct start order.",
    author: { id: "user3", username: "MLOCreator", avatar: "/studio-avatar.jpg", membership: "vip", reputation: 250 },
    likes: 8,
    createdAt: "2024-03-03",
    isEdited: true,
  },
  {
    id: "3",
    content: "The documentation on the resource page should help. Let me know if you need more specific assistance.",
    author: {
      id: "admin",
      username: "FiveM Admin",
      avatar: "/admin-avatar-purple.jpg",
      membership: "admin",
      reputation: 1000,
    },
    likes: 25,
    createdAt: "2024-03-04",
    isEdited: false,
  },
]

export default async function ThreadPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const thread = mockThreads.find((t) => t.id === id)

  if (!thread) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-72">
        <Header />
        <div className="p-6 max-w-5xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/forum" className="hover:text-foreground transition-colors flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              Forum
            </Link>
            <span>/</span>
            <Link href={`/forum/category/${thread.category}`} className="hover:text-foreground transition-colors">
              {thread.category}
            </Link>
            <span>/</span>
            <span className="text-foreground truncate max-w-[200px]">{thread.title}</span>
          </div>

          {/* Thread Header Card */}
          <div className="glass rounded-2xl overflow-hidden mb-6">
            {/* Thread Meta Bar */}
            <div className="bg-secondary/30 px-6 py-3 flex items-center justify-between border-b border-border/50">
              <div className="flex items-center gap-3">
                {thread.isPinned && (
                  <Badge className="bg-primary/20 text-primary border-primary/30 gap-1">
                    <Pin className="h-3 w-3" />
                    Pinned
                  </Badge>
                )}
                {thread.isLocked && (
                  <Badge className="bg-destructive/20 text-destructive border-destructive/30 gap-1">
                    <Lock className="h-3 w-3" />
                    Locked
                  </Badge>
                )}
                <Badge variant="outline" className="border-border/50">
                  {thread.category}
                </Badge>
              </div>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="sm" className="h-8 gap-1.5 text-muted-foreground hover:text-foreground">
                  <Bookmark className="h-4 w-4" />
                  Save
                </Button>
                <Button variant="ghost" size="sm" className="h-8 gap-1.5 text-muted-foreground hover:text-foreground">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Thread Content */}
            <div className="p-6">
              <h1 className="text-2xl font-bold text-foreground mb-6">{thread.title}</h1>

              {/* Author Card */}
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="relative">
                    <img
                      src={thread.author.avatar || "/placeholder.svg?height=56&width=56&query=user avatar"}
                      alt={thread.author.username}
                      className="h-14 w-14 rounded-xl object-cover ring-2 ring-border"
                    />
                    <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full status-online border-2 border-card" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-foreground">{thread.author.username}</span>
                    {thread.author.membership === "vip" && (
                      <Badge className="bg-primary/20 text-primary text-[10px] px-1.5 py-0">
                        <Crown className="h-3 w-3 mr-0.5" />
                        VIP
                      </Badge>
                    )}
                    {thread.author.membership === "admin" && (
                      <Badge className="bg-destructive/20 text-destructive text-[10px] px-1.5 py-0">
                        <Shield className="h-3 w-3 mr-0.5" />
                        Admin
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {new Date(thread.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                    <span>{thread.author.reputation.toLocaleString()} reputation</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="mt-6 pl-[72px]">
                <div className="prose prose-invert max-w-none">
                  <p className="text-foreground leading-relaxed whitespace-pre-wrap text-[15px]">{thread.content}</p>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-9 gap-1.5 rounded-full bg-secondary/50 hover:bg-secondary"
                    >
                      <ThumbsUp className="h-4 w-4" />
                      <span className="font-medium">{thread.likes}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-9 gap-1.5 rounded-full hover:bg-secondary">
                      <ThumbsDown className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <MessageSquare className="h-4 w-4" />
                      {thread.replies} replies
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Eye className="h-4 w-4" />
                      {thread.views.toLocaleString()} views
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Replies */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Replies ({mockReplies.length})
              </h2>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  Oldest
                </Button>
                <Button variant="ghost" size="sm" className="text-primary">
                  Newest
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {mockReplies.map((reply, index) => (
                <div key={reply.id} className="glass rounded-2xl p-5">
                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <img
                        src={reply.author.avatar || "/placeholder.svg?height=44&width=44&query=user avatar"}
                        alt={reply.author.username}
                        className="h-11 w-11 rounded-xl object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-foreground">{reply.author.username}</span>
                          {reply.author.membership === "vip" && (
                            <Badge className="bg-primary/20 text-primary text-[10px] px-1.5 py-0">VIP</Badge>
                          )}
                          {reply.author.membership === "admin" && (
                            <Badge className="bg-destructive/20 text-destructive text-[10px] px-1.5 py-0">Admin</Badge>
                          )}
                          <span className="text-xs text-muted-foreground">
                            {new Date(reply.createdAt).toLocaleDateString()}
                          </span>
                          {reply.isEdited && <span className="text-[10px] text-muted-foreground">(edited)</span>}
                        </div>
                        <div className="flex items-center gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-foreground"
                          >
                            <Flag className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-foreground"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-foreground text-[15px] leading-relaxed mb-4">{reply.content}</p>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 gap-1.5 rounded-full text-muted-foreground hover:text-foreground"
                        >
                          <ThumbsUp className="h-3.5 w-3.5" />
                          {reply.likes}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 gap-1.5 rounded-full text-muted-foreground hover:text-foreground"
                        >
                          <ThumbsDown className="h-3.5 w-3.5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 gap-1.5 rounded-full text-muted-foreground hover:text-primary"
                        >
                          <Reply className="h-3.5 w-3.5" />
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reply Form */}
          {!thread.isLocked ? (
            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Send className="h-5 w-5 text-primary" />
                Write a Reply
              </h3>
              <div className="space-y-4">
                <textarea
                  className="w-full h-32 rounded-xl border border-border bg-secondary/30 p-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/50 focus:outline-none resize-none transition-all"
                  placeholder="Share your thoughts..."
                />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 rounded-lg text-muted-foreground hover:text-foreground"
                    >
                      <ImageIcon className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 rounded-lg text-muted-foreground hover:text-foreground"
                    >
                      <Link2 className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 rounded-lg text-muted-foreground hover:text-foreground"
                    >
                      <AtSign className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button variant="outline" className="rounded-xl bg-transparent">
                      Cancel
                    </Button>
                    <Button className="bg-primary hover:bg-primary/90 rounded-xl gap-2 glow-sm">
                      <Send className="h-4 w-4" />
                      Post Reply
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="glass rounded-2xl p-8 text-center">
              <Lock className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">Thread Locked</h3>
              <p className="text-muted-foreground">This thread has been locked and cannot receive new replies.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
