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

//returning a function

function calculator2():any{
    function subtract(number:number, number2:number):number{
        return number - number2;
    }
    return subtract;
}



console.log(calculator2()(9,3));