'use strict';
// Bring in http module
var http = require('http');
// Bring in filsync module
var fs = require('fs');

// create a server, tell it how to handle requests and responses
http.createServer(function(req, res) {
// set only one response for all request types, specify response ok/200
// specify response is html
  res.writeHead(200, { 'Content-Type': 'application/json' });
  // Create an object which holds our data
  var obj = {
    firstname: "Steve",
    lastname: "Gordon"
  };
  // Serialize object to JSON for transfer and send
  res.end(JSON.stringify(obj));

// set up the port server is listening on
}).listen(1337, '127.0.0.1');