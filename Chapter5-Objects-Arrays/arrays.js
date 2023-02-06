var products = ["phone", "MobilePhone", "ChipCard", "line"];
products.push(9);
for (var i = 0; i < products.length; i++) {
    console.log(products[i]);
}
//de-structuring objects
var a = products[0], b = products[1], c = products[2];
console.log(a);
console.log(b);
console.log(c);
