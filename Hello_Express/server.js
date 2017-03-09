var express = require("express");
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

// Sets the location Express looks for ejs views.
app.set('views', __dirname + '/views');
// Specifies ejs as the view engine.
app.set('view engine', 'ejs');

//Route Syntax:
// app.HTTP_VERB('URL', function (req, res){});  // HTTP_VERB is either 'get' or 'post' etc...

// Example GET route for '/'
app.get('/', function(request, response){
    response.send("<h1>Hello Express</h1>");
})

//Example GET route for a hard coded list of users
app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})

app.listen(8000, function(){
    console.log("Listening on port 8000");
})