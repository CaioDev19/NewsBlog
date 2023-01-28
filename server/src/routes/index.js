const adminRouter = require("./admin")
const postRouter = require("./post")
const categoryRouter = require("./category")
const advertisingRouter = require("./advertising")

const express = require("express")
const router = express.Router()

router.use("/admin", adminRouter)
router.use("/post", postRouter)
router.use("/category", categoryRouter)
router.use("/advertising", advertisingRouter)

module.exports = router
