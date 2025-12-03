import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      username: string
      email: string
      avatar?: string
      membership: string
    }
  }

  interface User {
    id: string
    username: string
    email: string
    avatar?: string
    discordId: string
    membership: string
    downloads: number
    reputation: number
    points: number
  }
}
