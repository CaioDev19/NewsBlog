"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const _1 = require(".");
const advertising_1 = require("./routers/advertising");
const category_1 = require("./routers/category");
const post_1 = require("./routers/post");
exports.appRouter = (0, _1.createRouter)({
    post: post_1.postRouter,
    category: category_1.categoryRouter,
    advertising: advertising_1.advertisingRouter,
});
