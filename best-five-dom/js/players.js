const playersArray = [];
// selected- v 
function display(playerName) {
    const lisDivtId = document.getElementById('selected-v')
    lisDivtId.innerHTML = '';
    for (let i = 0; i < playerName.length; i++) {
        if (playerName.length <= 5) {
            const name = playersArray[i];
            const ul = document.createElement('ul');
            ul.innerHTML = `
        <li>${i + 1} ${name}</li>
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
    playersArray.push(playerName)
    display(playersArray)
}
// button disabled and color change 
document.getElementById('card1').addEventListener('click', function () {
     disableBtn('card1')
})
document.getElementById('card2').addEventListener('click', function () {
     disableBtn('card2')
})
document.getElementById('card3').addEventListener('click', function () {
    disableBtn('card3')
})
document.getElementById('card4').addEventListener('click', function () {
    disableBtn('card4')
})
document.getElementById('card5').addEventListener('click', function () {
    disableBtn('card5')
})
document.getElementById('card6').addEventListener('click', function () {
    disableBtn('card6')
})
// calculate button
document.getElementById('calculate_btn').addEventListener('click', function () {
    const perPlayer = perPlayerFieldName('per-player');
    const playerTotalExpenses = document.getElementById('player-expenses');
    const playerExpensesElement = perPlayer * playersArray.length;
    if (isNaN(perPlayer)) {
        alert("Please Enter a Number");
    }
    else {
        playerTotalExpenses.innerText = playerExpensesElement;
    }
    display(playersArray)
})
// calculate_total_btn 
document.getElementById('calculate_total_btn').addEventListener('click', function () {
    const manager = document.getElementById('manager').value;
    const managerAmount = parseFloat(manager);
    const coach = document.getElementById('coach').value;
    const coachAmount = parseFloat(coach);
    if (isNaN(managerAmount)||isNaN(coachAmount)) {
        alert("Please Enter a Number");
    }
    const playerFinalExpenses = document.getElementById('player-expenses').innerText;
    const playerFinalExpensesString = parseFloat(playerFinalExpenses);
    const totalCalculate = playerFinalExpensesString + managerAmount + coachAmount;
    const totalFinalCalculate = document.getElementById('total-calculate');
    totalFinalCalculate.innerText = totalCalculate;
    console.log(totalCalculate)

})