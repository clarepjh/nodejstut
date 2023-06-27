// Require Modules Tutorial Part 2 (+ greet FOLDER needed)

var greet = require('./greet'); // As there is no greet.js file, it will pick from the greet folder instead 
// it will read the index.js file first as when there isn't a configuration set that specifies which file to look for first, 
// then it will default to using index.js if there is a file of that name in the folder it's searching. 

// Calling out the object will result in stepping back into the english/spanish file to obtain the output
greet.english();
greet.spanish();


// final output == "Hello", "Hola" 