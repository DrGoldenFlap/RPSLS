class Player {
    constructor(name){
        this.name = name;
        this.win = 0;
        this.getsturInput = "";
        this.getsturList = ["Rock", "Paper", "Scissors", "Lizards", "Spock"];         
    }
    
}
class Computer extends Player {
    constructor(name){
        super(name);
        }
    chooseGestur(){
       this.getsturInput = this.getsturList[Math.floor((Math.random() *this.getsturList.length))];
    }
}

class Human extends Player{
    constructor(name){
        super(name);
    }
    this.getsturInput = this.getsturList
}
