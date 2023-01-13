module.exports = {
  async adminLogin(req, res) {
    try {
      res.send(200).json({ message: 'Testando' });
    } catch (error) {
      res.send(500).json({ message: 'Erro' });
    }
  },
};
