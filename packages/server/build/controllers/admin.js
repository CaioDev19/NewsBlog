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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAdvertising = exports.createAdvertising = exports.updatePost = exports.deletePost = exports.createPost = void 0;
const dataBase_1 = require("../config/dataBase");
const date_1 = require("../utils/date");
const { uploadImageToStorage, deleteFileFromStorage, } = require("../utils/firebase");
function createPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { title, content, summary, category_id } = req.body;
        const { file } = req;
        try {
            file.originalname = `${file === null || file === void 0 ? void 0 : file.originalname}_${Date.now()}`;
            const imageUrl = yield uploadImageToStorage(file);
            const post = yield dataBase_1.prisma.post.create({
                data: {
                    title,
                    content,
                    summary,
                    category_id: Number(category_id),
                    imageName: file.originalname,
                    imageUrl,
                    date: (0, date_1.formatToUtcTimeZone)(),
                },
                include: {
                    category: true,
                },
            });
            const { imageName, imageUrl: image_url, category_id: category } = post, postWithoutImage = __rest(post, ["imageName", "imageUrl", "category_id"]);
            res.status(201).json(Object.assign(Object.assign({}, postWithoutImage), { image: {
                    name: imageName,
                    url: image_url,
                } }));
        }
        catch (_a) {
            res.status(500).json({ message: "Internal server error" });
        }
    });
}
exports.createPost = createPost;
function deletePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            yield deleteFileFromStorage(req.post.imageName);
            const deletedPost = yield dataBase_1.prisma.post.delete({
                where: {
                    id: Number(id),
                },
            });
            if (!deletedPost) {
                return res
                    .status(500)
                    .json({ message: "Internal server error" });
            }
            res.status(204).json();
        }
        catch (_a) {
            res.status(500).json({ message: "Internal server error" });
        }
    });
}
exports.deletePost = deletePost;
function updatePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { title, content, summary, category_id } = req.body;
        const { file } = req;
        try {
            yield deleteFileFromStorage(req.post.imageName);
            file.originalname = `${file.originalname}_${Date.now()}`;
            const imageUrl = yield uploadImageToStorage(file);
            const updatedPost = yield dataBase_1.prisma.post.update({
                where: {
                    id: Number(id),
                },
                data: {
                    title,
                    content,
                    summary,
                    category_id: Number(category_id),
                    imageName: file.originalname,
                    imageUrl,
                },
                include: {
                    category: true,
                },
            });
            const { imageUrl: image_url, imageName } = updatedPost, postWithoutImage = __rest(updatedPost, ["imageUrl", "imageName"]);
            return res.status(200).json(Object.assign(Object.assign({}, postWithoutImage), { image: {
                    name: imageName,
                    url: image_url,
                } }));
        }
        catch (_a) {
            res.status(500).json({ message: "Internal server error" });
        }
    });
}
exports.updatePost = updatePost;
function createAdvertising(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { file } = req;
        const { status } = req.body;
        try {
            if (status === "Fixo") {
                const allFixedAdvertising = yield dataBase_1.prisma.advertising.findMany({
                    where: {
                        status: "Fixo",
                    },
                });
                if (allFixedAdvertising.length == 10) {
                    return res.status(400).json({
                        message: "You can't add more than 10 fixed advertising",
                    });
                }
            }
            file.originalname = `${file.originalname}_${Date.now()}`;
            const imageUrl = yield uploadImageToStorage(file);
            const advertising = yield dataBase_1.prisma.advertising.create({
                data: {
                    imageName: file.originalname,
                    imageUrl,
                    status,
                },
            });
            const { imageName, imageUrl: image_url } = advertising, advertisingWithoutImage = __rest(advertising, ["imageName", "imageUrl"]);
            return res.status(201).json(Object.assign(Object.assign({}, advertisingWithoutImage), { image: {
                    name: imageName,
                    url: image_url,
                } }));
        }
        catch (_a) {
            res.status(500).json({ message: "Internal server error" });
        }
    });
}
exports.createAdvertising = createAdvertising;
function deleteAdvertising(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            yield deleteFileFromStorage(req.advertising.imageName);
            const deletedAdvertising = yield dataBase_1.prisma.advertising.delete({
                where: {
                    id: Number(id),
                },
            });
            if (!deletedAdvertising) {
                return res
                    .status(500)
                    .json({ message: "Internal server error" });
            }
            res.status(204).json();
        }
        catch (_a) {
            res.status(500).json({ message: "Internal server error" });
        }
    });
}
exports.deleteAdvertising = deleteAdvertising;
