import { Request, Response } from "express"
import { prisma } from "../config/dataBase"
import {
  CustomBodyParamsRequest,
  CustomRequest,
} from "../interface/express"
import { formatToUtcTimeZone } from "../utils/date"
import { Post } from "../validators/postSchema"
import { Post as DbPost } from "@prisma/client"
const {
  uploadImageToStorage,
  deleteFileFromStorage,
} = require("../utils/firebase")

export async function createPost(
  req: Request<any, Post["body"]>,
  res: Response
) {
  const { title, content, summary, category_id } = req.body
  const { file } = req

  try {
    file!.originalname = `${file?.originalname}_${Date.now()}`
    const imageUrl = await uploadImageToStorage(file)

    const post = await prisma.post.create({
      data: {
        title,
        content,
        summary,
        category_id: Number(category_id),
        imageName: file!.originalname,
        imageUrl,
        date: formatToUtcTimeZone(),
      },
      include: {
        category: true,
      },
    })

    const {
      imageName,
      imageUrl: image_url,
      category_id: category,
      ...postWithoutImage
    } = post

    res.status(201).json({
      ...postWithoutImage,
      image: {
        name: imageName,
        url: image_url,
      },
    })
  } catch {
    res.status(500).json({ message: "Internal server error" })
  }
}
export async function deletePost(req: CustomRequest, res: Response) {
  const { id } = req.params

  try {
    await deleteFileFromStorage(req.post.imageName)

    const deletedPost = await prisma.post.delete({
      where: {
        id: Number(id),
      },
    })

    if (!deletedPost) {
      return res
        .status(500)
        .json({ message: "Internal server error" })
    }

    res.status(204).json()
  } catch {
    res.status(500).json({ message: "Internal server error" })
  }
}
export async function updatePost(
  req: Request<{ id: string }, Post["body"]> & {
    [index: string]: any
  },
  res: Response
) {
  const { id } = req.params
  const { title, content, summary, category_id } = req.body
  const { file } = req

  try {
    await deleteFileFromStorage(req.post.imageName)

    file!.originalname = `${file!.originalname}_${Date.now()}`
    const imageUrl = await uploadImageToStorage(file)

    const updatedPost = await prisma.post.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
        content,
        summary,
        category_id: Number(category_id),
        imageName: file!.originalname,
        imageUrl,
      },
      include: {
        category: true,
      },
    })

    const {
      imageUrl: image_url,
      imageName,
      ...postWithoutImage
    } = updatedPost

    return res.status(200).json({
      ...postWithoutImage,
      image: {
        name: imageName,
        url: image_url,
      },
    })
  } catch {
    res.status(500).json({ message: "Internal server error" })
  }
}
export async function createAdvertising(
  req: Request<any, { status: "Móvel" | "Fixo" }>,
  res: Response
) {
  const { file } = req
  const { status } = req.body

  try {
    if (status === "Fixo") {
      const allFixedAdvertising = await prisma.advertising.findMany({
        where: {
          status: "Fixo",
        },
      })
      if (allFixedAdvertising.length == 10) {
        return res.status(400).json({
          message: "You can't add more than 10 fixed advertising",
        })
      }
    }

    file!.originalname = `${file!.originalname}_${Date.now()}`
    const imageUrl = await uploadImageToStorage(file)

    const advertising = await prisma.advertising.create({
      data: {
        imageName: file!.originalname,
        imageUrl,
        status,
      },
    })

    const {
      imageName,
      imageUrl: image_url,
      ...advertisingWithoutImage
    } = advertising

    return res.status(201).json({
      ...advertisingWithoutImage,
      image: {
        name: imageName,
        url: image_url,
      },
    })
  } catch {
    res.status(500).json({ message: "Internal server error" })
  }
}
export async function deleteAdvertising(
  req: CustomRequest,
  res: Response
) {
  const { id } = req.params

  try {
    await deleteFileFromStorage(req.advertising.imageName)

    const deletedAdvertising = await prisma.advertising.delete({
      where: {
        id: Number(id),
      },
    })

    if (!deletedAdvertising) {
      return res
        .status(500)
        .json({ message: "Internal server error" })
    }

    res.status(204).json()
  } catch {
    res.status(500).json({ message: "Internal server error" })
  }
}
