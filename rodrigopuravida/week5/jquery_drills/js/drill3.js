$(function(){


    console.log('The dom is ready! (drill 3)');
    
    var ballClass = 'div[class*="ball"]';
    var sizeOfStage = $( '.wrapper .stage' ).css( "min-height" );
    var widthBall = $( '.wrapper .stage .shape' ).css( "width" );
    var heightBall = $( '.wrapper .stage .shape' ).css( "height" );
    
    $(ballClass).hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "pink");
});
    

});

