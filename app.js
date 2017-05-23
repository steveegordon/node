'use strict';

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
class Greetr extends Emitter {
  constructor() {
    super();
    this.greeting = 'Hello world!';
  }
  greet(data) {
    console.log(` ${ this.greeting } : ${ data }`);
    this.emit('greet', data);
  }
}

// function Greetr() {
//   // this .call properly binds variables and methods
//   Emitter.call(this);
//   this.greeting = 'Hello world!';
// }


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

var obj = {
  name: 'player1',
  greet: function(age) {
    console.log(`Hello ${ this.name }, your are ${ age } years old.`);
  }
};

// apply and call allow you to use 'borrow' code
// with different params
obj.greet(12);
obj.greet.call({name: 'player2'}, 15);
obj.greet.apply({name: 'player3'}, [27]);

// ES6 class similar to Ruby
class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  bark() {
    console.log(`Woof, Woof, my name is ${ this.name }`);
  }
}

var jack = new Dog('Jack Gordon', 2);
jack.bark();
