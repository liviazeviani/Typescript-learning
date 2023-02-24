interface INames{
    [index:number]: string;
}

var names: INames = ["Lívia", "Pedro"];

interface IScore{
    [index:string]: number;
}

var score: IScore = {};

score["Lívia"] = 100;
score["Pedro"] = 50;

for(var i in score){
    console.log("Name: " + i + ", points: " + score[i] )

}
