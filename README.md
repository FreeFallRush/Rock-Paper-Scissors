Project: Rock Paper Scissors - from The Odin Project Curriculum (https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors)


The exercise asks for a console browser version of the RPS game, but I went for an alert version instead, just because it's a bit more "in your face". Other than this change, I tried to follow all the steps requiered there and... boy, I had no clue how many headaches I will get trying to make this game. I stayed days to finally make this version, which I plan to upgrade after I learn more about DOM manipulation. 

The way I thought the game (helped also by the steps required in the exercise):
1. Make a function for the player, which prompts a message asking for a choice between Rock, Paper, Scissors. The choice is made case insensitive. The player gets an alert with the choice. In case the player types something else than Rock, Paper, Scissors, an alert reminds what the choices are. 
2. Make a function for the computer to pick randomly between Rock, Paper, Scissors. An alert shows the choice of the computer.
3. Make the single round function called playRound() which uses the first two functions made for player and computer. Adding a conditional in it, that goes through all the possible choices, points are given to the winner. An alert message shows who wins the round based on both players choices. [No score is showed yet]
4. Making a function for a game that has 5 rounds, keeping the score and announcing the game winner
This was the biggest challenge and here I had a lot of difficulties, since the Odin steps ask for the playRound function to be made with specific parameters 
![Screenshot - odin](https://user-images.githubusercontent.com/84788709/126489108-a8b7ed94-1bba-46a9-9579-dc942f688121.png)
If playRound function is kept like in the example, the game function will show the same result if playRound is called five times. For the game function to work, the playRound should be kept without parameters. 
After learning that, I could set the loop for 5 rounds, which alerts the score after each round and also make a final alert to announce the game winner. 

With the Rock, Paper, Scissors exercise I understood better the scope in javascript, how to call a function from another function, the return statement, the conditional statement and the loops, also how to break a big problem into elements and how to solve each of them until  I reach a final solution. It's a painful task, but brings many rewards and knowledge if you stick to it. 
