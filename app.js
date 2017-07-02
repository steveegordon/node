'use strict';
// Bring in http module
var http = require('http');
// Bring in filsync module
var fs = require('fs');

// create a server, tell it how to handle requests and responses
http.createServer(function(req, res) {
// set only one response for all request types, specify response ok/200
// specify response is html
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.createReadStream(__dirname + '/index.html').pipe(res);

// set up the port server is listening on
}).listen(1337, '127.0.0.1');