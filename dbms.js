// Database
var mysql = required('mysql');

app.use ('/', function (req, res, next) {
    console.log('Request Url:' + req.url);

    var con = mysql.createConnection({
        host: "localhost",
        user: "test",
        password: "test",
        database: "addressbook"
    });
});

// create databse connection
// example of how query is being called
con.query('SELECT...',
    function(err,rows) {
        if(err) throw
        console.log(rows[0]).Firstname;
    });