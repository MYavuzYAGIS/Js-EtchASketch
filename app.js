// Global Variables:
// Buttons

const black = document.querySelector('#black');
const random = document.querySelector('#random');
const custom = document.querySelector('#picker');
const reset = document.querySelector('#reset');
const slider = document.querySelector('#range');

let color;
// Button Settings:



black.addEventListener('click',() =>{
    color = '#000';
})

random.addEventListener('click', ()=>{
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    randomColor= `#${randomColor}`;
    color = randomColor;
    console.log(randomColor);

})


reset.addEventListener('click',()=>{
    let hayda = document.querySelectorAll('.block');
    hayda.forEach(div => div.style.backgroundColor = 'white');
    
})

custom.addEventListener('input', ()=>{    
    
    let colorz = custom.value;
    console.log(colorz);
    color = colorz;
})




// container

const container = document.querySelector('#sketchboard');

function Gridify(size){
    for(let i=0; i< size * size; i++ ) {
        const div = document.createElement('div');
        div.className = 'block';
        div.addEventListener('mouseover',()=> {
            // we will modify down here
            div.style.backgroundColor=`${color}`;
        });
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        div.style.border = '1px dotted gray';
        container.appendChild(div);
    }
}


function sliderx(){
    slider.addEventListener('input', ()=>{

        Gridify(slider.value)
        console.log(slider.value);
    });

}




Gridify(slider.value);
sliderx()