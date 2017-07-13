// bring in bodyParser module for accessing post data
var bodyParser = require('body-parser');
// required by bodyParser to create req.body object for accessing post data
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// required by bodyParser to create req.body object for accessing JSON post data
var jsonParser = bodyParser.json();

// All HTML routes imported to app from this controller
module.exports = function(app) {

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




};