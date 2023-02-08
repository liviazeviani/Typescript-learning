//arrow functions are a short cut to use anon functions

var helloAgain = ():string => "Hello";

console.log(helloAgain());

//arrow functions with parameter
var helloToYourName = (name:string):string => "Hello " + name;

console.log(helloToYourName("Lívia"));

//arrow function to calculate the product of two numbers

var multi = (numberA:number, numberB:number):number => numberA * numberB;

console.log("The answer is " + multi(2,2));

//array of arrow functions
var myArray:Array<any> = [];

for(var i =0; i<=10; i++){
    myArray.push(():number => i)
}

for(i =0; i<=10;i++){
    console.log(myArray[i]());
}