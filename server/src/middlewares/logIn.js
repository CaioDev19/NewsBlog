const bcrypt = require('bcrypt');
const { isInTheDataBase } = require('../utils/dataBase');

module.exports = {
  async checkIfEmailExists(req, res, next) {
    const { email } = req.body;

    const { response, data } = await isInTheDataBase(
      { email },
      'admin'
    );

    if (!response) {
      return res
        .status(401)
        .json({ mensagem: 'Invalid email or password' });
    }

    req.user = data;
    next();
  },
  async checkPassword(req, res, next) {
    const { password } = req.body;

    try {
      const passwordCheck = await bcrypt.compare(
        password,
        req.user.password
      );

      if (!passwordCheck) {
        return res
          .status(401)
          .json({ mensagem: 'Invalid email or password' });
      }

      next();
    } catch {
      return res
        .status(500)
        .json({ mensagem: 'Internal server error' });
    }
  },
};
