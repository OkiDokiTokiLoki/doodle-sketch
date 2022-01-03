const pen = document.querySelector('#penColor');
const eraser = document.querySelector('.eraser');
const restartBtn = document.querySelector('#restart');

const warmPalette = ['#fafa6e', '#e6b54a', '#c17638', '#903f2b', '#570f1c'];
const coolPalette = ['#71c7ec', '#1ebbd7', '#189ad3', '#107dac', '#005073'];

let penColor = '#000';
let erasePen = false;
let warmBool = false;
let coolBool = false;
let rainbowBool = false;

function buildGrid(rows, cols){
    const grid = document.querySelector('#grid');

    grid.innerHTML = '';

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

// Set penColor
pen.addEventListener('input', (e) => {
    penColor = e.target.value;
});

// warmPen functionality
function warm(){
    const warmPen = document.querySelector('.warm');

    if (warmBool){
        warmPen.style.backgroundColor = '';
        warmPen.style.backgroundImage = 'var(--gradient)';
        warmBool = false;
    } else{
        warmPen.style.backgroundColor = 'var(--light)';
        warmPen.style.backgroundImage = 'none';
        warmBool = true;
    }
};

const randomWarm = () => {
    return warmPalette[Math.floor(Math.random() * warmPalette.length)];
};

// coolPen functionality
function cool(){
    const coolPen = document.querySelector('.cool');

    if (coolBool){
        coolPen.style.backgroundColor = '';
        coolPen.style.backgroundImage = 'var(--gradient)';
        coolBool = false;
    } else{
        coolPen.style.backgroundColor = 'var(--light)';
        coolPen.style.backgroundImage = 'none';
        coolBool = true;
    }
};

const randomCool = () => {
    return coolPalette[Math.floor(Math.random() * coolPalette.length)];
};

// RainbowPen functionality
function rainbow(){
    const rainbowPen = document.querySelector('.rainbow');

    if (rainbowBool){
        rainbowPen.style.backgroundColor = '';
        rainbowPen.style.backgroundImage = 'var(--gradient)';
        rainbowBool = false;
    } else{
        rainbowPen.style.backgroundColor = 'var(--light)';
        rainbowPen.style.backgroundImage = 'none';
        rainbowBool = true;
    }
};

const rainbowColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

// Erase functionality
function erase(){
    if (erasePen){
        eraser.style.backgroundColor = '';
        eraser.style.backgroundImage = 'var(--gradient)';
        erasePen = false;
    } else{
        eraser.style.backgroundColor = 'var(--light)';
        eraser.style.backgroundImage = 'none';
        erasePen = true;
    }
};

// Draw onClick
function drawClick(e){
    if (erasePen){
        e.target.style.backgroundColor = '';
    } else if (warmBool){
        e.target.style.backgroundColor = randomWarm();
    } else if (coolBool){
        e.target.style.backgroundColor = randomCool();
    } else if (rainbowBool){
        e.target.style.backgroundColor = rainbowColor();
    }
    else{
        e.target.style.backgroundColor = penColor;
    }
};

// Draw onHover (when mouse is dragged)
function drawDrag(e){
    if (e.buttons > 0){
        if (erasePen){
            e.target.style.backgroundColor = '';
        } else if (warmBool){
            e.target.style.backgroundColor = randomWarm();
        } else if (coolBool){
            e.target.style.backgroundColor = randomCool();
        } else if (rainbowBool){
            e.target.style.backgroundColor = rainbowColor();
        }
        else{
            e.target.style.backgroundColor = penColor;
        }  
    }  
};

restartBtn.addEventListener('click', restart)

function restart(){
    location.reload();
}