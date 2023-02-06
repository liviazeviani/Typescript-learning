var levels = [10, 20, 30, 40, 50];
//toString method will return a string representation of the given array
console.log(levels.toString());
///join will add something separating the elements, in this example is the string &
console.log(levels.join(" & "));
//slice method literally slice de array and returns only the portion you wnat - 
console.log(levels.slice(1, 4));
levels.splice(2, 3, 88, 99); //starting from index 2, delete 3 elements and add 88 and 99
console.log(levels.toString());
console.log(levels.pop());
console.log(levels.toString()); //the 99 - last element is gone now because the pop method was applied
