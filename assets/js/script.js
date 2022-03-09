// HTML Elements 
let playerDiv = document.getElementById('player');
const resetDiv = document.getElementById('reset');
const cellDiv = document.getElementsByTagName('cell');


console.log(cellDiv);

//Game constants
const xSymbol = 'x';
const oSymbol = 'o';

// Game variables

let gameStarted = true;
let xIsNext = true;


//Functions 



//Event Handlers

const handleReset = (Event) => {
    console.log(addEventListener);
}

const handleCell = (Event) => {
    const classList = e.target.classList;
    const location = addEventListener.classList[1];

    if (classList[2] === 'x' || classList[2] === 'o') {
        return;   
    }

    if (xIsNext) {
        classList.add('x');
        xIsNext = !xIsNext;
    }   
    else {    
        classList.add('o');
        xIsNext = !xIsNext;
    }
    
};

//Event Listeners 
reset.addEventListener('click', handleReset);
    
