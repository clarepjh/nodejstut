// Modules & ES6
// The newer version of javascript -- ECMAScript 2015 
// Added built in modules 
// However, since certaim webbrowser does not have updataated web browsers, this is not often used

// Example of how ES6 is used.
// greet.js
export function greet () {
    console.log('Hello');
}

// app.js
import * as greetr from 'greet'; // * can be more specific if required. Pulling out specific modules & renaming them via the as statement 
greetr.greet();


// Synactic Sugar -- Feature that only changes how you type something but nothing changes under the hood
// Demo will be done in 'inhertiance.js' file 

