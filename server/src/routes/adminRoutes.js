const express = require('express');
const { adminLogin } = require('../controllers/admin');
const {
  checkIfEmailExists,
  checkPassword,
} = require('../middlewares/logIn');
const { validate } = require('../middlewares/validate');
const { loginSchema } = require('../validators/login');

const router = express.Router();

router.post(
  '/login',
  validate(loginSchema),
  checkIfEmailExists,
  checkPassword,
  adminLogin
);

module.exports = router;
