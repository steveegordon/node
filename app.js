'use strict';
// Bring in http module
var http = require('http');

// create a server, tell it how to handle requests and responses
http.createServer(function(req, res) {
// set only one response for all request types, specify response ok/200
// specify response in strictly plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });
// body is only the words hello world
  res.end('Hello world\n');

// set up the port server is listening on
}).listen(1337, '127.0.0.1');