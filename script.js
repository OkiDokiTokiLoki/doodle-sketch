const container = document.querySelector('#grid');
const restartBtn = document.querySelector('#restart');
const pen = document.querySelector('#penColor');

let penColor = '#000';

function buildGrid(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for(let i = 0; i < (rows * cols); i++){
        let gridCell = document.createElement('div');
        gridCell.addEventListener('mousedown', drawClick);
        gridCell.addEventListener('mouseenter', drawDrag);
        container.appendChild(gridCell).className = 'grid-item';
    };
};

buildGrid(8, 8);
// buildGrid(16, 16);
// buildGrid(64, 64);

// Setting penColor
pen.addEventListener('input', (e) => {
    penColor = e.target.value;
});

// Draw onClick
function drawClick(e){
    e.target.style.backgroundColor = penColor;    
};

// Draw onHover when mouse is dragged
function drawDrag(e){
    if (e.buttons > 0){
        e.target.style.backgroundColor = penColor;  
    }  
};


restartBtn.addEventListener('click', restart)

function restart(){
    window.location.reload();
}