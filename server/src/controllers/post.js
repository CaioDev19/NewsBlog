const knex = require("../config/dataBase")

module.exports = {
  async listPosts(req, res) {
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const categoryId = Number(req.query.categoryId)
    const { totalPages } = req

    try {
      const condition = categoryId
        ? { "post.category_id": categoryId }
        : {}
      const posts = await knex("post")
        .join("category", "category.id", "=", "post.category_id")
        .select(
          "post.id",
          "post.title",
          "post.content",
          "post.summary",
          "post.image_name",
          "post.image_url",
          "post.date",
          "category.id as category_id",
          "category.name as category_name"
        )
        .where(condition)
        .orderBy("post.date", "desc")
        .limit(limit)
        .offset((page - 1) * limit)

      const fomatedPosts = posts.map(
        ({
          image_name,
          image_url,
          category_id,
          category_name,
          ...post
        }) => ({
          ...post,
          image: {
            name: image_name,
            url: image_url,
          },
          category: {
            id: category_id,
            name: category_name,
          },
        })
      )

      res.status(200).json({
        totalPages,
        currentPage: totalPages === 0 ? 0 : page,
        posts: fomatedPosts,
      })
    } catch {
      res.status(500).json({ message: "Erro" })
    }
  },
  async listPostByid(req, res) {
    const { id } = req.params

    try {
      const post = await knex("post")
        .join("category", "category.id", "=", "post.category_id")
        .select(
          "post.id",
          "post.title",
          "post.content",
          "post.summary",
          "post.image_name",
          "post.image_url",
          "post.date",
          "category.id as category_id",
          "category.name as category_name"
        )
        .where("post.id", id)
        .first()

      if (!post) {
        return res.status(404).json({ message: "Not Found." })
      }

      const {
        image_name,
        image_url,
        category_id,
        category_name,
        ...postWithoutImageAndCategory
      } = post

      res.status(200).json({
        ...postWithoutImageAndCategory,
        image: {
          name: image_name,
          url: image_url,
        },
        category: {
          id: category_id,
          name: category_name,
        },
      })
    } catch {
      res.status(500).json({ message: "Erro" })
    }
  },
}
