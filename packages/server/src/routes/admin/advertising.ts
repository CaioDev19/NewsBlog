import express from "express"
import upload from "../../config/multer"
import {
  createAdvertising,
  deleteAdvertising,
} from "../../controllers/admin"
import { validate } from "../../middlewares/validate"
import { AdvertisingSchema } from "../../validators/advertising"
import { checkIfAdvertisingExists } from "../../middlewares/admin"

const router = express.Router()

router.post(
  "/",
  upload.single("image"),
  validate(AdvertisingSchema),
  createAdvertising
)
router.delete("/:id", checkIfAdvertisingExists, deleteAdvertising)

export default router
