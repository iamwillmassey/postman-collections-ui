var express = require('express');

var routes = require('./../routes/index');

var collection = require('./../routes/collection');

var path = require('path');

var environment = require('./environment');

var config = environment.config;

module.exports = function(app) {
  app.use('/', routes);
  app.use('/collection', collection);

  app.use('/css', express.static(path.join(config.root, 'public', 'css')));
  app.use('/image', express.static(path.join(config.root, 'public', 'image')));
  app.use('/js', express.static(path.join(config.root, 'public', 'js')));

  app.use('/newman', express.static(path.join(config.root, 'newman')));
}
