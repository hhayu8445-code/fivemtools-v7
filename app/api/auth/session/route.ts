import { NextResponse } from "next/server"
import { getSession } from "@/lib/auth"

export async function GET() {
  const session = await getSession()

  if (!session) {
    return NextResponse.json({ user: null }, { status: 200 })
  }

  // Don't expose sensitive data
  const safeUser = {
    id: session.id,
    discordId: session.discordId,
    username: session.username,
    email: session.email,
    avatar: session.avatar,
    membership: session.membership,
    isAdmin: session.isAdmin,
  }

  return NextResponse.json({ user: safeUser })
}
