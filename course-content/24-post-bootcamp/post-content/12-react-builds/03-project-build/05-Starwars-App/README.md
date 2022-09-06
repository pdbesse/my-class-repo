## Summary
​
In this assignment, you'll build the `Starwars` app with react.
​
**General Layout**

### Star Wars RPG Game

1. [Watch the demo](https://youtu.be/klN2-ITjRt8).

2. Here's how the app works:

   * When the game starts, the player will choose a character by clicking on the fighter's picture. This can be a `DisplayCharacters` component. Based on user's choice pass the prop to `Game` component

   * Create a `Enemy` component that contains images, so that the player chooses an opponent by clicking on an enemy's picture. 

   * Call the `DefenderArea` component once the player selects an opponent, that enemy is moved to a `defender area`.

**Game Logic** 

   * The player will now be able to click the `attack` button.
     * Whenever the player clicks `attack`, their character damages the defender. The opponent will lose `HP` (health points). These points are displayed at the bottom of the defender's picture. 
     * The opponent character will instantly counter the attack. When that happens, the player's character will lose some of their `HP`. These points are shown at the bottom of the player character's picture.

3. The player will keep hitting the attack button in an effort to defeat their opponent.

   * When the defender's `HP` is reduced to zero or below, remove the enemy from the `defender area`. The player character can now choose a new opponent.

4. The player wins the game by defeating all enemy characters. The player loses the game the game if their character's `HP` falls to zero or below.

##### Game design notes

* `Character` component has 3 attributes: `Health Points`, `Attack Power` and `Counter Attack Power` and takes in the prop with different characters chosen. 

* Each time the player attacks, their character's Attack Power increases by its base Attack Power. 
  * For example, if the base Attack Power is 6, each attack will increase the Attack Power by 6 (12, 18, 24, 30 and so on).
* The enemy character only has `Counter Attack Power`. 

  * Unlike the player's `Attack Points`, `Counter Attack Power` never changes.

* The `Health Points`, `Attack Power` and `Counter Attack Power` of each character must differ.

* No characters in the game can heal or recover Health Points. 

  * A winning player must pick their characters wisely by first fighting an enemy with low `Counter Attack Power`. This will allow them to grind `Attack Power` and to take on enemies before they lose all of their `Health Points`. Healing options would mess with this dynamic.

* Your players should be able to win and lose the game no matter what character they choose. The challenge should come from picking the right enemies, not choosing the strongest player.


**Suggested Simple design**

![GIPHY](images/2-StarWars.jpg)

Be creative in your design layout!

**Good Luck!**