import { NextResponse } from "next/server"

const rateLimit = new Map<string, { count: number; resetTime: number }>()

export function checkRateLimit(identifier: string, limit = 10, windowMs = 60000) {
  const now = Date.now()
  const record = rateLimit.get(identifier)

  if (!record || now > record.resetTime) {
    rateLimit.set(identifier, { count: 1, resetTime: now + windowMs })
    return { success: true }
  }

  if (record.count >= limit) {
    return {
      success: false,
      response: NextResponse.json(
        { error: "Too many requests" },
        { status: 429 }
      ),
    }
  }

  record.count++
  return { success: true }
}
