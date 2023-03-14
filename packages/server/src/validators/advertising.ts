import { z } from "zod"

const validImageTypes = [
  "image/jpeg",
  "image/png",
  "image/svg+xml",
  "image/gif",
  "iamge/svg",
  "image/tiff",
]

export const AdvertisingSchema = z.object({
  file: z
    .any({
      required_error: "Image is required",
    })
    .refine(
      (file) => {
        if (!file) return false
        return validImageTypes.includes(file?.mimetype)
      },

      "Invalid image type"
    ),
  body: z.object({
    status: z.union([z.literal("Fixo"), z.literal("Móvel")]),
  }),
})
