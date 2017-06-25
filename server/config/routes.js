var express = require('express');

var routes = require('./../routes/index');

var path = require('path');

var environment = require('./environment');

var config = environment.config;

module.exports = function (app) {
    app.use('/', routes);
}