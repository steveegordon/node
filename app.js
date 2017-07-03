// bring in express module
var express = require('express');
// create app which has all express methods
var app = express();
// set a port using an environmental variable or set it to 1337
var port = process.env.PORT || 1337;
// middleware, when assets are referenced express looks to the public
//  directory to load them
app.use('/assets', express.static(__dirname + '/public'));
// middleware, if path is blank it will run with every request, '/' will run on 
// '/' and any of its sub-domains...other middleware includes cookie parsers etc
app.use('/', function(req, res, next) {
  console.log('Request Url: ' + req.url);
  // next is used to chain middleware, in this instance it allows the request to
  // continue which means the app looks how to handle the get request
  next();
});
// if get request to home url respond with html
app.get('/', function(req, res) {
  res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello world!</h1></body></html>');
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