const { validate } = require("../../middlewares/validate")
const { PostSchema } = require("../../validators/postSchema")
const { upload } = require("../../config/multer")
const { checkIfCategoryExists } = require("../../middlewares/admin")
const {
  createPost,
  deletePost,
  updatePost,
} = require("../../controllers/admin")

const express = require("express")
const { checkIfPostExists } = require("../../middlewares/post")
const router = express.Router()

router.post(
  "/",
  upload.single("image"),
  validate(PostSchema),
  checkIfCategoryExists,
  createPost
)

router
  .route("/:id")
  .delete(checkIfPostExists, deletePost)
  .put(
    validate(PostSchema),
    checkIfPostExists,
    checkIfCategoryExists,
    updatePost
  )

module.exports = router
