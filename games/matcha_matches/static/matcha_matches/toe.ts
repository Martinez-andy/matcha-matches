import * as _ from 'lodash';

class Board {
    // Declares board's type
    private board : string[][];
    private columns : string[][];
    private diagonals : string[][];

    // Initializes the board
    constructor() {
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
    makeMove(row: number, col: number, player: string): boolean {
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
    }

    // Checks the board to see if there are any empty slots, returns true if there are and false otherwise
    emptySlots() : boolean {
        for (let row = 0; row < this.board.length; row++) {
            for (let col = 0; col < this.board[0].length; col++) {
                if (this.board[row][col] === " ") {
                    return true;
                }
            }
        }
        return false;
    }


    hasWinner() : boolean {
        // Iterate through every row
        let xWin : string[] = ["X", "X", "X"];
        let oWin : string[] = ["O", "O", "O"];

        for (let i = 0; i < this.board.length; i++) {
            // Checks diagonals for winning positions
            if (i < 3) {
                let diag = this.diagonals[i]
                if (_.isEqual(diag, xWin) || _.isEqual(diag, oWin)) {
                    return true;
                }
            }

            // Checks columns for wining position
            let cols = this.columns[i]
            if (_.isEqual(cols, xWin) || _.isEqual(cols, oWin)) {
                return true;
            }

            let rows = this.board[i]
            if (_.isEqual(rows, xWin) || _.isEqual(rows, oWin)) {
                return true;
            }
        }
        return false;
    }


    // Takes a "move" as input
    // Moves are lists with 2 elements formatted as -> [row, col]
    // First element represents the tic-tac-toe row and the second the column.
    validMove(move) : boolean {
        let [x, y] : [number, number] = move;

        // Determines if the move numbers valid board spots
        let withinRange : boolean = 0 <= x && x < 3 && 0 <= y && y < 3;
        // Returns true if the move is valid and false if not
        return withinRange && this.board[x][y] === " ";
    }

    printBoard() : void {
        for (let row = 0; row < this.board.length; row++) {
            console.log(this.board[row]);
        }
    }
}


export { Board };


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

}