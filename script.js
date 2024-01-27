const primerJugador = document.querySelector('.playeronelogo');
let playerOneName = document.querySelector('#player-one-name');
let formaUno = document.querySelector('.formauno');
const segundoJugador = document.querySelector('.playertwologo');
let playerTwoName = document.querySelector('#player-two-name');
let formaDos = document.querySelector('.formados');
const restartGame = document.querySelector('.restart > button');
const rematch = document.querySelector('.rematch > button');
const playedSquare = document.querySelectorAll('.button');
const jugar = document.getElementById('estart');
const rando = Math.floor(Math.random() * 2);
const uno = document.getElementById('one');
const dos = document.getElementById('two');
const tres = document.getElementById('three');
const cuatro = document.getElementById('four');
const cinco = document.getElementById('five');
const seis = document.getElementById('six');
const siete = document.getElementById('seven');
const ocho = document.getElementById('eight');
const nueve = document.getElementById('nine');
const oneMove = document.querySelector('.result-one');
const twoMove = document.querySelector('.result-two');
const nextMove = 'move'
const played = 'TAKEN'
const tied = 'tied'

let playerOne = [];

let playerTwo = [];

let activePlayer = [];

let userOne = (function () {
    let user = playerOne[0];
    let marker = playerOne[1];
    return { user, marker };
})

let userTwo = (function () {
    let user = playerTwo[0];
    let marker = playerTwo[1];
    return { user, marker };
})

function chosePlayer() {
    if (rando === 0) {
        twoMove.classList.add(nextMove);
        activePlayer.push('X');
    }
    else if (rando === 1) {
        oneMove.classList.add(nextMove);
        activePlayer.push('O');
    }
}

function addPlayerOne(event) {
    let playerO = document.querySelector('.jugador');
    let uno = playerO.value;
    if (uno !== '') {
        playerOne.push(uno);
        playerOne.push('X');
        playerOneName.innerHTML = uno;
        formaUno.style.visibility = 'hidden'
        event.preventDefault();
    }
    else {
        alert('Please fill out player one name');
    }
}

function addPlayerTwo(event) {
    let playerT = document.querySelector('.jugadordos');
    let dos = playerT.value;
    if (dos !== '') {
        playerTwo.push(dos);
        playerTwo.push('O');
        playerTwoName.innerHTML = dos;
        formaDos.style.visibility = 'hidden'
        event.preventDefault();
    }
    else {
        alert('Please fill out player two name');
    }
}
function stopGame() {
    playedSquare.forEach((playedSquare) => {
        playedSquare.disabled = true;
    })
}

function announceWinnerOne() {
    oneMove.innerHTML = `${userOne().user} Wins`
    oneMove.style.color = 'rgb(255, 255, 0, .8)'
    oneMove.classList.add(nextMove)
    twoMove.classList.remove(nextMove)
}

function announceWinnerTwo() {
    twoMove.innerHTML = `${userTwo().user} Wins`
    twoMove.style.color = 'rgb(255, 255, 0, .8)'
    oneMove.classList.remove(nextMove)
    twoMove.classList.add(nextMove)
}

