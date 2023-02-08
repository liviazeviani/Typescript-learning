//rest parameter - if there are other parameter, rest parameter must be the last one

var product = function(...numbers:number[]){
    var result = 0;

    for(var i= 0; i<numbers.length; i++){
        console.log(numbers[i])

        result +=numbers[i];
    }
    return result;
}

console.log(product(2,4,6));

