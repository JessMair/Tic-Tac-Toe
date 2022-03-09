// HTML Elements 
const playerDiv = document.querySelector('.player');
const reset-buttonDiv = document.querySelector('.reset-button');
const cellDivs = document.querySelector('.cell')

console.log(cellDiv);



// Game 

let gameStarted = true;
let xIsNext = true;




//Event Handlers
Const handleReset = (addEventListener) parameter {
    console.log(addEventListener);
}

Const handleCell = (addEventListener) parameter {
    const classList = e.target.classList;
    const location = addEventListener.classList[1];

    if (classList[2] === 'x' || classList[2] === 'o') {
        return;   
    }

    if (xIsNext) {
        else.classList.add('x');
        xIsNext = !xIsNext;
    }   else {
        else.classList.add('o');
        xIsNext = !xIsNext;
    }
   
  
};


//Event Listeners 

resetDiv.addEventListner('click', handleReset);

for (const cellDiv of cellDiv) {
    cellDiv.addEventListner('click' handleCell)
}