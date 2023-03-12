const prisma = require("../config/dataBase")

module.exports = {
  async checkIfCategoryExists(req, res, next) {
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
      return res
        .status(500)
        .json({ message: "Internal server error" })
    }
  },
  async checkIfAdvertisingExists(req, res, next) {
    const { id } = req.params

    try {
      const advertising = await prisma.advertising.findUnique({
        where: {
          id: Number(id),
        },
      })

      if (!advertising) {
        return res
          .status(404)
          .json({ message: "Invalid advertising." })
      }

      req.advertising = advertising
      return next()
    } catch {
      return res
        .status(500)
        .json({ message: "Internal server error" })
    }
  },
}
