// .call & .apply borrowing methods Tutorial
var ob = {
    name: 'John Doe',
    greet: function() {
        console.log(`Hello ${ this.name }`);
    }
}

ob.greet();
ob.greet.call({ name: 'Jane Doe'}); // by add '.call', we can pass a variable to it. It will point to 'this.', overwritting it. 
// essentially borrowing the function but overwritting the data.

ob.greet.apply({ name: 'Jane Doe'}); // for apply, it works similarly to .call but instead, you can pass an array of parameters.
// e.g. [param, param2]