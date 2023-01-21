import { z } from "zod"

export const PostSchema = z.object({
  title: z
    .string({
      required_error: "O título é obrigatório",
    })
    .min(1, "O título é obrigatório")
    .max(100, "O título deve ter no máximo 100 caracteres"),
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
  summary: z
    .string({
      required_error: "O resumo é obrigatório",
    })
    .min(1, "O resumo é obrigatório")
    .max(200, "O resumo deve ter no máximo 200 caracteres"),
})

export type PostForm = z.infer<typeof PostSchema>
