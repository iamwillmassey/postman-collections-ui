# postman-collections-ui

postman-collections-ui provides a simple web ui to allow non-technical people to run Postman collections for integration testing.
Collections are setup and exported from postman.  These collections are then included within the app and provided to the user at runtime.
Running one of the collections generates an HTML report which is then available for the user to consume (WIP).

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ cd postman-collections-ui
$ npm install -d
$ node app
```