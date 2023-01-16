import { z } from "zod"

export const postSchema = z.object({
  title: z.string().min(1).max(100),
  category: z.string().min(1),
  image: z.record(z.any()),
  sinopse: z.string().min(1).max(180),
})

export type Post = z.infer<typeof postSchema>
