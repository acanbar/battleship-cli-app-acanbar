import inquirer from "inquirer";

// Generate empty board:
function userBoardsize(size) {
  const board = [];

  for (let row = 0; row < size; row++) {
    const rowArray = [];
    for (let col = 0; col < size; col++) {
      rowArray.push({ type: "empty", hit: false });
    }
    board.push(rowArray);
  }
  console.clear();
  return board;
}

// Render board as A,B, C...: TESTING PURPOSES
function renderBoardWithLetters(board) {
  const rowLabels = "ABCDEF";
  const labeledBoard = {};

  for (let i = 0; i < board.length; i++) {
    labeledBoard[rowLabels[i]] = board[i];
  }

  console.clear();
  console.table(labeledBoard);
}

function renderBoard() {}

// 3. Placeholder for ship placement logic
function placeShips(board, numLarge, numSmall) {
  // You'll call placeShip() multiple times here
  // For now, just leave it empty
}

// User selects board size:
const main = async () => {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "boardSize",
      message: "Choose your board size: ⬆️ / ⬇️  then Enter to select",
      choices: ["4x4", "5x5", "6x6"],
    },
  ]);

  let size =
    answer.boardSize === "4x4" ? 4 : answer.boardSize === "5x5" ? 5 : 6;

  console.log("You selected:", answer.boardSize);
  const board = userBoardsize(size);
  let rendBoard = renderBoardWithLetters(board);
  // console.table(rendBoard);
};

main();
