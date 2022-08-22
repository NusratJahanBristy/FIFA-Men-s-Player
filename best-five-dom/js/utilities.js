function perPlayerFieldName(inputField){
    const perPlayerField=document.getElementById(inputField);
    const perPlayerFieldString=perPlayerField.value;
    const perplayerAmount=parseFloat(perPlayerFieldString);
    return perplayerAmount;
}
function disableBtn(cardId) {
    document.getElementById(cardId).disabled = true;
    document.getElementById(cardId).style.backgroundColor = "gray";
}