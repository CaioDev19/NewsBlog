export * from "./trpc/root"
require("dotenv").config()

import routes from "./routes/admin/index"
import express from "express"
import cors from "cors"
import * as trpcExpress from "@trpc/server/adapters/express"
import { createContext } from "./trpc"
import { appRouter } from "./trpc/root"

const app = express()

app.use(cors())
app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
)
app.use(routes)

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
)
