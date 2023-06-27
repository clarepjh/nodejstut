// Streams Tutorial
// Chunk: a piece of data being sent through a stream (data is split in chunks and streamed)

// There are different types of streams, below are some examples and what it can do: 
// read - can read
// write - can write
// duplicate - can read and write 
// transport - lets you transport the data as it moves through the stream

// Abstract (Base) class: A type of constructor you never work directly with, but inherit from 
// Stream inherits from EventEmitter 

// brower makes request (readable) -> Webserver respones (Writable)

// Example of sending data one by one 
var fs = require('fs');
var readable = fs.createReadStream(__dirname + '/text.txt', { encoding: 'utf8', highWaterMark: 16 * 1024});

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.on('data', function(chunk) {
    console.log(chunk);
    writable.write(chunk); // running this code will write 'chunk' to '/greetcopy.txt 
});