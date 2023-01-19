const { sign } = require('jsonwebtoken');
const knex = require('../config/database');
const { uploadImageToStorage } = require('../utils/firebase');

module.exports = {
  async adminLogin(req, res) {
    const { password: _, ...userData } = req.user;

    try {
      const token = sign({ userData }, process.env.JWT_SECRET, {
        expiresIn: '1d',
      });

      res.status(200).json({ admin: userData, token });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Erro' });
    }
  },
  async createPost(req, res) {
    const { title, content, summary, category_id, date } = req.body;
    const { file } = req;
    const { name } = req.category;

    try {
      const imageUrl = await uploadImageToStorage(file);

      const post = await knex('post')
        .insert({
          title,
          content,
          summary,
          category_id,
          image_name: file.originalname,
          image_url: imageUrl,
          date,
        })
        .returning('*');

      const {
        image_name,
        image_url,
        category_id: category,
        ...postWithoutImageAndCategory
      } = post[0];

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
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Erro' });
    }
  },
};
