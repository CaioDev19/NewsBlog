import { validate } from "../../middlewares/validate"
import { PostSchema } from "../../validators/postSchema"
import upload from "../../config/multer"
import { checkIfCategoryExists } from "../../middlewares/admin"
import {
  createPost,
  updatePost,
  deletePost,
} from "../../controllers/admin"
import express from "express"
import { checkIfPostExists } from "../../middlewares/admin"

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
    upload.single("image"),
    validate(PostSchema),
    checkIfPostExists,
    checkIfCategoryExists,
    updatePost
  )

export default router
