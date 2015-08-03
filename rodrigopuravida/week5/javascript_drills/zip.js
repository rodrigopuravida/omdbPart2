//zip(array, array2)
//
//Take two arrays, and combine them.
//
//Input
//
var artists = ["Passion Pit", "Mumford and Sons", "MGMT"];
var albums = ["Gossamer", "Sigh no more", "Time to Pretend"];

var zipper = function(array, array2) {
    var dynamicArray = [];
    var finalArray = [];    
    //Assuming both arrays are same length
    for (var i = 0; i < array.length; i+=1) {
        dynamicArray.push(array[i]);
        dynamicArray.push(array2[i]);
        finalArray.push(dynamicArray);
        dynamicArray = [];
    }    
    return finalArray;  
}

var zipped = zipper(artists, albums);
console.log(zipped);

//Output
//
//[ [ 'Passion Pit', 'Gossamer' ],
//  [ 'Mumford and Sons', 'Sigh no more' ],
//  [ 'MGMT', 'Time to Pretend' ] ]