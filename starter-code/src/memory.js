class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;//card matched
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
    

  MemoryGame.prototype.checkIfPair = function () {
    let pickedCards = this.pickedCards
      this.pairsClicked++;
      let card1 = pickedCards[0];
      let card2 = pickedCards[1]
      if($(card1).attr('data-card-name') === $(card2).attr("data-card-name")) {
        this.pairsGuessed++;

      } else if (card1.attr('data-card-name') !== card2.attr("data-card-name")) {
        $(this.pickedCards[0]).children(".front, .back").toggleClass("front back")
        $(this.pickedCards[1]).children(".front, .back").toggleClass("front back")
        // some for other 
      }
      this.pickedCards = [] 
  
}

  
  MemoryGame.prototype.isFinished = function() {

  }
