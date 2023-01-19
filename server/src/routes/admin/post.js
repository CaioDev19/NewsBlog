const express = require('express');
const { validate } = require('../../middlewares/validate');
const { PostSchema } = require('../../validators/postSchema');
const router = express.Router();
const { upload } = require('../../config/multer');
const { checkIfCategoryExists } = require('../../middlewares/admin');
const { createPost } = require('../../controllers/admin');

router.post(
  '/',
  upload.single('image'),
  validate(PostSchema),
  checkIfCategoryExists,
  createPost
);

module.exports = router;
