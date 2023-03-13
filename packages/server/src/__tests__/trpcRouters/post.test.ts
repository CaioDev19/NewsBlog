import { appRouter } from "../../trpc/root"
import { mockDeep } from "jest-mock-extended"
import { Category, Post, PrismaClient } from "@prisma/client"
import { createInnerContext } from "../../trpc/index"

const mockOutput: (Post & {
  category: Category
})[] = [
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
]
const prismaMock = mockDeep<PrismaClient>()
const caller = appRouter.createCaller(
  createInnerContext({ prisma: prismaMock })
)

describe("post", () => {
  beforeEach(() => {
    prismaMock.post.count.mockResolvedValue(3)
  })
  describe("pagination", () => {
    it("should return up to 10 posts if no options are passed", async () => {
      prismaMock.post.findMany.mockResolvedValue(mockOutput)
      const result = await caller.post.list()
      expect(result.posts).toHaveLength(3)
    })
    it("should return only one post if limit is 1", async () => {
      prismaMock.post.findMany.mockResolvedValue([mockOutput[0]])
      const result = await caller.post.list({ limit: 1 })
      expect(result.posts).toHaveLength(1)
    })
    it("should return the correct post if page is 2 and limit is 1", async () => {
      prismaMock.post.findMany.mockResolvedValue([mockOutput[1]])
      const result = await caller.post.list({ limit: 1, page: 2 })
      expect(result.posts).toHaveLength(1)
      expect(result.posts[0].category.id).toBe(2)
    })
    it("should return the correct number of pages", async () => {
      prismaMock.post.findMany.mockResolvedValue(mockOutput)
      const result = await caller.post.list({ limit: 2 })
      expect(result.totalPages).toBe(2)
    })

    it("should return the correct current page", async () => {
      prismaMock.post.findMany.mockResolvedValue(mockOutput)
      const result = await caller.post.list({ limit: 1, page: 2 })
      expect(result.currentPage).toBe(2)
    })

    it("should throw an error if the page is out of bounds", async () => {
      prismaMock.post.findMany.mockResolvedValue(mockOutput)

      await expect(
        caller.post.list({ limit: 1, page: 4 })
      ).rejects.toThrowError()
    })

    it("should throw an error if the page is less than 1", async () => {
      prismaMock.post.findMany.mockResolvedValue(mockOutput)

      await expect(
        caller.post.list({ limit: 1, page: -1 })
      ).rejects.toThrowError()
    })

    it("should return posts with the correct category", async () => {
      prismaMock.post.findMany.mockResolvedValue([mockOutput[0]])
      prismaMock.post.count.mockResolvedValue(1)
      const result = await caller.post.list({ categoryId: 1 })
      expect(result.posts).toHaveLength(1)
      expect(result.posts[0].category.id).toBe(1)
    })

    it("should return an empty array if no posts are found with the given category", async () => {
      prismaMock.post.findMany.mockResolvedValue([])
      prismaMock.post.count.mockResolvedValue(0)
      const result = await caller.post.list({ categoryId: 1 })
      expect(result.posts).toHaveLength(0)
      expect(result.totalPages).toBe(0)
      expect(result.currentPage).toBe(0)
    })
  })

  describe("listById", () => {
    it("should return the correct post", async () => {
      prismaMock.post.findUnique.mockResolvedValue(mockOutput[0])
      const result = await caller.post.listById({ id: 1 })
      expect(result.id).toEqual(1)
    })
    it("should throw an error if the post does not exist", async () => {
      prismaMock.post.findUnique.mockResolvedValue(null)
      await expect(
        caller.post.listById({ id: 1 })
      ).rejects.toThrowError()
    })
  })
})
