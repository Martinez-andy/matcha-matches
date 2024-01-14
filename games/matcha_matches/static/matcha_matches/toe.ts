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
    // TO-DO: IMPLEMENT validMove
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

    // 
    hasWinner() : boolean {
        return false;
    }


    // Takes a "move" as input
    // Moves are lists with 2 elements formatted as -> [row, col]
    // First element represents the tic-tac-toe row and the second the column.
    // TO-DO: IMPLEMENT VALID MOVE
    validMove(move) : boolean {
        return false;
    }
}
