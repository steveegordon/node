// bring in express module
var express = require('express');
// create app which has all express methods
var app = express();
// bring in mysql module for javascript data handling
var mysql = require('mysql');
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
  // basic connection to mysql database
  var con = mysql.createConnection({
    host: "localhost",
    user: "test",
    password: "test",
    database: "addressbook"
  });
  // example of querying an address book from a mysql database
  con.query('SELECT people.ID, Firstname, Lastname, Address FROM People INNER JOIN PersonAddress ON People.ID = PersonAddresses.PersonID INNER JOIN Addresses ON PersonAddresses.AddressID = Addresses.ID',
    // callback to the query responds with error if there is one, followed by the data
    function(err, rows) {
      if(err) throw err;
      // rows will be an array of javascript objects, this example returns the
      // first object, can access like typical javascript for example rows[0].firstname
      console.log(rows[0]);
    }
  );
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