function num(n) {
    if (n == 0) {
        return 0
    } 
    else if (n == 1) {
        return 1;
    } 
    else {
        return num(n-1) + num(n-2)
    }
}

var xxx = num(15);
console.log(xxx);