const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
let card = [];
const deck = [];
// let a = (Math.floor(Math.random()*(deck.length -3)));
// let b = (Math.floor(Math.random()*(deck.length -2)));
// let b = deck[Math.floor(Math.random())];
let player1Card = null;
let player2Card = null;
// let a = deck[Math.floor(Math.random() * deck.length)];
// let b = deck[Math.floor(Math.random() * deck.length)];

// let removeCards1 = (Math.floor(Math.random()*(deck.splice(deck.length -3, 1))));
// let removeCards2 = (Math.floor(Math.random()*(deck.splice(deck.length -2, 1))));

function buildDeck(arr1, arr2) {
	for(let i = 0; i < values.length; i++){
		for(let j = 0; j < suits.length; j ++) {
			let card = {num: arr1[i], suit: arr2[j], value: i}
			deck.push(card);
		}
	}
	//console.log(deck);
	return deck;
}
//math.random and splice to remove 2 cards from deck
function dealCardsToPlayers() {
	player1Card = deck[Math.floor(Math.random() * deck.length)];
	player2Card = deck[Math.floor(Math.random() * deck.length)];

	console.log(player1Card);
	console.log(player2Card);
	// let player1Card = removeCards1;
	// let player2Card = deck.splice(0,1) * removeCards2;
	
	// let a = (Math.floor(Math.random()*(deck.length -1)));
	// let b = (Math.floor(Math.random()*(deck.length -2)));
	// // return removeCards1;
	// // return removeCards2;
	// console.log(removeCards1) * (deck.splice);
	// console.log(removeCards2) * (deck.splice);
}
//Player 1 is showing card whatever
//Player 2 is showing card whatever
function announceCards() {
	// let player1Card = a;
	// let player2Card = b;
	// let player1Card = card[a] * (deck.splice, 2);
	// let player1Card = card * a;
	// let player2Card = card[b];
	// let player1Card = deck[Math.floor(Math.random() * deck.length)];
	// let player2Card = deck[Math.floor(Math.random() * deck.length)];
	console.log(`Player 1 is showing: ${player1Card.num} of ${player1Card.suit}`);
	console.log(`Player 2 is showing: ${player2Card.num} of ${player2Card.suit}`);
}
//To make things simpler on us, let's write the `cardToRank()` function which accepts a card and returns an integer "rank" for it. A card's rank will be a number between 2 and 14, based on the card's value. A `2 of Spades` will have a rank of `2`, `6 of Hearts` will have a rank of `6`. For face cards, the ranks should be: `Jack = 11, Queen = 12, King = 13, Ace = 14`.
// function cardToRank(card) {
// }
//which player wins
function announceWinner() {
	if(player1Card.value > player2Card.value){
		console.log('Player 1 wins!!');
	} else if(player2Card.value > player1Card.value) {
		console.log('Player 2 wins!!');
	} else {
		console.log('It\'s a tie!!');
	}

}
//deck.pop or same for loop as build deck but opposite 
function returnCardsToDeck() {
	deck.pop(card);
// 	for (var i = arr.length; i > 0; i--) {
 
//  arr.pop();
 
// }
}

function playGame() {
  dealCardsToPlayers();
  announceCards();
  announceWinner();
  returnCardsToDeck();
}

buildDeck(values, suits);
playGame();

/* Bonus: Keep track of how many games each player won. Log out the current score after each game. Maybe local storage */