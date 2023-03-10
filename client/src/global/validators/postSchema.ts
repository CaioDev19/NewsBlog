import { z } from "zod"

export const PostSchema = z.object({
  title: z
    .string({
      required_error: "O título é obrigatório",
    })
    .min(1, "O título é obrigatório"),
  category: z.string().min(1),
  image: z
    .instanceof(
      typeof window !== "undefined"
        ? FileList
        : Array<{ type: string }>
    )
    .refine(
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
  summary: z
    .string({
      required_error: "O resumo é obrigatório",
    })
    .min(1, "O resumo é obrigatório"),
})

export type PostForm = z.infer<typeof PostSchema>
