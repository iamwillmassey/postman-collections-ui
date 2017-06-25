var express = require('express');

var router = express.Router();

var path = require('path');

var environment = require('../config/environment');

var config = environment.config;

var newman = require('../newman');

router.get('/', function (req, res) {
    res.sendFile(path.join(config.root, 'public', 'index.html'));
});

router.get('/collections', function(req, res) {
  res.send(newman.getCollections());
});

router.get('/test', function(req, res) {
  newman.runCollection();
    res.send('test');
});

module.exports = router;
