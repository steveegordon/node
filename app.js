var greet = require('./greet');
var eventConfig = require('./config').events;
//  Actual node emitters
var Emitter = require('events');
// References same cached function
// In order to access different variables use constructor in app.js
var greet2 = require('./greet');
var math = require('./math');

greet();
math.add(2, 5);
math.subtract(10, 5);

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function() {
  console.log('Somewhere, someone said hello.');
});

emtr.on(eventConfig.GREET, function() {
  console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit(eventConfig.GREET);