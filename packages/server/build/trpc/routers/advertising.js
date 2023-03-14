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
exports.advertisingRouter = void 0;
const zod_1 = require("zod");
const checkPagination_1 = require("../../utils/checkPagination");
const pagination_1 = require("../../validators/pagination");
const __1 = require("..");
const server_1 = require("@trpc/server");
function formatReturnAds(ads) {
    return ads.map((ad) => {
        const { imageName, imageUrl } = ad, advertisingWithoutImage = __rest(ad, ["imageName", "imageUrl"]);
        return Object.assign(Object.assign({}, advertisingWithoutImage), { image: {
                name: imageName,
                url: imageUrl,
            } });
    });
}
exports.advertisingRouter = (0, __1.createRouter)({
    list: __1.publicProcedure
        .input(zod_1.z
        .object({
        status: zod_1.z
            .union([zod_1.z.literal("Fixo"), zod_1.z.literal("Móvel")])
            .optional(),
    })
        .optional())
        .input(pagination_1.paginatedSchema)
        .query(({ input, ctx: { prisma } }) => __awaiter(void 0, void 0, void 0, function* () {
        const condition = input.status
            ? { status: input.status }
            : undefined;
        const limit = input.limit || 10;
        const page = input.page || 1;
        try {
            if (input.status && input.status === "Fixo") {
                const advertising = yield prisma.advertising.findMany({
                    where: {
                        status: "Fixo",
                    },
                    orderBy: {
                        id: "desc",
                    },
                });
                const adsFormated = formatReturnAds(advertising);
                return {
                    advertisings: adsFormated,
                    totalPages: 1,
                    currentPage: 1,
                };
            }
            const { totalPages, isValid } = (0, checkPagination_1.checkPagination)({
                totalPosts: yield prisma.advertising.count({
                    where: condition,
                }),
                limit,
                page,
            });
            if (!isValid) {
                throw new server_1.TRPCError({
                    code: "NOT_FOUND",
                    message: "Page not found.",
                });
            }
            const advertisings = yield prisma.advertising.findMany({
                where: condition,
                orderBy: {
                    id: condition ? "asc" : "desc",
                },
                take: limit,
                skip: (page - 1) * limit,
            });
            const adsFormated = formatReturnAds(advertisings);
            return {
                totalPages,
                currentPage: totalPages === 0 ? 0 : page,
                advertisings: adsFormated,
            };
        }
        catch (_a) {
            throw new server_1.TRPCError({
                code: "INTERNAL_SERVER_ERROR",
                message: "Server internal error.",
            });
        }
    })),
});
