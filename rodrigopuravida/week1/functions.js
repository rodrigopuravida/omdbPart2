//FUNCTIONS LAB

function findOccurences(word){

	var counter = {};

	for (var i = 0; i < word.length; i++) {
		 
		 if (counter[word[i]]) {
		 	counter[word[i]] += 1;
		}

		else {
			counter[word[i]] = 1;
		}

}
	return counter;
}

var result = findOccurences('letter');
console.log(result);


//Second Problem
function sillySum(arr) {
	 var total = 0;

	for (var i = 0; i < arr.length; i++) {

		total = arr[i] * i + total;

	}

	return total;

}

 var input = [1,2,6];

var sillySumResult = sillySum(input);
console.log(sillySumResult);


//Third Problem
function isPrimeNum(num) {

	var isPrime = true;

	if (num % 2 === 0) {
		isPrime = false;
		return isPrime;
	}

	var counter = 0;
	for (var i = 3; i < num; i++) {
		if (num % i === 0) {
			counter++;
		}
	}

	if (counter > 0)
		isPrime = false;

	return isPrime;
}


var isPrimeResult = isPrimeNum(13);
console.log(isPrimeResult);


//Fourth Problem

function primes(max) {

	var allPrimes = [];

	for (var i = 3; i <= max; i++) {
		var primeResult = isPrimeNum(i);
		if (primeResult) {
			allPrimes.push(i);
		}
	}

	return allPrimes;
}

var allPrimes = primes(36);
console.log(allPrimes);


//Fifth problem

function numSquareMax(max) {

	var perfectArray = [];

	for (var i = 0; i <= max; i++) {

		if (i * i <= max) {
			perfectArray.push(i);
		}

	}

	return perfectArray;
}

var perfectArrayResult = numSquareMax(20);
console.log(perfectArrayResult);


//Sixth problem

function merge(arr1, arr2) {

	var sortedArr1 = arr1.sort();
	var sortedArr2 = arr2.sort();
	var mergedSortedArray = sortedArr1.concat(sortedArr2).sort();

	return mergedSortedArray;

}

var arra1Input = [3,6,4,8];
var arra2Input = [2,8,2,1];

var resultSortedArrays = merge(arra1Input, arra2Input);
console.log(resultSortedArrays);



//ForEach practices
var foods = ["pizza", "tacos", "ice cream"];


var chumping = function(item) {
	console.log("I like chumping " + item);
}


foods.forEach(function(element, index){
	console.log("I like " + element);
});

foods.forEach(chumping);


var foods = [
  {name: "Pizza", level: "very"},
  {name: "Tacos", level: "mostly"},
  {name: "Cottage Cheese", level: "not very"}
];

foods.forEach(function(element, index){
	console.log(element.name + " is " + element.level + " delicious");
});

var chumping2 = function(item) {
	console.log(item['name '] + " is " + item['level'] + " delicious part 2");
}

foods.forEach(chumping2);


//ITERATOR LAB



