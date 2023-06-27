// Buffer tutorial -- this can only be done with ES6

var buffer = new ArrayBuffer(8); // thowing 8 bytes of bites -- 64 bits
var view = new Int32Array(buffer)  // it is an array, hence we deal with it with Int32Array; 
// buffer will only hold 2 bytes. 
view[0] = 5;
view[1] = 15;
view[2] = 30; // even if indicated, it will not show up as there is no space in buffer. 
console.log(view);