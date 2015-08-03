//Using map construct a function called Pluck that will input array, and grab all matching keys. The function should return the value of keys in an array.
//
//Input
//
var albums = [
    {'name': 'Gossamer', 'artist': 'Passion Pit'},
    {'name': 'Sigh no more', 'artist': 'Mumford and Sons'},
    {'name': 'Time to Pretend', 'artist': 'MGMT'}
];

var pluck = function(arr, key) {
    var matchedKeysArray = [];
    
        for (i = 0; i < arr.length; i++) { 
        
            for(var property in arr[i]) {              
            if (property === key)
            matchedKeysArray.push(arr[i][key]);              
            }
        }  
    return matchedKeysArray
}

var plucked = pluck(albums,'artist');
console.log(plucked);

//expected output: [ 'Passion Pit', 'Mumford and Sons', 'MGMT' ]