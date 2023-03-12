const prisma = require("../config/database")

module.exports = {
  checkIfThePageExists(table = "post") {
    return async (req, res, next) => {
      const page = Number(req.query.page) || null
      const limit = Number(req.query.limit) || 10
      const categoryId = req.query.categoryId
        ? Number(req.query.categoryId) || null
        : null

      try {
        let totalPosts
        if (categoryId) {
          totalPosts = await prisma[table].findMany({
            where: {
              category_id: categoryId,
            },
          })
        } else {
          totalPosts = await prisma[table].findMany()
        }

        if (typeof totalPosts === "undefined") {
          return res
            .status(500)
            .json({ message: "Server internal error." })
        }

        const totalPages = Math.ceil(
          Number(totalPosts.length) / limit
        )

        if (page === null) {
          req.totalPages = totalPages
          return next()
        }

        if ((totalPages > 0 && page > totalPages) || page < 1) {
          return res.status(404).json({ message: "Page not found." })
        }

        req.totalPages = totalPages
        return next()
      } catch {
        return res
          .status(500)
          .json({ message: "Internal server error" })
      }
    }
  },
  async checkIfPostExists(req, res, next) {
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
      return res
        .status(500)
        .json({ message: "Internal server error" })
    }
  },
}
