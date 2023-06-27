// this file will be read first. It will then run require('./english)/(./spanish) in it's respective file.
var english = require('./english') // in same folder as index
var spanish = require('./spanish') // in same folder as index 

// At this point, the variable english == "Hello" && spanish == "Hola"
// the values are then returned (via module.exports) as english (object) == "hello" && spanish (object) == "Hola" 
// The method is then passed back to app.js
module.exports = {
    english: english, // english (name of object): english (name of variable) -- Method attached 
    spanish: spanish 
};
