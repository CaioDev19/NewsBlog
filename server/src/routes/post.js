const { listPosts, listPostByid } = require("../controllers/post")
const {
  checkIfThePageExists,
  checkIfPostExists,
} = require("../middlewares/post")

const express = require("express")
const router = express.Router()

router.get("/", checkIfThePageExists, listPosts)
router.get("/:id", checkIfPostExists, listPostByid)

module.exports = router
