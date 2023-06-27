// Objects.create & Prototype Tutorial
// object.create is a clean way to create inheritance 
var person = {
    firstname: ' ',
    lastname: ' ',
    greet: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = Object.create(person); // object john is created using 'person' object

john.firstname = 'John'; // overwritting parameter in 'person' object
john.lastname = 'Doe';

var jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';

console.log(john.greet())
console.log(jane.greet())