# Crystals Collector Game

> Crystals Collector is a simple interactive web game build with **jQuery Library**.

<img src="assets/images/thumbnail.jpg" width="80%">

## General Info

- The player will be shown a random **Target Number** at the start of the game.
- When the player clicks on a crystal, it will add a specific amount of points to the player's **Total Score**. 
- The player *wins* if their Total Score matches the Target Number.
- The player *loses* if their Total Score goes above the Target Number.

## Live Demo

Try live demo [here](https://tracytn0411.github.io/unit-4-game/).

## Docs

1. The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters.

2. How the app works:

   * There will be four crystals displayed as buttons on the page.

   * The player will be shown a random number at the start of the game.

   * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

     * The game will hide this amount until the player clicks a crystal.
     * When they do click one, update the player's score counter.

   * The player wins if their total score matches the random number from the beginning of the game.

   * The player loses if their score goes above the random number.

   * The game restarts whenever the player wins or loses.

     * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

   * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

### :sparkle: Game design notes

* The random number shown at the start of the game should be between 19 - 120.

* Each crystal should have a random hidden value between 1 - 12.