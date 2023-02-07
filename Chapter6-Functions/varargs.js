//rest parameter
var product = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
        result += numbers[i];
    }
    return result;
};
console.log(product(2, 4, 6));
