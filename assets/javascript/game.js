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


$("#silents").on("click", characterSelection(martians.name));

console.log(characterSelection())




// if ($("figure").on("click")) {
//     characterSelection(silents.name);
// }


//--------------PSEUDOCODE------------------------------------------
// 1. Allow each object to run through a characterSelection function when user on.clicks on the figure. The function assigns the object that the user clicked on as "me"
// 2. Display "Your Species", "Enemy Species to Conquer", "Battlefield", and "Opponent" images in the correct div
// 3. Create an onClick function that increases the "attackPower" of the userSpecies by 10, 
//     decreases the opponent HP by me.attackPower, and decreases me.HP by opponent.attackPower (this is the ATTACK button)
