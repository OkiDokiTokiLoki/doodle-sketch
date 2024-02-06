"use strict";
const penOptions = {
    penColor: '#000',
    erasePen: false,
    currentMode: null,
    warmPalette: ['#fafa6e', '#e6b54a', '#c17638', '#903f2b', '#570f1c'],
    coolPalette: ['#71c7ec', '#1ebbd7', '#189ad3', '#107dac', '#005073'],
};
const penElements = {
    pen: document.querySelector('#penColor'),
    eraser: document.querySelector('.eraser'),
    restartBtn: document.querySelector('#restart'),
    grid: document.querySelector('#grid'),
    warm: document.querySelector('.warm'),
    cool: document.querySelector('.cool'),
    rainbow: document.querySelector('.rainbow'),
};
function setPenStyle(penElement, bool, colorArray) {
    if (bool) {
        penElement.style.backgroundColor = '';
        penElement.style.backgroundImage = 'var(--gradient)';
    }
    else {
        penElement.style.backgroundColor = 'var(--light)';
        if (colorArray) {
            penOptions.penColor = colorArray[Math.floor(Math.random() * colorArray.length)];
        }
    }
    return !bool;
}
function setPenColor(mode) {
    penOptions.currentMode = mode;
    if (mode === 'eraser') {
        penOptions.erasePen = setPenStyle(penElements.eraser, penOptions.erasePen);
    }
    else if (mode === 'penColor') {
        penOptions.erasePen = false;
        setPenStyle(penElements.eraser, false);
        penElements.pen.click();
    }
    else {
        penOptions.erasePen = false;
        setPenStyle(penElements.eraser, false);
        switch (mode) {
            case 'warm':
                setPenStyle(penElements.warm, false, penOptions.warmPalette);
                break;
            case 'cool':
                setPenStyle(penElements.cool, false, penOptions.coolPalette);
                break;
            case 'rainbow':
                setPenStyle(penElements.rainbow, false);
                break;
            default:
                penElements.pen.value = penOptions.penColor;
        }
    }
    const penButtons = document.querySelectorAll('.pen-button');
    penButtons.forEach(button => button.classList.remove('active-pen'));
    const activeButton = document.querySelector(`.${mode}`);
    if (activeButton) {
        activeButton.classList.add('active-pen');
    }
}
function buildGrid(rows, cols) {
    penElements.grid.innerHTML = '';
    penElements.grid.style.setProperty('--grid-rows', rows.toString());
    penElements.grid.style.setProperty('--grid-cols', cols.toString());
    for (let i = 0; i < rows * cols; i++) {
        const gridCell = document.createElement('div');
        gridCell.addEventListener('mousedown', drawClick);
        gridCell.addEventListener('mousemove', drawDrag);
        penElements.grid.appendChild(gridCell).className = 'grid-item';
    }
}
function padStart(value, length, padChar) {
    while (value.length < length) {
        value = padChar + value;
    }
    return value;
}
function drawClick(e) {
    const { erasePen, penColor } = penOptions;
    if (erasePen) {
        e.target.style.backgroundColor = '';
    }
    else if (penOptions.penColor && penOptions.currentMode === 'penColor') {
        e.target.style.backgroundColor = penOptions.penColor;
    }
    else if (penOptions.currentMode === 'warm') {
        e.target.style.backgroundColor = penOptions.warmPalette[Math.floor(Math.random() * penOptions.warmPalette.length)];
    }
    else if (penOptions.currentMode === 'cool') {
        e.target.style.backgroundColor = penOptions.coolPalette[Math.floor(Math.random() * penOptions.coolPalette.length)];
    }
    else if (penOptions.currentMode === 'rainbow') {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16).toUpperCase();
        const paddedColor = padStart(randomColor, 6, '0');
        e.target.style.backgroundColor = `#${paddedColor}`;
    }
}
function drawDrag(e) {
    if (e.buttons > 0) {
        drawClick(e);
    }
}
penElements.pen.addEventListener('input', (e) => {
    penOptions.penColor = e.target.value;
});
penElements.restartBtn.addEventListener('click', restart);
function restart() {
    buildGrid(16, 16);
}
buildGrid(16, 16);
