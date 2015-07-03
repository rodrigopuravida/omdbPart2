var reddit = require("./data.json");

var dictChildren = reddit["data"];

dictChildren["children"].forEach(function(element){
	//console.log(element["data"]);

	var dictData = element["data"];
	console.log(dictData['title']);

});

//2 exercise

var permaLinksArray = dictChildren["children"].map(function(element){
	//console.log(element["data"]);

	var dictData = element["data"];
	//console.log(dictData['permalink']);
	//permaLinksArray.push(dictData['permalink']);

	return 'http://reddit.com' + dictData['permalink'];

});

console.log(permaLinksArray);


//3 exercise


var postIsEmpty = function(post) {
		
	var dictData = post["data"];
	return dictData['selftext'].length !== 0;
	
}

var postsContainTexts = dictChildren["children"].filter(postIsEmpty);
console.log(postsContainTexts);



//4th exercise


var countAllScores = function(a, b) {
	return a + b;
}



//ceeating an array of all the scores first 
var scores = dictChildren["children"].map(function(element){
	//console.log(element["data"]);

	var dictData = element["data"];
	//console.log(dictData['permalink']);
	//permaLinksArray.push(dictData['permalink']);

	return dictData['score'];

});

console.log(scores);

var sumScores = scores.reduce(countAllScores, 0);
console.log(sumScores);



//console.log(reddit["data"]);