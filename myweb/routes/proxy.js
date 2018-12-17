const express = require('express');
const router = express.Router();
const request = require('request');

router.get('*', (req, res, next) => {
    console.log(req.headers);
    let path = req.path.replace(/^\/proxy/, '');
    request.get(`http://127.0.0.1:3000${path}`, (err, response) => {
        res.json(JSON.parse(response.body));
    });
});

module.exports = router;