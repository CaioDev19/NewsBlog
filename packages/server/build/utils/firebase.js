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
exports.deleteFileFromStorage = exports.uploadImageToStorage = void 0;
const firebase_1 = require("../config/firebase");
const uuid_1 = require("uuid");
function uploadImageToStorage(file) {
    return __awaiter(this, void 0, void 0, function* () {
        const tokenId = (0, uuid_1.v4)();
        return new Promise((resolve, reject) => {
            if (!file) {
                reject("No image file");
            }
            let fileUpload = firebase_1.bucket.file(file.originalname);
            const blobStream = fileUpload.createWriteStream({
                metadata: {
                    contentType: file.mimetype,
                    metadata: {
                        firebaseStorageDownloadTokens: tokenId,
                    },
                },
            });
            blobStream.on("error", (error) => {
                reject(error);
            });
            blobStream.on("finish", () => __awaiter(this, void 0, void 0, function* () {
                yield fileUpload.makePublic();
                const url = `https://firebasestorage.googleapis.com/v0/b/${firebase_1.bucket.name}/o/${file.originalname}?alt=media&token=${tokenId}`;
                resolve(url);
            }));
            blobStream.end(file.buffer);
        });
    });
}
exports.uploadImageToStorage = uploadImageToStorage;
function deleteFileFromStorage(fileName) {
    return __awaiter(this, void 0, void 0, function* () {
        const file = firebase_1.bucket.file(fileName);
        yield file.delete();
    });
}
exports.deleteFileFromStorage = deleteFileFromStorage;
