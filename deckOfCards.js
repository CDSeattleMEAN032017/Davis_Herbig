//This program emulates a standard deck of 52 playing cards.

class Deck {
    constructor(){
        this.library = []
        var suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
        var values = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"]
        for(var i = 0; i < 4; i++){
            for(var j = 0; j < 13; j++){
                var poddleHat = new Card(suits[i], values[j]);
                this.library.add(poodleHat);
            }
        }
    }
}

Deck.deal = () => this.hand.pop();

Deck.shuffle = () => {
    var i = 0
    var j = 0
    var temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

class Card{
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}

class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
    }
}

Player.draw = (num, deck) => {
    for (var i = 0; i < num; i++){
        this.hand.push(deck.deal)
    }
}

Player.discard = (card) => {
    for (var i = 0; i < array.length; i++) {
        if(card.suit == this.hand[i].suit && card.value == this.hand[i].value){
            var temp = this.hand[i];
            for (var j = i; j < array.length; j++) {
                this.hand[i] = this.hand[i+1];
            }
            this.hand.pop();
            return temp;
        }
    }
}