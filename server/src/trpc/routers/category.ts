import { createRouter, publicProcedure } from "../index"
import { TRPCError } from "@trpc/server"

export const categoryRouter = createRouter({
  list: publicProcedure.query(async ({ ctx: { prisma } }) => {
    try {
      const categories = await prisma.category.findMany()
      return categories
    } catch {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
      })
    }
  }),
})
