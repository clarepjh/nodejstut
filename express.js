// Express Tutorial

var express = require('express');
var app = express();

app.use('/assts', express.static(__dirname + '/public'));

var port = process.env.PORT || 3000; // setting an environment variable
    app.get('/',function(req, res) {  // can have samme url with both .get and .post 
    res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet/></head><body><h1>Hello world! Hehe</h1></body></html>');
});

app.get('/api',function(req, res) {  // can have samme url with both .get and .post 
    res.json({ firstname: 'John', lastname: 'Doe'}); // JSON
});

app.listen(port); 


