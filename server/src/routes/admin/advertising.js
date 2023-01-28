const { upload } = require("../../config/multer")
const {
  createAdvertising,
  deleteAdvertising,
} = require("../../controllers/admin")
const { validate } = require("../../middlewares/validate")
const { AdvertisingSchema } = require("../../validators/advertising")
const {
  checkIfAdvertisingExists,
} = require("../../middlewares/admin")

const express = require("express")
const router = express.Router()

router.post(
  "/",
  upload.single("image"),
  validate(AdvertisingSchema),
  createAdvertising
)
router.delete("/:id", checkIfAdvertisingExists, deleteAdvertising)

module.exports = router
