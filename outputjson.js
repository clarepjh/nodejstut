// JSON Outputting Tutorial 

var http = require('http');
var fs = require('fs'); 

http.createServer(function(req, res) { // request, response  
    res.writeHead(200, {'Content-Type' : 'application/json'}); // to read application/json files   
    var obj = { 
        firstname: 'John',
        lastname: 'Doe'
    };
    res.end(JSON.stringify(obj)); // converting JSON back to an object; seralizing on node side but deseralizing on server side
// Serializie transporting an object into a format that be can stored or transferred 

}).listen(1337, '127.0.0.1');

// a very simple api :)