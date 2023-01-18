const express = require('express');
const router = express.Router();
const adminRouter = require('./adminRoutes');

router.use('/admin', adminRouter);

module.exports = router;
