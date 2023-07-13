var playerNames = [];


// Player name List create
function createNewList(playerName) {
    playerName = document.getElementById(playerName).innerText;
    const orderList = document.getElementById('order-List');

    let li = document.createElement('li');
    li.style.textAlign = 'start';
    li.innerText = playerName;

    orderList.appendChild(li);
    if (li !== '') {
        playerNames.push(li)
        // console.log(playerNames);
    }

    if (playerNames.length === 5) {
        const limit = document.getElementsByClassName('perPlayerBtn');
        for (let i = 0; i < limit.length; i++) {
            limit[i].disabled = true;
        }
    }
    return playerName;
}


function multiflyResult() {
    const perPlayerInput = document.getElementById('perPlayerInput').value;

    const playerExpenses = document.getElementById('playerExpenses');
    playerExpenses.innerText;

    multifly = playerNames.length * perPlayerInput;
    playerExpenses.innerText = multifly

    return multifly;
}

function totalSum() {
    const manager = document.getElementById('manager').value;
    const managerString = parseInt(manager);

    const coach = document.getElementById('coach').value;
    const coachString = parseInt(coach)

    const totalSum = managerString + coachString;
    return totalSum;
}

// Per Player Calculate Total
document.getElementById('perPlayerBtn').addEventListener('click', function perPlayer(multifly) {

    multiflyResult()
})

// Calculate Total Money
document.getElementById('calculateTotal').addEventListener('click', function () {
    const total = document.getElementById('total');
    const add = multiflyResult() + totalSum();
    const addString = parseInt(add)

    total.innerText = addString
})


// Achraf Hakimi
document.getElementById('player-Btn-1').addEventListener('click', function () {
    const playerName = createNewList('player-Name-1');

    document.getElementById('player-Btn-1').disabled = true;
})

// Cristiano Ronaldo
document.getElementById('player-Btn-2').addEventListener('click', function () {
    const playerName = createNewList('player-Name-2')

    document.getElementById('player-Btn-2').disabled = true;
})

// Jack Grealish
document.getElementById('player-Btn-3').addEventListener('click', function () {
    const playerName = createNewList('player-Name-3')

    document.getElementById('player-Btn-3').disabled = true;
})

// Lionel Messi
document.getElementById('player-Btn-4').addEventListener('click', function () {
    const playerName = createNewList('player-Name-4')

    document.getElementById('player-Btn-4').disabled = true;
})

// Luis Suarez
document.getElementById('player-Btn-5').addEventListener('click', function () {
    const playerName = createNewList('player-Name-5')

    document.getElementById('player-Btn-5').disabled = true;
})

// Luka Modric
document.getElementById('player-Btn-6').addEventListener('click', function () {
    const playerName = createNewList('player-Name-6')

    document.getElementById('player-Btn-6').disabled = true;
})

// Mbappe
document.getElementById('player-Btn-7').addEventListener('click', function () {
    const playerName = createNewList('player-Name-7')

    document.getElementById('player-Btn-7').disabled = true;
})

// Mesut Özil
document.getElementById('player-Btn-8').addEventListener('click', function () {
    const playerName = createNewList('player-Name-8')

    document.getElementById('player-Btn-8').disabled = true;
})

// Mohamed salah
document.getElementById('player-Btn-9').addEventListener('click', function () {
    const playerName = createNewList('player-Name-9')

    document.getElementById('player-Btn-9').disabled = true;
})

// NEYMAR JR
document.getElementById('player-Btn-10').addEventListener('click', function () {
    const playerName = createNewList('player-Name-10')

    document.getElementById('player-Btn-10').disabled = true;
})

// Paulo Dybala
document.getElementById('player-Btn-11').addEventListener('click', function () {
    const playerName = createNewList('player-Name-11')

    document.getElementById('player-Btn-11').disabled = true;
})

// Pedri
document.getElementById('player-Btn-12').addEventListener('click', function () {
    const playerName = createNewList('player-Name-12')

    document.getElementById('player-Btn-12').disabled = true;
})

// Player Calculation
// Per Player Budget

// document.getElementById('per-Player-Btn').addEventListener("click", function () {
//     const perPlayerInputField = document.getElementById('per-Player-Input-Field');
//     const perPlayerInputValue = perPlayerInputField.value;
//     // console.log(perPlayerInputValue);


//     const playerExpenses = document.getElementById('player-Expenses');
//     const playerExpensesString = playerExpenses.innerText;
//     // console.log(playerExpensesString);
// })