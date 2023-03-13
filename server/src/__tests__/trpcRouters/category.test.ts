import { appRouter } from "../../trpc/root"
import { mockDeep } from "jest-mock-extended"
import { Category, PrismaClient } from "@prisma/client"
import { createInnerContext } from "../../trpc/index"

const mockOutput: Category[] = [
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
]
const prismaMock = mockDeep<PrismaClient>()
const caller = appRouter.createCaller(
  createInnerContext({ prisma: prismaMock })
)

describe("category", () => {
  it("should return all categories", async () => {
    prismaMock.category.findMany.mockResolvedValue(mockOutput)
    const result = await caller.category.list()
    expect(result).toEqual(mockOutput)
  })
})
