const express = require("express")
const { listCategories } = require("../controllers/category")
const router = express.Router()

router.get("/", listCategories)

module.exports = router
