const frame = document.querySelector(".frame");
const sizeChangeButton = document.querySelector(".size-changer");


//find the size of the cell based on the width of the frame
frameWidth = 500;
cellAmount = 16;
cellSize = frameWidth / cellAmount;

fillGrid();
cellFunctionality();

sizeChangeButton.addEventListener("click", () => {
    changeGridSize();
})


//make each cell fill with colour
function cellFunctionality() {
    cells = document.querySelectorAll("#cell");
    for (i = 0; i < cells.length; i++) {
        let cell = cells[i];
        cell.addEventListener("mouseover", () => {
            fillCell(cell);
        });
    }
}



//create the grid and fill with cells
function fillGrid() {
    for (i = 0; i < cellAmount * cellAmount; i++) {
        let newCell = document.createElement("div");
        newCell.setAttribute("id", "cell");
        newCell.style.display = "flex";
        newCell.style.boxSizing = "border-box";
        newCell.style.border = "1px solid blue";
        newCell.style.flexGrow = "0";
        newCell.style.flexShrink = "0";
        newCell.style.height = (cellSize + "px");
        newCell.style.width = (cellSize + "px");
        newCell.style.backgroundColor = "white";
        frame.appendChild(newCell);
    }
}

function clearGrid() {
    cells = document.querySelectorAll("#cell");
    for (i = 0; i < cells.length; i++) {
        let cell = cells[i];
        cell.remove();
    }
}

//change the background colour of a cell
function fillCell(cell) {
    cell.style.backgroundColor = ("black");
}

function changeGridSize() {
    let newSize = prompt("Enter a number (Max: 100)");
    if (newSize >= 0 && newSize <= 100) {
        clearGrid();
        cellAmount = newSize;
        cellSize = frameWidth / cellAmount;
        fillGrid();
        cellFunctionality();
    } else {
        changeGridSize();
    }
}