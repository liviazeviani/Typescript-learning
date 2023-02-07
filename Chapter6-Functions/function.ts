function hello(name:string):string{
    return "Hello" + " " + name;
}


console.log(hello("Lívia"));

function add(n1:number, n2:number): number{
    return n1 + n2;
}

console.log("n1 + n2 = " + add(10, 10));

function display(id:number, name:string, role:string="User"){ //setting default value on an optional parameter
        console.log("id:", id);
        console.log("Name:", name);
        console.log("Role:", role);
             
}

display(7, "Lívia");