const express = require("express")
const { checkToken } = require("../../middlewares/auth")

const router = express.Router()
const postRouter = require("./post")
const advertisingRouter = require("./advertising")

router.use(checkToken)

router.use("/post", postRouter)
router.use("/advertising", advertisingRouter)

module.exports = router
