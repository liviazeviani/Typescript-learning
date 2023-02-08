//arrow functions are a short cut to use anon functions
var helloAgain = function () { return "Hello"; };
console.log(helloAgain());
//arrow functions with parameter
var helloToYourName = function (name) { return "Hello " + name; };
console.log(helloToYourName("Lívia"));
//arrow function to calculate the product of two numbers
var multi = function (numberA, numberB) { return numberA * numberB; };
console.log("The answer is " + multi(2, 2));
//array of arrow functions
var myArray = [];
for (var i = 0; i <= 10; i++) {
    myArray.push(function () { return i; });
}
for (i = 0; i <= 10; i++) {
    console.log(myArray[i]());
}
