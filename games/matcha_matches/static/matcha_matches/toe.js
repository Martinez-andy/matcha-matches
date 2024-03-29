"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.game = exports.Board = void 0;
var _ = require("lodash");
var promptSync = require("prompt-sync");
var Board = /** @class */ (function () {
    // Initializes the board
    function Board() {
        this.board = [
            [" ", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "],
        ];
        this.columns = [
            [" ", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "],
        ];
        this.diagonals = [
            [" ", " ", " "],
            [" ", " ", " "],
        ];
    }
    // Takes in a row and column and also a player's string (e.g. "X" or "O") as input
    // Executes move and returns true if the move is valid
    // Returns false, otherwise
    Board.prototype.makeMove = function (row, col, player) {
        if (this.validMove([row, col])) {
            this.board[row][col] = player;
            // Adds player's symbol to columns
            this.columns[col][row] = player;
            // Adds player's symbol to diagonal that goes from top left to bottom right
            if (row === col) {
                this.diagonals[0][row] = player;
            }
            // Add player's symbol to diagonal that goes from top right to bottom left
            if (row === 2 - col) {
                this.diagonals[1][row] = player;
            }
            return true;
        }
        return false;
    };
    // Checks the board to see if there are any empty slots, returns true if there are and false otherwise
    Board.prototype.emptySlots = function () {
        for (var row = 0; row < this.board.length; row++) {
            for (var col = 0; col < this.board[0].length; col++) {
                if (this.board[row][col] === " ") {
                    return true;
                }
            }
        }
        return false;
    };
    Board.prototype.hasWinner = function () {
        // Set variables for when either player wins (will be used in the comparisons)
        var xWin = ["X", "X", "X"];
        var oWin = ["O", "O", "O"];
        // Iterate through every row
        for (var i = 0; i < this.board.length; i++) {
            // Checks diagonals for winning positions (i < 3 b/c only 2 diagonals)
            if (i < 3) {
                var diag = this.diagonals[i];
                if (_.isEqual(diag, xWin) || _.isEqual(diag, oWin)) {
                    return true;
                }
            }
            // Checks columns for wining position
            var cols = this.columns[i];
            if (_.isEqual(cols, xWin) || _.isEqual(cols, oWin)) {
                return true;
            }
            // Checks rows for winning position
            var rows = this.board[i];
            if (_.isEqual(rows, xWin) || _.isEqual(rows, oWin)) {
                return true;
            }
        }
        // If we make it here that means no winners exist so return false
        return false;
    };
    // Takes a "move" as input
    // Moves are lists with 2 elements formatted as -> [row, col]
    // First element represents the tic-tac-toe row and the second the column.
    Board.prototype.validMove = function (move) {
        var x = move[0], y = move[1];
        // Determines if the move numbers valid board spots
        var withinRange = 0 <= x && x < 3 && 0 <= y && y < 3;
        // Returns true if the move is valid and false if not
        return withinRange && this.board[x][y] === " ";
    };
    // Used for a pretty visualiztion of the board
    Board.prototype.printBoard = function () {
        for (var row = 0; row < this.board.length; row++) {
            console.log(this.board[row]);
        }
    };
    // Abstracts away getting user input. 
    // Implements a do-while loop to enforce proper inputs
    Board.prototype.userInput = function () {
        var row;
        var col;
        var prompt = promptSync();
        do {
            var rowStr = prompt("row number: ");
            var colStr = prompt("col number: ");
            row = parseInt(rowStr);
            col = parseInt(colStr);
            if (0 >= Math.min(row, col) || Math.max(row, col) > 2) {
                console.log("Input must be in bounds [0, 2]");
            }
        } while (!this.validMove([row, col]));
        return [row, col];
    };
    return Board;
}());
exports.Board = Board;
// TO-DO: Make sure to implement the hasWinner method before creating the function
/* TO-DO: implement the game function. A lot of the needed methods are implemented in the class above.
    Google what classes and objects are and how to deal with them in javascript.
    Note: This file is written in TypeScript, it is basically javascript but we must define types for each variable
    and for each function. Remember that hasWinner returns a boolean value, so consider implementing the game using some
    sort of loop, where the game continues so long as there is a winner and there are free slots on the board.
    Read the comments in the class above to figure out what the methods do, what values they return and how you can use
    them to create the rest of the game. Good luck, Dalia! :)
*/
function game() {
    // List of players
    var players = ["X", "O"];
    // turn keeps track of whose turn it is 
    var turn = 0;
    // Uses the board class to initialize a new board
    var board = new Board();
    // Loops over the logic while no one has won the game yet and while there are playable slots.
    do {
        // Keeps track of which player is going to move
        var player = players[turn % 2];
        // Prints the board (built into the board class)
        board.printBoard();
        console.log("Player ".concat(player, "'s turn"));
        // Takes in a valid move input (keeps asking until move is valid) also built into the board class
        var _a = board.userInput(), row = _a[0], col = _a[1];
        // We know move is valid so we can blindly execute the move
        board.makeMove(row, col, player);
        if (board.hasWinner()) {
            console.log("Player ".concat(player, " has won!"));
        }
        turn++;
    } while (!board.hasWinner() && board.emptySlots());
    // If we exit the loop, and no one has won then that means a tie has occured, so we declare such
    if (!board.hasWinner()) {
        board.printBoard();
        console.log("There was a tie!");
    }
}
exports.game = game;
