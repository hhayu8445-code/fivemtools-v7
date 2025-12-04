import { cookies } from "next/headers"

// Discord OAuth2 Configuration for fivemtools.net
export const DISCORD_CONFIG = {
  clientId: process.env.DISCORD_CLIENT_ID || "1445650115447754933",
  clientSecret: process.env.DISCORD_CLIENT_SECRET || "6JSK5ydHewv7DmZlhHa6P1e4q-pbFXe_",
  redirectUri: process.env.DISCORD_REDIRECT_URI || "https://fivemtools.net/api/auth/callback",
  adminDiscordId: process.env.ADMIN_DISCORD_ID || "1047719075322810378",
  scopes: ["identify", "email", "guilds"],
}

export interface DiscordUser {
  id: string
  username: string
  discriminator: string
  avatar: string | null
  email: string | null
  verified: boolean
  global_name: string | null
}

export interface SessionUser {
  id: string
  discordId: string
  username: string
  email: string | null
  avatar: string
  membership: "free" | "vip" | "admin"
  isAdmin: boolean
  accessToken: string
  refreshToken: string
  expiresAt: number
}

// Generate Discord OAuth2 URL
export function getDiscordAuthUrl(state?: string): string {
  const params = new URLSearchParams({
    client_id: DISCORD_CONFIG.clientId,
    redirect_uri: DISCORD_CONFIG.redirectUri,
    response_type: "code",
    scope: DISCORD_CONFIG.scopes.join(" "),
    state: state || generateState(),
  })
  return `https://discord.com/api/oauth2/authorize?${params.toString()}`
}

// Generate random state for CSRF protection
export function generateState(): string {
  const array = new Uint8Array(32)
  crypto.getRandomValues(array)
  return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join("")
}

// Exchange code for tokens
export async function exchangeCodeForTokens(code: string): Promise<{
  access_token: string
  refresh_token: string
  expires_in: number
  token_type: string
} | null> {
  try {
    const response = await fetch("https://discord.com/api/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: DISCORD_CONFIG.clientId,
        client_secret: DISCORD_CONFIG.clientSecret,
        grant_type: "authorization_code",
        code,
        redirect_uri: DISCORD_CONFIG.redirectUri,
      }),
    })

    if (!response.ok) {
      console.error("Failed to exchange code:", await response.text())
      return null
    }

    return response.json()
  } catch (error) {
    console.error("Token exchange error:", error)
    return null
  }
}

// Get Discord user info
export async function getDiscordUser(accessToken: string): Promise<DiscordUser | null> {
  try {
    const response = await fetch("https://discord.com/api/users/@me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    if (!response.ok) return null
    return response.json()
  } catch (error) {
    console.error("Get user error:", error)
    return null
  }
}

export function checkIsAdmin(discordId: string): boolean {
  return discordId === DISCORD_CONFIG.adminDiscordId
}

// Session management
export async function getSession(): Promise<SessionUser | null> {
  try {
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get("session")

    if (!sessionCookie?.value) return null

    const session = JSON.parse(atob(sessionCookie.value)) as SessionUser

    // Check if session is expired
    if (session.expiresAt < Date.now()) {
      return null
    }

    return session
  } catch {
    return null
  }
}

export function createSessionToken(user: SessionUser): string {
  return btoa(JSON.stringify(user))
}

// Get avatar URL
export function getAvatarUrl(user: DiscordUser): string {
  if (user.avatar) {
    const ext = user.avatar.startsWith("a_") ? "gif" : "png"
    return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${ext}?size=256`
  }
  // Default avatar for users without custom avatar
  const defaultIndex = Number.parseInt(user.discriminator || "0") % 5
  return `https://cdn.discordapp.com/embed/avatars/${defaultIndex}.png`
}
