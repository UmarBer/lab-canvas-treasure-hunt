// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

// Iteration 1
function drawGrid() {
  const numberOfRows = 10;
  const rowWidth = width / numberOfRows;
  const rowHeight = height / numberOfRows;

  // Outer lines
  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(0, 500);
  context.lineTo(0, 0);
  context.stroke();
  context.closePath();
  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(500, 0);
  context.stroke();
  context.closePath();

  // Inner part of the grid
  for (let column = rowWidth; column <= width; column = column + rowWidth) {
    context.moveTo(column, 0);
    context.lineTo(column, width);

    context.moveTo(0, column);
    context.lineTo(width, column);

    context.stroke();
  }
  context.closePath();
}

// Character creation
class Character {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
  moveUp() {
    this.row -= 1;
  }
  moveRight() {
    this.col += 1;
  }
  moveDown() {
    this.row += 1;
  }
  moveLeft() {
    this.col -= 1;
  }
}

/*
const player = new Character(0, 0); // (0,0) = Initial position

player.moveDown(); // Increase by 1 the value of player.row
player.moveDown(); // Increase by 1 the value of player.row
player.moveRight(); // Increase by 1 the value of player.col
player.moveRight(); // Increase by 1 the value of player.col
player.moveRight(); // Increase by 1 the value of player.col

console.log(player.col, player.row); // => 1,2
*/

function drawEverything() {
  drawGrid();
  // drawPlayer()
  // drawTreasure()
}

drawEverything();
