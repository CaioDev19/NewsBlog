const { validate } = require("../../middlewares/validate")
const { PostSchema } = require("../../validators/postSchema")
const { upload } = require("../../config/multer")
const { checkIfCategoryExists } = require("../../middlewares/admin")
const { createPost } = require("../../controllers/admin")

const express = require("express")
const router = express.Router()

router
  .route("/")
  .post(
    upload.single("image"),
    validate(PostSchema),
    checkIfCategoryExists,
    createPost
  )

module.exports = router
