var express = require('express');

var router = express.Router();

var path = require('path');

var environment = require('../config/environment');

var config = environment.config;

var newman = require('../newman');

router.get('/', function(req, res) {
  res.send(newman.getCollections());
});

router.get('/reports', function(req, res) {
  res.send(newman.getReports());
});

router.post('/run', function(req, res) {
  newman.runCollection(req);
  res.redirect('/reports.html');
});

module.exports = router;
