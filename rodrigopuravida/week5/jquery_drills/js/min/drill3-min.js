$(function(){console.log("The dom is ready! (drill 3)");var s='div[class*="ball"]',e=$(".wrapper .stage").css("min-height"),o=$(".wrapper .stage .shape").css("width"),a=$(".wrapper .stage .shape").css("height");$(s).hover(function(){$(this).css("background-color","yellow")},function(){$(this).css("background-color","pink")})});