const prisma = require("../config/dataBase")

module.exports = {
  async listAdvertising(req, res) {
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const { totalPages } = req

    try {
      const advertising = await prisma.advertising.findMany({
        orderBy: {
          id: "desc",
        },
        take: limit,
        skip: (page - 1) * limit,
      })

      const advertisingWithImages = advertising.map((ad) => {
        const { imageName, imageUrl, ...advertisingWithoutImage } = ad

        return {
          ...advertisingWithoutImage,
          image: {
            name: imageName,
            url: imageUrl,
          },
        }
      })

      res.status(200).json({
        totalPages,
        currentPage: totalPages === 0 ? 0 : page,
        advertisings: advertisingWithImages,
      })
    } catch {
      res.status(500).json({ message: "Internal server error" })
    }
  },
  async listFixedAdvertising(_req, res) {
    try {
      const advertising = await prisma.advertising.findMany({
        where: {
          status: "Fixo",
        },
        orderBy: {
          id: "desc",
        },
      })

      const advertisingWithImages = advertising.map((ad) => {
        const { imageName, imageUrl, ...advertisingWithoutImage } = ad

        return {
          ...advertisingWithoutImage,
          image: {
            name: imageName,
            url: imageUrl,
          },
        }
      })

      res.status(200).json({
        advertisings: advertisingWithImages,
      })
    } catch {
      res.status(500).json({ message: "Internal server error" })
    }
  },
  async listRotativeAdvertising(req, res) {
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10

    try {
      const totalPosts = await prisma.advertising.findMany({
        where: {
          status: "Móvel",
        },
      })

      const totalPages = Math.ceil(Number(totalPosts.length) / limit)

      if ((totalPages > 0 && page > totalPages) || page < 1) {
        return res.status(404).json({ message: "Page not found." })
      }
      const advertising = await prisma.advertising.findMany({
        where: {
          status: "Móvel",
        },
        orderBy: {
          id: "asc",
        },
        take: limit,
        skip: (page - 1) * limit,
      })

      const advertisingWithImages = advertising.map((ad) => {
        const { imageName, imageUrl, ...advertisingWithoutImage } = ad

        return {
          ...advertisingWithoutImage,
          image: {
            name: imageName,
            url: imageUrl,
          },
        }
      })

      res.status(200).json({
        totalPages,
        currentPage: totalPages === 0 ? 0 : page,
        advertisings: advertisingWithImages,
      })
    } catch {
      res.status(500).json({ message: "Internal server error" })
    }
  },
}
