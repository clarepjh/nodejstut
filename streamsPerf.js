// Streams & Performance Tutorial 
// using streams can help with performance, try to use it more :)

// Example of using stream to increase performance
var http = require('http');
var fs = require('fs'); // needed to read the .html file 

http.createServer(function(req, res) { // request, response  
    res.writeHead(200, { 'Content-Type': 'text/html' }); // writing the the response 
    fs.createReadStream(__dirname + '/index.html').pipe(res); // every chunk read by file will be buffered and piped to the http response stream 
    
}).listen(1337, '127.0.0.1');