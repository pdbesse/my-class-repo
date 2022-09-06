## Summary
​
Tic-Tac-Toe is a simple Game

## Rules:

* The game is to be played between two people (in this program between HUMAN and COMPUTER).
* One of the player chooses ‘O’ and the other ‘X’ to mark their respective cells. 
* The game starts with one of the players and the game ends when one of the players has one whole row/ column/ diagonal filled with his/her respective character (‘O’ or ‘X’). 
* If no one wins, then the game is said to be draw.
​

**Your goals for this challenge are:**
​
- Create a Game object to store four basic properties (user, computer, currentPlayer, moves)
- Create a function that takes `id` as an argument which is the id of the clicked button. Then it sets the figures to user and computer players by passing to those properties the correct Font-awesome icon (X or O). Then it calls 2 functions — firstMove and setCurrPl
- The firstMove function is responsible for making a first move in game for the computer
- setCurrPl function on the other hand is responsible for setting the current player.
- After the first move has been made it’s the user’s turn to make a move. To handle that interaction each time user will click element it’s id will be send to icon function. This function takes only one argument — the id of an element. Then it uses this id to find the right div and place the icon of current player on that field.
- After that the function checks the status of the game to check whether the game should end or continue, and changes the current player to contrasting value
- Create a function named `comp` to write the logic for computer moves. Now the function checks every field possible from 1–9 and makes a move to in first available field(This is a Easy logic. Be creative and make the game interesting)


**Good Luck!**



