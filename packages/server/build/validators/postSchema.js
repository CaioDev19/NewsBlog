"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSchema = void 0;
const zod_1 = require("zod");
const validImageTypes = [
    "image/jpeg",
    "image/png",
    "image/svg+xml",
    "image/gif",
    "iamge/svg",
    "image/tiff",
];
exports.PostSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z
            .string({
            invalid_type_error: "Title must be a string",
            required_error: "Title is required",
        })
            .min(1, "Title can't be empty"),
        content: zod_1.z
            .string({
            invalid_type_error: "Content must be a string",
            required_error: "Content is required",
        })
            .min(1, "Content can't be empty"),
        summary: zod_1.z
            .string({
            invalid_type_error: "Summary must be a string",
            required_error: "Summary is required",
        })
            .min(1, "Summary can't be empty"),
        category_id: zod_1.z
            .number({
            invalid_type_error: "Category ID must be a number",
            required_error: "Category ID is required",
        })
            .or(zod_1.z.string({
            required_error: "Category ID is required",
        })),
    }),
    file: zod_1.z
        .any({
        required_error: "Image is required",
    })
        .refine((file) => {
        if (!file)
            return false;
        return validImageTypes.includes(file === null || file === void 0 ? void 0 : file.mimetype);
    }, "Invalid image type"),
});
