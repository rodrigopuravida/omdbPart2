var express = require('express');
var app = express();
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var Hashids = require("hashids");
var db = require("./models");

app.set("view engine", "ejs");
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

function Link(link, shortLink) {
  this.link = link;
  this.shortLink - shortLink;
}

function UpdateWithHash() {

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
  console.log(link[0]["dataValues"]["url"]);
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

  //find and show the encode url
  db.link.find(index).then(function(link) {
    res.send(link.hash);
  //res.render('links/show', {link: link.hash});
});



  if (req.params.index < links.length) {
    res.render('links/show', {link: links[req.params.index]});
  } else {
    res.send('What up.. messed up here');
  }
});

app.get("/:hash", function(req, res) {

  console.console.log('Where is my hash');
  res.redirect('/links/url');

});

app.listen(3000);


// http://localhost:3000/link/www.cnn.com/lola897
// http://localhost:3000/link/get/1

