const playersArray = [];

// selected- v 
function display(playerName) {
    const lisDivtId = document.getElementById('selected-v')
    lisDivtId.innerHTML = '';
    for (let i = 0; i < playerName.length; i++) {


        if (playerName.length <= 5) {
            const name = playersArray[i];
            // console.log(playersArray[i])
            const ul = document.createElement('ul');
            ul.innerHTML = `
        <li>${i + 1}</li>
        <li>${name}</li>
        `
            lisDivtId.appendChild(ul);
        }
        else {
            alert("You can't add more than 5")
        }

    }
}
function addToCart(element) {
    const playerName = (element.parentNode.parentNode.children[0].innerText)
    // console.log(playerName)
    playersArray.push(playerName)
    display(playersArray)
}
// button disabled and color change 
document.getElementById('card1').addEventListener('click', function () {
    const disable = disableBtn('card1')
})
document.getElementById('card2').addEventListener('click', function () {
    const disable = disableBtn('card2')
})
document.getElementById('card3').addEventListener('click', function () {
    const disable = disableBtn('card3')
})
document.getElementById('card4').addEventListener('click', function () {
    const disable = disableBtn('card4')
})
document.getElementById('card5').addEventListener('click', function () {
    const disable = disableBtn('card5')
})
document.getElementById('card6').addEventListener('click', function () {
    const disable = disableBtn('card6')
})
// calculate button
document.getElementById('calculate_btn').addEventListener('click', function () {
    if (isNaN(perPlayer) ) {
         alert ("Input not valid");
      }
    const perPlayer = perPlayerFieldName('per-player');

    const playerTotalExpenses = document.getElementById('player-expenses');
    //  const playerExpensesElement=playerExpenses('player-expenses');

    const playerExpensesElement = perPlayer * playersArray.length;
    // console.log(length)
    // console.log(typeof (length))
    // getPlayerQuantity(data)
    playerTotalExpenses.innerText = playerExpensesElement;

    // console.log(playerExpensesElement)


    display(playersArray)

})
// calculate_total_btn 
document.getElementById('calculate_total_btn').addEventListener('click', function () {
    const manager = document.getElementById('manager').value;
    const managerAmount = parseFloat(manager);

    const coach = document.getElementById('coach').value;
    const coachAmount = parseFloat(coach);


    const playerFinalExpenses = document.getElementById('player-expenses').innerText;
    const playerFinalExpensesString = parseFloat(playerFinalExpenses);
    const totalCalculate = playerFinalExpensesString + managerAmount + coachAmount;
    const totalFinalCalculate = document.getElementById('total-calculate');
    totalFinalCalculate.innerText = totalCalculate;
    console.log(totalCalculate)

})