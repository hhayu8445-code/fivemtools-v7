import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { replySchema } from "@/lib/validation"
import { checkRateLimit } from "@/lib/rate-limit"

export async function POST(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params
  
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown"
    const rateLimitCheck = checkRateLimit(ip, 5, 60000)
    if (!rateLimitCheck.success) return rateLimitCheck.response

    const body = await request.json()
    const validated = replySchema.parse({ ...body, threadId: id })
    
    const reply = await prisma.forumReply.create({
      data: validated,
      include: { author: true },
    })

    return NextResponse.json(reply)
  } catch (error: any) {
    if (error.name === "ZodError") {
      return NextResponse.json({ error: "Invalid input", details: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: "Failed to create reply" }, { status: 500 })
  }
}
