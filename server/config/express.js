var express = require('express');

var path = require('path');

var bodyParser = require('body-parser');

module.exports = function (app, server) {
    // Set up JSON handling
    app.use(bodyParser.json({limit: '5mb'}));
    app.use(bodyParser.urlencoded({
        extended : false,
        limit: '5mb'
    }));

    require('./routes')(app);
}