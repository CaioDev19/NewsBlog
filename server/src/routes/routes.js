const express = require('express');
const admin = require('./adminRoutes');
const router = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ message: 'Server Joan' });
  });
  app.use(express.json(), admin);
};

module.exports = router;
