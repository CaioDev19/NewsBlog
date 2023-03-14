export * from "./trpc/root"
require("dotenv").config()

import routes from "./routes/"
import express from "express"
import cors from "cors"
import * as trpcExpress from "@trpc/server/adapters/express"
import { createContext } from "./trpc"
import { appRouter } from "./trpc/root"

const app = express()

app.use(cors())
app.use(express.json())

app.use(routes)
app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
)

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
)
