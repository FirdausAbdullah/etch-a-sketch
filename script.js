/*
Etch-a-Sketch project
TOP prescribed project
*/



const inputColor = document.querySelector('.color');
inputColor.addEventListener('input',(e)=>{currentColor = e.target.value;});
let currentColor = inputColor.value;

let currentSize=12;

const pixelContainer = document.querySelector('.pixel-container');

let click=0;
function changeColor(e) {

    if(e.type === "click" && click == 0){
        click = 1;
    }

    else if(e.type === "click" && click == 1){
        click = 0;
    }
    
    if(click){
    e.target.style.background = currentColor;}
}


function makePixel (pixelRow, pixelColumn){
    
    const pixel = document.createElement('div');
    pixel.style.width = `${pixelColumn}px`;
    pixel.style.height = `${pixelRow}px`;
    pixel.className = 'pixel';
    pixel.addEventListener('mouseover',(e)=>{changeColor(e);});
    pixel.addEventListener('click',(e)=>{changeColor(e);});
    pixelContainer.appendChild(pixel);
}

function drawGrid(row,column){
    //let pixelRow = (pixelContainer.clientHeight)/row;
    //let pixelColumn = (pixelContainer.clientWidth)/column;
    let pixelRow = 800/row;
    let pixelColumn = 800/column;
    for(let i=0; i<(row*column);i++){
        makePixel(pixelRow,pixelColumn);
    }

}


drawGrid(20,20);


