import { Board } from './toe';

let board = new Board();

board.makeMove(0, 0, "X");


board.printBoard();

console.log(board.hasWinner());

board.makeMove(0, 1, "O")

board.makeMove(1, 1, "O");

board.makeMove(2, 0, "X");

board.makeMove(2, 1, "O");

board.makeMove(0, 2, "X");

board.makeMove(0, 1, "O")

board.makeMove(1, 1, "O");

board.makeMove(2, 0, "X");

board.makeMove(2, 1, "O");