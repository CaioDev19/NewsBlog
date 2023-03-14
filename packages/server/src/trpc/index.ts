import { PrismaClient } from "@prisma/client"
import { initTRPC, inferAsyncReturnType } from "@trpc/server"
import * as trpcExpress from "@trpc/server/adapters/express"
import { prisma } from "../config/dataBase"

type CreateContextOptions = {
  prisma?: PrismaClient
  auth?: string | undefined
}

export function createInnerContext(opts?: CreateContextOptions) {
  return {
    prisma: opts?.prisma || prisma,
    auth: opts?.auth,
  }
}

export function createContext({
  req,
}: trpcExpress.CreateExpressContextOptions) {
  const headerAuth = req.headers.authorization
  return createInnerContext({ auth: headerAuth })
}

type Context = inferAsyncReturnType<typeof createContext>

export const trpc = initTRPC.context<Context>().create()

export const createRouter = trpc.router
export const publicProcedure = trpc.procedure
export const middleware = trpc.middleware
