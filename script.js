const container = document.querySelector('#grid');
const restartBtn = document.querySelector('#restart');

let penColor = 'red';

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

function drawClick(e){
    e.target.style.background = penColor;    
};

function drawDrag(e){
    if (e.buttons > 0){
        e.target.style.background = penColor;  
    }  
};

// buildGrid(8, 8);
 buildGrid(16, 16);
// buildGrid(64, 64);

restartBtn.addEventListener('click', restart)

function restart(){
    window.location.reload();
}