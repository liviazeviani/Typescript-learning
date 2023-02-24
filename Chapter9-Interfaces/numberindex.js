var names = ["Lívia", "Pedro"];
var score = {};
score["Lívia"] = 100;
score["Pedro"] = 50;
for (var i in score) {
    console.log("Name: " + i + ", points: " + score[i]);
}
