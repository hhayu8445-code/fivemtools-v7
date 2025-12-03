import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const thread = await prisma.forumThread.update({
      where: { id: params.id },
      data: { views: { increment: 1 } },
      include: {
        author: true,
        category: true,
        replies: {
          include: { author: true },
          orderBy: { createdAt: "asc" },
        },
      },
    })

    return NextResponse.json(thread)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch thread" }, { status: 500 })
  }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const thread = await prisma.forumThread.update({
      where: { id: params.id },
      data: body,
      include: { author: true, category: true },
    })

    return NextResponse.json(thread)
  } catch (error) {
    return NextResponse.json({ error: "Failed to update thread" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.forumThread.delete({
      where: { id: params.id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete thread" }, { status: 500 })
  }
}
