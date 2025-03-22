let selectedColor = "black"; 
let isMouseDown = false;   
let isClear = false 

function changeColor(color) {
    console.log(isClear)
    selectedColor = color;
    isClear = false;
}

function clearAll() {
    console.log(isClear)
    isClear = true; 
    const squares = document.querySelectorAll("#grid div");
    squares.forEach(square => {
        square.style.backgroundColor = "white";
    });
}

function createGrid() {
    const grid = document.getElementById("grid");

    for (let i = 0; i < 2000; i++) { 
        const square = document.createElement("div");

        if(isClear){
            square.style.backgroundColor = "white"
        }

        square.addEventListener("mousedown", () => {
            isMouseDown = true;
            square.style.backgroundColor = selectedColor;
        });

        square.addEventListener("mouseup", () => {
            isMouseDown = false;
        });

        square.addEventListener("mouseover", () => {
            if (isMouseDown) {
                square.style.backgroundColor = selectedColor;
            }
        });

        grid.appendChild(square);
    }
}

createGrid();
