var numbers = require('./numbers.json');

var add = function(num1, num2) {
  console.log(num1 + num2 + numbers.number1);
};

module.exports = add;