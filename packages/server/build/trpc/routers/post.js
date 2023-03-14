"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouter = void 0;
const __1 = require("..");
const zod_1 = require("zod");
const server_1 = require("@trpc/server");
const checkPagination_1 = require("../../utils/checkPagination");
const pagination_1 = require("../../validators/pagination");
const categorySchema = zod_1.z
    .object({
    categoryId: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]).optional(),
})
    .optional()
    .default({});
exports.postRouter = (0, __1.createRouter)({
    list: __1.publicProcedure
        .input(pagination_1.paginatedSchema)
        .input(categorySchema)
        .query(({ input, ctx: { prisma } }) => __awaiter(void 0, void 0, void 0, function* () {
        const condition = typeof input.categoryId !== "undefined"
            ? { category_id: Number(input.categoryId) }
            : undefined;
        const limit = input.limit || 10;
        const page = input.page || 1;
        try {
            const posts = yield prisma.post.findMany({
                where: condition,
                orderBy: {
                    date: "desc",
                },
                include: {
                    category: true,
                },
                take: limit,
                skip: (page - 1) * limit,
            });
            const totalPosts = yield prisma.post.count({
                where: condition,
            });
            const { isValid, totalPages } = (0, checkPagination_1.checkPagination)({
                totalPosts,
                limit,
                page,
            });
            if (!isValid) {
                throw new server_1.TRPCError({
                    code: "NOT_FOUND",
                    message: "Page not found.",
                });
            }
            const formatedPosts = posts.map((post) => {
                const { imageName, imageUrl, category_id } = post, formatedPost = __rest(post, ["imageName", "imageUrl", "category_id"]);
                return Object.assign(Object.assign({}, formatedPost), { image: {
                        name: imageName,
                        url: imageUrl,
                    } });
            });
            return {
                totalPages,
                currentPage: totalPages === 0 ? 0 : page,
                posts: formatedPosts,
            };
        }
        catch (_a) {
            throw new server_1.TRPCError({
                code: "INTERNAL_SERVER_ERROR",
                message: "Server internal error.",
            });
        }
    })),
    listById: __1.publicProcedure
        .input(zod_1.z.object({ id: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]) }))
        .query(({ input, ctx: { prisma } }) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = input;
        try {
            const post = yield prisma.post.findUnique({
                where: {
                    id: Number(id),
                },
                select: {
                    id: true,
                    title: true,
                    content: true,
                    summary: true,
                    imageName: true,
                    imageUrl: true,
                    date: true,
                    category: true,
                },
            });
            if (!post) {
                throw new server_1.TRPCError({
                    code: "NOT_FOUND",
                    message: "Post not found.",
                });
            }
            const { imageName, imageUrl } = post, postWithoutImage = __rest(post, ["imageName", "imageUrl"]);
            return Object.assign(Object.assign({}, postWithoutImage), { image: {
                    name: imageName,
                    url: imageUrl,
                } });
        }
        catch (_b) {
            throw new server_1.TRPCError({
                code: "INTERNAL_SERVER_ERROR",
            });
        }
    })),
});
