// Immediately invoked function expressions (IIFE) tutorial 
// Scope == where in code you have access to particular variable / function

var firstname = 'Jane';
// ++ Even when inserting 'firstname = 'Jane' here, output will remain the same (John, Jane)

(function(lastname) {  // +++ We can add parameters and still invoke it immediately via the '()'
    var firstname = 'John'
    console.log(firstname);
    console.log(lastname);
    
}('Doe')); // By adding an additional (), it immediately invokes it. Making it an imediately invoked function. 

console.log(firstname);
// the output of this code will be 'John, Jane'; the function will be protected and will not affect the codes outside of the function 
// in order to tell the engine that this function is an expression, we have to wrap the function in a parenthesis '()' -- making it an expression not a function statement

