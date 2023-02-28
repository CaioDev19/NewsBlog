const { checkIfThePageExists } = require("../middlewares/post")

const express = require("express")
const {
  listAdvertising,
  listFixedAdvertising,
  listRotativeAdvertising,
} = require("../controllers/advertising")
const router = express.Router()

router.get("/", checkIfThePageExists("advertising"), listAdvertising)

router.get("/fixed", listFixedAdvertising)
router.get(
  "/rotative",
  checkIfThePageExists("advertising"),
  listRotativeAdvertising
)
module.exports = router
