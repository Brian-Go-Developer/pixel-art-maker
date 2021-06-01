// Declare canvas
let canvas = document.getElementById("pixelCanvas");

// Select color input
const getGridColor = () => {
  let gridColor = document.getElementById("colorPicker").value;
  return gridColor;
};

// Select size input
const getGridHeight = () => {
  let gridHeight = document.getElementById("inputHeight").value;
  return gridHeight;
};

const getGridWidth = () => {
  let gridWidth = document.getElementById("inputWidth").value;
  return gridWidth;
};

// When size is submitted by the user, call makeGrid()
document.addEventListener("submit", (evt) => {
  evt.preventDefault();
  // Deletes existing canvas if user clicks submit again
  while (canvas.hasChildNodes()) {
    canvas.removeChild(canvas.lastChild);
  }
  // Call grid
  makeGrid();
});

function makeGrid() {
  // Create Row
  for (let i = 0; i < getGridHeight(); i++) {
    let row = document.createElement("tr");
    canvas.appendChild(row);
    // Create Columns
    for (let j = 0; j < getGridWidth(); j++) {
      let cell = document.createElement("td");
      row.appendChild(cell);

      // Filling in colors
      cell.addEventListener("mousedown", () => {
        cell.style.backgroundColor = getGridColor();
      });
    }
  }
}
