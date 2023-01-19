const express = require('express');
const { adminLogin } = require('../../controllers/admin');
const { checkToken } = require('../../middlewares/auth');
const {
  checkIfEmailExists,
  checkPassword,
} = require('../../middlewares/logIn');

const router = express.Router();
const postRouter = require('./post');

router.post('/login', adminLogin);

router.use(checkToken);

router.use('/post', postRouter);

module.exports = router;
