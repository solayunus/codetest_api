const express = require('express');
const router = express.Router();
const tokenCtrl = require('../controller/index');

router.use('/', tokenCtrl.getToken);


module.exports = router;