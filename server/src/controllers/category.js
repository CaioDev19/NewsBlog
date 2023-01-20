const knex = require("../config/dataBase")

module.exports = {
  async listCategories(_req, res) {
    try {
      const categories = await knex("category").select("*")
      res.status(200).json(categories)
    } catch {
      res.status(500).json({ message: "Erro" })
    }
  },
}
