const { z } = require("zod")

const validImageTypes = [
  "image/jpeg",
  "image/png",
  "image/svg+xml",
  "image/gif",
  "iamge/svg",
  "image/tiff",
]

const PostSchema = z.object({
  body: z.object({
    title: z
      .string({
        invalid_type_error: "Title must be a string",
        required_error: "Title is required",
      })
      .min(1, "Title can't be empty")
      .max(100, "Title can't be longer than 100 characters"),
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
      .min(1, "Summary can't be empty")
      .max(200, "Summary can't be longer than 200 characters"),
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
    date: z
      .string({
        required_error: "Date is required",
      })
      .refine((date) => {
        const dateRegex =
          /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/
        return dateRegex.test(date)
      }, "Invalid date format"),
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

module.exports = {
  PostSchema,
}
