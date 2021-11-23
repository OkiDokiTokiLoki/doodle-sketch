const container = document.querySelector('#grid');
const restartBtn = document.querySelector('#restart');

function buildGrid(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for(let i = 0; i < (rows * cols); i++){
        let gridCell = document.createElement('div');
        gridCell.addEventListener('mouseover', drawC);
        // gridCell.addEventListener('toggle', drawT);
        container.appendChild(gridCell).className = 'grid-item';
    };
};

function drawC(e){
    // let key = e.keyCode;

    e.target.style.background = 'red';

    // while (key == 16){
    //     e.target.style.background = 'red';
    // }
    
};

// function drawT(e){
//     e.target.classList.toggle('penOn');
//     e.target.classList.toggle('penOff');
//     console.log(e.target);
// };

// buildGrid(8, 8);
 buildGrid(16, 16);
// buildGrid(64, 64);

restartBtn.addEventListener('click', restart)

function restart(){
    window.location.reload();
}