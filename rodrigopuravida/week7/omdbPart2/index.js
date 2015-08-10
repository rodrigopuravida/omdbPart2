var express = require('express');
var app = express();
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var moviesController = require("./controller/movies");

app.set("view engine", "ejs");
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({extended: true}));
app.use("/movies", moviesController);

// used for static files, like css
app.use(express.static(__dirname + '/public'));
app.use(ejsLayouts);


app.get("/", function(req, res){
  res.render("index");
});




app.listen(3000);




