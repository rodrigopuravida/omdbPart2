$(function(){console.log("The dom is ready! (drill 4)");var i='div[class*="stage"]',s=$(".stage").find(".first");$(s).click(function(){console.log("hiding first list"),$(s).hide()})});