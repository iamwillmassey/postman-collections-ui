var newman = require('newman');

var fs = require('fs');

var path = require('path');

var environment = require('./config/environment');

var config = environment.config;

function getCollections() {
  var collectionsPath = path.join(config.root, 'server', 'postman-collections');
  var files = fs.readdirSync(collectionsPath);

  return files;
}

function getReports() {
  var reportsPath = path.join(config.root, 'newman');
  var files = fs.readdirSync(reportsPath);

  return files;
}

function runCollection(req) {
  var collection = req.query.collection;
  var date = getDate();

  newman.run({
    collection: require('./postman-collections/' + collection + '.postman_collection.json'),
    reporters: 'html',
    reporter: {
      html: {
        export: './newman/' + date + '_' + collection + '_Results.html'
      }
    }
  }, function(err) {
    if (err) {
      throw err;
    }
    console.log('collection run for ' + collection + ' complete!');
  });
}

function getDate() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  if (month < 10) {
    month = '0' + month;
  }
  var day = date.getDate();
  if (day < 10) {
    day = '0' + day;
  }

  var dateStr = year + '-' + month + '-' + day;

  return dateStr;
}

exports.runCollection = runCollection;

exports.getCollections = getCollections;

exports.getReports = getReports;
