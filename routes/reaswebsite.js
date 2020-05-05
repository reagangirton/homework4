var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Who thinks Rea is cool?');
});

module.exports = router;
