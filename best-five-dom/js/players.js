const playersArray = [];

// selected- v 
function display(playerName) {
    // console.log(playerName);
    const lisDivtId = document.getElementById('selected-v')
    lisDivtId.innerHTML = '';
    for (let i = 0; i < playerName.length; i++) {
        const name = playersArray[i];
        // console.log(playersArray[i])
        const ul = document.createElement('ul');
        ul.innerHTML = `
    <li>${i + 1}</li>
    <li>${name}</li>
    `
        lisDivtId.appendChild(ul);
        // const length = playersArray.length;
        // getPlayerQuantity(length)
        // console.log(length)

    }
}
function addToCart(element) {
    const playerName = (element.parentNode.parentNode.children[0].innerText)
    // console.log(playerName)
    playersArray.push(playerName)
    // console.log(playersArray)
    // console.log(playersArray.length)
    // const card1=document.getElementById('card1').disabled=true;
    // disabled.style.display=none
    // disabled .document.body.style.backgroundColor = "red";
    // const card2=document.getElementById('card2').disabled=true;


    display(playersArray)

}

document.getElementById('card1').addEventListener('click', function () {
    const card1 = document.getElementById('card1').disabled = true;
    document.getElementById("card1").style.backgroundColor = "gray";


})
document.getElementById('card2').addEventListener('click', function () {
    const card1 = document.getElementById('card2').disabled = true;
    document.getElementById("card2").style.backgroundColor = "gray";


})
document.getElementById('card3').addEventListener('click', function () {
    const card1 = document.getElementById('card3').disabled = true;
    document.getElementById("card3").style.backgroundColor = "gray";


})
document.getElementById('card4').addEventListener('click', function () {
    const card1 = document.getElementById('card4').disabled = true;
    document.getElementById("card4").style.backgroundColor = "gray";


})
document.getElementById('card5').addEventListener('click', function () {
    const card1 = document.getElementById('card5').disabled = true;
    document.getElementById("card5").style.backgroundColor = "gray";


})
document.getElementById('card6').addEventListener('click', function () {
    const card1 = document.getElementById('card6').disabled = true;
    document.getElementById("card6").style.backgroundColor = "gray";


})
// calculate_btn 

document.getElementById('calculate_btn').addEventListener('click', function () {

    const perPlayer = common('per-player');

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
    // console.log(typeof(playerFinalExpensesString))
    // const playerExpensesString=par


    const totalCalculate = playerFinalExpensesString + managerAmount + coachAmount;
    const totalFinalCalculate = document.getElementById('total-calculate');
    totalFinalCalculate.innerText = totalCalculate;
    // console.log(coachAmount, managerAmount));
    console.log(totalCalculate)

})