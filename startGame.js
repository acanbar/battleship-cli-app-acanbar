import inquirer from "inquirer";

function createBoard(size) {
  const board = [];

  for (let row = 0; row < size; row++) {
    const rowArray = [];
    for (let col = 0; col < size; col++) {
      rowArray.push({ type: "empty", hit: false });
    }
    board.push(rowArray);
  }
  return board;
}

const chooseBoard = async () => {
  const playerAnswer = await inquirer.prompt([
    {
      type: "list",
      name: "boardSize",
      message: `
      Welcome to BattleShip. Choose a Board Size, then Enter to select ⬆️ / ⬇️
          4X4:
          - [🔵] 1 large ship
          - [🟠] 1 small ship
          5X5
          - [🔵] 1 large ship
          - [🟠] 2 small ships
          6X6
          - [🔵] 2 large ships
          - [🟠] 2 small ships
          `,
      choices: ["4x4", "5x5", "6x6"],
    },
  ]);

  let size =
    playerAnswer.boardSize === "4x4"
      ? 4
      : playerAnswer.boardSize === "5x5"
      ? 5
      : 6;

  console.log("You selected:", playerAnswer.boardSize);
  const board = createBoard(size);
  console.log("Board created:");
  console.table(board);
};
chooseBoard();
