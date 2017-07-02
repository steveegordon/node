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
  // index.html as html, specify utf for modifying purposes
  var html = fs.readFileSync(__dirname + '/index.html', 'utf8' );
  // create a variable we are going to replace
  var message = 'Hello world...';
  // replace instances of {Message} in html with our custom message
  html = html.replace( '{Message}', message);
  // response sends our modified html file
  res.end(html);

// set up the port server is listening on
}).listen(1337, '127.0.0.1');