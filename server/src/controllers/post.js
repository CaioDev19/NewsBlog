const prisma = require("../config/dataBase")

module.exports = {
  async listPosts(req, res) {
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const categoryId = req.query.categoryId
      ? Number(req.query.categoryId) || null
      : null
    const { totalPages } = req

    try {
      const condition = categoryId ? { category_id: categoryId } : {}

      const posts = await prisma.post.findMany({
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
        where: {
          ...condition,
        },
        orderBy: {
          date: "desc",
        },
        take: limit,
        skip: (page - 1) * limit,
      })

      const fomatedPosts = posts.map(
        ({ imageName, imageUrl, ...post }) => ({
          ...post,
          image: {
            name: imageName,
            url: imageUrl,
          },
        })
      )

      res.status(200).json({
        totalPages,
        currentPage: totalPages === 0 ? 0 : page,
        posts: fomatedPosts,
      })
    } catch {
      res.status(500).json({ message: "Internal server error" })
    }
  },
  async listPostByid(req, res) {
    const { post } = req

    const { imageName, imageUrl, ...postWithoutImage } = post

    res.status(200).json({
      ...postWithoutImage,
      image: {
        name: imageName,
        url: imageUrl,
      },
    })
  },
}
