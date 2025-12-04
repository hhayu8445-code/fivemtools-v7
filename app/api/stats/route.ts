import { NextResponse } from "next/server"
import type { Stats } from "@/lib/types"

// In production, this would fetch from your database
export async function GET() {
  const stats: Stats = {
    onlineUsers: Math.floor(Math.random() * 200) + 150,
    totalMembers: 15847,
    totalAssets: 2450,
    totalDownloads: 458920,
    totalThreads: 3892,
    totalPosts: 28456,
  }

  return NextResponse.json(stats)
}
