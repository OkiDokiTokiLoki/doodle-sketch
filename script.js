const grid = document.querySelector('#grid');
const restartBtn = document.querySelector('#restart');
const pen = document.querySelector('#penColor');
const eraser = document.querySelector('#eraser');
const warmPen = document.querySelector('#warm');
const coolPen = document.querySelector('#cool');
const rainbowPen = document.querySelector('#rainbow');

const buttons = document.querySelectorAll('button');

//const gridSizeDisplay = document.querySelector('#gridSizeDisplay');
//const gridSize = document.querySelector('#gridSize');
const gridSmall = document.querySelector('#gridSmall');
const gridMedium = document.querySelector('#gridMedium');
const gridLarge = document.querySelector('#gridLarge');

const warmPalette = ['#fafa6e', '#e6b54a', '#c17638', '#903f2b', '#570f1c'];
const coolPalette = ['#56a25a', '#009e87', '#0093c2', '#007fe9', '#5057db'];


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

buildGrid(16, 16); // default grid

gridSmall.addEventListener('click', () => {
    buildGrid(8,8);

});

gridMedium.addEventListener('click', () => {
    buildGrid(16,16);

});

gridLarge.addEventListener('click', () => {
    buildGrid(32,32);

});

// buildGrid(8, 8);
// buildGrid(16, 16);
// buildGrid(64, 64);

// Set penColor
let penColor = '#000';

pen.addEventListener('input', (e) => {
    penColor = e.target.value;
});

// warmPen functionality
let warmBool = false;

warmPen.addEventListener('click', () => {
    if (warmBool){
        warmPen.style.backgroundColor = '';
        warmBool = false;
    } else{
        warmPen.style.backgroundColor = 'var(--medium)';
        warmBool = true;
    }
});

const randomWarm = () => {
    return warmPalette[Math.floor(Math.random() * warmPalette.length)];
};

// coolPen functionality
let coolBool = false;

// coolPen.addEventListener('click', () => {
//     if (coolBool){
//         coolBool = false;
//     } else{
//         coolBool = true;
//     }
// });

// RainbowPen functionality
let rainbowBool = false;

rainbowPen.addEventListener('click', () => {
    if (rainbowBool){
        rainbowPen.style.backgroundColor = '';
        rainbowBool = false;
    } else{
        rainbowPen.style.backgroundColor = 'var(--medium)';
        rainbowBool = true;
    }
});

const rainbowColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

// Erase functionality
let erasePen = false;

eraser.addEventListener('click', () => {
    if (erasePen){
        eraser.style.backgroundColor = '';
        erasePen = false;
    } else{
        eraser.style.backgroundColor = 'var(--medium)';
        erasePen = true;
    }
});

// Draw onClick
function drawClick(e){
    if (erasePen){
        e.target.style.backgroundColor = '';
    } else if (warmBool){
        e.target.style.backgroundColor = randomWarm();
    // } else if (coolBool){
    //     e.target.style.backgroundColor = rainbowColor();
    } else if (rainbowBool){
        e.target.style.backgroundColor = rainbowColor();
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
            e.target.style.backgroundColor = randomWarm();
        // } else if (coolBool){
        //     e.target.style.backgroundColor = rainbowColor();
        } else if (rainbowBool){
            e.target.style.backgroundColor = rainbowColor();
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