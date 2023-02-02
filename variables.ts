var x:number = 10;
console.log(x);

var s:string = 'oi';
console.log(s);

var b:boolean = true;
var b1:boolean = false;
console.log(b1);

var a:any = 56;
var a1:any = {
    productId: 1,
    productName: "Phone",
    productProce: 50
};
console.log(a1);

//Homogeneous Array
var array:Array<string> = ["Angular", "React", "Node"];
console.log(array);
//choosing from index
console.log(array[0]);
console.log(array.length);


//Heterogeneous Array
var array1:Array<any> = [4, "livia", true];
console.log(array1);