// Buffer Tutorial

var buf = new Buffer.from('Hello', 'utf8'); // does not require 'require(.buffer) as nodeJS made it global due to it's importance 
//  utf8 == encoding; if no indicated it will still be utf8 by default
console.log(buf);
console.log(buf.toJSON());
console.log(buf.toString);
console.log(buf[2]);

buf.write('yo');
console.log(buf.toString)

// FYI new 'Buffer' has been Deprecated, may use Buffer.from / Buffer.alloc