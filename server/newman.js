var newman = require('newman'); // require newman in your project

var fs = require('fs');

var path = require('path');

var environment = require('./config/environment');

var config = environment.config;

function getCollections() {
  var collectionsPath = path.join(config.root, 'server', 'postman-collections');
  var files = fs.readdirSync(collectionsPath);

  return files;
}

// call newman.run to pass `options` object and wait for callback
function runCollection() {
  newman.run({
      collection: require('./postman-collections/Endpoints.postman_collection.json'),
      reporters: 'html'
  }, function (err) {
    if (err) { throw err; }
      console.log('collection run complete!');
  });
}

exports.runCollection = runCollection;

exports.getCollections = getCollections;
