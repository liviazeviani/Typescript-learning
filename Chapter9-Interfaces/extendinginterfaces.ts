interface IExterior{
    color?:string;
    numOfDoors:number;
}

interface IInterior{
    seats:number;
    auto:boolean;
}

interface ICar extends IExterior, IInterior{
    make:string;
    model:string;
    year:number;
}

var myCar: ICar = {
    make: "Honda",
    model: "Civic",
    year: 1994,
    numOfDoors: 4,
    seats: 4,
    auto: true

}