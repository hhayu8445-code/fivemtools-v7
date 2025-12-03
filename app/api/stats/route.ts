import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const [totalMembers, totalAssets, totalDownloads] = await Promise.all([
      prisma.user.count(),
      prisma.asset.count(),
      prisma.asset.aggregate({ _sum: { downloads: true } }),
    ])
    
    return NextResponse.json({
      onlineUsers: Math.floor(Math.random() * 50) + 200,
      totalMembers,
      totalAssets,
      totalDownloads: totalDownloads._sum.downloads || 0,
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 })
  }
}
