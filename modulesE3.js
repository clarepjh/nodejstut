// Require Modules Tutorial Part 3 (+ greetE2.js, greetE3.js, greetE4.js file needed)
// Required Modules (+ GreetE2 && GreetE3 needed)
// There are many ways of using require.modules
// These are the other two methods that can be used to export modules as required :) there is no one way to do it!
// Just remember, module.exports return's a object   
// Method 1
// Method 1 demostrated in 'modulesE1'

// Method 2 -- getting a particular property or method by reaching down into that module.exports object 
var greet2 = require('./greetE2').greet; // .greet is a method 
greet2(); // greet2 is the function 

// Method 3 -- using a function constructor 
var greet3 = require('./greetE3');
greet3.greet();

//Method 4
var greet4 = require('./greetE4').greet;
greet4();

// ++ FYI -- fundaments -- 

/*exports = function() {
    console.log(exports);
    console.log(module.exports);
}* end of example */

// For the following example, they have changed exports to a function.
// The expectation of the following should have resulted in the same output -- {} as both points to the same memory address
// However, output was [function], {} instead. 
// This is due to the fact that when we changed the value of exports to a function, it has became another object,
// hence pointing to a difference address.  
// We should never use '=' for exports as this wil result in a compilation error
// This is avoidable by mutating the object. ++ This will be demostrated in greetE5.js 

var greet5 = require('./greetE5');
greet5.greet(); // output == {greet: ƒ}, Hello 
//conclusion, module.exports  is just superior 