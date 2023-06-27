// Inheritance tutorial
// One object gets access to the propoerties and methods of another object

// Javascript may differ from other programming languages with regards to inhertiance due to the implementation of prototypal inheritance 
// E.g. if an object is directly connected to a prototype{} which has var2 connected to it, the object will still have access to the variable even thought it is not directly connected.
// This is also known as a prototype chain. The object will have it's method / properties. 

// Another object potinting to the same prototype could also share the prototype with the another object; sharing the property or method. 
// Hence, every object that inherits the object will have the access.

// Class == function constructors -- a normal function that is used to construct objects


'use strict'; // Adding this will let Javascript engine be pickier about what can/cannot be done
// e.g. i cannot initialise y = 3, it has to be declared properly -- var y = 3 
// line added for Synactic Sugar demo

class Person { 
    constructor(firstname, lastname) {  // line added for Synactic Sugar demo 
    // anything you've added to the object inside constructor works like a function constructor 
    this.firstname = firstname;
    this.lastname = lastname;
    }


/*function Person(firstname, lastname) { // this is a social constructor 
        this.firstname = firstname;
        this.lastname = lastname;
}; **** Commented out for Synatic Sugar demo */ 

    greet() { //any other methods that is added to the class is automatically put onto the prototype chain
        console.log('Hello, ' + this.firstname + ' ' + this.lastname);
    }
}

// prototype here is a not a prototype of 'Person' but the prototype of any objects created from 'Person'
/*Person.prototype.greet = function() { // by adding .prototype. we're adding methods and properties to be available to all objects
    console.log('Hello,' + this.firstname + ' ' + this.lastname);
};
**** Commented out for Synatic Sugar demo */ 

var john = new Person('John', 'Doe');
// When using 'new', it makes the 'this.' in the function an empty object. Hence, properties can be added into the object.
console.log(john.firstname);
john.greet();

var jane = new Person('Jane','Doe'); 
jane.greet();

