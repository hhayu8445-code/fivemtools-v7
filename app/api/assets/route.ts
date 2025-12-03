import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { assetSchema } from "@/lib/validation"
import { checkRateLimit } from "@/lib/rate-limit"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const search = searchParams.get("search")
    
    const where: any = {}
    if (category) where.category = category
    if (search) {
      where.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ]
    }
    
    const assets = await prisma.asset.findMany({
      where,
      include: { author: true },
      orderBy: { createdAt: "desc" },
    })
    
    return NextResponse.json(assets)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch assets" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown"
    const rateLimitCheck = checkRateLimit(ip, 5, 60000)
    if (!rateLimitCheck.success) return rateLimitCheck.response

    const body = await request.json()
    const validated = assetSchema.parse(body)
    
    const asset = await prisma.asset.create({
      data: validated,
      include: { author: true },
    })
    return NextResponse.json(asset)
  } catch (error: any) {
    if (error.name === "ZodError") {
      return NextResponse.json({ error: "Invalid input", details: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: "Failed to create asset" }, { status: 500 })
  }
}
