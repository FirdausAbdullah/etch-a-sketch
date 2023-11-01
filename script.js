const container = document.querySelector('.pixel-container');
const sizeInput = document.querySelector('.size');
const color = document.querySelector('.color');
const resetBtn = document.querySelector('.reset');

let size = sizeInput.value;

let draw = false;

//set size of grid area (size*size) to grid-template css
//and then create each div
function populate(size) {
    container.style.setProperty('--size',size);
    for (let i=0; i<size*size; i++){
        const div = document.createElement('div');
        div.classList.add('pixel');
        div.addEventListener('mouseover',()=>{
            if(!draw) return;
            div.style.backgroundColor = color.value;
        })

        div.addEventListener('mousedown',()=>{
            div.style.backgroundColor = color.value;
        })

        container.appendChild(div);
    }
}

function redraw(){
    container.innerHTML = '';
    populate(size);
}

window.addEventListener("mousedown", ()=>{
    draw = true;
})

window.addEventListener("mouseup", ()=>{
    draw = false;
})

resetBtn.addEventListener('click', redraw)

sizeInput.addEventListener('input',()=>{
    size = sizeInput.value;
    redraw();
});

populate(size);