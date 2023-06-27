// Routing Tutorial (+++ Require index.html file)

var http = require('http');
var fs = require('fs'); 

http.createServer(function(req, res) { // request, response  

    if (req.url === '/') {
        res.writeHead(200, {'Content-Type' : 'text/html'}) // to read html files (added for troubleshooting but it is not working yet. Output not printing)
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if (req.url === '/api') { // using === is good practise in Javascript
        res.writeHead(200, {'Content-Type' : 'application/json'}); 
        var obj = { 
            firstname: 'John',
            lastname: 'Doe'
        };
    } 

    else {
        res.writeHead(404);
        res.end();
    }
  
    res.end(JSON.stringify(obj));

}).listen(1337, '127.0.0.1');
