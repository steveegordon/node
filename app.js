// bring in express module
var express = require('express');
// create app which has all express methods
var app = express();
// set a port using an environmental variable or set it to 1337
var port = process.env.PORT || 1337;
// load in ejs template engine module for ejs templates
app.set('view engine', 'ejs');
// middleware, when assets are referenced express looks to the public
//  directory to load them
app.use('/assets', express.static(__dirname + '/public'));
// middleware, if path is blank it will run with every request, '/' will run on 
// '/' and any of its sub-domains...other middleware includes cookie parsers etc
app.get('/', function(req, res) {
  res.render('index');
});
// set app to listen to port variable
app.listen(port);