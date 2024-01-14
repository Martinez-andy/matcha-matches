import { Board } from './toe';

let board = new Board();

board.makeMove(0, 1, "X");

board.makeMove(1, 2, "O");

board.makeMove(1, 1, "X");

board.printBoard();