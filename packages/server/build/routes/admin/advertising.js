"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("../../config/multer"));
const admin_1 = require("../../controllers/admin");
const validate_1 = require("../../middlewares/validate");
const advertising_1 = require("../../validators/advertising");
const admin_2 = require("../../middlewares/admin");
const router = express_1.default.Router();
router.post("/", multer_1.default.single("image"), (0, validate_1.validate)(advertising_1.AdvertisingSchema), admin_1.createAdvertising);
router.delete("/:id", admin_2.checkIfAdvertisingExists, admin_1.deleteAdvertising);
exports.default = router;
