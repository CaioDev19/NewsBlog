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
exports.validate = void 0;
const { generateErrorMessage } = require("zod-error");
const options = {
    maxErrors: 1,
    delimiter: {
        component: " ",
    },
    path: {
        enabled: false,
    },
    code: {
        enabled: false,
    },
    message: {
        enabled: true,
        label: "",
    },
};
function validate(schema) {
    return function (req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield schema.parseAsync({
                    body: req.body,
                    query: req.query,
                    params: req.params,
                    file: req.file,
                });
                return next();
            }
            catch (error) {
                return res.status(400).json({
                    message: generateErrorMessage(error.issues, options),
                });
            }
        });
    };
}
exports.validate = validate;
