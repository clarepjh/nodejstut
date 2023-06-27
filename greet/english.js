var greetings = require('./greetings.json'); 
// The JSON file is then converted into a javascript object , returning the object created from the file 
// In this case, the output at this point will have variables en == "Hello", es == "Hola"

var greet = function() {
    console.log(greetings.en);
};

module.exports = greet; // despite of the variable name, it will return "Hello" in console log to index.js 