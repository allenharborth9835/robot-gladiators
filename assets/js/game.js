var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);


var fight = function(enemyName){
    //repeat and execute as long as the enemy-robot is alive
    while(enemyHealth > 0 && enemyHealth > 0){

        var promptFight = window.prompt("Woukd you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        if (promptFight === "skip" || promptFight ==="SKIP"){
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quite?");

            //if yes (true), leave fight
            if(confirmSkip){
                window.alert(playerName + " has chosen to skip the fight. goodbye!");
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + ' has died!');
  
            // award player money for winning
            playerMoney = playerMoney + 20;
  
            // leave while() loop since enemy is dead
            break;
        } else {
            window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
        }

        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + " attacted " + playerName + ". " + playerHealth + " now has " + playerHealth + " health remaining."
        );

        //check enemy's health
        if (playerHealth <= 0){
            window.alert(playerName + " has died!");
            break;
        }else{
            window.alert(playerName+ " still has " + playerName + " health left.");
        }
    }
};

//function to start a new game
var startGame = function (){
    //reset player states
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for(var i =0; i < enemyNames.length; i++){
        if(playerHealth > 0){
            window.alert('welcome to Robot Gladiators! Round ' + (i + 1));

            var pickedEnemyName = enemyNames[i];

            enemyHealth = 50;

            fight(pickedEnemyName);
        }
        else{
            window.alert('you have lost your robot in battle! game over!')
            break;
        }
    }
    //play again
    endGame();
};

//function to end the entire game
var endGame = function(){
    window.alert("The game has now ended. Let's see how you did!");
    //if player is still alive, player wind!
    if(playerHealth > 0){
        window.alert("Great job, you've survived the game! you now have a score")
    }else{
        window.alert("you've lost your robot in battle.");
    }
    //ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if(playAgainConfirm){
        //restart the game
        startGame();
    }
    else{
        window.alert("Thank you for playing Robot Gladiators! Come Back soon!")
    }
}

//start the game when the page loads
startGame();