"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = require("../../middlewares/validate");
const postSchema_1 = require("../../validators/postSchema");
const multer_1 = __importDefault(require("../../config/multer"));
const admin_1 = require("../../middlewares/admin");
const admin_2 = require("../../controllers/admin");
const express_1 = __importDefault(require("express"));
const admin_3 = require("../../middlewares/admin");
const router = express_1.default.Router();
router.post("/", multer_1.default.single("image"), (0, validate_1.validate)(postSchema_1.PostSchema), admin_1.checkIfCategoryExists, admin_2.createPost);
router
    .route("/:id")
    .delete(admin_3.checkIfPostExists, admin_2.deletePost)
    .put(multer_1.default.single("image"), (0, validate_1.validate)(postSchema_1.PostSchema), admin_3.checkIfPostExists, admin_1.checkIfCategoryExists, admin_2.updatePost);
exports.default = router;
