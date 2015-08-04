$(function(){
    
    
    console.log("Loaded drill 1");
    
    var shapeBallClass = 'div[class*="ball"]';
    var sizeOfStage = $( '.wrapper .stage' ).css( "min-height" );
    var widthBall = $( '.wrapper .stage .shape' ).css( "width" );
    var heightBall = $( '.wrapper .stage .shape' ).css( "height" );
    
    console.log(sizeOfStage);
    console.log(widthBall);
    console.log(heightBall);
        
        $(shapeBallClass).click(function() {
            $(shapeBallClass).fadeOut("slow", function() {
              
                var p = $( ".stage" );
                var positionStage = p.position();
                console.log("Stage is at pos Top =" + positionStage.top + " left = " + positionStage.left);
                
                var ballPosition = $(shapeBallClass).position();
                console.log("Ball is at pos Top =" + ballPosition.top + " left = " + ballPosition.left);
                

                var randomXMove = Math.random()*(positionStage.left - ballPosition.left+1)+ballPosition.left;
                var randomYMove = (Math.random()*(positionStage.top - ballPosition.top+1))+ballPosition.top;
                
                console.log(randomXMove);
                
                $(shapeBallClass).animate({top: '400px'});
                $(shapeBallClass).animate({left: randomXMove});
                
                 $(shapeBallClass).fadeIn("slow", function() {
                    console.log("back in business");    
                });     
        
            });
     });
    
   
    
    //end of function
});

