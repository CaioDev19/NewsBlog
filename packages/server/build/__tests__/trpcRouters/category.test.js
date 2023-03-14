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
const root_1 = require("../../trpc/root");
const jest_mock_extended_1 = require("jest-mock-extended");
const index_1 = require("../../trpc/index");
const mockOutput = [
    {
        id: 1,
        name: "name",
    },
    {
        id: 2,
        name: "name",
    },
    {
        id: 3,
        name: "name",
    },
];
const prismaMock = (0, jest_mock_extended_1.mockDeep)();
const caller = root_1.appRouter.createCaller((0, index_1.createInnerContext)({ prisma: prismaMock }));
describe("category", () => {
    it("should return all categories", () => __awaiter(void 0, void 0, void 0, function* () {
        prismaMock.category.findMany.mockResolvedValue(mockOutput);
        const result = yield caller.category.list();
        expect(result).toEqual(mockOutput);
    }));
});
