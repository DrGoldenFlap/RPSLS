 "use strict"
 
 class User {
    constructor(name){
        this.name = name;
        this.win = 0;
        this.getsturInput = "";
        this.getsturList = ["Rock", "Paper", "Scissors", "Lizards", "Spock"];         
    }
    
}
class Computer extends User {
    constructor(name){
        super(name);
        }
    chooseGestur(){
       this.getsturInput = this.getsturList[Math.floor((Math.random() *this.getsturList.length))];
    console.log(this.getsturInput)
    }

}

class Human extends User{
    constructor(name){
        super(name);
    }
    chooseGestur(){
        let input = parseInt(prompt("Choose gesture Rock[0], Paper[1], Scissors[2], Lizards[3], Spock[4]."));
        this.getsturInput = this.getsturList[input];
    }

}

module.exports = {
    User,
    Computer,
    Human,
}

