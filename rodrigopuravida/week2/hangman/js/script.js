// API key b68d7ebcb9910f3b8700c0b331f02428eb2fc4e009e697928
// http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&minCorpusCount=10000&maxCorpusCount=-1&minDictionaryCount=20&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=b68d7ebcb9910f3b8700c0b331f02428eb2fc4e009e697928
// https://groups.google.com/forum/#!msg/wordnik-api/4nSX3r38i0E/x-FPGwns5joJ
$(function(){

	var generatedWord = $('#generate-word-text');
	var worldLength = $('#word-length-text');
	var guessLetter = $('#guess-letter-text');
	var getTip = $('#get-tip-text');
	var letterCount;
	var winCheckCounter = 0;
	var hanging = false;
	var hangingCounter = 0;
	var letterDisplay = $('#show-letters');
	var word;
	var arraySynomins = [];
	var tipCounter = 0;

	$('#getTip').prop('disabled', true);
	$('#checkLetter').prop('disabled', true);
	$('#generate-word-text').hide();
	//for testing purposes so that I can see the word
	//$('#generate-word-text').show();



	//returns the word that is generated - used as callback function
	function returnWord(json, wordLength){
    	console.log(json);
    	word = json["word"];
    	console.log(word);
    	//console.log(wordLength);

    	//tryign just to display the number of text boxes but just does not work - darn !!!!
    // 	for (var i = word.length; i < 15; i++) {
	   //  		 $('#letter' + i + '-text').hide();
	 		// }

	 		for (var i = 0; i < 15; i++) {
	    		 $('#letter' + i + '-text').css('background-color' , 'yellow');
	 		}

    	return word.toLowerCase();

    }

    //returns similar words
    function returnSynonims(jsonArray) {

    	console.log(jsonArray);

    	if (jsonArray["words"]){
    	arraySynomins = jsonArray["words"];
    	//console.log(arraySynomins);
    	getTip.val(arraySynomins[tipCounter]);
    	
    	if (tipCounter >= arraySynomins.length) {
    		tipCounter = 0;
    	}

    	//$("#droid").attr("src","droidL" + hangingCounter + ".png");
    	console.log($('#droid').attr('src'));

    	//splitting into array
    	var splitDroidImageSrc = $('#droid').attr('src').split('');
    	console.log(splitDroidImageSrc);

    	//getting the index for the imgage
    	var spliceDroidImagePos = splitDroidImageSrc.splice(6, 1);
    	console.log(spliceDroidImagePos);
    	var indexNumberImg = Number(spliceDroidImagePos);
    	indexNumberImg++;
    	console.log(indexNumberImg);

    	$("#droid").attr("src","droidL" + indexNumberImg + ".png");
    	if (indexNumberImg >= 8) {
    		$('#getTip').prop('disabled', true);
    		console.log('You have Lost');
    		for (var i = 0; i < 15; i++) {
	    		 $('#letter' + i + '-text').css('background-color' , 'red');
	 		}
	 		$('#generate-word-text').show();
    		return;
    	}
    }
  	
    }  
	

    //generates randomg world via calling API
  $('#generateWord-form').on('submit',function(e){
  	winCheckCounter = 0;
  	$('#generate-word-text').hide();

  	for (var i = 0; i < 15; i++) {
	    $('#letter' + i + '-text').css('background-color' , 'yellow');
	 }

  	//location.reload();
    e.preventDefault();
    $('#guess-letter-text').val('');
    $("#droid").attr("src","droidLBlank.png");
    var guessedLetter = guessLetter.val();
    getTip.val('');

    $('#checkLetter').prop('disabled', false);
    //console.log('form submitted');

	//reset
	for (var i = 0; i < 15; i++) {
	    //console.log('#letter' + i + '-text');

	    $('#letter' + i + '-text').val('');
	      
	 }

    var url = 'http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&minCorpusCount=10000&maxCorpusCount=-1&minDictionaryCount=20&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=b68d7ebcb9910f3b8700c0b331f02428eb2fc4e009e697928';
    
    $.getJSON(url,function(wordData){

     returnWord(wordData, wordData.word.length);
      
      wordToGuess = wordData.word;
      
      generatedWord.val(wordToGuess);
      worldLength.val('Letters in word: ' + wordToGuess.length);

      var letterCount = wordToGuess.length;
      
    });

	});	


//fucntion that validates the letter input by user
$('#guessWord-form').on('submit',function(e){
	hanging = true;
	
  	//location.reload(true);
    e.preventDefault();

    //console.log('Im here' + word);
    var guessedLetter = guessLetter.val();
    //console.log(guessedLetter);

    var wordArray = word.split("");
    //console.log(wordArray);

    //validation logic
    for (var i = 0; i< wordArray.length; i++) {

    	if (guessedLetter === wordArray[i]) {
    		winCheckCounter++;
    		$('#letter' + i + '-text').val(guessedLetter);
    		hanging = false;

    	}

    	//did we win?
    	console.log('counter = ' + winCheckCounter);
    	if (winCheckCounter === wordArray.length) {
    		for (var i = 0; i < 15; i++) {
	    		 $('#letter' + i + '-text').css('background-color' , 'green');
	 		}
	 		$('#checkLetter').prop('disabled', true);
	 		$('#getTip').prop('disabled', true);
    		console.log('YOU HAVE WON');
    	}
    }

    //validation of correct image  - you have lost condition
    if (hanging) {
    	if (hangingCounter >= 8) {
    		$("#droid").attr("src","droidL" + hangingCounter + ".png");
    		$('#checkLetter').prop('disabled', true);
    		$('#getTip').prop('disabled', true);
    		console.log('You have Lost');

    		for (var i = 0; i < 15; i++) {
	    		 $('#letter' + i + '-text').css('background-color' , 'red');
	 		}
	 		$('#generate-word-text').show();

    		return;
    	}

    	else if (hangingCounter < 8){
    	//console.log("droidL" + hangingCounter + ".png");
    	$("#droid").attr("src","droidL" + hangingCounter + ".png");
    	hangingCounter++;
    	$('#getTip').prop('disabled', false);
    	}	
    }
    var guessedLetter = guessLetter.val('');

});
	
	//function that generates a tip from an array
	$('#getTip-form').on('submit',function(e){

	//http://api.wordnik.com:80/v4/word.json/practice/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5
	e.preventDefault();
	console.log(word);
	var tipUrl = 'http://api.wordnik.com:80/v4/word.json/' + word + '/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=10&api_key=b68d7ebcb9910f3b8700c0b331f02428eb2fc4e009e697928';
	$.getJSON(tipUrl,function(tipData){

		var tipArray = [];
		tipArray = tipData[0];
		//console.log(tipData);
		//console.log(tipObject);
		returnSynonims(tipArray);
	});	

	});


}); //end document ready


