$(function (){
var randomTarget;
var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;
var totalScore;
var winCount = 0;
var lossCount = 0;
var gameFinished = false; //flag to restart game

newGame();

function newGame() {
gameFinished = false;
totalScore = 0;

$("#winOrLose").html("Click any crystal to get started!");

//Generate new target number and display it
randomTarget = Math.floor(Math.random() * 101) + 19;//19-120
$("#targetNum").html(randomTarget);

//Generate new value for each crystal and store it into img attribute for later calculation
crystalOne = Math.ceil(Math.random() * 12);//1-12;
crystalTwo = Math.ceil(Math.random() * 12);//1-12;
crystalThree = Math.ceil(Math.random() * 12);//1-12;
crystalFour = Math.ceil(Math.random() * 12);//1-12;
$("#crystal1").attr("crystalRandom",crystalOne);
$("#crystal2").attr("crystalRandom",crystalTwo);
$("#crystal3").attr("crystalRandom",crystalThree);
$("#crystal4").attr("crystalRandom",crystalFour);

updateDisplay();
}

function updateDisplay () {
    $("#winNum").html(winCount);
    $("#lossNum").html(lossCount);
    $("#totalNum").html(totalScore);
}

//Function to add crytal values upon clicking
$("img").on("click", function(){
    if(gameFinished){
        newGame();
        gameFinished = false;
    }else{
        //Define a variable for the img attr. This refers to img tag.
        var crystalValue = $(this).attr("crystalRandom");
        //Turn crystalValue to an integer with decimal base
        crystalValue = parseInt(crystalValue,10); //should always specify a radix
        console.log(crystalValue);
        totalScore += crystalValue;
        updateDisplay();

        if(totalScore === randomTarget){
            winCount++;
            $("#winOrLose").html("YOU WIN !!!");
            gameFinished = true;
        }else if(totalScore > randomTarget){
            lossCount++;
            $("#winOrLose").html("YOU LOSE");
            gameFinished = true;
        }
    }
    updateDisplay();
});

//Function to reset game anytime
$("#playAgain").on("click",function(){
    newGame();
});

})



