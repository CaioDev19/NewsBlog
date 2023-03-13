import { z } from "zod"

const validImageTypes = [
  "image/jpeg",
  "image/png",
  "image/svg+xml",
  "image/gif",
  "iamge/svg",
  "image/tiff",
]

export const PostSchema = z.object({
  body: z.object({
    title: z
      .string({
        invalid_type_error: "Title must be a string",
        required_error: "Title is required",
      })
      .min(1, "Title can't be empty"),
    content: z
      .string({
        invalid_type_error: "Content must be a string",
        required_error: "Content is required",
      })
      .min(1, "Content can't be empty"),
    summary: z
      .string({
        invalid_type_error: "Summary must be a string",
        required_error: "Summary is required",
      })
      .min(1, "Summary can't be empty"),
    category_id: z
      .number({
        invalid_type_error: "Category ID must be a number",
        required_error: "Category ID is required",
      })
      .or(
        z.string({
          required_error: "Category ID is required",
        })
      ),
  }),
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
})

export type Post = z.infer<typeof PostSchema>
