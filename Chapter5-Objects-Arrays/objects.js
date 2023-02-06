//declaring and acessing an object
var student = {
    studentName: "Lívia",
    age: 30
};

console.log(student.studentName);

for (var item in student) {
    console.log(item); //give the properties
    console.log(student[item]); //give the values
}
