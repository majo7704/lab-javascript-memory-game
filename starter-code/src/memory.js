class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked= [];
    this.pairsGuessed;//card matched
  }
  }

  MemoryGame.prototype.shuffleCards = function (cards) {
    let currentIndex = cards.length,
      temporaryValue, randomIndex;
    while (currentIndex !== 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      let temporaryValue = cards[currentIndex];
      cards[currentIndex] = cards[randomIndex];
      cards[randomIndex] = temporaryValue;
    }
    return cards;
  }
      

  MemoryGame.prototype.checkIfPair = function (card1, card2) {
    
    if ( pickedCards.length <=2){
      (card1[0] === card2[1]) 
      pairsClicked.push(card1, card2)
      pairsClicked ++;
      pairsGuessed ++;
      return true
    } else {
      return false
    }
  }
  

  
  MemoryGame.prototype.isFinished = function() {

  }
