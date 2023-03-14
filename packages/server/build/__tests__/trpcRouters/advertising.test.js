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
        imageName: "imageName",
        imageUrl: "imageUrl",
        status: "Fixo",
    },
    {
        id: 2,
        imageName: "imageName",
        imageUrl: "imageUrl",
        status: "Móvel",
    },
    {
        id: 3,
        imageName: "imageName",
        imageUrl: "imageUrl",
        status: "Móvel",
    },
];
const prismaMock = (0, jest_mock_extended_1.mockDeep)();
const caller = root_1.appRouter.createCaller((0, index_1.createInnerContext)({ prisma: prismaMock }));
describe("advertising", () => {
    it("should return up to 10 mixed ads if no argument is passed", () => __awaiter(void 0, void 0, void 0, function* () {
        prismaMock.advertising.findMany.mockResolvedValue(mockOutput);
        prismaMock.advertising.count.mockResolvedValue(3);
        const result = yield caller.advertising.list();
        expect(result.advertisings.length).toBe(3);
        expect(result.totalPages).toBe(1);
    }));
    it("should return only fixed ads if status is 'Fixo'", () => __awaiter(void 0, void 0, void 0, function* () {
        prismaMock.advertising.findMany.mockResolvedValue([mockOutput[0]]);
        const result = yield caller.advertising.list({ status: "Fixo" });
        expect(result.advertisings.length).toBe(1);
    }));
    it("should return only mobile ads if status is 'Móvel'", () => __awaiter(void 0, void 0, void 0, function* () {
        prismaMock.advertising.findMany.mockResolvedValue([
            mockOutput[1],
            mockOutput[2],
        ]);
        prismaMock.advertising.count.mockResolvedValue(2);
        const result = yield caller.advertising.list({ status: "Móvel" });
        expect(result.advertisings.length).toBe(2);
        expect(result.totalPages).toBe(1);
    }));
    it("should return only one ad if limit is 1", () => __awaiter(void 0, void 0, void 0, function* () {
        prismaMock.advertising.findMany.mockResolvedValue([mockOutput[0]]);
        prismaMock.advertising.count.mockResolvedValue(3);
        const result = yield caller.advertising.list({ limit: 1 });
        expect(result.advertisings.length).toBe(1);
    }));
    it("should return the correct number of pages", () => __awaiter(void 0, void 0, void 0, function* () {
        prismaMock.advertising.findMany.mockResolvedValue([
            mockOutput[0],
            mockOutput[1],
        ]);
        prismaMock.advertising.count.mockResolvedValue(3);
        const result = yield caller.advertising.list({ limit: 2 });
        expect(result.totalPages).toBe(2);
    }));
    it("shoult throw an error if page is out of bounds", () => __awaiter(void 0, void 0, void 0, function* () {
        prismaMock.advertising.findMany.mockResolvedValue([mockOutput[0]]);
        prismaMock.advertising.count.mockResolvedValue(3);
        yield expect(caller.advertising.list({ limit: 3, page: 2 })).rejects.toThrow();
    }));
});
