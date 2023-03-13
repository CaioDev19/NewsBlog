import { prisma } from "../config/dataBase"
import { Request, Response, NextFunction } from "express"
import { CustomRequest } from "../interface/express"

export async function checkIfCategoryExists(
  req: CustomRequest,
  res: Response,
  next: NextFunction
) {
  const { category_id } = req.body

  try {
    const category = await prisma.category.findUnique({
      where: {
        id: Number(category_id),
      },
    })

    if (!category) {
      return res.status(404).json({ message: "Invalid category." })
    }

    req.category = category
    return next()
  } catch {
    return res.status(500).json({ message: "Internal server error" })
  }
}
export async function checkIfAdvertisingExists(
  req: CustomRequest,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params

  try {
    const advertising = await prisma.advertising.findUnique({
      where: {
        id: Number(id),
      },
    })

    if (!advertising) {
      return res.status(404).json({ message: "Invalid advertising." })
    }

    req.advertising = advertising
    return next()
  } catch {
    return res.status(500).json({ message: "Internal server error" })
  }
}

export async function checkIfPostExists(
  req: CustomRequest,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params

  try {
    const post = await prisma.post.findUnique({
      where: {
        id: Number(id),
      },
      select: {
        id: true,
        title: true,
        content: true,
        summary: true,
        imageName: true,
        imageUrl: true,
        date: true,
        category: true,
      },
    })

    if (!post) {
      return res.status(404).json({ message: "Not Found." })
    }

    req.post = post
    return next()
  } catch {
    return res.status(500).json({ message: "Internal server error" })
  }
}
