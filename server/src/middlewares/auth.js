const { verify } = require('jsonwebtoken');
const { isInTheDataBase } = require('../utils/dataBase');

module.exports = {
  async checkToken(req, res, next) {
    const headerAuth = req.headers.authorization;

    if (!headerAuth)
      return res.status(401).json({ message: 'Token must be sent.' });

    const token = headerAuth.split(' ')[1];

    try {
      const payLoad = verify(token, process.env.JWT_SECRET);

      if (!payLoad) {
        return res.status(401).json({
          message:
            'To access this feature, a valid authentication token must be submitted.',
        });
      }

      const { data, response } = await isInTheDataBase(
        { id: payLoad.userData.id },
        'admin'
      );

      if (!response) {
        return res.status(401).json({
          message:
            'To access this feature, a valid authentication token must be submitted.',
        });
      }

      req.admin = data;
      return next();
    } catch {
      return res.status(401).json({
        message:
          'To access this feature, a valid authentication token must be submitted.',
      });
    }
  },
};
