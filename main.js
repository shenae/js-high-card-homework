const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
let card = [];
const deck = [];
let player1Card = null;
let player2Card = null;

//Kenny walked us through this. Thanks Kenny!
function buildDeck(arr1, arr2) {
	for(let i = 0; i < values.length; i++){
		for(let j = 0; j < suits.length; j ++) {
			let card = {num: arr1[i], suit: arr2[j], value: i + 2}
			deck.push(card);
		}
	}
	//console.log(deck);
	return deck;
}
//math.random or splice to remove 2 cards from deck
function dealCardsToPlayers() {

	player1Card = deck[Math.floor(Math.random() * deck.length)];
	player2Card = deck[Math.floor(Math.random() * deck.length)];

	// console.log(player1Card);
	// console.log(player2Card);
}
//players show cards...call the value as part of an object not an array
function announceCards() {
	console.log(`Player 1 is showing: ${player1Card.num} of ${player1Card.suit}`);
	console.log(`Player 2 is showing: ${player2Card.num} of ${player2Card.suit}`);
}
//To make things simpler on us, let's write the `cardToRank()` function which accepts a card and returns an integer "rank" for it. A card's rank will be a number between 2 and 14, based on the card's value. A `2 of Spades` will have a rank of `2`, `6 of Hearts` will have a rank of `6`. For face cards, the ranks should be: `Jack = 11, Queen = 12, King = 13, Ace = 14`.

// function cardToRank(card) {
	/* no need for me to do this because I changed the value in the buildDeck function to i + 2 !!! */
// }

//which player wins...call card value
function announceWinner() {
	if(player1Card.value > player2Card.value){
		console.log('Player 1 wins!! HOLLA!!!!');
	} else if(player2Card.value > player1Card.value) {
		console.log('Player 2 wins!! YASSS!!!!');
	} else {
		console.log('It\'s a tie!! WHAAAAT?!?!');
	}

}
//deck.pop or same loop to build deck but opposite 
function returnCardsToDeck() {
			deck.pop(card);
}

function playGame() {
  dealCardsToPlayers();
  announceCards();
  //cardToRank();
  announceWinner();
  returnCardsToDeck();
}

buildDeck(values, suits);
playGame();

/* Bonus: Keep track of how many games each player won. Log out the current score after each game. Maybe local storage */