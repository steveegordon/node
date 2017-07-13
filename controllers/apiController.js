// bring in bodyParser module for accessing post data
var bodyParser = require('body-parser');
// required by bodyParser to create req.body object for accessing JSON post data
var jsonParser = bodyParser.json();


//All API routes exported to app from this controller
module.exports = function(app) {
  //get rout that loads an HTML page, typically wouldnt use for api
  app.get('/api', function(req, res) {
    console.log('Route worked');
    res.render('apitest');
  });
  //get rout for accessing a specific user with template data
  app.get('/api/users/:id', function(req, res) {
    res.json({
      firstname: 'Steve',
      lastname: 'Gordon'
    });
  });
  // post route for posting to api endpoint
  app.post('/api/users', jsonParser, function(req, res) {
    console.log(req.body.firstname + " has been added!");
  });
};