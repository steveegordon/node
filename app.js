var greet = require('./greet');
// References same cached function
// In order to access different variables use constructor in app.js
var greet2 = require('./greet');
var math = require('./math');

greet();
math.add(2, 5);
math.subtract(10, 5);