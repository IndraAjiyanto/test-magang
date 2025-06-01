const express = require('express');
const router = express.Router();
const { getDataMenu, postDataMenu } = require('../controllers/pesanController');

router.get('/menu', getDataMenu);
router.post('/order', postDataMenu);


module.exports = router;
