const gridContainer = document.querySelector('#grid-container');
const dragInput = document.querySelector('#myValue');

let i; //dimension
function dragFunction() {
    i = document.getElementById("myValue").value;
  document.getElementById("demo").innerHTML = `Grid Size: ${i} X ${i}`
}

let numberOfGrids;
dragInput.addEventListener('input', () =>{
  dragFunction();

numberOfGrids = parseInt(i)*parseInt(i);
const gridContainer = document.querySelector('#grid-container');


function gridAttributes() {
  document.getElementById("grid-container").style.gridTemplateColumns = `repeat(${parseInt(i)},${(600/parseInt(i))+"px"})`;
  document.getElementById("grid-container").style.gridTemplateRows = `repeat(${parseInt(i)},${(600/parseInt(i))+"px"})`;
}

gridContainer.textContent ='';
gridAttributes();
  
  for (let m=0;m<numberOfGrids;m++)
{
    const grids = document.createElement('div');
    grids.classList.add('grids');
    gridContainer.appendChild(grids);   
}

// Black Ink

  const blackButton = document.querySelector('#black');
  blackButton.addEventListener('click', () => {
  const black = document.querySelectorAll('.grids');
  black.forEach((grids) => {
  grids.addEventListener('mouseenter', (e) =>{
  grids.style.backgroundColor = 'black';
})
})
})

//Eraser

const eraserButton = document.querySelector('#eraser');
eraserButton.addEventListener('click', () => {
const eraser = document.querySelectorAll('.grids');
eraser.forEach((grids) => {
grids.addEventListener('mouseenter', (e) =>{
grids.style.backgroundColor = 'white';
})
})


})


//Rainbow

  const rainbowButton = document.querySelector('#rainbow');
  rainbowButton.addEventListener('click', () => {
  const rainbow = document.querySelectorAll('.grids');
  rainbow.forEach((grids) => {
  grids.addEventListener('mouseenter', (e) =>{
    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    let r = getRndInteger(15,202);
    let g = getRndInteger(15,202);
    let b = getRndInteger(15,202);
  grids.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})
})
})

// Display Grid

const displayButton = document.querySelector('#display-grid');
displayButton.addEventListener('click', () => {
const displayGrid = document.querySelectorAll('.grids');
displayGrid.forEach((grids) => {
  grids.setAttribute('style', `border-style: solid; border-color: black; border-width: 0.001px`); 
})
})

//Remove grid
const removeGrid = document.querySelector('#remove-grid');
removeGrid.addEventListener('click', () => {
const gridRemover = document.querySelectorAll('.grids');
gridRemover.forEach((grids) => {
  grids.setAttribute('style', `border: none`); 
})
})

})

 

