const express = require('express');
const { checkToken } = require('../../middlewares/auth');

const router = express.Router();
const postRouter = require('./post');

router.use(checkToken);

router.use('/post', postRouter);

module.exports = router;
