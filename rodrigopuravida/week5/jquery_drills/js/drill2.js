$(function(){


    console.log('The dom is ready! (drill 2)');

    $(document).on('keyup',function(event){
        //output to console which key was pressed
        console.log('The user pressed key: ',event.which);
    });

});

