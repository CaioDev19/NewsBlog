import express from "express"
import { checkToken } from "../../middlewares/auth"
import postRouter from "./post"
import advertisingRouter from "./advertising"
const router = express.Router()

router.use(checkToken)

router.use("/post", postRouter)
router.use("/advertising", advertisingRouter)

export default router
