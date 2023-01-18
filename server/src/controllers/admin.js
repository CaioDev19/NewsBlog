const jwt = require('jsonwebtoken');

module.exports = {
  async adminLogin(req, res) {
    const { password: _, ...userData } = req.user;

    try {
      const token = jwt.sign({ userData }, process.env.JWT_SECRET, {
        expiresIn: '1d',
      });

      res.status(200).json({ admin: userData, token });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Erro' });
    }
  },
};
