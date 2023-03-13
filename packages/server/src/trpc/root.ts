import { inferRouterInputs, inferRouterOutputs } from "@trpc/server"
import { createRouter } from "."
import { advertisingRouter } from "./routers/advertising"
import { categoryRouter } from "./routers/category"
import { postRouter } from "./routers/post"

export const appRouter = createRouter({
  post: postRouter,
  category: categoryRouter,
  advertising: advertisingRouter,
})

export type AppRouter = typeof appRouter
export type RouterInput = inferRouterInputs<AppRouter>
export type RouterOutput = inferRouterOutputs<AppRouter>
