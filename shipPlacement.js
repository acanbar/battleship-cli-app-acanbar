function placeShips(board, size) {
  let numLargeShips = 0;
  let numSmallShips = 0;

  if (size === 4) {
    numLargeShips = 1;
    numSmallShips = 1;
  } else if (size === 5) {
    numLargeShips = 1;
    numSmallShips = 2;
  } else if (size === 6) {
    numLargeShips = 2;
    numSmallShips = 2;
  }
}

for (let i = 0; i < numLargeShips; i++) {
  placeSingleShip(board, "large");
}

function placeSingleShip(board, type, length, id) {}

function getRandomCoord(size) {
  const row = Math.floor(Math.random() * size);
  const col = Math.floor(Math.random() * size);
  return [row, col];
}

function getRandomOrientation() {
  let orientation = Math.random() < 0.5 ? "horizontal" : "vertical";
  return orientation;
}

function canPlaceShip(board, row, col, length, orientation) {
  const size = board.length;
  if (orientation === "horizontal") {
    if (col + length > size) return false;
    for (let c = col; c < col + length; c++) {
      if (board[row][c].type !== "empty") return false;
    }
  } else {
    if (row + length > size) return false;
    for (let r = row; r < row + length; r++) {
      if (board[r][col].type !== "empty") return false;
    }
  }
  return true;
}
