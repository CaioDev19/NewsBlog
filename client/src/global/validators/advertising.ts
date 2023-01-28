import { z } from "zod"

export const AdvertisingSchema = z.object({
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
})
