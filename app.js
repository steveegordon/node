// bring in express module
var express = require('express');
// create app which has all express methods
var app = express();
// set a port using an environmental variable or set it to 1337
var port = process.env.PORT || 1337;
// if get request to home url respond with html
app.get('/', function(req, res) {
  res.send('<html><head></head><body><h1>Hello world!</h1></body></html>');
});
// get id specific request, send back data specific to requests params
app.get('/person/:id', function(req, res) {
  res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
});
// if get request to api endpoint respond with json
app.get('/api', function(req, res) {
  res.json({ firstname: 'Steve', lastname: 'Gordon'});
});
// set app to listen to port variable
app.listen(port);