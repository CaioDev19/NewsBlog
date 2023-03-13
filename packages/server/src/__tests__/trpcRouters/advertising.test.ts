import { appRouter } from "../../trpc/root"
import { mockDeep } from "jest-mock-extended"
import { Advertising, PrismaClient } from "@prisma/client"
import { createInnerContext } from "../../trpc/index"

const mockOutput: Advertising[] = [
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
]

const prismaMock = mockDeep<PrismaClient>()
const caller = appRouter.createCaller(
  createInnerContext({ prisma: prismaMock })
)

describe("advertising", () => {
  it("should return up to 10 mixed ads if no argument is passed", async () => {
    prismaMock.advertising.findMany.mockResolvedValue(mockOutput)
    prismaMock.advertising.count.mockResolvedValue(3)

    const result = await caller.advertising.list()

    expect(result.advertisings.length).toBe(3)
    expect(result.totalPages).toBe(1)
  })

  it("should return only fixed ads if status is 'Fixo'", async () => {
    prismaMock.advertising.findMany.mockResolvedValue([mockOutput[0]])
    const result = await caller.advertising.list({ status: "Fixo" })
    expect(result.advertisings.length).toBe(1)
  })

  it("should return only mobile ads if status is 'Móvel'", async () => {
    prismaMock.advertising.findMany.mockResolvedValue([
      mockOutput[1],
      mockOutput[2],
    ])
    prismaMock.advertising.count.mockResolvedValue(2)

    const result = await caller.advertising.list({ status: "Móvel" })
    expect(result.advertisings.length).toBe(2)
    expect(result.totalPages).toBe(1)
  })

  it("should return only one ad if limit is 1", async () => {
    prismaMock.advertising.findMany.mockResolvedValue([mockOutput[0]])
    prismaMock.advertising.count.mockResolvedValue(3)
    const result = await caller.advertising.list({ limit: 1 })
    expect(result.advertisings.length).toBe(1)
  })

  it("should return the correct number of pages", async () => {
    prismaMock.advertising.findMany.mockResolvedValue([
      mockOutput[0],
      mockOutput[1],
    ])
    prismaMock.advertising.count.mockResolvedValue(3)
    const result = await caller.advertising.list({ limit: 2 })
    expect(result.totalPages).toBe(2)
  })
  it("shoult throw an error if page is out of bounds", async () => {
    prismaMock.advertising.findMany.mockResolvedValue([mockOutput[0]])
    prismaMock.advertising.count.mockResolvedValue(3)
    await expect(
      caller.advertising.list({ limit: 3, page: 2 })
    ).rejects.toThrow()
  })
})
