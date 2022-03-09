// HTML Elements 
const playerDiv = document.getElementById('.player');
const resetbuttonDiv = document.getElementById('.resetbutton');
const cellDiv = getElementById('.cell');

console.log(cellDiv);

// Game 

let gameStarted = true;
let xIsNext = true;


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
resetbuttonDiv.addEventListner('click', handleReset)

for (const cellDiv of cellDiv) {
    cellDiv.addEventListner('click', handleCell);
}