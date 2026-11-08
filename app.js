/*-------------------------------- Constants --------------------------------*/
const square0 = document.querySelector('#0')
const square1 = document.querySelector('#1')
const square2 = document.querySelector('#2')
const square3 = document.querySelector('#3')
const square4 = document.querySelector('#4')
const square5 = document.querySelector('#5')
const square6 = document.querySelector('#6')
const square7 = document.querySelector('#7')
const square8 = document.querySelector('#8')

let currentPlayer = 'X'
currentPlayer = 'O'
currentPlayer = 'X'

if (currentPlayer === 'X') {
    currentPlayer = 'O'
} else
     {currentPlayer = 'X'
}

let gameOver = false
if (gameOver === false && square0.textContent === '') {



/*---------------------------- Variables (state) ----------------------------*/
let moveCount = 0




/*------------------------ Cached Element References ------------------------*/


/*-------------------------------- Functions --------------------------------*/
if (
   (square0.textContent === currentPlayer &&
     square1.textContent === currentPlayer &&
     square2.textContent === currentPlayer) ||

    (square3.textContent === currentPlayer &&
     square4.textContent === currentPlayer &&
     square5.textContent === currentPlayer) ||

    (square6.textContent === currentPlayer &&
     square7.textContent === currentPlayer &&
     square8.textContent === currentPlayer) ||

    (square0.textContent === currentPlayer &&
     square3.textContent === currentPlayer &&
     square6.textContent === currentPlayer) ||

    (square1.textContent === currentPlayer &&
     square4.textContent === currentPlayer &&
     square7.textContent === currentPlayer) ||

    (square2.textContent === currentPlayer &&
     square5.textContent === currentPlayer &&
     square8.textContent === currentPlayer) ||

    (square0.textContent === currentPlayer &&
     square4.textContent === currentPlayer &&
     square8.textContent === currentPlayer) ||

    (square2.textContent === currentPlayer &&
     square4.textContent === currentPlayer &&
     square6.textContent === currentPlayer)
) {
    console.log(currentPlayer + ' wins!')
}


if ('win') {
    console.log(currentPlayer + ' wins!')
} else if (moveCount === 9) {
    console.log("It's a tie!")
}



/*----------------------------- Event Listeners -----------------------------*/

square0.addEventListener('click', function() {
    if (square0.textContent === '') {
    square0.textContent = currentPlayer
    moveCount++
}
})
square1.addEventListener('click', function() {
    square1.textContent = 'X'
})
square2.addEventListener('click', function() {
    square2.textContent = 'X'
})
square3.addEventListener('click', function() {
    square3.textContent = 'X'
})
square4.addEventListener('click', function() {
    square4.textContent = 'X'
})
square5.addEventListener('click', function() {
    square5.textContent = 'X'
})
square6.addEventListener('click', function() {
    square6.textContent = 'X'
})
square7.addEventListener('click', function() {
    square7.textContent = 'X'
})
square8.addEventListener('click', function() {
    square8.textContent = 'X'
})
