
var suits = ['D', 'C', 'H', 'S'];
var values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];

var deck = [];

// Creates a deck of cards from suits and values array
var createDeck = function(suits, values) {
	for (var suitP = 0; suitP < suits.length; suitP++) {
		for (var valueP = 0; valueP < values.length; valueP++) {
			deck.push(values[valueP] + suits[suitP]);
		}
	}
	console.log("Deck created with a total card count of: " + deck.length);
	return deck;
}

// Standard implementation of Fisher-Yates (Knuth) Shuffle of array
var shuffle = function(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// Returns a shuffled deck of cards
var shuffleDeck = function() {
	var shuffledDeck = shuffle(createDeck(suits, values));
	console.log(shuffledDeck);
	return shuffledDeck;
}


shuffleDeck();