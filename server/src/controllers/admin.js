module.exports = {
  async adminLogin(req, res) {
    try {
      res.send(200).json({ message: 'Ok' });
    } catch (error) {
      res.send(500).json({ message: 'Erro' });
    }
  },
};
