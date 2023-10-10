/*
Etch-a-Sketch project
TOP prescribed project
*/
function drawPad (pixelRow, pixelColumn){
    const pixelContainer = document.querySelector('.pixel-container');
    const pixel = document.createElement('div');
    pixel.style.width = '10px';
    pixel.style.height = '10px';
    pixel.style.border = '1px solid black';
    pixel.className = 'pixel';

    pixelContainer.appendChild(pixel);
}

for (let i =0; i<320; i++){
    drawPad();
}




