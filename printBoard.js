export const printBoard = (board, debug) => {
  const boardDisplay = {};

  for (let row = 0; row < board.length; row++) {
    const rowArray = [];

    for (let col = 0; col < board[row].length; col++) {
      const cell = board[row][col];

      if (debug) {
        rowArray.push(
          cell.type === "empty" ? "-" : cell.type === "large" ? "🔵" : "🟠"
        );
      } else {
        if (cell.hit) {
          rowArray.push(
            cell.type === "empty" ? "❗" : cell.type === "large" ? "🔵" : "🟠"
          );
        } else {
          rowArray.push("-");
        }
      }
    }

    const rowLabel = String.fromCharCode(65 + row);
    boardDisplay[rowLabel] = rowArray;
  }

  console.table(boardDisplay);
  return boardDisplay;
};
