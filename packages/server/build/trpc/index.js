"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = exports.publicProcedure = exports.createRouter = exports.trpc = exports.createContext = exports.createInnerContext = void 0;
const server_1 = require("@trpc/server");
const dataBase_1 = require("../config/dataBase");
function createInnerContext(opts) {
    return {
        prisma: (opts === null || opts === void 0 ? void 0 : opts.prisma) || dataBase_1.prisma,
        auth: opts === null || opts === void 0 ? void 0 : opts.auth,
    };
}
exports.createInnerContext = createInnerContext;
function createContext({ req, }) {
    const headerAuth = req.headers.authorization;
    return createInnerContext({ auth: headerAuth });
}
exports.createContext = createContext;
exports.trpc = server_1.initTRPC.context().create();
exports.createRouter = exports.trpc.router;
exports.publicProcedure = exports.trpc.procedure;
exports.middleware = exports.trpc.middleware;
