const knex = require("../config/dataBase")

module.exports = {
  async listAdvertising(req, res) {
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const { totalPages } = req

    try {
      const advertising = await knex("advertising")
        .select("*")
        .orderBy("id", "desc")
        .limit(limit)
        .offset((page - 1) * limit)

      const advertisingWithImages = advertising.map((ad) => {
        const { image_name, image, ...advertisingWithoutImage } = ad

        return {
          ...advertisingWithoutImage,
          image: {
            name: image_name,
            url: image,
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
      const advertising = await knex("advertising")
        .select("*")
        .where({ status: "Fixo" })
        .orderBy("id", "desc")

      const advertisingWithImages = advertising.map((ad) => {
        const { image_name, image, ...advertisingWithoutImage } = ad

        return {
          ...advertisingWithoutImage,
          image: {
            name: image_name,
            url: image,
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
      const totalPosts = await knex("advertising")
        .where({
          status: "Móvel",
        })
        .count("id")
        .first()

      const totalPages = Math.ceil(Number(totalPosts.count) / limit)

      if ((totalPages > 0 && page > totalPages) || page < 1) {
        return res.status(404).json({ message: "Page not found." })
      }

      const advertising = await knex("advertising")
        .select("*")
        .where({ status: "Móvel" })
        .orderBy("id", "asc")
        .limit(limit)
        .offset((page - 1) * limit)

      const advertisingWithImages = advertising.map((ad) => {
        const { image_name, image, ...advertisingWithoutImage } = ad

        return {
          ...advertisingWithoutImage,
          image: {
            name: image_name,
            url: image,
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
