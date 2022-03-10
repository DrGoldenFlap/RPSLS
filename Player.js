export class Player {
    constructor(name){
        this.name = name;
        this.win = 0;
        this.getsturInput = "";
        this.getsturList = ["Rock", "Paper", "Scissors", "Lizards", "Spock"];         
    }
    
}
export class Computer extends Player {
    constructor(name){
        super(name);
        }
    chooseGestur(){
       this.getsturInput = this.getsturList[Math.floor((Math.random() *this.getsturList.length))];
    }
}

export class Human extends Player{
    constructor(name){
        super(name);
    }
    chooseGestur(){
        this.getsturInput = this.getsturList[prompt("Choose your weapon. Rock, Paper, Scissors, Lizards, Spock.").toLowerCase];
    }
    chooseName(){
        this.name = prompt("What is your name");
    }
}


