//pair(obj)
//
//Construct array pairs from Objects.
//
//You can grab all keys using Object.keys(obj) and iterate over it like any other array.
//
//Input
//
var obj = {
    "Brian": "Hague",
    "Sarah": "Hanley",
    "Lenny": "Urbanowski",
}
 
var pairing = function(obj) {
    var finalArray = [];
    var dynamicArray = [];
    
    for(var property in obj) {         
        dynamicArray.push(property);
        dynamicArray.push(obj[property]);
        finalArray.push(dynamicArray);
        var dynamicArray = [];
    }
    return finalArray
}

var paired = pairing(obj);
console.log(paired);
    
    
    
    //
//Output
//
//[ [ 'Brian', 'Hague' ],
//  [ 'Sarah', 'Hanley' ],
//  ['Lenny', 'Urbanowski' ] ]