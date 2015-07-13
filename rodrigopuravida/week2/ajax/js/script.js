$(function(){

  $( "#accordion" ).accordion();

  var searchText = $('#search-text');
  var weatherDisplay = $('#show-weather');

  $('#search-form').on('submit',function(e){
    e.preventDefault();
    console.log('form submitted');
    weatherDisplay.html('Loading...');

    var url = 'http://api.openweathermap.org/data/2.5/forecast/daily';
    var data = {
      q:searchText.val(),
      units:'imperial'
    };
    $.getJSON(url,data,function(weatherData){
      console.log(weatherData);
      if(weatherData.list){
        weatherDisplay.html('');
        weatherData.list.forEach(function(item){
          var myWeather = $('<div>');
          myWeather.addClass('col-sm-1');

          var myImg = 'http://openweathermap.org/img/w/'+item.weather[0].icon+'.png';
          var imgTag = $('<img>');
          imgTag.attr('src',myImg);
          myWeather.append(imgTag);

          myWeather.append('<h4 class="high">' + Math.round(item.temp.max) + '&deg;</h4>');
          myWeather.append('<h4 class="low">' + Math.round(item.temp.min) + '&deg;</h4>');
          var myDate = new Date(item.dt * 1000);
          myWeather.append('<h4 class="date">' + myDate.toDateString() + '</h4>');
          myWeather.appendTo(weatherDisplay);
        });
      }else{
        weatherDisplay.html('<div class="alert alert-danger">Error! could not find weather for that location.</div>');
      }
    });
  }); //end form submit listener

}); //end document ready