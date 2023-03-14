"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatToUtcTimeZone = void 0;
const moment_timezone_1 = __importDefault(require("moment-timezone"));
function formatToUtcTimeZone() {
    return moment_timezone_1.default.utc().format();
}
exports.formatToUtcTimeZone = formatToUtcTimeZone;
