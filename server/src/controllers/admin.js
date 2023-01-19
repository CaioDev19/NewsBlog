const { sign } = require('jsonwebtoken');
const knex = require('../config/database');
const { convertToBase64Url } = require('../utils/convert');
const fs = require('fs/promises');

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
    const { filename: image, path } = req.file;
    const buffer = await fs.readFile(path);
    const { name } = req.category;

    try {
      const post = await knex('post')
        .insert({
          title,
          content,
          summary,
          category_id,
          image,
          date,
        })
        .returning('*');

      const {
        image: _,
        category_id: category,
        ...postWithoutImage
      } = post[0];
      const imageUrl = convertToBase64Url(buffer);

      res.status(201).json({
        ...postWithoutImage,
        image: imageUrl,
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
