//using function as parameters
function addition(n1, n2) {
    return n1 + n2;
}
function division(n3, n4) {
    return n3 / n4;
}
function calculator(fun) {
    console.log(fun(10, 10));
}
calculator(addition);
calculator(division);
