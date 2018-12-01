// My Variables

var martians = {
    "name": "Martians",
    "HP": 100,
    "attackPower": 5,
};

var xenomorphs = {
    "name": "Xenomorphs",
    "HP": 120,
    "attackPower": 8,
};

var navi = {
    "name": "Na'vi",
    "HP": 150,
    "attackPower": 20,
};

var silents = {
    "name": "Silents",
    "HP": 100,
    "attackPower": 25,
};


 

function characterSelection(me){
    alert("We are " + me);
};


$("#silents").on("click", characterSelection(silents.name));

console.log(characterSelection())





// if ($("figure").on("click")) {
//     characterSelection(silents.name);
// }