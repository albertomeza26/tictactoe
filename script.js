const primerJugador = document.querySelector('.playeronelogo');
let playerOneName = document.querySelector('#player-one-name');
let formaUno = document.querySelector('.formauno');
const segundoJugador = document.querySelector('.playertwologo');
let playerTwoName = document.querySelector('#player-two-name');
let formaDos = document.querySelector('.formados');
const restartGame = document.querySelector('.restart > button');
const TAKEN = 'played';
const playedSquare = document.querySelectorAll('.button');
/*const jugar = document.getElementsByClassName('button');*/

let playerOne = [];

let playerTwo = [];

function getRandomInt() {
    return Math.floor(Math.random() * 2);
  }

function chosePlayer ()
{if (getRandomInt() === 0){
    console.log('player one goes first')
}
else if (getRandomInt() === 1){
    console.log('player two goes first')
}}

function addPlayerOne(event) {
    let playerO = document.querySelector('.jugador');
    let uno = playerO.value;
    if (uno !== '')
    {playerOne.push(uno);
    playerOne.push('X');
    playerOneName.innerHTML = uno;
    formaUno.style.display = 'none'
    event.preventDefault();}
    else {
        alert('Please fill out player one name');
    }  
}

function addPlayerTwo(event) {
    let playerT = document.querySelector('.jugadordos');
    let dos = playerT.value;
    if (dos !== ''){
    playerTwo.push(dos);
    playerTwo.push('O');
    playerTwoName.innerHTML = dos;
    formaDos.style.display = 'none'
    event.preventDefault();}
    else {
        alert('Please fill out player two name');
    }  
}

let userOne = (function (){
    let user = playerOne[0];
    let marker = playerOne[1];
    return {user, marker};
})

let userTwo = (function () {
    let user = playerTwo[0];
    let marker = playerTwo[1];
    return {user, marker};
})

playedSquare.forEach(function(playedSquare) {
    playedSquare.addEventListener("click", (e) => {
      // do something when the button is clicked
      e.target.classList.add(TAKEN);
    });
  });

primerJugador.addEventListener('click', addPlayerOne);
segundoJugador.addEventListener('click', addPlayerTwo);
restartGame.addEventListener('click', () => location.reload())
/*jugar.addEventListener('click', () => played);*/
