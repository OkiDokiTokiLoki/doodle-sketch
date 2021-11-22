const container = document.querySelector('#container');

function buildGrid(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for(let i = 0; i < (rows * cols); i++){
        let gridCell = document.createElement('div');
        // gridCell.innerText = (i + 1);
        container.appendChild(gridCell).className = 'grid-item';
    };
};

buildGrid(16, 16);