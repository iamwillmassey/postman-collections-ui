var newman = require('newman'); // require newman in your project

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
