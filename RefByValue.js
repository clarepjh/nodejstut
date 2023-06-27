// By Reference and By Value Tutorial 
// Primitive value == a type of data that represents a single value; not an object.

// by value -- primtiive value A = B
// by reference -- Object B = A; poitns to the same spot in memory

// Example of By Value
function change(b) {
    b = 2; 
}
var a = 1;
change(a);
console.log(a) // this will print '1' as when 'b' was changed to '2' it changed a different spot in the memory. This is due to 'a' being a primitive value.  

// Example of By Reference 
function changeObj(d) {
    d.prop1 = function() {};
    d.porp2 = {};
}

var c = {};
c.prop1 = {};
changeObj(c);
console.log(c); // output will print '{prop1: ƒ, porp2: {…}}'; when 'changeObj(c)' is being called, the 'd' parameter points to the same memory location that 'C' points to. 
// whatever that was done to 'd', will also affect variable 'c'