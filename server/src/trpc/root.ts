import { createRouter } from "./index"
import { advertisingRouter } from "./routers/advertising"
import { categoryRouter } from "./routers/category"
import { postRouter } from "./routers/post"

export const appRouter = createRouter({
  post: postRouter,
  category: categoryRouter,
  advertising: advertisingRouter,
})

export type AppRouter = typeof appRouter
