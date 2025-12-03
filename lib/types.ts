export interface Asset {
  id: string
  title: string
  description: string
  category: "scripts" | "mlo" | "vehicles" | "clothing"
  framework: "standalone" | "esx" | "qbcore" | "all"
  version: string
  price: "free" | "premium"
  image: string
  downloads: number
  rating: number
  author: string
  createdAt: string
  tags: string[]
}

export interface User {
  id: string
  username: string
  email: string
  avatar: string
  discordId: string
  membership: "free" | "vip" | "admin"
  downloads: number
  reputation: number
  points: number
  achievements: Achievement[]
  createdAt: string
}

export interface Achievement {
  id: string
  name: string
  description: string
  icon: string
  unlockedAt: string
}

export interface ForumThread {
  id: string
  title: string
  content: string
  category: string
  author: User
  replies: number
  likes: number
  views: number
  isPinned: boolean
  isLocked: boolean
  createdAt: string
}

export interface ForumCategory {
  id: string
  name: string
  description: string
  icon: string
  threadCount: number
  color: string
}

export interface Notification {
  id: string
  type: "reply" | "mention" | "like" | "system" | "download"
  title: string
  message: string
  read: boolean
  createdAt: string
}

export interface Stats {
  onlineUsers: number
  totalMembers: number
  totalAssets: number
  totalDownloads: number
}

export interface ForumReply {
  id: string
  content: string
  author: User
  likes: number
  createdAt: string
  isEdited: boolean
}

export interface Poll {
  id: string
  question: string
  options: PollOption[]
  totalVotes: number
  endsAt?: string
}

export interface PollOption {
  id: string
  text: string
  votes: number
}
