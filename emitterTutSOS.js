// Node event emitter tutorial (++ Requires emitter.js, config.js)
// var Emitter = require('events'); // will work too. Internal node emitter. 
var Emitter = require('./emitter');
var eventConfig = require('./config').events;  // 

var emtr = new Emitter();

emtr.on(eventConfig, function() { // 'greet' is the property name on an object  --- can be replaced by config file that to avoid magic string
    console.log("Somewhere, someone said hello.");
});

emtr.on('greet', function() {  // 'greet' is a magic string: string that has some special meaning in our code to avoid this, 
// we can add a config file intialising the following string 


    console.log("A greeting occured");
});

console.log('Hello');
emtr.emit('greet');

