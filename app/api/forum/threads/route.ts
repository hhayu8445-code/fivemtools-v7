import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { threadSchema } from "@/lib/validation"
import { checkRateLimit } from "@/lib/rate-limit"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const categoryId = searchParams.get("categoryId")
    
    const where: any = {}
    if (categoryId) where.categoryId = categoryId
    
    const threads = await prisma.forumThread.findMany({
      where,
      include: {
        author: true,
        category: true,
        _count: { select: { replies: true } },
      },
      orderBy: [
        { isPinned: "desc" },
        { createdAt: "desc" },
      ],
    })
    
    return NextResponse.json(threads)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch threads" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown"
    const rateLimitCheck = checkRateLimit(ip, 3, 60000)
    if (!rateLimitCheck.success) return rateLimitCheck.response

    const body = await request.json()
    const validated = threadSchema.parse(body)
    
    const thread = await prisma.forumThread.create({
      data: validated,
      include: { author: true, category: true },
    })
    return NextResponse.json(thread)
  } catch (error: any) {
    if (error.name === "ZodError") {
      return NextResponse.json({ error: "Invalid input", details: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: "Failed to create thread" }, { status: 500 })
  }
}
