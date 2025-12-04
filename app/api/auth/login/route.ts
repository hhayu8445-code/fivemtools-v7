import { NextResponse } from "next/server"
import { getDiscordAuthUrl, generateState } from "@/lib/auth"
import { cookies } from "next/headers"

export async function GET() {
  const state = generateState()

  // Store state in cookie for CSRF protection
  const cookieStore = await cookies()
  cookieStore.set("oauth_state", state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 10, // 10 minutes
    path: "/",
  })

  const authUrl = getDiscordAuthUrl(state)

  return NextResponse.redirect(authUrl)
}
