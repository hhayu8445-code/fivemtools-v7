import { z } from "zod"

export const assetSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(10).max(500),
  category: z.enum(["scripts", "mlo", "vehicles", "clothing"]),
  framework: z.enum(["standalone", "esx", "qbcore", "all"]),
  version: z.string(),
  price: z.enum(["free", "premium"]),
  image: z.string().url(),
  tags: z.array(z.string()).max(10),
  authorId: z.string(),
})

export const threadSchema = z.object({
  title: z.string().min(5).max(200),
  content: z.string().min(20).max(10000),
  categoryId: z.string(),
  authorId: z.string(),
})

export const replySchema = z.object({
  content: z.string().min(5).max(5000),
  threadId: z.string(),
  authorId: z.string(),
})
