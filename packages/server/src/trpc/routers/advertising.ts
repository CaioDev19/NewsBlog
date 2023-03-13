import { z } from "zod"
import { checkPagination } from "../../utils/checkPagination"
import { paginatedSchema } from "../../validators/pagination"
import { createRouter, publicProcedure } from ".."
import { TRPCError } from "@trpc/server"
import { Advertising } from "@prisma/client"

function formatReturnAds(ads: Advertising[]) {
  return ads.map((ad) => {
    const { imageName, imageUrl, ...advertisingWithoutImage } = ad

    return {
      ...advertisingWithoutImage,
      image: {
        name: imageName,
        url: imageUrl,
      },
    }
  })
}

export const advertisingRouter = createRouter({
  list: publicProcedure
    .input(
      z
        .object({
          status: z
            .union([z.literal("Fixo"), z.literal("Móvel")])
            .optional(),
        })
        .optional()
    )
    .input(paginatedSchema)
    .query(async ({ input, ctx: { prisma } }) => {
      const condition = input.status
        ? { status: input.status }
        : undefined
      const limit = input.limit || 10
      const page = input.page || 1

      try {
        if (input.status && input.status === "Fixo") {
          const advertising = await prisma.advertising.findMany({
            where: {
              status: "Fixo",
            },
            orderBy: {
              id: "desc",
            },
          })

          const adsFormated = formatReturnAds(advertising)

          return {
            advertisings: adsFormated,
          }
        } else {
          const { totalPages, isValid } = checkPagination({
            totalPosts: await prisma.advertising.count({
              where: condition,
            }),
            limit,
            page,
          })

          if (!isValid) {
            throw new TRPCError({
              code: "NOT_FOUND",
              message: "Page not found.",
            })
          }

          const advertisings = await prisma.advertising.findMany({
            where: condition,
            orderBy: {
              id: condition ? "asc" : "desc",
            },
            take: limit,
            skip: (page - 1) * limit,
          })

          const adsFormated = formatReturnAds(advertisings)

          return {
            totalPages,
            currentPage: totalPages === 0 ? 0 : page,
            advertisings: adsFormated,
          }
        }
      } catch {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Server internal error.",
        })
      }
    }),
})
