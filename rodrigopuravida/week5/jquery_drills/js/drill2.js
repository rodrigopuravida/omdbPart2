$(function(){


    console.log('The dom is ready! (drill 2)');
    var shape = 'div[class*="shape"]';
    var sizeOfStage = $( '.wrapper .stage' ).css( "min-height" );
    
    var widthShape = $( '.wrapper .stage .shape' ).css( "width" );
    console.log(widthShape);
    var heightShape = $( '.wrapper .stage .shape' ).css( "height" );
    console.log(heightShape);
    
    var shapePosition = $(shape).position();
    
    var p = $( ".stage" );
    var positionStage = p.position();
    console.log("Stage is at pos Top =" + positionStage.top + " left = " + positionStage.left);
    
    var stageHeight = $(p).height();

    // Use width(), innerWidth() or outerWidth() as needed.
    var stageWidth = $(p).width();
    
    console.log(stageHeight);
    console.log(stageWidth);
    
    //LETS JUST SAY THIS IS NOT VERY 'DRY' - NEED TO PULL OUT INTO TRACKING FUNCTION OF SORTS
    
    $(document).keydown(function(event) {
    switch(event.which) {
        case 37: // left
//            console.log('The user pressed key: ',event.which);
            $(shape).animate({"left" : "-=10px"});
            var y= $(shape).offset().top;
            var x = $(shape).offset().left;
            console.log("Ball is at pos Top =" + y + " left = " + x);
            
            if (x <= positionStage.left) {
                $(shape).stop();
            }
            
        break;

        case 38: // up
//            console.log('The user pressed key: ',event.which);
            $(shape).animate({"top" : "-=10px"});
            var y= $(shape).offset().top;
            var x = $(shape).offset().left;
            console.log("Ball is at pos Top =" + y + " left = " + x);
            
            if (y <= positionStage.top) {
                $(shape).stop();
            }
        break;
            
            

        case 39: // right
//            console.log('The user pressed key: ',event.which);
            $(shape).animate({"left" : "+=10px"});
            var y= $(shape).offset().top;
            var x = $(shape).offset().left;
            console.log("Ball is at pos Top =" + y + " left = " + x);
            
            console.log(x + 100);
            console.log(stageWidth);
            
            //WHY THIS ONLY WORKS WITH SETTING THE HEIGHT AS A NUMBER
            if ((x + 100 ) >= (stageWidth + positionStage.left )) {
                $(shape).stop();
            }
            
        break;

        case 40: // down
//            console.log('The user pressed key: ',event.which);
            $(shape).animate({"top" : "+=10px"});
            var y= $(shape).offset().top;
            var x = $(shape).offset().left;
            console.log("Ball is at pos Top =" + y + " left = " + x);
            console.log(y+ heightShape);
            console.log(stageHeight + positionStage.top);
            
            //WHY THIS ONLY WORKS WITH SETTING THE HEIGHT AS A NUMBER
            if ((y + 100) >= (stageHeight + positionStage.top)) {
                console.log("Stop the darn thing");
                $(shape).stop();
            }
            
        break;
            
            case 83: // S press
            console.log('The user pressed key: ',event.which);
            $(shape).effect('shake', 1000 );
            
        break;

        default: return; // exit this handler for other keys
    }
    event.preventDefault(); // prevent the default action (scroll / move caret)
});

});

