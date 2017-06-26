var express = require('express');

var router = express.Router();

var path = require('path');

var environment = require('../config/environment');

var config = environment.config;

router.get('/', function (req, res) {
    res.sendFile(path.join(config.root, 'public', 'index.html'));
});

router.get('/reports.html', function (req, res) {
    res.sendFile(path.join(config.root, 'public', 'reports.html'));
});

module.exports = router;
