$(function(){


var searchText = $('#search-text');
var dataDisplay = $('#show-data');
var dataViewImages = $('#show-images');
var dataViewIPort = $('#viewport');

var thumbnailsCollection = [];

var imageValid = function(item){
    return (item.indexOf("http")> -1)
  };

$('#search-form').on('submit',function(e){
    e.preventDefault();
 
  //reddit api
  //http://www.reddit.com/search.json?q=cats nsfw:no  

  var url = 'http://www.reddit.com/search.json';
    var data = {
      q:searchText.val()
    };

    $.getJSON(url,data,function(redditData){

      var objectData = redditData.data;
      //console.log(objectData.children); //this is the array to iterate over
      var counter = 0;

       if(objectData){

            objectData.children.forEach(function(item){
            var itemData = item.data;
            //console.log(itemData);
          
          //var imageValid = itemData.thumbnail.filter(imageValid)

          if ((itemData.thumbnail.indexOf("http")) !== -1) {
          thumbnailsCollection.push(imageValid);
          //console.log(itemData.thumbnail.indexOf("http"));
          }


          var myData = $('<div>');
          
          myData.append('<h4 class="title">' + itemData.title + '</h4>');
          myData.append('<img id="img' + counter + '"' + ' ' +  'src=' + '"' + itemData.thumbnail + '"' + '>');
          //console.log('<img id="img' + counter + '"' + ' ' +  'src=' + '"' + itemData.thumbnail + '"' + '>');
          myData.appendTo(dataDisplay);
          counter++;

            }
            
         )};
          //LOOPING thru images and seetig up view port
          //console.log(thumbnailsCollection);

          //var myThumbs = $('<div id="viewport">');
          // var myThumbs = $('');
          // var thumbs = '';

          // for (var i = 0; i < thumbnailsCollection.length; i++) {
          //   //console.log(thumbnailsCollection[i]);
          //   if (thumbnailsCollection[i] !== 'self')
          //   thumbs = thumbs + '<img src="' + thumbnailsCollection[i] + '">';

          // }
          // thumbs = thumbs + '</div>';
          // myThumbs.append(thumbs);
          // myThumbs.appendTo(dataViewIPort);
          //console.log(myThumbs);

     });

  

    });

$( "#img0" ).animate({
    opacity: 0.25,
    left: "+=50",
    height: "toggle"
  }, 5000, function() {
    console.log('Move you darn cat');
    // Animation complete.
  });

//basic image animation
  var doAnimation = function(){
    $('#img2').animate({
        left:'1000px',
        top:'700px'
    },2000).animate({
        left:'-1000px',
        top:'-1000px'
    },2000,doAnimation);
  }

  //doAnimation();




  });


