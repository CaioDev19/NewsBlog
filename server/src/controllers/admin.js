module.exports = {
  async adminLogin(req, res) {
    try {
      res.send(200).json({ message: 'Tsestsando' });
    } catch (error) {
      res.send(500).json({ message: 'Erro' });
    }
  },
};
