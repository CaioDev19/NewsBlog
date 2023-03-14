"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../../middlewares/auth");
const post_1 = __importDefault(require("./post"));
const advertising_1 = __importDefault(require("./advertising"));
const router = express_1.default.Router();
router.use(auth_1.checkToken);
router.use("/post", post_1.default);
router.use("/advertising", advertising_1.default);
exports.default = router;
