// Require Modules Tutorial Part 1 (+ greetE1.js file needed)
// Modules are a section of codes that are used independently, reusable and is protected. 

// Required can be used when you want to call a module (modules can be a section of code that works independently without affecting other components in the code. 
// It is very important to add './xx' as a oath of root folder! 
// However, you'll not be able to call the function inside the modules seperately.  
// In order make the modules available, you have to declare 'module.exports = <module>' from within the module .js file before executing it in the caller file.  
var greet = require('./greetE1.js');  // When calling out exported modules, a variable must be initialised to hold module's output when called. 
// File extension .js is optional; function assumes it is a .js file. 

// For future reference if we want to read from a file from a folder path instead :)
/*const fs = require('fs');
const folderPath = '/home/jim/Desktop/';

fs.readdir(folderPath, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});
********* reference ends here *********/
greet();

// ++ Require is a functon that you pass a path to 
// module.exports is what the require function returns
// Possible as our code is actually wrapped in a function that is given these things as function parameters

