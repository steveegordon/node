// bring in express module
var express = require('express');
// create app which has all express methods
var app = express();
// loads in mongoDB for database
var mongoose = require('mongoose');
// creates connection to cloud mongoDB
var promise = mongoose.connect(
'mongodb://test:test@ds129183.mlab.com:29183/testing', {
useMongoClient: true});
// creates a data schema
var Schema = mongoose.Schema;
// creates a structure for a certain type of object to save to the db
var personSchema = new Schema({
  firstname: String,
  lastname: String,
  address: String
});
// object constructor using the personSchema structure to create Person objects
var Person = mongoose.model('Person', personSchema);
// create a Person object
var steve = Person({
  firstname: 'Steve',
  lastname: 'Gordon',
  address: '144 S. Wildwood Ave'
});
// save this person object to the database
steve.save(function(err) {
  if (err) throw err;

  console.log('person saved!');
});
// create another Person object
var kristy = Person({
  firstname: 'Kristianna',
  lastname: 'Torres',
  address: '144 S. Wildwood Ave'
});
// save this person object to the database
kristy.save(function(err) {
  if (err) throw err;

  console.log('person saved!');
});
// controller contains html routes
var htmlController = require('./controllers/htmlController');
// controller contains api routes
var apiController = require('./controllers/apiController');
// set a port using an environmental variable or set it to 1337
var port = process.env.PORT || 1337;
// middleware, when assets are referenced express looks to the public
//  directory to load them
app.use('/assets', express.static(__dirname + '/public'));
// load in ejs template engine module for ejs templates
app.set('view engine', 'ejs');
// middleware, if path is blank it will run with every request, '/' will run on 
// '/' and any of its sub-domains...other middleware includes cookie parsers etc
app.use('/', function(req, res, next) {
  console.log('Request Url: ' + req.url);
// all pages respond with a console.log list of users from the database
  Person.find({}, function(err, users) {
    if (err) throw err;

    console.log(users);
  });
  // next is used to chain middleware, in this instance it allows the request to
  // continue which means the app looks how to handle the get request
  next();
});
// pass htmlControllers functions to app
htmlController(app);
// pass apiControllers functions to app
apiController(app);
// set app to listen to port variable
app.listen(port);