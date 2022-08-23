function playerRent() {
    //const playerCount = playerList.childNodes.length;
    const calcField = document.getElementById('calc-field');
    const calcValue = calcField.value;
    const calculatingValueString = playerArr.length * calcValue;
    const calculatingValue = parseFloat(calculatingValueString);
    return calculatingValue;
}
const selectPlayer = document.getElementsByClassName('select-player');
const playerList = document.getElementById('olList');
const playerArr = [];
for (const selectPlayers of selectPlayer) {
    selectPlayers.addEventListener('click', function () {
        const playerName = selectPlayers.parentElement.childNodes[3].innerText;
        const li = document.createElement('li');
        li.innerText = playerName;
        //player = playerList.append(playerName);
        playerArr.push(playerName);

        // li.classList.add('item');
        playerList.appendChild(li);

    })
}
if (playerArr.length > 5) {

    alert('You can choose ony five player');

}

document.getElementById('calculate').addEventListener('click', function () {

    const playerExpense = document.getElementById('player-expense');
    playerExpense.innerText = playerRent();

})

document.getElementById('calculate-total').addEventListener('click', function () {
    const playerExpense = playerRent();
    const managerFieldValue = document.getElementById('manager-expense');
    const coachFieldValue = document.getElementById('coach-expense');
    const managerExpenseString = managerFieldValue.value;
    const managerExpense = parseFloat(managerExpenseString);
    const coachExpenseString = coachFieldValue.value;
    const coachExpense = parseFloat(coachExpenseString);
    const totalExpense = managerExpense + coachExpense + playerExpense;
    const totalRent = document.getElementById('total-expense');
    totalRent.innerText = totalExpense;
})
