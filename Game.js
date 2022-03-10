"use strict"

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
        let input = prompt("What type of game would you like to play? Single or Multiplayer")
        if(input == "Single"){
        this.player2 = new Computer();         
        }
        else{
            this.player2 = new Human();
        }    
    
    }
    gameLogic(){
        this.player1.chooseGestur();
        this.player2.chooseGestur();
        if(this.player1.getsturInput === this.player2.getsturInput){
            console.log("We have a tie!")
        }
        else if( this.player1.getsturInput === [0]){
            if(this.player2.getsturInput === [1]){
                console.log("Player 2 wins!")
            }
            else if(this.player2.getsturInput === [2]){
                console.log("Player 1 wins!")
            }
            else if(this.player2.getsturInput === [3]){
                console.log("Player 1 Wins!")
            }
        }

    }
}
