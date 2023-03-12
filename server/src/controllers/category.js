const prisma = require("../config/dataBase")

module.exports = {
  async listCategories(_req, res) {
    try {
      const categories = await prisma.category.findMany()
      res.status(200).json(categories)
    } catch {
      res.status(500).json({ message: "Internal server error" })
    }
  },
}
