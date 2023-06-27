// Files and Fs tutorial (+++ Requires greet.txt)

var fs = require('fs');

// Synchronous Method (Callback)
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8'); // Requires parameters: path location, file name, encoding (optional, it will be utf8 by default)
// __dirname == gives path of the directory that the code is living in  
// when file is being read it loads the content of the file into the buffer that uses encoding -- resulting in a string output
// sync == synchronous -- the engine will wait till the buffer is filled and it has the string back before moving on to the next code 
// this is useful when you have certain configurations that needs to be read right at the start of the code 

console.log(greet);

// However, this is undesirable due to the potential long waiting/loading time it will have on bigger data. Hence, the usage of callbacks is used. 

// Asynchronous Method (Callback)
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err,data) { 
    // while the code is being read, the eventloop will consistently be checking whether the text has been read and if the 'string' has been finalised. 
    // 'function(err,data)' is known as Error-first callback: callbacks take an error object as their first parameter 
    // After the code has the string,  the callback will be invoked next in queue.  If there is any error, it will be passed as the first parameter -- else it will be null. 
    console.log(data);
});

console.log('Done!'); // to test sequence of data output.
// Final output == Hello world. Done! Hello world. 

// Things to take note: 
// Buffer sits on the heap in V8 (Memory space that the javascript is using)
// if file is large and many people are using, we will end up with many buffers that are very large in size 
// we may end up having many problems in application using alot of memory. 


