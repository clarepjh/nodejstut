// Pipes Tutorial (+++ Requires text.txt + /greetcopy.txt file)
// Defined as Connecting two streams by writing to one stream what is being read from another 
// Pipes are available on a readable stream 

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
var zlib = require('zlib'); // zipped file

var readable = fs.createReadStream(__dirname + '/text.txt');

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

var gzip = zlib.createGzip(); // readable & writable. Whenever a chunk is sent to this file, it will be compressed. (Transforming the data)

readable.pipe(writable); // by using .pipe, it send the chunk from the readable to the writable using the event listener. 'writeable' here is the destination. 
readable.pipe(gzip).pipe(compressed) // Method chaining: a method returns an object so we can keep calling more methods

// Steps conveying: 
//  Read from greet.txt 
//  Pipe Push chunk to gzip 
//  Pipe push gzip to compressed 

console.log(compressed)
