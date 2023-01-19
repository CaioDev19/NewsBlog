const { admin } = require('../config/firebase');
const knex = require('../config/database');
const { uploadImageToStorage } = require('../utils/firebase');

module.exports = {
  async adminLogin(req, res) {
    const idToken = req.headers.authorization.split('Bearer ')[1];

    if (!idToken) {
      return res.status(401).json({
        message: 'Token must be sent.',
      });
    }

    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      const { uid } = decodedToken;

      const expiresIn = 8 * 60 * 60;
      const claims = { exp: Date.now() / 1000 + expiresIn };

      const customToken = await admin
        .auth()
        .createCustomToken(uid, claims);

      res.status(200).json({ token: customToken });
    } catch (err) {
      console.log(err);
      return res.status(401).json({
        message:
          'To access this feature, a valid authentication token must be submitted.',
      });
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
