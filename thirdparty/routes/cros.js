var express = require('express');
var router = express.Router();

const data = {
  name: 'alienzhou',
  desc: 'a developer'
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8888');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.json(data);
});

module.exports = router;
