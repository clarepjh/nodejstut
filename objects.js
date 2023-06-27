// Tutorial on Objects
// Objects are a collection of a name/value pairs 
// When a function (a type of special object) is attached to a object, it is also known as "Method"

var person = {
    firstname: 'John',
    lastname: 'Doe',
    greet: function() {
        console.log ('Hello, ' + this.firstname + ' ' + this.lastname);
    }
};

// Two ways to call objects 
person.greet();  // 1) calling the object (object.function); the function will include which declared variable is being called out via 'this.variable'
console.log(person['firstname']); // 2) using object['declare variable'] to explictly get the variable needed. For this instance, it is 'firstname'   