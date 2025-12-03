import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("q")
    
    if (!query) {
      return NextResponse.json({ assets: [], threads: [] })
    }

    const [assets, threads] = await Promise.all([
      prisma.asset.findMany({
        where: {
          OR: [
            { title: { contains: query, mode: "insensitive" } },
            { description: { contains: query, mode: "insensitive" } },
          ],
        },
        include: { author: true },
        take: 10,
      }),
      prisma.forumThread.findMany({
        where: {
          OR: [
            { title: { contains: query, mode: "insensitive" } },
            { content: { contains: query, mode: "insensitive" } },
          ],
        },
        include: { author: true, category: true },
        take: 10,
      }),
    ])

    return NextResponse.json({ assets, threads })
  } catch (error) {
    return NextResponse.json({ error: "Search failed" }, { status: 500 })
  }
}
