import { NextAuthOptions } from "next-auth"
import DiscordProvider from "next-auth/providers/discord"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "./prisma"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as any,
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "identify email guilds guilds.members.read",
        },
      },
      profile(profile) {
        return {
          id: profile.id,
          username: profile.username,
          email: profile.email,
          avatar: profile.avatar ? `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png` : null,
          discordId: profile.id,
          membership: "free",
          downloads: 0,
          reputation: 0,
          points: 0,
        }
      },
    }),
  ],
  callbacks: {
    session: async ({ session, user }) => {
      if (session?.user) {
        session.user.id = user.id
        const dbUser = await prisma.user.findUnique({
          where: { id: user.id },
          select: {
            username: true,
            avatar: true,
            membership: true,
            downloads: true,
            reputation: true,
            points: true,
          },
        })
        if (dbUser) {
          session.user = { ...session.user, ...dbUser }
        }
      }
      return session
    },
  },
  pages: {
    signIn: "/",
  },
  session: {
    strategy: "database",
  },
}
