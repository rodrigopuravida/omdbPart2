//isPalindrome(string)
//
//Create a method called is_palindrome to check if a string is a palindrome. Do not use any reverse method.

var validatePalindrome = function(word) {
    var checkCounter = 0;
    if (word.length <= 2) {
        return true;  }  
    
    for (var i = 0; i < (word.length)/2; i += 1) {
        
        if (word[i] !== word[word.length-i-1])
        checkCounter += 1;  
    }
    if (checkCounter > 0) {
            return false; }       
        else {
            return true;}
}

var amIPalindrome = validatePalindrome('bazooka');
console.log(amIPalindrome);