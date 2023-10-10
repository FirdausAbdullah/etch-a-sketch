/*
Etch-a-Sketch project
TOP prescribed project
*/
function makePixel (pixelRow, pixelColumn){
    const pixelContainer = document.querySelector('.pixel-container');
    const pixel = document.createElement('div');
    let row = (pixelContainer.clientHeight)/pixelRow;
    let column = (pixelContainer.clientWidth)/pixelColumn;
    pixel.style.width = `${column}px`;
    pixel.style.height = `${row}px`;
    pixel.style.border = '1px solid black';
    pixel.className = 'pixel';
    pixelContainer.appendChild(pixel);
}

function drawGrid(row,column){
    for(let i=0; i<(row*column);i++){
        makePixel(row,column);
    }

}





drawGrid(16,16);



