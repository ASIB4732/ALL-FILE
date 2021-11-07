var array = 10;
var arrayResult= 0;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    arrayResult = arrayResult*array[index]
}

console.log(arrayResult);




function numberOfFactorial(x) {
    var result = 0;
    if (x == 1) {
        return 1;
    } else {
        return result = x * numberOfFactorial(x - 1);
    }

}

var output = numberOfFactorial(10);
console.log(output);








    