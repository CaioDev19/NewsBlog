"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIfPostExists = exports.checkIfAdvertisingExists = exports.checkIfCategoryExists = void 0;
const dataBase_1 = require("../config/dataBase");
function checkIfCategoryExists(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { category_id } = req.body;
        try {
            const category = yield dataBase_1.prisma.category.findUnique({
                where: {
                    id: Number(category_id),
                },
            });
            if (!category) {
                return res.status(404).json({ message: "Invalid category." });
            }
            req.category = category;
            return next();
        }
        catch (_a) {
            return res.status(500).json({ message: "Internal server error" });
        }
    });
}
exports.checkIfCategoryExists = checkIfCategoryExists;
function checkIfAdvertisingExists(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const advertising = yield dataBase_1.prisma.advertising.findUnique({
                where: {
                    id: Number(id),
                },
            });
            if (!advertising) {
                return res.status(404).json({ message: "Invalid advertising." });
            }
            req.advertising = advertising;
            return next();
        }
        catch (_a) {
            return res.status(500).json({ message: "Internal server error" });
        }
    });
}
exports.checkIfAdvertisingExists = checkIfAdvertisingExists;
function checkIfPostExists(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const post = yield dataBase_1.prisma.post.findUnique({
                where: {
                    id: Number(id),
                },
                select: {
                    id: true,
                    title: true,
                    content: true,
                    summary: true,
                    imageName: true,
                    imageUrl: true,
                    date: true,
                    category: true,
                },
            });
            if (!post) {
                return res.status(404).json({ message: "Not Found." });
            }
            req.post = post;
            return next();
        }
        catch (_a) {
            return res.status(500).json({ message: "Internal server error" });
        }
    });
}
exports.checkIfPostExists = checkIfPostExists;
