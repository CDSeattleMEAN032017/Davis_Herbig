// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
var mongoose = require('mongoose');
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
// our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/cat_basket');
mongoose.Promise = global.Promise;
var CatSchema = new mongoose.Schema({
 name: String,
 age: Number,
 color: String
})
mongoose.model('Cat', CatSchema); // We are setting this Schema in our Models as 'Cat'
var Cat = mongoose.model('Cat') // We are retrieving this Schema from our Models, named 'Cat'
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');


// Routes

// Route Checklist:
// GET '/' Displays all of the mongooses. -- CHECK 
// GET '/mongooses/:id' Displays information about one mongoose. -- Check
// GET '/mongooses/new' Displays a form for making a new mongoose. POST '/mongooses' Should be the action attribute for the form. --CHECK
// GET '/mongooses/edit/:id' Should show a form to edit an existing mongoose. POST '/mongooses/:id' Should be the action attribute for the form. -- Make HTML
// POST '/mongooses/destroy/:id' Should delete the mongoose from the database by ID.







// Root Request
app.get('/', function(req, res) {
    // This is where we will retrieve the Cats from the database and include them in the view page we will be rendering.
    Cat.find({}, function(err, result){
      if(err) {
        console.log('something went wrong');
      } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully found Cats!');
        res.render('index', {Cats: result});
      }
    })
})

// Opens a cat's info page
app.get('/cats/:id', function(req, res) {
    console.log(" Test");
  Cat.find({ _id: req.params.id }, function(err, response) {
    if (err) { console.log(err); }
    res.render('catPage', { Cat: response[0] });
  });
  // res.render ('catPage', {Cat: findCatId(req.params.id)})
})

// Opens an edit cat page 
app.get('/cats/edit/:id', function(req, res){
  Cat.findOne({ _id: req.params.id }, function(err, response) {
    if (err) { console.log(err); }
    res.render('catEditPage', { Cat: response });
  });
})




// Update
app.post('/:id', function(req, res){
  Cat.update({ _id: req.params.id }, req.body, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/');
  });
});

// Delete
app.post('/:id/delete', function(req, res){
  Cat.remove({ _id: req.params.id }, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/');
  });
});


// Takes a form, makes a new cat, and redirects you home.
app.post('/', function(req, res) {
  console.log("POST DATA", req.body);
    Cat.create(req.body, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/')
  });
})

// New
app.get('/new', function(req, res){
  res.render('new');
});


// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
