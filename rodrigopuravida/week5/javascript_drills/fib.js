//fib(n)

//Write a method to return the Nth number of Fibonacci sequence.
//
//http://en.wikipedia.org/wiki/Fibonacci_number

var fibonaze = function(number) {
    var total = 1;
    if (number === 0) {return 0;}
    if (number === 1) { return 1;}
    
    for (var i = 2; i <= number; i += 1) {
        total = total + i;   
    }
    return total;   
}

var giveMeFib = fibonaze(12);
console.log(giveMeFib);