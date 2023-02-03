//collection of constant values
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
//to acess the index
console.log(Gender.Male);
//to select by index
console.log(Gender[0]);
//modifying the index
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Monday"] = 3] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 9] = "Tuesday";
})(WeekDays || (WeekDays = {}));
console.log(WeekDays[9]);
