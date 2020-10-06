let numberOfDice = 0
let count = 0
let total = 0
let value = 0
let dice = []
let ShowAllRollsButton = document.querySelector ('.ShowAllRollsButton');
let RollButton = document.querySelector('.RollButton');
let numberOfDiceToRoll = document.querySelector('#numberOfDice');
let resetButton = document.querySelector('#resetButton');


RollButton.addEventListener("click", function() {
    console.log("numberOfClicks");
    while(count < numberOfDiceToRoll.value) {
    value = getRandomInt (1,6)  
    console.log('You rolled a' + value);
    total += value
    dice.push (value);
    count++
    }
    console.log(document.getElementById("TotalOfAmountOnDice"))
    document.getElementById("TotalOfAmountOnDice").innerHTML = total;
}
)




ShowAllRollsButton.addEventListener("click", function() {
    console.log("clicks");
    let diceLength = "";
    count = 0

    while(count < dice.length) {
    diceLength += "<li>" + dice[count] + "</li>"
    console.log(diceLength)
    count++
    
}
    document.getElementById("OrderedDiceList").innerHTML = diceLength;
}
)
resetButton.addEventListener("click", function() {
    console.log("this is working")
    dice = []
    document.getElementById("OrderedDiceList").innerHTML = "";
    numberOfDice = 0
    count = 0
    total = 0
    value = 0
    document.getElementById("TotalOfAmountOnDice").innerHTML = "";
    numberOfDiceToRoll.value = ""
}
)

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }
