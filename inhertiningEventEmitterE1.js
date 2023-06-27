// Inheriting from the event emitter Tutorial

var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    EventEmitter.call(this); // by adding this line, we use the object already created by EvenEmitter, not the prototype.
    // This happens because when a new object is created after inheriting, it only inherits the prototype.  
    // by using .call, we are overwriting what 'this' is and passing the new object that has already been created
    // this is AKA Super Constructor. This is important if we want to add new properties/methods but still withholding the inherited object create
    this.greeting = 'hello, world!';

}

util.inherits(Greetr, EventEmitter); // '.inherits give access to the new objects create via Greetr to EventEmitter properties and methods

Greetr.prototype.greet = function(data) { // we can also pass data accordingly :)
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data);
}

var greeter1 = new Greetr();
greeter1.on('greet',function(data) {
    console.log('Someone greeted!: ' + data);
});

greeter1.greet("Clare");