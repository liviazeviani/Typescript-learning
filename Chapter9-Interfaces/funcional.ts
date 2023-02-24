interface IAdd{
    (x:number, y:number) //the return type it's optional
}

interface ISub{
    (x:number, y: number):number
}

var add: IAdd
var sub: ISub

add = function(x:number, y:number): void{ //if the type is void you can use console
    console.log(x + y)
}

sub = function(x:number, y:number): number{ //if there is a type you must use return
    return x - y
}


