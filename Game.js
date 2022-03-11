"use strict"

const prompt = require ('prompt-sync')();
const {Computer, Human} = require ("./Player")

class Game{
    constructor(){
    this.player1 = new Human();
    this.player2;
    }
    greetings(){
        console.log("Welcome to Rock, Paper, Scissors, Lizard, and Spock game");
    }
    rules(){
        console.log(`The rules of the games is to choose between Rock, Paper, Scissors, Lizard, and Spock. 
        The following are the winning combinations
        1. Scissors cuts paper
        2. Paper cover rock
        3. Rock cruses lizard
        4. Lizard poisons spock
        5. Spock smashes scissors
        6. Scissors decapitates lizard
        7. Lizard eats paper
        8. Paper disproves spock
        9. Spock vapourizes rock
        10. Rock crushes scissors `)
    }
    gameType(){
        let input = prompt("What type of game would you like to play? Single or Multiplayer: ").toLowerCase
        if(input == "single"){
        this.player2 = new Computer();         
        }
        else{
            this.player2 = new Human();
        }    
    
    }
    gameLogic(){
        this.player1.chooseGestur();
        this.player2.chooseGestur();
        console.log(`Player 1 Chose ${this.player1.getsturInput}`);
        console.log(`Player 2 Chose ${this.player2.getsturInput}`);
        if(this.player1.getsturInput === this.player2.getsturInput){
            console.log("We have a tie!")
        }
        else if( this.player1.getsturInput === "Rock"){
            if(this.player2.getsturInput === "Paper"){
                this.player2.win ++;
                console.log("Player 2 wins!");
            }
            else if(this.player2.getsturInput === "Scissors"){
                this.player1.win ++;
                console.log("Player 1 wins!");
            }
            else if(this.player2.getsturInput === "Lizards"){
                this.player1.win ++;
                console.log("Player 1 Wins!");
            }
            else if(this.player2.getsturInput === "Spock"){
                this.player2.win ++;
                console.log("Player 2 wins!");
            }
        }
        else if(this.player1.getsturInput === "Paper"){
            if(this.player2.getsturInput === "Rock"){
                this.player1.win ++;
                console.log("Player 1 wins!");
            }
            else if(this.player2.getsturInput === "Scissors"){
                this.player2.win ++;
                console.log("Player 2 wins!");
            }
            else if(this.player2.getsturInput === "Lizards"){
                this.player2.win ++;
                console.log("Player 2 wins!");
            }
            else if(this.player2.getsturInput === "Spock"){
                this.player1.win ++;
                console.log("Player 1 wins!");
            }
        }
        else if(this.player1.getsturInput === "Scissors"){
            if(this.player2.getsturInput === "Rock"){
                this.player2.win ++;
                console.log("Player 2 wins!");
            }
            else if(this.player2.getsturInput === "Paper"){
                this.player1.win ++;
                console.log("Player 1 wins!");
            }
            else if(this.player2.getsturInput === "Lizards"){
                this.player1.win ++;
                console.log("Player 1 wins!")
            }
            else if(this.player2.getsturInput === "Spock"){
                this.player1.win ++;
                console.log("Player 2 wins!")
            }
        }
        else if(this.player1.getsturInput === "Lizards"){
            if(this.player2.getsturInput === "Rock"){
                this.player2.win ++;
                console.log("Player 2 wins");
            }
            else if(this.player2.getsturInput === "Paper"){
                this.player1.win ++;
                console.log("Player 1 wins");
            }
            else if(this.player2.getsturInput === "Scissors"){
                this.player2.win ++;
                console.log("Player 2 wins!")
            }
            else if(this.player2.getsturInput === "Spock"){
                this.player1.win ++;
                console.log("Player 1 wins!")
            }
        }
        else if(this.player1.getsturInput === "Spock"){
            if(this.player2.getsturInput === "Rock"){
                this.player1.win ++;
                console.log("Player 1 wins!");
            }
            else if(this.player2.getsturInput === "Paper"){
                this.player2.win ++;
                console.log("Player 2 wins!")
            }
            else if(this.player2.getsturInput === "Scissors"){
                this.player1.win ++;
                console.log("Player 1 win!");
            }
            else if(this.player2.getsturInput === "Lizards"){
                this.player2.win ++;
                console.log("Player 2 wins!");
            }
        }

    }
    winGame(){
        if(this.player1.win < 3 && this.player2.win < 3){
            return this.gameLogic();
        }
        else if(this.player1.win == 3){
            console.log("Player 1 has won!");
            return this.gameType()
        }
        else if(this.player2.win == 3){
            console.log("Player 2 has won!")
            return this.gameType()
        }
   }
   playGame(){
       this.greetings();
       this.rules();
       this.gameType();
       this.gameLogic();
       this.winGame();
   }
}

module.exports = {
    Game
}
