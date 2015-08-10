var express = require('express');
var app = express();
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var Hashids = require("hashids");
var db = require("./models");

// express helpers, used for link_to
require('express-helpers')(app);

app.set("view engine", "ejs");
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

function Link(link, shortLink) {
  this.link = link;
  this.shortLink = shortLink;
}


var links = [];

app.get("/", function(req, res) {
  console.log("made it /");

  res.render('index');
});



app.get("/links", function(req, res) {
  console.log('I made it to /links');
  var theLinks = links;

  //get all entries from BD
  db.link.findAll().then(function(link) {
    console.log(link);
  // console.log(link[0]["dataValues"]["url"]);
  // users will be an array of all User instances
  res.render('links/index', {
      allLinks: link
    });

  });

});


app.get("/links/new", function(req, res) {
  res.render('links/new');
});



app.post("/links", function(req, res) {

   var inputToEncode = (req.body.link).toString();
   console.log(inputToEncode);

   db.link.create({url: req.body.link,
    hash: ""}).then(function(link) {
      console.log("Yuo created a link named " + link.url + " " +  link.id);

      //now creating hash
      //creating hashid
      hashids = new Hashids("master encoding");
      var encodedUrl = hashids.encode(parseInt(link.id));

      console.log("this is my encodedUrl " + encodedUrl);

      //now need to update table - praying as of now

      db.link.find({ where: { id: link.id.toString() } }).then(function(link){
      link.hash = encodedUrl
      link.save().then(function() {
        console.log('I hope this hash hashi worked');
      });
  });
});

  // links.push(new Link(req.body.link, "ShortFudgeLink"));
  res.redirect("/links");
});



app.get("/links/:index", function(req, res) {

   db.link.find({ where: { id: req.params.index.toString() } }).then(function(link) {
  // user will be an instance of User and stores the content of the table entry with id 1. if such an entry is not defined you will get null
  res.render('links/show', {encodedLink: link});
  });

});



app.get("/:hash", function(req, res) {

  console.log('Made to launch the rocket');
  console.log(req.body);

  db.link.find({ where: { hash: req.params.hash.toString() } }).then(function(link) {
    console.log(link.hash);
  console.log('Launching');

  // user will be an instance of User and stores the content of the table entry with id 1. if such an entry is not defined you will get null
  // res.render(link.url);
  });

});

app.listen(3000);

//test
// http://localhost:3000/link/www.cnn.com/lola897
// http://localhost:3000/link/get/1

