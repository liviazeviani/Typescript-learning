interface IProduct{
    id:number; 
    name:string;
    description?:string;
    price:number;
    display():void
}

var productA: IProduct = {
    id:1,
    name: "cellphone",
    price: 3400,
    display(): void{
        console.log(this.id + " " + this.name)
    }
}