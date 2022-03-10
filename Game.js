function gameMenue {
    let gameType = promptFor("Single or Multiplayer?");
    let gameSelection;
    switch(gameType){
        case 'single':
            gameSelection = singlePlayer();
            break;
        case 'multiplayer':
            gameSelection = multiPlayer();
            break;
        default:
            gameMenue;
            break;

    }
}

function singlePlayer{
    
}























function promptFor(question, valid){
    let isValid;
    do{
      var response = prompt(question).trim();
      isValid = valid(response);
    } while(response === ""  ||  isValid === false)
    return response;
  }