import { printBoard } from "./printBoard.js";

const testBoard = [
  [
    { type: "large", id: 1, hit: false }, // A0
    { type: "small", id: 2, hit: true }, // A1 ← hit small
    { type: "small", id: 2, hit: false }, // A2
  ],
  [
    { type: "large", id: 1, hit: false }, // B0
    { type: "empty", hit: true }, // B1 ← miss
    { type: "empty", hit: false }, // B2
  ],
  [
    { type: "large", id: 1, hit: false }, // C0
    { type: "empty", hit: false }, // C1
    { type: "empty", hit: false }, // C2
  ],
];

console.log("TEST:");
printBoard(testBoard, false);

console.log("TEST:");
printBoard(testBoard, true);
