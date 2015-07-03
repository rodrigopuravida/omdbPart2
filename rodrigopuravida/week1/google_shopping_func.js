
//load products.json
var data = require("./products.json");

//define getItemsCount function
//accepts full item data
//returns the length of the items array
var getItemsCount = function(itemData){
	return itemData.items.length;
};


//DEFINE FUNCTIONS HERE

var getItems = function(objectData) {
	return objectData["items"];
}

var getItemsByBrand = function(items, brand) {
	var arrayOfItemsyBrand = [];
	items.forEach(function(element){
	
	var dictProduct = element["product"];
	//console.log("Product Inventories");
	//console.log(dictProduct["inventories"]);

	if (dictProduct["brand"] === brand) {
		console.log(dictProduct["brand"]);
		//arrayOfItemsyBrand.push(element["id"]);
		arrayOfItemsyBrand.push(element);
	}

	});	

	return arrayOfItemsyBrand;
}

var getItemsByAuthor = function(items, author) {
	var arrayOfItemsyAuthor = [];
	items.forEach(function(element){
	
	var dictProduct = element["product"];
	var dictAuthor = dictProduct["author"];
	//console.log('Author is');
	//console.log(dictAuthor["name"]);
	//console.log("Product Inventories");
	//console.log(dictProduct["inventories"]);

	if (dictAuthor["name"].indexOf(author) > -1){
		console.log(dictAuthor["name"]);
		//arrayOfItemsyAuthor.push(element["id"]);
		arrayOfItemsyAuthor.push(element);
	}

	});	

	return arrayOfItemsyAuthor;

}

var getAvailableProducts = function(items) {

	var arrayOfItemsyAvailable = [];
	items.forEach(function(element){
	
	var dictProduct = element["product"];
	var arrayInventories = dictProduct["inventories"];
	
	arrayInventories.forEach(function(element2){

		if (element2["availability"] === "inStock") {
		console.log('HEY IM AVAILABLE');
		console.log(element["id"]);
		console.log(element2["availability"]); 
			//arrayOfItemsyAvailable.push(element["id"]);	
			arrayOfItemsyAvailable.push(element);
			}	
		});

	});

	return arrayOfItemsyAvailable;

}


//USE FUNCTIONS HERE

//output item count using the getItemsCount function
//console.log('Item Count: ' + getItemsCount(data));
//console.log("Item is: " + getItems(data));
//console.log('Brand resuls');
//console.log(getItemsByBrand(getItems(data), "Canon"));
//console.log('Authors resuls');
//console.log(getItemsByAuthor(getItems(data), "Abt Electronics & Appliances"));
//console.log('Available Products');
//console.log(getAvailableProducts(getItems(data)));


//All items made by Sony
//.log('Items made by Sony');
//console.log(getItemsByBrand(getItems(data), "Sony"));


//All items made by Sony that are available.

//var SonyItemsAvailable = getItemsByBrand(getItems(data), "Sony");
//console.log(getAvailableProducts(SonyItemsAvailable));


//All available items by the author "Adorama Camera"

//var adoromaMade = getItemsByAuthor(getItems(data), "Adorama Camera");
//console.log(adoromaMade);
//console.log(getAvailableProducts(adoromaMade));


//All items made by Nikon with the author eBay.
var nikonMadeItems = getItemsByBrand(getItems(data), "Nikon");
console.log(getItemsByAuthor(nikonMadeItems, "eBay"));













//create your answer in this file.
//the above is just provided as a simple example.
