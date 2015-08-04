$(function(){

    console.log('The dom is ready! (drill 4)');
    
    var firstDivClass = 'div[class*="stage"]';
    
    //Hide the first div
//    $(firstDivClass).click(function(){
//        console.log('hiding first div');
//    $(firstDivClass).hide();
    
//    Hide the first list in the first div
    
    var x = $('.stage').find('.first')
    $(x).click(function(){
        console.log('hiding first list');
    $(x).hide();
    
        
        
});





});

