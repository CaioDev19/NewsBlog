"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisingSchema = void 0;
const zod_1 = require("zod");
const validImageTypes = [
    "image/jpeg",
    "image/png",
    "image/svg+xml",
    "image/gif",
    "iamge/svg",
    "image/tiff",
];
exports.AdvertisingSchema = zod_1.z.object({
    file: zod_1.z
        .any({
        required_error: "Image is required",
    })
        .refine((file) => {
        if (!file)
            return false;
        return validImageTypes.includes(file === null || file === void 0 ? void 0 : file.mimetype);
    }, "Invalid image type"),
    body: zod_1.z.object({
        status: zod_1.z.union([zod_1.z.literal("Fixo"), zod_1.z.literal("Móvel")]),
    }),
});
