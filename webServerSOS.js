// Webserver Tutorial ( ++ Requires index.html)

var http = require('http');
var fs = require('fs'); // needed to read the .html file 

http.createServer(function(req, res) { // request, response  
    res.writeHead(200, {'Content-Type' : 'text/html'}) // to read html files
    var html = fs.readFileSync(__dirname + '/index.html');
    var message = 'Hello world...';
    html = html.toString().replace('{Message}', message.toString); // need to indicate which value you're replacing the template with ++ this is currently not working atm. TypeError: html.replace is not a function
    res.end(html); // end response 

    
}).listen(1337, '127.0.0.1'); // have to indicate so they know which port & whch ip (routing)
// program will not end as it is waiting for a request 
// go to webbrowser localhost:1337 and you'll see the output
// if there are any edits on the .html file, you have to restart the server in order to reflect the changes
