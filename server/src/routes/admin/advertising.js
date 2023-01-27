const { upload } = require("../../config/multer")
const {
  createAdvertising,
  deleteAdvertising,
  listAdvertising,
} = require("../../controllers/admin")
const { validate } = require("../../middlewares/validate")
const { AdvertisingSchema } = require("../../validators/advertising")

const express = require("express")
const {
  checkIfAdvertisingExists,
} = require("../../middlewares/admin")
const router = express.Router()

router.get("/", listAdvertising)
router.post(
  "/create",
  upload.single("image"),
  validate(AdvertisingSchema),
  createAdvertising
)
router.delete("/:id", checkIfAdvertisingExists, deleteAdvertising)

module.exports = router
