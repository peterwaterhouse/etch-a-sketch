const frame = document.querySelector(".frame");


//find the size of the cell based on the width of the frame
frameWidth = 500;
cellAmount = 16;
cellSize = frameWidth / cellAmount;



// const newCell = document.createElement("div");
// newCell.style.display = "flex";
// newCell.style.boxSizing = "border-box";
// newCell.style.border = "2px solid blue";
// newCell.style.flexGrow = "0";
// newCell.style.flexShrink = "0";
// newCell.style.height = (cellSize + "px");
// newCell.style.width = (cellSize + "px");

for (i = 0; i < cellAmount; i++) {
    makeRow();
    const paragraph = document.createElement("p");
    frame.appendChild(paragraph);
}

function makeRow() {
    for (i = 0; i < cellAmount; i++) {
        const newCell = document.createElement("div");
        newCell.style.display = "flex";
        newCell.style.boxSizing = "border-box";
        newCell.style.border = "2px solid blue";
        newCell.style.flexGrow = "0";
        newCell.style.flexShrink = "0";
        newCell.style.height = (cellSize + "px");
        newCell.style.width = (cellSize + "px");
        frame.appendChild(newCell);
    }
}