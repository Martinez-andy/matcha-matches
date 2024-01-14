"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toe_1 = require("./toe");
var board = new toe_1.Board();
board.makeMove(0, 1, "X");
board.makeMove(1, 2, "O");
board.makeMove(1, 1, "X");
board.printBoard();
