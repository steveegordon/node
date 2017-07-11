// bring in express module
var express = require('express');
// bring in bodyParser module for accessing post data
var bodyParser = require('body-parser');
// create app which has all express methods
var app = express();
// set a port using an environmental variable or set it to 1337
var port = process.env.PORT || 1337;
// required by bodyParser to create req.body object for accessing post data
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// required by bodyParser to create req.body object for accessing JSON post data
var jsonParser = bodyParser.json();
// middleware, when assets are referenced express looks to the public
//  directory to load them
app.use('/assets', express.static(__dirname + '/public'));
// load in ejs template engine module for ejs templates
app.set('view engine', 'ejs');
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
  res.render('index');
});
// get id specific request, send back data specific to requests params
// get requests search req.query.-value-
app.get('/person/:id', function(req, res) {
  res.render('person', { ID: req.params.id, Qstr:
  req.query.qstr });
});
// post request sent from '/' form to '/person' parsed and responded in node 
// console, responds with '/person' url and basic text response message
app.post('/person', urlencodedParser, function(req, res) {
  res.send("Thank you!");
  console.log(req.body.firstname);
  console.log(req.body.lastname);
});
// jquery ajax post sending JSON sent from '/' onload doesn't load '/personjson'
// url but posts data to location no res shown
app.post('/personjson', jsonParser, function(req, res) {
  res.send('Thank you for the JSON data!');
  console.log(req.body.firstname);
  console.log(req.body.lastname);
});
// if get request to api endpoint respond with json
app.get('/api', function(req, res) {
  res.json({ firstname: 'Steve', lastname: 'Gordon'});
});
// set app to listen to port variable
app.listen(port);