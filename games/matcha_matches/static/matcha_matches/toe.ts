class Board {
    // Declares board's type
    private board : string[][];

    // Initializes the board
    constructor() {
        this.board = [
            [" ", " ", " "],
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

    // TO-DO: Implement method that determines if the board has a winner
    hasWinner() : boolean {
        // Edge slots have 2 possible wins

        // Corner slots have 3 possible wins

        // Middle slot has 4 possible wins

        /* I don't think you need to check the winning positions for bottom right or [3, 2] or [2, 3] 
        because checking the other cases should do that for you, good luck Dalia :) */

        return false;
    }


    // Takes a "move" as input
    // Moves are lists with 2 elements formatted as -> [row, col]
    // First element represents the tic-tac-toe row and the second the column.
    validMove(move) : boolean {
        let [x, y] : [number, number]= move;

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