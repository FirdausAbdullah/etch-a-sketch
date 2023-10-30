/*
Etch-a-Sketch project
TOP prescribed project
*/

let currentColor = 'black';

function mouseDown(e) {
    e.target.style.background = currentColor;
}
function makePixel (pixelRow, pixelColumn){
    const pixelContainer = document.querySelector('.pixel-container');
    const pixel = document.createElement('div');
    let row = (pixelContainer.clientHeight)/pixelRow;
    let column = (pixelContainer.clientWidth)/pixelColumn;
    pixel.style.width = `${column}px`;
    pixel.style.height = `${row}px`;
    pixel.style.border = '1px solid black';
    pixel.className = 'pixel';
    pixel.addEventListener('mousedown',(e)=>{mouseDown(e);});
    pixelContainer.appendChild(pixel);
}

function drawGrid(row,column){
    for(let i=0; i<(row*column);i++){
        makePixel(row,column);
    }

}





drawGrid(16,16);



