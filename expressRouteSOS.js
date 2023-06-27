// Express Route Tutorial (+ Middlewear) (+++ Requires public folder > style.css file) (+++ Views folder > index.ejs & person.ejs)

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 3000; // setting an environment variable

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public')); // if we have static files, we can intialise it the following way 

app.use('/', function(req, res, next) {
    console.log('Request Url: ' + req.url);
    next();
})


app.get('/',function(req, res) {  // can have samme url with both .get and .post 
    res.render('index');
    //res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet/></head><body><h1>Hello world! Hehe</h1></body></html>'); // commented away for above example
    req.query.qstr });

app.get('/api',function(req, res) {  // can have samme url with both .get and .post 
    res.json({ firstname: 'John', lastname: 'Doe'}); // JSON
});

app.post('/person', urlencodedParser, function(req, res) {  // person with any ID will be routed to same page
    res.send('thank you~');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
    //res.render('person', { ID: req.params.id });
    //res.send('<html><head></head><body><h1>Hello world! Person: ' +
    //req.params.id + '</h1></body></html>');
});

app.post('/personjson', jsonParser, function(req, res) {  // person with any ID will be routed to same page
    res.send('thank you~');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.listen(port); 


