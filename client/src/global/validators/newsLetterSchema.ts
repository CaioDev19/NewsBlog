import { z } from "zod"

export const NewsLetterSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2).max(50),
})
