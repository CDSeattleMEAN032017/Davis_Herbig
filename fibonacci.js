function fib() {
    var count = 0;
    var last = null;
    var temp = null;

    function nacci() {
        if (last == null) {
            last = count;
            count = 1;
            temp = 1;
        } else {
            temp = count + last;
            last = count;
            count = temp;
        }
        return temp;
    }
    return nacci;
}

var fibCounter = fib();
console.log(fibCounter());
console.log(fibCounter());
console.log(fibCounter());
console.log(fibCounter());
console.log(fibCounter());
console.log(fibCounter());
console.log(fibCounter());