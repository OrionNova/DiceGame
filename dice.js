const dice = currentDiceValue

switch (dice){
    case 1:
        dice == 1
        img.src = "../dice/dice-1.png"
        break;
    case 2:
        dice == 2
        img.src = "../dice/dice-2.png"
        break;
    case 3:
        dice == 3 
        img.src = "../dice/dice-3.png"
        break;
    case 4:
        dice == 4
        img.src = "../dice/dice-4.png"
        break;
    case 5:
        dice == 5
        img.src = "../dice/dice-5.png"
        break;
    case 6:
        dice == 6
        img.src = "../dice/dice-6.png"
        break;
    default:
        dice > 6 || dice < 1
        console.log(`Sorry, dice can't make ${dice}`)
}