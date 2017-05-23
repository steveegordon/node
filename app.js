// var greet = require('./greet');
var eventConfig = require('./config').events;
//  Actual node emitters
var Emitter = require('events');
// util.js adds extra functionality
var util = require('util');
// References same cached function
// In order to access different variables use constructor in app.js
// var greet2 = require('./greet');
// var math = require('./math');

// greet();
// math.add(2, 5);
// math.subtract(10, 5);

// var emtr = new Emitter();

// emtr.on(eventConfig.GREET, function() {
//   console.log('Somewhere, someone said hello.');
// });

// emtr.on(eventConfig.GREET, function() {
//   console.log('A greeting occurred!');
// });

// console.log('Hello!');
// emtr.emit(eventConfig.GREET);
// 

// USE util to create events inheritance for Greetr

function Greetr() {
  this.greeting = 'Hello world!';
}

util.inherits(Greetr, Emitter);

Greetr.prototype.greet = function(data) {
  console.log(this.greeting + ': ' + data);
  this.emit('greet', data);
};

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
  console.log('Someone greeted!: ' + data);
});
// Passing data down the chain through the emitter
greeter1.greet("Umberto");

var name = "Steve";
// Template literal string concat ES6 in node
// avoid of use babeljs.io for front end for compatability
var hello = `Hello, ${ name }`;
console.log(hello);
