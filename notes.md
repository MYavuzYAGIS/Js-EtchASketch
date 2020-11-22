What do I need?
button -- reset
Maybe RGB Randomizer?
Maybe Color Picker?



 <div id="buttons">
            <p>Color: </p>
            <select class="buttons" name="colorPicker" id="colorPicker">
                <option value="black">Black</option>
                <option value="blueScale">Blue Scale</option>
                <option value="custom">Custom Color</option>
                <option value = "random"> Random Color </option>
            </select>
        </div>









Slider 
            <div class="slidecontainer">
                <input type="range" min="2" max="100" value="16" class="slider" id="myRange">
                <p class="sliderValue">16x16</p>
            </div>

.slidecontainer {
  display: block;
  width: 560px;
  text-align: center;
}

.slider {
  margin-right: 10px;
  width: 400px;
}

.sliderValue {
  font-weight: bold;
  font-size: 20px;
}















const sketchContainer = document.querySelector('.sketch-container');

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.className = 'cell';
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        });

        sketchContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        sketchContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        sketchContainer.appendChild(div);
    }
}

function menuSetup() {
    const slider = document.getElementById('myRange');
    const sliderContainer = document.querySelector('.slidecontainer');
    const sliderValueText = document.querySelector('.sliderValue');
    slider.addEventListener('input', () => {
        clearGrid();
        createGrid(slider.value);
        sliderValueText.innerText = `${slider.value}x${slider.value}`;
    })

    sliderContainer.appendChild(sliderValueText);  
}

function clearGrid() {
    document.querySelectorAll('.cell').forEach(e => e.remove()); 
}

createGrid(16); // 16x16
menuSetup()




generic js setup