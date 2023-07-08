// all Player name id Function
function everyPlayer(playerId) {
    const playerName = document.getElementById(playerId)
    const playerNameString = playerName.innerText;
    return playerNameString;
}

// parentsElementList, createList, appendChild
function createListAppend(playerNameString) {
    const parentsElementList = document.getElementById('select-List');
    const createList = document.createElement('li')
    createList.innerText = playerNameString;
    parentsElementList.appendChild(createList);

    const listString = createList.innerText;
    const listSplit = listString.split('  ')
    // console.log(listSplit);

    // const listSplitTotal = listString + listSplit
    // const newL = listSplit['0']
    // let sum = [''];
    // // console.log(newL);
    // for (let i = 0; i < listSplit.length; i++) {
    //     const element = listSplit[i];
    //     sum = sum + element

    //     console.log(sum.length);
    // }


}


// Achraf Hakimi
document.getElementById('player-Btn-1').addEventListener('click', function () {
    const playerNameString = everyPlayer('player-Name-1')
    createListAppend(playerNameString)
})

// Cristiano Ronaldo
document.getElementById('player-Btn-2').addEventListener('click', function () {
    const playerNameString = everyPlayer('player-Name-2')
    createListAppend(playerNameString)
})

// Jack Grealish
document.getElementById('player-Btn-3').addEventListener('click', function () {
    const playerNameString = everyPlayer('player-Name-3')
    createListAppend(playerNameString)
})

// Lionel Messi
document.getElementById('player-Btn-4').addEventListener('click', function () {
    const playerNameString = everyPlayer('player-Name-4')
    createListAppend(playerNameString)
})

// Luis Suarez
document.getElementById('player-Btn-5').addEventListener('click', function () {
    const playerNameString = everyPlayer('player-Name-5')
    createListAppend(playerNameString)

})

// Luka Modric
document.getElementById('player-Btn-6').addEventListener('click', function () {
    const playerNameString = everyPlayer('player-Name-6')
    createListAppend(playerNameString)
})

// Mbappe
document.getElementById('player-Btn-7').addEventListener('click', function () {
    const playerNameString = everyPlayer('player-Name-7')
    createListAppend(playerNameString)
})

// Mesut Özil
document.getElementById('player-Btn-8').addEventListener('click', function () {
    const playerNameString = everyPlayer('player-Name-8')
    createListAppend(playerNameString)
})

// Mohamed salah
document.getElementById('player-Btn-9').addEventListener('click', function () {
    const playerNameString = everyPlayer('player-Name-9')
    createListAppend(playerNameString)

})

// NEYMAR JR
document.getElementById('player-Btn-10').addEventListener('click', function () {
    const playerNameString = everyPlayer('player-Name-10')
    createListAppend(playerNameString)
})

// Paulo Dybala
document.getElementById('player-Btn-11').addEventListener('click', function () {
    const playerNameString = everyPlayer('player-Name-11')
    createListAppend(playerNameString)

})

// Pedri
document.getElementById('player-Btn-12').addEventListener('click', function () {
    const playerNameString = everyPlayer('player-Name-12')
    createListAppend(playerNameString)
})