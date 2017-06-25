var app = require('express')();

var server = require('http').Server(app);

var environment = require('./server/config/environment');

var config = environment.config;

require('./server/config/express')(app, server);

function startServer () {
    server.listen(config.port, config.ip, function () {
        console.log("Server running on " + config.ip + ":" + config.port);
    });
}

startServer();

module.exports = app;