const grid = document.querySelector('#grid');
const restartBtn = document.querySelector('#restart');
const pen = document.querySelector('#penColor');
const eraser = document.querySelector('#eraser');
const warmPen = document.querySelector('#warm');
const coolPen = document.querySelector('#cool');
//const gridSizeDisplay = document.querySelector('#gridSizeDisplay');
//const gridSize = document.querySelector('#gridSize');
// const gridSmall = document.querySelector('#gridSmall');
// const gridMedium = document.querySelector('#gridMedium');
// const gridLarge = document.querySelector('#gridLarge');

let penColor = '#000';
let erasePen = false;
let warmBool = false;
let coolBool = false;


function buildGrid(rows, cols){
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);

    for(let i = 0; i < (rows * cols); i++){
        let gridCell = document.createElement('div');
        gridCell.addEventListener('mousedown', drawClick);
        gridCell.addEventListener('mouseenter', drawDrag);
        grid.appendChild(gridCell).className = 'grid-item';
    };
};

buildGrid(8, 8); // default grid

// gridSmall.addEventListener('click', () => {
//     buildGrid(8,8);

// });

// gridMedium.addEventListener('click', () => {
//     buildGrid(16,16);

// });

// gridLarge.addEventListener('click', () => {
//     buildGrid(32,32);

// });

// buildGrid(8, 8);
// buildGrid(16, 16);
// buildGrid(64, 64);

// Set penColor
pen.addEventListener('input', (e) => {
    penColor = e.target.value;
});


const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

warmPen.addEventListener('click', () => {
    if (warmBool){
        warmBool = false;
    } else{
        warmBool = true;
    }
});

coolPen.addEventListener('click', () => {
    if (coolBool){
        coolBool = false;
    } else{
        coolBool = true;
    }
});

// Erase functionality
eraser.addEventListener('click', () => {
    if (erasePen){
        erasePen = false;
    } else{
        erasePen = true;
    }
});

// Draw onClick
function drawClick(e){
    if (erasePen){
        e.target.style.backgroundColor = '';
    } else if (warmBool){
        e.target.style.backgroundColor = randColor();
    } else if (coolBool){
        e.target.style.backgroundColor = 'blue';
    }
    else{
        e.target.style.backgroundColor = penColor;
    }
};

// Draw onHover when mouse is dragged
function drawDrag(e){
    if (e.buttons > 0){
        if (erasePen){
            e.target.style.backgroundColor = '';
        } else if (warmBool){
            e.target.style.backgroundColor = randColor();
        } else if (coolBool){
            e.target.style.backgroundColor = 'blue';
        }
        else{
            e.target.style.backgroundColor = penColor;
        }  
    }  
};

// Displays size of grid
// gridSize.addEventListener('input', (e) => {
//     gridSizeDisplay.textContent = e.target.value;
// });

restartBtn.addEventListener('click', restart)

function restart(){
    window.location.reload();
}