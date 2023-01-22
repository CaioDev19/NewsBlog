const { isInTheDataBase } = require("../utils/dataBase")
const knex = require("../config/dataBase")

module.exports = {
  async checkIfThePageExists(req, res, next) {
    const page = req.query.page ? Number(req.query.page) : null
    const limit = Number(req.query.limit) || 10
    const categoryId = req.query.categoryId

    let totalPosts
    if (categoryId) {
      totalPosts = await knex("post")
        .where("category_id", categoryId)
        .count("*")
        .first()
    } else {
      totalPosts = await knex("post").count("*").first()
    }

    if (typeof totalPosts === "undefined") {
      return res
        .status(500)
        .json({ message: "Server internal error." })
    }

    const totalPages = Math.ceil(Number(totalPosts.count) / limit)

    if (page === null) {
      req.totalPages = totalPages
      return next()
    }

    if ((totalPages > 0 && page > totalPages) || page < 1) {
      return res.status(404).json({ message: "Page not found." })
    }

    req.totalPages = totalPages
    return next()
  },
  async checkIfPostExists(req, res, next) {
    const { id } = req.params

    try {
      const { data, response } = await isInTheDataBase({ id }, "post")

      if (!response) {
        return res.status(404).json({ message: "Not Found." })
      }

      req.post = data
      return next()
    } catch {
      return res
        .status(500)
        .json({ message: "Internal server error" })
    }
  },
}
