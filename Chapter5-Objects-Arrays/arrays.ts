var products: any = ["phone", "MobilePhone", "ChipCard", "line"];

products.push(9);

for(var i = 0; i< products.length; i++){
    console.log(products[i]);
}

//de-structuring objects
var [a, b, c] = products;
console.log(a);
console.log(b);
console.log(c);

 