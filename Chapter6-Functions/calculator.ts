//using function as parameters

function addition(n1:number, n2:number): number{
    return n1 + n2;
}

function division(n3:number, n4:number): number{
    return n3/n4;
}

function calculator(fun:any):void{
    console.log(fun(10,10));
}

calculator(addition);
calculator(division);