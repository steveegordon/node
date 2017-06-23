'use strict';
// fs is used for file access
var fs = require('fs');
// create a readable stream that reads from initial.txt in 16kb chunks encoded in utf8
var readable = fs.createReadStream(__dirname + '/initial.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });
// create a writable stream that writes to copy.txt
var writable = fs.createWriteStream(__dirname + '/copy.txt');
// stream event sends 16kb chunks
readable.on('data', function(chunk) {
  console.log(chunk.length);
  // write 16kb chunks as they come using the writable string
  writable.write(chunk);
});