var express = require('express');
var app = express();
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');

app.set("view engine", "ejs");
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

function Link(link, shortLink) {
  this.link = link;
  this.shortLink - shortLink;
}

var links = [
  new Link("TestLink", "Short Test Link")
];

app.get("/", function(req, res) {
  console.log("made it /");
  res.render('index');
});

app.get("/links", function(req, res) {
  console.log('I made it to /links');
  var theLinks = links;


  res.render('links/index', {
    allLinks: theLinks
  });
});

app.get("/links/new", function(req, res) {
  res.render('links/new');
});

app.post("/links", function(req, res) {
  console.log(req.body.link);
  links.push(new Link(req.body.link, "ShortFudgeLink"));
  res.redirect("/links");
});

app.get("/links/:index", function(req, res) {
  if (req.params.index < links.length) {
    res.render('links/show', {link: links[req.params.index]});
  } else {
    res.send('What up.. messed up here');
  }
});

// app.get("/articles/:index/edit", function(req, res) {
//   if (req.params.index < articles.length) {
//     res.render('articles/edit', {article: articles[req.params.index],
//                                  index: req.params.index});
//   } else {
//     res.send('Error, please try a correct page');
//   }
// });

// app.post("/articles/:index", function(req, res) {
//   // res.send(req.body);
//   articles.splice(req.params.index, 1, new Article(req.body.title, req.body.body));
//   res.redirect("/articles");
// });

// app.get("/about", function(req, res) {
//   res.render("site/about");
// });

// app.get("/contact", function(req, res) {
//   res.render("site/contact");
// });

// app.delete("/articles/:index", function(req, res) {
//   articles.splice(req.params.index, 1);
//   res.send({msg: "Success!"});
// });


app.listen(3000);

