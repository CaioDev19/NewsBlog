import { z } from "zod"

export const PostSchema = z.object({
  title: z.string().min(1).max(100),
  category: z.string().min(1),
  image: z.instanceof(FileList).refine(
    (val) => {
      const validImageTypes = [
        "image/jpeg",
        "image/png",
        "image/svg+xml",
        "image/gif",
        "iamge/svg",
        "image/tiff",
      ]

      return validImageTypes.includes(val[0].type)
    },
    { message: "Arquivo não suportado" }
  ),
  summary: z.string().min(1).max(200),
})

export type PostForm = z.infer<typeof PostSchema>
