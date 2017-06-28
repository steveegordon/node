'use strict';
// fs is used for file access
var fs = require('fs');
// zlib offers the ability to compress files in node
var zlib = require('zlib');
// create a readable stream that reads from initial.txt in 16kb chunks encoded in utf8
var readable = fs.createReadStream(__dirname + '/initial.txt');
// create a writable stream that writes to copy.txt
var writable = fs.createWriteStream(__dirname + '/copy.txt');
// write stream that writes to gzipped file
var compressed = fs.createWriteStream(__dirname + '/initial.txt.gz');

// creates a transform stream that is readable and writeable and compresses all chunks. can be piped.
var gzip = zlib.createGzip();


// Shorthand for piping. .pipe(writable) returns writeable destination so you can
// chain pipes together, ala readable.pipe(readwritestream).pipe(writablestream)
readable.pipe(writable);

// readable stream pipes data to gzip which compresses chunks, compressed chunks
// are then further piped and compressed data is placed in gzipped file.
readable.pipe(gzip).pipe(compressed);