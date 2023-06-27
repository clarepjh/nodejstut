// Object Properties, First Class Functions & Arrays

// Object Properties 
var obj = {
    greet: 'Hello'
}

// 3 ways here to call the object
console.log(obj.greet); 
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);

// functions and arrays
var arr = [];
arr.push(function() { // functions in array
    console.log('Hello world 1');
    });
arr.push(function() {
    console.log('Hello world 2');
    });
arr.push(function() {
    console.log('Hello world 3');
    });

arr.forEach(function(item) {
    item(); // built in array loop -- this will invoke each function sitting in the array   
})