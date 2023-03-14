"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginatedSchema = void 0;
const zod_1 = require("zod");
exports.paginatedSchema = zod_1.z
    .object({
    page: zod_1.z.number().optional(),
    limit: zod_1.z.number().optional(),
})
    .optional()
    .default({
    page: 1,
    limit: 10,
});
