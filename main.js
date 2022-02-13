// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

const numberOfRows = 10;
const size = 500 / numberOfRows;

const playerIcon = new Image();
playerIcon.src = '/images/character-down.png';

const treasureIcon = new Image();
treasureIcon.src = '/images/treasure.png';

const randomBetweenIntegers = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

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
class Treasure {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
  setRandomPosition() {
    let row = randomBetweenIntegers(0, 10) * size;
    let col = randomBetweenIntegers(0, 10) * size;
  }
}

const player = new Character(0, 0);
const treasure = new Treasure(50, 50);

// Iteration 1
function drawGrid() {
  for (let i = 0; i < numberOfRows; i++) {
    for (let j = 0; j < numberOfRows; j++) {
      context.rect(j * size, i * size, size, size);
    }
  }
  context.strokeStyle = 'black';
  context.lineWidth = 3;
  context.stroke();
}

const clean = () => {
  context.clearRect(0, 0, 500, 500);
};

drawPlayer = () => {
  playerIcon.onload = () => {
    context.drawImage(
      playerIcon,
      player.row * size,
      player.col * size,
      size,
      size
    );
  };
};

drawTreasure = () => {
  treasureIcon.onload = () => {
    context.drawImage(treasureIcon, treasure.row, treasure.col, size, size);
  };
};

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  switch (event.code) {
    case 'ArrowLeft':
      player.moveLeft();
      console.log('left');
    case 'ArrowUp':
      player.moveUp();
      break;
    case 'ArrowRight':
      player.moveRight();
      break;
    case 'ArrowDown':
      player.moveDown();
      break;
  }
  drawEverything();
});

const drawEverything = () => {
  drawGrid();
  drawPlayer(100, 200);
  drawTreasure(0, 0);
};

drawEverything();

/*

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
for (let column = size; column <= width; column = column + size) {
  context.moveTo(column, 0);
  context.lineTo(column, width);
  
  context.moveTo(0, column);
  context.lineTo(width, column);
  
  context.stroke();
}
context.closePath();*/

// Drawing the player
/*const player = new Character(0, 0);

function drawPlayer(col, row) {
  class Player extends Character {
    constructor(col, row) {
      super(col, row);
      this.col = col;
      this.row = row;
    }
    drawOfPlayer() {
      const playerImg = new Image();
      playerImg.src = 'images/character-down.png';
      context.drawImage(playerImg, this.col, this.row, 50, 50);
    }
  }
  let newPlayer = new Player(col, row);
  newPlayer.drawOfPlayer(col, row);
}

drawPlayer(100, 300);

// Drawing the treasure

class Treasure {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
  setRandomPosition() {
    let row = randomBetweenIntegers(0, 10) * size;
    let col = randomBetweenIntegers(0, 10) * size;
  }
}

const treasure = new Treasure(50, 50);
//treasure.setRandomPosition();
/*

player.moveDown(); // Increase by 1 the value of player.row
player.moveDown(); // Increase by 1 the value of player.row
player.moveRight(); // Increase by 1 the value of player.col
player.moveRight(); // Increase by 1 the value of player.col
player.moveRight(); // Increase by 1 the value of player.col

console.log(player.col, player.row); // => 1,2
*/
/*Check for keys
document.onkeydown = (e) => {
  playerMovement(e.key);
  drawEverything();
}; */
