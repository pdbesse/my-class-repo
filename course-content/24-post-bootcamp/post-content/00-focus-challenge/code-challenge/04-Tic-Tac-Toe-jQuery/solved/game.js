$(document).ready(function() {

    // Initialize game object
    let game = theGame();

    // Kick off the game
    init();

    function init() {
        // If no moves have been taken, run selectFirstPlayer function
        if (game.moveCounter === 0) {
            selectFirstPlayer();
        } 
        // Else, determine if the currentPlayer is the comp and run the comp move if so
        else if (game.currentPlayer === "comp") {
            runCompMove();
        }
    }

    function selectFirstPlayer() {
        // Randomly select the first player using randomly generated 1 or 0.
        let rand = Math.floor(Math.random() * 2);
        if (rand === 1) {
            console.log("Comp goes first");
            setCurrentPlayer("comp");
            runCompMove();
        } else {
            console.log("user goes first");
            setCurrentPlayer("user");
        }
    } 

    // Helper function to set the current player
    function setCurrentPlayer(player) {
        game.currentPlayer = player;
    }

    // Handles the computer move
    function runCompMove() {

        console.log("run comp move");

        var noSpace = false;
        var foundSpace = false;

        // Helper function to select a random integer between 0 and 9, which will correspond to a random space on the game board
        var selectSpace = () => Math.floor(Math.random() * 9);

        // This will hold the spaces the computers has tried
        var triedSpaces = [];

        // Run this loop as long as foundSpace and noSpace remain false
        while(foundSpace === false && noSpace === false) {

            // Choose a random space
            var randSpace = selectSpace();

            // If the computer has not tried this space
            if (!triedSpaces.includes(randSpace)) {

                triedSpaces.push(randSpace)

                console.log("checking space at "+randSpace);
                // If there is not already a player on the random space
                if (game.board[randSpace] === false) {
                    // set foundSpace to true because the comp found an available space
                    foundSpace = true;
                }

            } else {
                // If the computer has tried all 9 spaces, then there are no spaces left
                if (triedSpaces.length === 9) {
                    noSpace = true;
                }
            }
        }

        // As long as noSpace is still false, i.e. the computer was able to find a space:
        if (!noSpace) {
            console.log("space at "+randSpace+" is good");

            // Add the computer's symbol to the space
            game.board[randSpace] = game.comp.symbol;

            // Add the last move to the comp's memory. This will be used for building in logic later.
            game.comp.lastCompMove = selectSpace;

            // change the game board display to reflect this move
            $('#'+randSpace).addClass('taken '+game.comp.symbol);

            return handleAfterMove(); 

        } else {
            // if the computer couldn't find a space, run the checkBoard() function
            return checkBoard();
        }

    }

    // Add click listener to .game-spot
    $('.game-spot').on('click', handleUserMove);

    function handleUserMove() {

        console.log("capture user click");

        // As long as this space is not taken or disabled, do the following:
        if (!$(this).hasClass('taken') && !$(this).hasClass('disabled')) {
            console.log('user moved');
            // grab the id of the space, this will correspond to our game.board array indices
            var space = $(this).attr('id')
            // add the taken class and the user's symbol to the game board
            $(this).addClass('taken').addClass(game.user.symbol);
            // add the user's move to the game.board array
            game.board[space] = game.user.symbol;
            return handleAfterMove();
        }
        return;
    }


    // This function runs after any move
    function handleAfterMove() {
        // Add one to the moveCounter
        game.moveCounter++;

        console.log("Current moves: " + game.moveCounter);

        // Check the status of the game
        var gameStatus = checkBoard();

        // if there isn't a winner yet
        if (!gameStatus.isWinner) {

            // If there have been more than 9 moves and there is still no winner, the game is a tie.
            if (game.moveCounter > 8) {
                return declareTie();
            } else {
                // Determine which player just went, swap to the alternate player, and initialize the next move
                if (game.currentPlayer === "comp") {
                    setCurrentPlayer("user");
                    return init();
                } else if (game.currentPlayer === "user") {
                    setCurrentPlayer("comp");
                    return init();
                }
            }
        } else {
            // If there is a winner, set the currentPlayer to null and run declareWinner function
            setCurrentPlayer(null);
            return declareWinner(gameStatus.winner);
        }   
    }

    function checkBoard() {

        let { board, moveCounter } = game;

        // Only check if there are more than 4 moves, as this means the first player has gone at least three times and thus has a chance to have three in a row

        if (moveCounter > 4) {

            // Map of Board:
            // 0, 1, 2
            // 3, 4, 5
            // 6, 7, 8

            // All possible combinations of winning, based on the map of the game board

            var row1 = board[0]+board[1]+board[2];
            var row2 = board[3]+board[4]+board[5];
            var row3 = board[4]+board[5]+board[6];
            
            var col1 = board[0]+board[3]+board[6];
            var col2 = board[1]+board[4]+board[7];
            var col3 = board[2]+board[5]+board[8];

            var diag1 = board[0]+board[4]+board[8];
            var diag2 = board[2]+board[4]+board[6];

            var possibles = [row1, row2, row3, col1, col2, col3, diag1, diag2];

            console.log(possibles);

            // Run through the possibles array and determine if ANY of the combinations are equal to three in a row for either player

            for (var i = 0; i < possibles.length; i++) {
                if (possibles[i] === "XXX" || possibles[i] === "OOO") {
                    console.log("there's a winner!");
                    return {isWinner: true, winner: possibles[i]};
                }
            }

            console.log('return winner false');
            // If we made it through the for loop without a winner, then return false
            return { isWinner: false };

        } else {
            // If there aren't more than 4 moves, there can't possibly be a winner
            return { isWinner: false };
        }

    }


    function declareWinner(winner) {
        // Delay the alert a bit so that the final move is displayed on the page before the winner is declared
        setTimeout(() => alert(winner[0].toUpperCase() + " is the winner!"), 100);
        // disabled the board so user can't add more of their symbol via clicking
        disableBoard();
    }

    function declareTie() {
        // Delay the alert a bit so that the final move is displayed on the page before the tie is declared
        setTimeout(() => alert("Oh no! You tied!"), 100);
        disableBoard();
    }

    function disableBoard() {
        // disable all the game spaces
        $('.game-spot').each(function() {
            $(this).addClass('disabled');
        });
    }

    // handles a click on the 'reset game' button. resets all aspects of the game and selects a new first player
    $('.reset-game').on('click',function() {
        $('.game-spot').each(function() {
            $(this).attr('class','game-spot');
        });
        game = theGame();
        selectFirstPlayer();
    });

    // returns blank game object
    function theGame() {
        return {
            user: {
                symbol: "X"
            },
            comp: {
                symbol: "O",
                lastCompMove: null,
                lastUserMove: null
            },
            currentPlayer: null,
            board: [false, false, false, false, false, false, false, false, false],
            moveCounter: 0
        }
    }

});