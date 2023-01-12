const express = require('express');
const { adminLogin } = require('../controllers/admin');

const router = express.Router();

router.get('/admin', adminLogin);

module.exports = router;
