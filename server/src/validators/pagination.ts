import { z } from "zod"

export const paginatedSchema = z
  .object({
    page: z.number().optional(),
    limit: z.number().optional(),
  })
  .optional()
  .default({
    page: 1,
    limit: 10,
  })

export type PaginatedOptions = z.infer<typeof paginatedSchema>
