// Callback Tutorial 

function greet(callback) {
    console.log('Hello');
    var data = { 
        name: 'Clare'
    };
    callback(data);
}

greet(function(data) {
    console.log("The callback was invoked");
    console.log(data);
}); // passing a function to a function pattern -- it is a callback 
// the function you're passing, will invoke later. 

greet(function(data) {
    console.log("A different callback was invoked!");
    console.log(data.name);
});

