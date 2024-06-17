const frame = document.querySelector(".frame");


//find the size of the cell based on the width of the frame
frameWidth = 500;
cellAmount = 64;
cellSize = frameWidth / cellAmount;

fillGrid();



cells = document.querySelectorAll("#cell");
for (i = 0; i < cells.length; i++) {
    let cell = cells[i];
    cell.addEventListener("mouseover", () => {
        fillCell(cell);
    });
}
//cell.addEventListener("click", fillCell(cell));
//cell.onmouseover = fillCell(cell);



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
            //newCell.addEventListener("mouseover", fillCell());
            frame.appendChild(newCell);
        }
    }

function fillCell(cell) {
        cell.style.backgroundColor = ("black");
        //alert("test");
    }