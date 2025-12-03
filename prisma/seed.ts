import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  const categories = [
    { name: "Announcements", description: "Official announcements and updates", icon: "megaphone", color: "#a855f7" },
    { name: "General Discussion", description: "General chat and community discussions", icon: "message-circle", color: "#22c55e" },
    { name: "Help & Support", description: "Get help with scripts and resources", icon: "help-circle", color: "#f59e0b" },
    { name: "Script Requests", description: "Request new scripts and features", icon: "code", color: "#3b82f6" },
    { name: "Showcase", description: "Show off your servers and creations", icon: "star", color: "#e879f9" },
  ]

  for (const category of categories) {
    await prisma.forumCategory.upsert({
      where: { name: category.name },
      update: {},
      create: category,
    })
  }

  console.log("Seed completed")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
