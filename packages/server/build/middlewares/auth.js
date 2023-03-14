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
exports.checkToken = void 0;
const firebase_1 = require("../config/firebase");
function checkToken(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const headerAuth = req.headers.authorization;
        if (!headerAuth)
            return res.status(401).json({ message: "Token must be sent." });
        const token = headerAuth.split(" ")[1];
        try {
            const decodedToken = yield firebase_1.admin.auth().verifyIdToken(token);
            if (!decodedToken) {
                return res.status(401).json({
                    message: "To access this feature, a valid authentication token must be submitted.",
                });
            }
            req.admin = decodedToken;
            return next();
        }
        catch (_a) {
            return res.status(401).json({
                message: "To access this feature, a valid authentication token must be submitted.",
            });
        }
    });
}
exports.checkToken = checkToken;
