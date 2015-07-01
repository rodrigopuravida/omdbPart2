var data = require("./products.json")
var counter = 0;
// Write your solutions below


//console.log(data["items"]);

//Question 1 - 1.) The kind of results you're are dealing are shopping#products. 
//Go through the items and find all results that have kind of shopping#product. 
//How many are there? Where else is this count information stored in the search results?

data["items"].forEach(function(element){
	
	//console.log(element);
	if (element["kind"] == "shopping#product") {
	counter++;	
	console.log("Element Prodcut");
	console.log(element["product"]);
}

});
console.log("There are this number of shopping#product " + counter);



//2.) Find all items with a backorder availability in inventories
console.log("Checking availability");
data["items"].forEach(function(element){
	
	var dictProduct = element["product"];
	//console.log("Product Inventories");
	//console.log(dictProduct["inventories"]);

	dictProduct["inventories"].forEach(function(element2){
		
		if (element2["availability"] == "backorder") {
			console.log("This item is in backorder");
			console.log(element["id"]);
		}
	});

	});	



//3.) Find all items with more than one image link.

console.log("Checking Image quantity");
data["items"].forEach(function(element){
	
	var dictProduct = element["product"];
	//console.log("Product Inventories");
	//console.log(dictProduct["inventories"]);

	if ((dictProduct["images"].length) > 1) {
		console.log("This items has more than one image link");
		console.log(element["id"]);
	}

	});	


// 4.) Find all canon products in the items (careful with case sensitivity).
console.log("Checking for Canon Products");
data["items"].forEach(function(element){
	
	var dictProduct = element["product"];
	//console.log("Product Inventories");
	//console.log(dictProduct["inventories"]);

	if (dictProduct["brand"] == "Canon") {
		console.log("This is a Canon Product");
		console.log(element["id"]);
	}

	});	


// 5.) Find all items that have product author name of "eBay" and are brand "Canon".

console.log("Checking for Canon Products & author name = eBay");
data["items"].forEach(function(element){
	
	var dictProduct = element["product"];
	var dictAuthor = dictProduct["author"];

	//console.log("Product Inventories");
	//console.log(dictProduct["inventories"]);

	if (dictProduct["brand"] == "Canon") {

		if (dictAuthor["name"].indexOf("eBay") > -1) {
		console.log("This is a Canon Product & Author is eBay");
		console.log(element["id"]);
		}
	}

	});	



//Print all the products with their brand, price, and a image link
console.log("Print all the products with their brand, price, and a image link");
data["items"].forEach(function(element){
	
	var dictProduct = element["product"];
	//console.log("Product Inventories");
	//console.log(dictProduct["inventories"]);

	

	console.log("Product Brand");
	console.log(dictProduct["brand"]);

	dictProduct["inventories"].forEach(function(element2){
		
	console.log("Price is");
	console.log(element2["price"]);
	});	

	dictProduct["images"].forEach(function(element2){
		
	console.log("Image Link is");
	console.log(element2["link"]);
	});	

	});	












