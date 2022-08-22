function common(inputField){
    const perPlayerField=document.getElementById(inputField);
    const perPlayerFieldString=perPlayerField.value;
    const perplayerAmount=parseFloat(perPlayerFieldString);
    return perplayerAmount;
}









// function playerExpenses(playerInputField){
//     const playerTotalExpenses = document.getElementById(playerInputField);
//     const playerExpensesElement = perplayerAmount * 5;
//     playerTotalExpenses.innerText = playerExpensesElement;
//     return playerTotalExpenses;
   
// }






// function display(playerName) {
//     // console.log(playerName);
//     const lisDivtId = document.getElementById('selected-v')
//     lisDivtId.innerHTML = '';
//     for (let i = 0; i < playerName.length; i++) {
//         const name = playersArray[i];
//         // console.log(playersArray[i])
//         const ul = document.createElement('ul');
//         ul.innerHTML = `
//     <li>${i + 1}</li>
//     <li>${name}</li>
//     `
//         lisDivtId.appendChild(ul);


// //  const length=playerName.length;
 
//     }

// // return length;

// }
