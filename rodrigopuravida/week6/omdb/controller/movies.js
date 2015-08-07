var express = require('express');
var router = express.Router();
var request = require('request');

//Class not needed now
// function Movie(title, year, id){
//   this.title = title;
//   this.year = year;
//   this.id = id;
// }

router.get("/", function(req, res){
  res.render('movies/index.ejs');
})

router.get("/results", function(req, res){
  //res.render("results")
  var title = req.query.q;
  var url = "http://www.omdbapi.com/?s=" + title;


  request(url, function(error, response, data){
    var movieData = JSON.parse(data);

    console.log(movieData);
    var results = movieData.Search;

    if(results){
      res.render('movies/results', {
        listMovies: results
      });
    }

  })
  // res.render('movies/results.ejs')
})

router.get("/show/:id", function(req, res){
  var id = req.params.id

  var url = "http://www.omdbapi.com/?i=" + id + "&tomatoes=true"

  request(url, function(error, response, data){
    var movieData = JSON.parse(data);
    console.log(movieData);
    var results = movieData.Plot;
    var rating = parseInt(movieData.imdbRating);
    var image = movieData.Poster;
    // console.log(image);

    if(results){
      res.render('movies/show', {
        movieContents: movieData,
        rating: rating,
        image: image
      });

    }

    //res.send(thisResults)
  })

})

module.exports = router;