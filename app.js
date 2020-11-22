// Global Variables:
// Buttons

const black = document.querySelector('#black');
const random = document.querySelector('#random');
const custom = document.querySelector('#custom');
const reset = document.querySelector('#reset');
const slider = document.querySelector('#range');



// container

const container = document.querySelector('#sketchboard');

function Gridify(size){
    for(let i=0; i< size * size; i++ ) {
        const div = document.createElement('div');
        div.className = 'block';
        div.addEventListener('mouseover',()=> {
            // we will modify down here
            div.style.backgroundColor='black';
        });
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        div.style.border = '1px solid black';
        container.appendChild(div);
    }
}


function sliderx(){
    slider.addEventListener('input', ()=>{
        sliderDoom()
        Gridify(slider.value)
        console.log(slider.value);
    });

}


function sliderDoom(){
    document.querySelectorAll('.block').forEach(e => e.remove());

}

Gridify(16);
sliderx()