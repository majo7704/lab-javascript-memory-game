//$(document).ready(function(){
var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];
var memoryGame = new MemoryGame(cards);
console.log(memoryGame.shuffleCards(cards))

document.addEventListener("DOMContentLoaded", function(event) { 
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card div').forEach(function(card) {
    card.onclick = function(e) {
      // TODO: write some code here
      let clicked = e.currentTarget
      $(clicked).toggleClass('back front')
      $(clicked).siblings().toggleClass('front back')
      //if (clicked.className === 'front'){
        //return
      //}
      let currentlyClickedSuperHero = ($(clicked).parent().attr('data-card-name'))
        memoryGame.pickedCards.push(currentlyClickedSuperHero);
        memoryGame.pairsClicked.push(currentlyClickedSuperHero)
        

    }
    
  });

  
  let generate = function (){
    let shuffledCards = shuffleCards(cards);
    let fragment = document.createDocumentFragment();
    cards.forEach(function createCard(card) {
      let divToBeCloned = document.getElementsByClassName('.card')
      let newCard = divToBeCloned.cloneNode(true);
      fragment.appendChild(newCard)
      shuffledCards.appendChild(fragment)
    })
    generate();
  }
});
//})
