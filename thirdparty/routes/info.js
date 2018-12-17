const express = require('express');
const router = express.Router();

const data = {
    name: 'alienzhou',
    desc: 'a developer'
};

router.get('/normal', (req, res, next) => {
    res.json(data);
});

router.get('/cors', function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8888');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.json(data);
  });
  router.get('/jsonp', function(req, res, next) {
    var str = JSON.stringify(data);
    // 3. 创建script脚本内容，用`callback`函数包裹住数据
    // 形式：callback(data)
    var script = `${req.query.cb}(${str})`;
    res.send(script);

  });
module.exports = router;