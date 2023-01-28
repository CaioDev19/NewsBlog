const { checkIfThePageExists } = require("../middlewares/post")

const express = require("express")
const { listAdvertising } = require("../controllers/advertising")
const router = express.Router()

router.get("/", checkIfThePageExists("advertising"), listAdvertising)

module.exports = router
