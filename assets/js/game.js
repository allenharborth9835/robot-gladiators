// function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
  
    return value;
};

var fight = function(enemy){
    //repeat and execute as long as the enemy-robot is alive
    while(playerInfo.health > 0 && enemy.health > 0){

        var promptFight = window.prompt("Woukd you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        if (promptFight === "skip" || promptFight ==="SKIP"){
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quite?");

            //if yes (true), leave fight
            if(confirmSkip){
                window.alert(playerInfo.name + " has chosen to skip the fight. goodbye!");
                //subtract money from playerMoney for skipping
                playerInfo.money = playerInfo.money - 10;
                console.log("playerMoney", playerInfo.money);
                break;
            }
        }

        //Subtract the value of `playerAttack` from the value of `enemy.health` and use that result to update the value in the `enemy.health` variable
        var damage = randomNumber(playerInfo.attack - 3 , playerInfo.attack)

        enemy.health = Math.max(0, enemy.health - damage);
        console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
        );

        // check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + ' has died!');
  
            // award player money for winning
            playerInfo.money = playerInfo.money + 20;
  
            // leave while() loop since enemy is dead
            break;
        } else {
            window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
        }

        // Subtract the value of `enemy.attack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        var damage = randomNumber(enemy.attack-3, enemy.attack)
        
        playerInfo.health = Math.max(0, playerInfo.health - damage);

        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemy.name + " attacted " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        );

        //check players's health
        if (playerInfo.health <= 0){
            window.alert(playerInfo.name + " has died!");
            break;
        }else{
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
    }
};

//function to start a new game
var startGame = function (){
    //reset player states
    playerInfo.reset();

    for(var i =0; i < enemyInfo.length; i++){
        if(playerInfo.health > 0){
            window.alert('welcome to Robot Gladiators! Round ' + (i + 1));

            var pickedEnemyObj = enemyInfo[i];

            pickedEnemyObj.health = randomNumber(40, 60);

            fight(pickedEnemyObj);
            //if we're not at the last enemy in the array
            if(playerInfo.health > 0 && i < enemyInfo.length - 1){
                //ask if player wants to use the store before next round
                var storeConfirm = window.confirm("the fight is over, visit the store before the next round?")

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
    if(playerInfo.health > 0){
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
            if(playerInfo.money >= 7){
                window.alert("Refilling player's health by 20 for 7 dollars." + playerInfo.money + "left");
                //increase health and decrease money
                playerInfo.refillHealth();
                break;
            }else{
                window.alert("You don't have enough money!");
            }
        case "UPGRADE":
        case "upgrade":
            if(playerInfo.money >= 7){
                window.alert("Upgrade player's attack by 6 for 7 dollars." + playerInfo.money + "left");
                //increase attack and decrease money
                playerInfo.upgradeAttack();
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

var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function(){
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function(){
        this.health += 20;
        this.money -= 7;
    },
    upgradeAttack: function(){
        this.attack += 6;
        this.money -= 7;
    }
};

var enemyInfo = [
    {
        name:"Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name:"Amy Andriod",
        attack: randomNumber(10, 14)
    },
    {
        name:"Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

//start the game when the page loads
startGame();