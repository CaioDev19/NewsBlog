const { isInTheDataBase } = require('../utils/dataBase');

module.exports = {
  async checkIfCategoryExists(req, res, next) {
    const { category_id } = req.body;

    try {
      const { data, response } = await isInTheDataBase(
        { id: category_id },
        'category'
      );

      if (!response) {
        return res.status(404).json({ message: 'Invalid category.' });
      }

      req.category = data;
      return next();
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: 'Internal server error' });
    }
  },
};