//declaring and acessing an object

var student = {
    firstName : "Lívia",
    lastName: "Zeviani",
    age : 30
}

//console.log(student.studentName);

for( var item in student){
    console.log(item);
    console.log(student[item])
}

//de-structuring object
var{firstName, lastName} = student;
console.log(firstName + " " + lastName);

