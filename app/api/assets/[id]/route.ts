import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const asset = await prisma.asset.findUnique({
      where: { id: params.id },
      include: { author: true },
    })

    if (!asset) {
      return NextResponse.json({ error: "Asset not found" }, { status: 404 })
    }

    return NextResponse.json(asset)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch asset" }, { status: 500 })
  }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const asset = await prisma.asset.update({
      where: { id: params.id },
      data: body,
      include: { author: true },
    })

    return NextResponse.json(asset)
  } catch (error) {
    return NextResponse.json({ error: "Failed to update asset" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.asset.delete({
      where: { id: params.id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete asset" }, { status: 500 })
  }
}