let gamePlay = (function() {
    jugar.disabled = true
    if (playerOne.length === 0 || playerTwo.length === 0) {
        alert("Please enter both player names");
    }
    else {
        chosePlayer();
        let one = []
        let two = [];
        let three = [];
        let four = [];
        let five = [];
        let six = [];
        let seven = [];
        let eight = [];
        let clearGame = (function() {
            one.length = 0;
            two.length = 0;
            three.length = 0;
            four.length = 0;
            five.length = 0;
            six.length = 0;
            seven.length = 0;
            eight.length = 0;
        })
        let lightUpOne = (function() {
            let oneWin = uno.style.backgroundColor = 'rgb(255, 255, 0, .8)'
        })
        let lightUpTwo = (function() {
            let twoWin = dos.style.backgroundColor = 'rgb(255, 255, 0, .8)'
        })
        let lightUpThree = (function() {
            let threeWin = tres.style.backgroundColor = 'rgb(255, 255, 0, .8)'
        })
        let lightUpFour = (function() {
            let fourWin = cuatro.style.backgroundColor = 'rgb(255, 255, 0, .8)'
        })
        let lightUpFive = (function() {
            let fiveWin = cinco.style.backgroundColor = 'rgb(255, 255, 0, .8)'
        })
        let lightUpSix = (function() {
            let sixWin = seis.style.backgroundColor = 'rgb(255, 255, 0, .8)'
        })
        let lightUpSeven = (function() {
            let sevenWin = siete.style.backgroundColor = 'rgb(255, 255, 0, .8)'
        })
        let lightUpEight = (function() {
            let eightWin = ocho.style.backgroundColor = 'rgb(255, 255, 0, .8)'
        })
        let lightUpNine = (function() {
            let nineWin = nueve.style.backgroundColor = 'rgb(255, 255, 0, .8)'
        })
        function gameCheck() {
            if (one.length === 3 || two.length === 3 || three.length === 3 ||
                four.length === 3 || five.length === 3 || six.length === 3 ||
                seven.length === 3 || eight.length === 3 || nine.length === 3) {
                if (one[0] === 'X' && one[1] === 'X' && one[2] === 'X') {
                    announceWinnerOne()
                    stopGame()
                    lightUpOne()
                    lightUpTwo()
                    lightUpThree()
                    clearGame()
                }
                else if (one[0] === 'O' && one[1] === 'O' && one[2] === 'O') {
                    announceWinnerTwo()
                    stopGame()
                    lightUpOne()
                    lightUpTwo()
                    lightUpThree()
                    clearGame()
                }
                else if (two[0] === 'X' && two[1] === 'X' && two[2] === 'X') {
                    announceWinnerOne()
                    stopGame()
                    lightUpFour()
                    lightUpFive()
                    lightUpSix()
                    clearGame()
                }
                else if (two[0] === 'O' && two[1] === 'O' && two[2] === 'O') {
                    announceWinnerTwo()
                    stopGame()
                    lightUpFour()
                    lightUpFive()
                    lightUpSix()
                    clearGame()
                }
                else if (three[0] === 'X' && three[1] === 'X' && three[2] === 'X') {
                    announceWinnerOne()
                    stopGame()
                    lightUpSeven()
                    lightUpEight()
                    lightUpNine()
                    clearGame()
                }
                else if (three[0] === 'O' && three[1] === 'O' && three[2] === 'O') {
                    announceWinnerTwo()
                    stopGame()
                    lightUpSeven()
                    lightUpEight()
                    lightUpNine()
                    clearGame()
                }
                else if (four[0] === 'X' && four[1] === 'X' && four[2] === 'X') {
                    announceWinnerOne()
                    stopGame()
                    lightUpOne()
                    lightUpFour()
                    lightUpSeven()
                    clearGame()
                }
                else if (four[0] === 'O' && four[1] === 'O' && four[2] === 'O') {
                    announceWinnerTwo()
                    stopGame()
                    lightUpOne()
                    lightUpFour()
                    lightUpSeven()
                    clearGame()
                }
                else if (five[0] === 'X' && five[1] === 'X' && five[2] === 'X') {
                    announceWinnerOne()
                    stopGame()
                    lightUpTwo()
                    lightUpFive()
                    lightUpEight()
                    clearGame()
                }
                else if (five[0] === 'O' && five[1] === 'O' && five[2] === 'O') {
                    announceWinnerTwo()
                    stopGame()
                    lightUpTwo()
                    lightUpFive()
                    lightUpEight()
                    clearGame()
                }
                else if (six[0] === 'X' && six[1] === 'X' && six[2] === 'X') {
                    announceWinnerOne()
                    stopGame()
                    lightUpThree()
                    lightUpSix()
                    lightUpNine()
                    clearGame()
                }
                else if (six[0] === 'O' && six[1] === 'O' && six[2] === 'O') {
                    announceWinnerTwo()
                    stopGame()
                    lightUpThree()
                    lightUpSix()
                    lightUpNine()
                    clearGame()
                }
                else if (seven[0] === 'X' && seven[1] === 'X' && seven[2] === 'X') {
                    announceWinnerOne()
                    stopGame()
                    lightUpOne()
                    lightUpFive()
                    lightUpNine()
                    clearGame()
                }
                else if (seven[0] === 'O' && seven[1] === 'O' && seven[2] === 'O') {
                    announceWinnerTwo()
                    stopGame()
                    lightUpOne()
                    lightUpFive()
                    lightUpNine()
                    clearGame()
                }
                else if (eight[0] === 'X' && eight[1] === 'X' && eight[2] === 'X') {
                    announceWinnerOne()
                    stopGame()
                    lightUpThree()
                    lightUpFive()
                    lightUpSeven()
                    clearGame()
                }
                else if (eight[0] === 'O' && eight[1] === 'O' && eight[2] === 'O') {
                    announceWinnerTwo()
                    stopGame()
                    lightUpThree()
                    lightUpFive()
                    lightUpSeven()
                    clearGame()
                }
                else if (uno.classList.contains('TAKEN') && dos.classList.contains('TAKEN') && tres.classList.contains('TAKEN')
                    && cuatro.classList.contains('TAKEN') && cinco.classList.contains('TAKEN') && seis.classList.contains('TAKEN')
                    && siete.classList.contains('TAKEN') && ocho.classList.contains('TAKEN') && nueve.classList.contains('TAKEN'))
                    {oneMove.classList.add(tied)
                    twoMove.classList.add(tied)
                    stopGame()
                    clearGame()
                    oneMove.innerHTML = null
                    twoMove.innerHTML = null
                    alert ('Tie Game!')}
            }
        }
        uno.addEventListener('click', () => {
            let valor = uno.innerHTML;
            one.push(valor)
            four.push(valor)
            seven.push(valor)
            gameCheck()
        })
        dos.addEventListener('click', () => {
            let valor = dos.innerHTML;
            one.push(valor)
            five.push(valor)
            gameCheck()
        })
        tres.addEventListener('click', () => {
            let valor = tres.innerHTML;
            one.push(valor)
            six.push(valor)
            eight.push(valor)
            gameCheck()
        })
        cuatro.addEventListener('click', () => {
            let valor = cuatro.innerHTML;
            two.push(valor)
            four.push(valor)
            gameCheck()
        })
        cinco.addEventListener('click', () => {
            let valor = cinco.innerHTML;
            two.push(valor)
            five.push(valor)
            seven.push(valor)
            eight.push(valor)
            gameCheck()
        })
        seis.addEventListener('click', () => {
            let valor = seis.innerHTML;
            two.push(valor)
            six.push(valor)
            gameCheck()
        })
        siete.addEventListener('click', () => {
            let valor = siete.innerHTML;
            three.push(valor)
            four.push(valor)
            eight.push(valor)
            gameCheck()
        })
        ocho.addEventListener('click', () => {
            let valor = ocho.innerHTML;
            three.push(valor)
            five.push(valor)
            gameCheck()
        })
        nueve.addEventListener('click', () => {
            let valor = nueve.innerHTML;
            three.push(valor)
            six.push(valor)
            seven.push(valor)
            gameCheck()
        })
        return{clearGame}}
})

