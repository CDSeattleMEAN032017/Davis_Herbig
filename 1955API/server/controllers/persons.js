var mongoose = require('mongoose');
var Person = mongoose.model('Person');

module.exports = {
    show: function(req,res){
        Person.find({}, function(err,persons){
            res.json(persons);
        })
    },

    create: function(req,res){
        console.log(req.params);
        console.log(req.params.name);
        console.log("It's Running")
        var dude = new Person({name: req.params.name});
        console.log(dude);
        dude.save(function(err) {
            if(err){
                console.log("Something is wrong");
            } else {
                res.redirect('/');
            }
        })
    },

    delete: function(req,res){
        Person.findOneAndRemove({name: req.params.name}, function(err,res){
            if(err){
                console.log("Nope");
            }
        });
        res.redirect('/');
    },

    // Clears the database
    nuke: function(req, res){
        Person.remove(function(err, p){
            if(err){
                throw err;
            } else {
                console.log('Number of Docs deleted: ' + p)
            }
        })
        console.log("Boom.")
        res.redirect('/')
    }
}