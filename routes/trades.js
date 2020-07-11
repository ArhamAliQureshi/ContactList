var express = require('express');
var router = express.Router();
var trades = require('../controllers/trades');

// Routes related to trades
router.post('/', trades.add);
router.get('/', trades.list);
router.get('/users/:userID', trades.find);

module.exports = router;