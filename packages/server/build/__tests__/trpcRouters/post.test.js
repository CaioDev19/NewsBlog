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
        title: "title",
        content: "content",
        summary: "summary",
        imageName: "imageName",
        imageUrl: "imageUrl",
        date: new Date(),
        category_id: 1,
        category: {
            id: 1,
            name: "name",
        },
    },
    {
        id: 1,
        title: "title",
        content: "content",
        summary: "summary",
        imageName: "imageName",
        imageUrl: "imageUrl",
        date: new Date(),
        category_id: 2,
        category: {
            id: 2,
            name: "name",
        },
    },
    {
        id: 1,
        title: "title",
        content: "content",
        summary: "summary",
        imageName: "imageName",
        imageUrl: "imageUrl",
        date: new Date(),
        category_id: 3,
        category: {
            id: 3,
            name: "name",
        },
    },
];
const prismaMock = (0, jest_mock_extended_1.mockDeep)();
const caller = root_1.appRouter.createCaller((0, index_1.createInnerContext)({ prisma: prismaMock }));
describe("post", () => {
    beforeEach(() => {
        prismaMock.post.count.mockResolvedValue(3);
    });
    describe("pagination", () => {
        it("should return up to 10 posts if no options are passed", () => __awaiter(void 0, void 0, void 0, function* () {
            prismaMock.post.findMany.mockResolvedValue(mockOutput);
            const result = yield caller.post.list();
            expect(result.posts).toHaveLength(3);
        }));
        it("should return only one post if limit is 1", () => __awaiter(void 0, void 0, void 0, function* () {
            prismaMock.post.findMany.mockResolvedValue([mockOutput[0]]);
            const result = yield caller.post.list({ limit: 1 });
            expect(result.posts).toHaveLength(1);
        }));
        it("should return the correct post if page is 2 and limit is 1", () => __awaiter(void 0, void 0, void 0, function* () {
            prismaMock.post.findMany.mockResolvedValue([mockOutput[1]]);
            const result = yield caller.post.list({ limit: 1, page: 2 });
            expect(result.posts).toHaveLength(1);
            expect(result.posts[0].category.id).toBe(2);
        }));
        it("should return the correct number of pages", () => __awaiter(void 0, void 0, void 0, function* () {
            prismaMock.post.findMany.mockResolvedValue(mockOutput);
            const result = yield caller.post.list({ limit: 2 });
            expect(result.totalPages).toBe(2);
        }));
        it("should return the correct current page", () => __awaiter(void 0, void 0, void 0, function* () {
            prismaMock.post.findMany.mockResolvedValue(mockOutput);
            const result = yield caller.post.list({ limit: 1, page: 2 });
            expect(result.currentPage).toBe(2);
        }));
        it("should throw an error if the page is out of bounds", () => __awaiter(void 0, void 0, void 0, function* () {
            prismaMock.post.findMany.mockResolvedValue(mockOutput);
            yield expect(caller.post.list({ limit: 1, page: 4 })).rejects.toThrowError();
        }));
        it("should throw an error if the page is less than 1", () => __awaiter(void 0, void 0, void 0, function* () {
            prismaMock.post.findMany.mockResolvedValue(mockOutput);
            yield expect(caller.post.list({ limit: 1, page: -1 })).rejects.toThrowError();
        }));
        it("should return posts with the correct category", () => __awaiter(void 0, void 0, void 0, function* () {
            prismaMock.post.findMany.mockResolvedValue([mockOutput[0]]);
            prismaMock.post.count.mockResolvedValue(1);
            const result = yield caller.post.list({ categoryId: 1 });
            expect(result.posts).toHaveLength(1);
            expect(result.posts[0].category.id).toBe(1);
        }));
        it("should return an empty array if no posts are found with the given category", () => __awaiter(void 0, void 0, void 0, function* () {
            prismaMock.post.findMany.mockResolvedValue([]);
            prismaMock.post.count.mockResolvedValue(0);
            const result = yield caller.post.list({ categoryId: 1 });
            expect(result.posts).toHaveLength(0);
            expect(result.totalPages).toBe(0);
            expect(result.currentPage).toBe(0);
        }));
    });
    describe("listById", () => {
        it("should return the correct post", () => __awaiter(void 0, void 0, void 0, function* () {
            prismaMock.post.findUnique.mockResolvedValue(mockOutput[0]);
            const result = yield caller.post.listById({ id: 1 });
            expect(result.id).toEqual(1);
        }));
        it("should throw an error if the post does not exist", () => __awaiter(void 0, void 0, void 0, function* () {
            prismaMock.post.findUnique.mockResolvedValue(null);
            yield expect(caller.post.listById({ id: 1 })).rejects.toThrowError();
        }));
    });
});
