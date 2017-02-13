* **Instructions**

  * Over the course of this assignment you are going to put together a function which uses constructors and user input to create and manage a team of players.

  * Start out by creating a constructor function called "Player" with the following properties and methods...

    * Player name: Property which contains the player's name
    * Position: Property which holds the player's position
    * Offense: Property which is a value between 1 and 10 to show how good this player is on offense
    * Defense: Property which is a value between 1 and 10 to show how good this player is on defense
    * GoodGame: Method which increases either the player's offense or defense property based upon a coinflip.
    * BadGame: Method which decreases either the player's offense or defense property based upon a coinflip.
    * PrintStats: Method which prints all of the player's properties to the screen

  * Now create a program which allows you to create 8 unique players; 5 starters and 3 subs.

  * Once all of the players have been created, print their stats.

  * Once your code is functioning properly, move on to create a function called "playGame" which will be run once all of your players have been created and will do the following...

    * Loops 10 times
    * Each time the function loops, two random numbers between 1 and 50 are rolled and compared against your starter's offensive and defensive stats
      * If the first number is lower than the sum of your team's offensive stat, add one point to your team's score.
      * If the second number is higher than the sum of your team's defensive stat, remove one point from your team's score.
    * After the score has been changed, you may choose to substitute any of your players within the starters array with any of those players within the subs array.
    * If your score is positive after the game has finished, run goodGame() for all of those players currently within the starters array. If your score is negative after the game has finished, run badGame() for all of those players currently within your starters array. If the score is equal to zero, then do nothing.
    * Prompts the player if they would like to play again: runs playGame from the start once more if they do and ends the program if they don't.

  * HINT: Remember to use recursion when looping with inquirer! Otherwise your program might not return the prompts as you expect.

  * HINT: It has been a while since we have worked with random numbers explicitly. If you are having troubles, look up Math.random on Google and you should find some resources to help.
