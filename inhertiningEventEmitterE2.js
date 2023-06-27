// Inheriting from the event emitter Tutorial 2 -- making use of classes 

'use strict';

var EventEmitter = require('events');

class Greetr extends EventEmitter {  // by using 'Extends', class Geetr is able to inherit from EventEmitter -- no need for util.inherits
    constructor() {
        super();
        this.greeting = 'hello, world!';
    }

    greet(data) {
        console.log(`${ this.greeting }: ${data}`); // making use of template literal 
        this.emit('greet', data);
    }
}


var greeter1 = new Greetr();
greeter1.on('greet',function(data) {
    console.log('Someone greeted!: ' + data);
});

greeter1.greet("Clare"); 

// Using class really tidies things up well :)

// we can also export classes:
/***** modules.exports = class Greetr extends EventEmitter { ..... } -- in greetr.js 
var Greetr = require('./greetr) -- in app.js
**** End of Example */
