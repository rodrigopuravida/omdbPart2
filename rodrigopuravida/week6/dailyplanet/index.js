
var express = require('express');
var serveIndex = require('serve-index');
var app = express();
var bodyParser = require('body-parser');


require('express-helpers')(app);


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
// used for static files, like css
app.use(express.static(__dirname + '/public', {'index': ['about.ejs']}));
// app.use(serveIndex(__dirname + '/public'));


// my pokemon constructor
function Article(title, body) {
  this.title = title;
  this.body = body;
}

// my aerticle data structure
var articles = [
  {title:'Article title', body:'this is the first article body'},
  {title:'Article title2', body:'this is the second article body'}

];

// home page
app.get("/", function(req, res) {
  res.render('index.ejs');
});

// article index page
app.get("/articles", function(req, res) {
  res.render('articles/index.ejs', {myArticle: articles});
});

// show article page
app.get("/articles/:index", function(req, res) {
  res.render('articles/show.ejs', {article: articles[req.params.index]});
});


// article create
app.post("/articles", function(req, res) {
  var newArticle = new Article(req.body.title, req.body.body);
  articles.push(newArticle);
  res.redirect('/articles');
});

app.delete("/articles/:index", function(req, res){
  var index = req.params.index;
  if (index < articles.length) {
    articles.splice(req.params.index, 1);
    res.send({msg: "OK"});
  } else {
    res.send({msg: "ERROR"});
  }
});


// article new (displays form)
app.get("/articles/new", function(req, res) {
  res.render('article/new.ejs');
});



app.get("/about", function(req, res){
  res.render('main/about.ejs')
});
app.get("/contacts", function(req, res){
  res.render('main/contacts.ejs')
});




















// listen to this port when serving the app
app.listen(3000);