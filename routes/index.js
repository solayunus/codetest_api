const express = require('express');
const router = express.Router();
const textCtrl = require('../controller/index');

router.get('/', textCtrl.getText);


module.exports = router;