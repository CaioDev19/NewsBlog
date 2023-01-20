const knex = require("../config/database")
const { uploadImageToStorage } = require("../utils/firebase")

module.exports = {
  async createPost(req, res) {
    const { title, content, summary, category_id } = req.body
    const { file } = req
    const { name } = req.category

    try {
      file.originalname = `${file.originalname}_${Date.now()}`
      const imageUrl = await uploadImageToStorage(file)

      const post = await knex("post")
        .insert({
          title,
          content,
          summary,
          category_id,
          image_name: file.originalname,
          image_url: imageUrl,
          date: new Date(),
        })
        .returning("*")

      const {
        image_name,
        image_url,
        category_id: category,
        ...postWithoutImageAndCategory
      } = post[0]

      res.status(201).json({
        ...postWithoutImageAndCategory,
        image: {
          name: image_name,
          url: image_url,
        },
        category: {
          id: category,
          name,
        },
      })
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: "Erro" })
    }
  },
}
