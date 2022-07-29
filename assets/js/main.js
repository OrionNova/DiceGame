player1 = prompt('Name of player 1 : ');
document.getElementById("player1").innerHTML=player1;
player2 = prompt('Name of player 2 : ');
document.getElementById("player2").innerHTML=player2;
document.querySelector('.dice').style.display = 'none';

const modalContainer = document.querySelector(".modal-container");


var global = [
    { 
        name:"player1",
        round_point: 0,
        global_point: 0,
        element_round_id: "RP1",
        element_global_id: "GP1"
    },
    {
        name:"player2",
        round_point: 0,
        global_point: 0,
        element_round_id: "RP2",
        element_global_id: "GP2"
    }
]

var currentDiceValue = 0
var currentPlayer = 0



// roll dice
function rollDice(){
    const min = 1; 
    const max = 7;
    currentDiceValue = Math.floor(Math.random() * (max -min) + min);
    document.getElementById("roll").innerHTML=currentDiceValue;
    roundPoint();
    //displayDice
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'assets/img/dice-' + currentDiceValue + '.png';
}

//add point or, if 1 do dice, player switch
function roundPoint(){
    if(currentDiceValue > 1) {
        global[currentPlayer].round_point += currentDiceValue;
        writeInDom(global[currentPlayer].element_round_id, global[currentPlayer].round_point);
    } else{
       //alert ("changement de joueur")
        switchPlayer();
    }
}

function toggleModal(){
    modalContainer.classList.toggle("activeModal")
}
function updatePoint(){

        global[currentPlayer].global_point = global[currentPlayer].round_point + global[currentPlayer].global_point;
        writeInDom(global[currentPlayer].element_global_id, global[currentPlayer].global_point);

        if(global[currentPlayer].global_point >= 50) {
            toggleModal();
        }
} 
//hold point and switch play
function hold(){
    updatePoint()
    //alert ("changement de joueur")
    switchPlayer();
}

function writeInDom(id, value) {
    document.getElementById(id).innerHTML = value;
}

function switchPlayer(){
   global[0].round_point = 0;
   global[1].round_point = 0;

   writeInDom(global[0].element_round_id, global[0].round_point);
   writeInDom(global[1].element_round_id, global[1].round_point);

   document.getElementById('RP1').textContent = '0';
   document.getElementById('RP2').textContent = '0';
   document.querySelector('.player-right').classList.toggle('active');
   document.querySelector('.player-left').classList.toggle('active');    

   currentPlayer = (currentPlayer == 0 ) ? 1 : 0;

}

function init(){
location.reload();
}