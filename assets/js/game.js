var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth)

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(){
    //Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!")
    var promptFight = window.prompt("Woukd you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    if (promptFight === "fight"|| promptFight === "FIGHT"){
    
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;
    
        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth +" health remaining."
            );

        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + " attacted " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        //check enemy's health
        if (enemyHealth <= 0){
            window.alert(enemyName + " has died!");
        }
        else{
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
    }else if (promptFight === "skip" || promptFight ==="skip"){
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quite?");

        //if yes (true), leave fight
        if(confirmSkip){
            window.alert(playerName + " has chosen to skip the fight. goodbye!");
            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }
        //if no (false), ask question by running fight() again
        else{
            fight();
        }
    }else{
        window.alert("you need to choose a valid opition. Try again!");
    }
};

fight();