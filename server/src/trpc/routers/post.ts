import { createRouter, publicProcedure } from "../index"
import { z } from "zod"
import { TRPCError } from "@trpc/server"
import { checkPagination } from "../../utils/checkPagination"
import { paginatedSchema } from "../../validators/pagination"

const categorySchema = z
  .object({
    categoryId: z.union([z.number(), z.string()]).optional(),
  })
  .optional()
  .default({})

export const postRouter = createRouter({
  list: publicProcedure
    .input(paginatedSchema)
    .input(categorySchema)
    .query(async ({ input, ctx: { prisma } }) => {
      const condition =
        typeof input.categoryId !== "undefined"
          ? { category_id: input.categoryId as number }
          : undefined
      const limit = input.limit || 10
      const page = input.page || 1

      try {
        const posts = await prisma.post.findMany({
          where: condition,
          orderBy: {
            date: "desc",
          },
          include: {
            category: true,
          },
          take: limit,
          skip: (page - 1) * limit,
        })
        const totalPosts = await prisma.post.count({
          where: condition,
        })

        const { isValid, totalPages } = checkPagination({
          totalPosts,
          limit,
          page,
        })

        if (!isValid) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Page not found.",
          })
        }

        const formatedPosts = posts.map((post) => {
          const {
            imageName,
            imageUrl,
            category_id,
            ...formatedPost
          } = post
          return {
            ...formatedPost,
            image: {
              name: imageName,
              url: imageUrl,
            },
          }
        })

        return {
          totalPages,
          currentPage: totalPages === 0 ? 0 : page,
          posts: formatedPosts,
        }
      } catch {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Server internal error.",
        })
      }
    }),
  listById: publicProcedure
    .input(z.object({ id: z.union([z.number(), z.string()]) }))
    .query(async ({ input, ctx: { prisma } }) => {
      const { id } = input

      try {
        const post = await prisma.post.findUnique({
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
        })

        if (!post) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Post not found.",
          })
        }

        const { imageName, imageUrl, ...postWithoutImage } = post

        return {
          ...postWithoutImage,
          image: {
            name: imageName,
            url: imageUrl,
          },
        }
      } catch {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
        })
      }
    }),
})