const switchPlayerTurn = (function () {
    if (activePlayer[0] === 'X') {
        activePlayer = activePlayer[0] === 'X' ? 'O' : 'X';
        return { activePlayer };
    }
    else if (activePlayer[0] === 'O') {
        activePlayer = activePlayer[0] === 'O' ? 'X' : 'O';
        return { activePlayer };
    }
})

function clearBoard() {
    if (oneMove.innerHTML === `${userOne().user} Wins`){
        twoMove.innerHTML = 'Next Move'
        oneMove.innerHTML = 'Next Move'
        twoMove.style.color = 'rgb(241, 250, 238)'
        oneMove.style.color = 'rgb(241, 250, 238)'
        twoMove.classList.add(nextMove)
        oneMove.classList.remove(nextMove)
        uno.style.backgroundColor = 'rgb(168, 218, 220)'
        dos.style.backgroundColor = 'rgb(168, 218, 220)'
        tres.style.backgroundColor = 'rgb(168, 218, 220)'
        cuatro.style.backgroundColor = 'rgb(168, 218, 220)'
        cinco.style.backgroundColor = 'rgb(168, 218, 220)'
        seis.style.backgroundColor = 'rgb(168, 218, 220)'
        siete.style.backgroundColor = 'rgb(168, 218, 220)'
        ocho.style.backgroundColor = 'rgb(168, 218, 220)'
        nueve.style.backgroundColor = 'rgb(168, 218, 220)'
    playedSquare.forEach((playedSquare) =>
    {playedSquare.innerHTML = null
    playedSquare.classList.remove(played)
    playedSquare.disabled = false})}
    else if (twoMove.innerHTML === `${userTwo().user} Wins`){
        oneMove.innerHTML = 'Next Move'
        twoMove.innerHTML = 'Next Move'
        twoMove.style.color = 'rgb(241, 250, 238)'
        oneMove.style.color = 'rgb(241, 250, 238)'
        oneMove.classList.add(nextMove)
        twoMove.classList.remove(nextMove)
        uno.style.backgroundColor = 'rgb(168, 218, 220)'
        dos.style.backgroundColor = 'rgb(168, 218, 220)'
        tres.style.backgroundColor = 'rgb(168, 218, 220)'
        cuatro.style.backgroundColor = 'rgb(168, 218, 220)'
        cinco.style.backgroundColor = 'rgb(168, 218, 220)'
        seis.style.backgroundColor = 'rgb(168, 218, 220)'
        siete.style.backgroundColor = 'rgb(168, 218, 220)'
        ocho.style.backgroundColor = 'rgb(168, 218, 220)'
        nueve.style.backgroundColor = 'rgb(168, 218, 220)'
    playedSquare.forEach((playedSquare) =>
    {playedSquare.innerHTML = null
    playedSquare.classList.remove(played)
    playedSquare.disabled = false})
    }
    else if (oneMove.classList.contains(tied) && twoMove.classList.contains(tied) && oneMove.classList.contains(nextMove)){
        oneMove.classList.remove(tied)
        twoMove.classList.remove(tied)
        oneMove.innerHTML = 'Next Move'
        twoMove.innerHTML = 'Next Move'
        twoMove.style.color = 'rgb(241, 250, 238)'
        oneMove.style.color = 'rgb(241, 250, 238)'
        oneMove.classList.add(nextMove)
        twoMove.classList.remove(nextMove)
        uno.style.backgroundColor = 'rgb(168, 218, 220)'
        dos.style.backgroundColor = 'rgb(168, 218, 220)'
        tres.style.backgroundColor = 'rgb(168, 218, 220)'
        cuatro.style.backgroundColor = 'rgb(168, 218, 220)'
        cinco.style.backgroundColor = 'rgb(168, 218, 220)'
        seis.style.backgroundColor = 'rgb(168, 218, 220)'
        siete.style.backgroundColor = 'rgb(168, 218, 220)'
        ocho.style.backgroundColor = 'rgb(168, 218, 220)'
        nueve.style.backgroundColor = 'rgb(168, 218, 220)'
    playedSquare.forEach((playedSquare) =>
    {playedSquare.innerHTML = null
    playedSquare.classList.remove(played)
    playedSquare.disabled = false})
    }
    else if (oneMove.classList.contains(tied) && twoMove.classList.contains(tied) && twoMove.classList.contains(nextMove)){
        oneMove.classList.remove(tied)
        twoMove.classList.remove(tied)
        twoMove.innerHTML = 'Next Move'
        oneMove.innerHTML = 'Next Move'
        twoMove.style.color = 'rgb(241, 250, 238)'
        oneMove.style.color = 'rgb(241, 250, 238)'
        twoMove.classList.add(nextMove)
        oneMove.classList.remove(nextMove)
        uno.style.backgroundColor = 'rgb(168, 218, 220)'
        dos.style.backgroundColor = 'rgb(168, 218, 220)'
        tres.style.backgroundColor = 'rgb(168, 218, 220)'
        cuatro.style.backgroundColor = 'rgb(168, 218, 220)'
        cinco.style.backgroundColor = 'rgb(168, 218, 220)'
        seis.style.backgroundColor = 'rgb(168, 218, 220)'
        siete.style.backgroundColor = 'rgb(168, 218, 220)'
        ocho.style.backgroundColor = 'rgb(168, 218, 220)'
        nueve.style.backgroundColor = 'rgb(168, 218, 220)'
    playedSquare.forEach((playedSquare) =>
    {playedSquare.innerHTML = null
    playedSquare.classList.remove(played)
    playedSquare.disabled = false})}
    else {
        alert('Complete current game before rematch')
    }
}

function disableStart () {
    jugar.disabled = true
}

playedSquare.forEach(function (playedSquare) {
    playedSquare.addEventListener("click", (e) => {
        e.target.innerHTML = switchPlayerTurn().activePlayer;
        e.target.classList.add(played);
        e.target.disabled = true;
        oneMove.classList.toggle(nextMove);
        twoMove.classList.toggle(nextMove);
    });
});

primerJugador.addEventListener('click', addPlayerOne);
segundoJugador.addEventListener('click', addPlayerTwo);
jugar.addEventListener('click', gamePlay);
restartGame.addEventListener('click', () => location.reload())
rematch.addEventListener('click', () => clearBoard())
