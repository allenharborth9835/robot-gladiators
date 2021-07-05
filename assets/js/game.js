var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
  
    return value;
  };

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = randomNumber(40, 60);
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
        var damage = randomNumber(playerAttack -3 , playerAttack)

        enemyHealth = Math.max(0, enemyHealth - damage);
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
        var damage = randomNumber(enemyAttack-3, enemyAttack)
        
        playerHealth = Math.max(0, playerHealth - damage);

        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + " attacted " + playerName + ". " + playerHealth + " now has " + playerHealth + " health remaining."
        );

        //check enemy's health
        if (playerHealth <= 0){
            window.alert(playerName + " has died!");
            break;
        }else{
            window.alert(playerName + " still has " + playerHealth + " health left.");
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
            //if we're not at the last enemy in the array
            if(playerHealth > 0 && i < enemyNames.length - 1){
                //ask if player wants to use the store before next round
                var storeConfirm = window.confirm("the fight is over, visiy the store before the next round?")

                //if yes, take them to the store() function
                if (storeConfirm){
                    shop();
                }
            }
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
var shop = function() {
    console.log("enetered the shop")
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    switch(shopOptionPrompt){
        case "REFILL":
        case "refill":
            if(playerMoney >= 7){
                window.alert("Refilling player's health by 20 for 7 dollars.");

                //increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
                break;
            }else{
                window.alert("You don't have enough money!");
            }
        case "UPGRADE":
        case "upgrade":
            if(playerMoney >= 7){
                window.alert("Upgrade player's attack by 6 for 7 dollars.");

                //increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
                break;
            }else{
                window.alert("You don't have enough money!")
            }
        case "LEAVE":
        case "leave":
            window.alert("Leave the store.");

            //do nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try agian.");

            // call shope() again to force player to pick a valid option
            shop();
            break;
    }
};


//start the game when the page loads
startGame();