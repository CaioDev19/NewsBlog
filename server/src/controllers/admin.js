const knex = require("../config/dataBase")
const { formatToBrTimeZone } = require("../utils/date")
const {
  uploadImageToStorage,
  deleteFileFromStorage,
} = require("../utils/firebase")

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
          date: formatToBrTimeZone(new Date()),
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
    } catch {
      res.status(500).json({ message: "Internal server error" })
    }
  },
  async deletePost(req, res) {
    const { id } = req.params

    try {
      await deleteFileFromStorage(req.post.image_name)

      const deletedPost = await knex("post")
        .where({ id })
        .del()
        .returning("*")

      if (!deletedPost) {
        return res
          .status(500)
          .json({ message: "Internal server error" })
      }

      res.status(204).json()
    } catch {
      res.status(500).json({ message: "Internal server error" })
    }
  },
  async updatePost(req, res) {
    const { id } = req.params
    const { title, content, summary, category_id } = req.body
    const { file } = req
    const { name } = req.category

    try {
      await deleteFileFromStorage(req.post.image_name)

      file.originalname = `${file.originalname}_${Date.now()}`
      const imageUrl = await uploadImageToStorage(file)

      const updatedPost = await knex("post")
        .where({ id })
        .update({
          title,
          content,
          summary,
          category_id,
          image_name: file.originalname,
          image_url: imageUrl,
          date: formatToBrTimeZone(new Date()),
        })
        .returning("*")

      const {
        image_name,
        image_url,
        category_id: category,
        ...postWithoutImageAndCategory
      } = updatedPost[0]

      return res.status(200).json({
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
    } catch {
      res.status(500).json({ message: "Internal server error" })
    }
  },
  async createAdvertising(req, res) {
    const { file } = req
    const { status } = req.body

    try {
      if (status === "Fixo") {
        const allFixedAdvertising = await knex("advertising")
          .where({
            status: "Fixo",
          })
          .count("* as total")
          .first()

        console.log(allFixedAdvertising)
        if (allFixedAdvertising.total == 10) {
          return res.status(400).json({
            message: "You can't add more than 10 fixed advertising",
          })
        }
      }

      file.originalname = `${file.originalname}_${Date.now()}`
      const imageUrl = await uploadImageToStorage(file)

      const advertising = await knex("advertising")
        .insert({
          image_name: file.originalname,
          image: imageUrl,
          status,
        })
        .returning("*")

      const { image_name, image, ...advertisingWithoutImage } =
        advertising[0]

      return res.status(201).json({
        ...advertisingWithoutImage,
        image: {
          name: image_name,
          url: image,
        },
      })
    } catch {
      res.status(500).json({ message: "Internal server error" })
    }
  },
  async deleteAdvertising(req, res) {
    const { id } = req.params

    try {
      await deleteFileFromStorage(req.advertising.image_name)

      const deletedAdvertising = await knex("advertising")
        .where({ id })
        .del()
        .returning("*")

      if (!deletedAdvertising) {
        return res
          .status(500)
          .json({ message: "Internal server error" })
      }

      res.status(204).json()
    } catch {
      res.status(500).json({ message: "Internal server error" })
    }
  },
}
