const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const deck = [];
let player1Card = null;
let player2Card = null;

function buildDeck(arr1, arr2) {
	for(let i = 0; i < values.length; i++){
		for(let j = 0; j < suits.length; j ++) {
			let card = {num: arr1[i], suit: arr2[j], value: i}
			deck.push(card);
		}
	}
	// console.log(deck);
	return deck;
}
//math.random and splice to remove 2 cards from deck
function dealCardsToPlayers() {
	let removeCards1 = (Math.random(deck.splice(deck.length -3, 1)));
	let removeCards2 = (Math.random(deck.splice(deck.length -2, 1)));
	return removeCards1;
	return removeCards2;
}
//Player 1 is showing card whatever
//Player 2 is showing card whatever
function announceCards() {
	let player1Card = removeCards1;
	let player2Card = removeCards2; 
	console.log('Player 1 is showing ' + player1Card);
	console.log('Player 2 is showing ' + player2Card);
}
//To make things simpler on us, let's write the `cardToRank()` function which accepts a card and returns an integer "rank" for it. A card's rank will be a number between 2 and 14, based on the card's value. A `2 of Spades` will have a rank of `2`, `6 of Hearts` will have a rank of `6`. For face cards, the ranks should be: `Jack = 11, Queen = 12, King = 13, Ace = 14`.
function cardToRank(card) {
}
//which player wins
function announceWinner() {
	if(player1Card > player2Card){
		console.log('Player 1 wins!!');
	} else if(player2Card > player1Card) {
		console.log('Player 2 wins!!');
	} else {
		console.log('It\'s a tie!!');
	}

}

function returnCardsToDeck()
}

function playGame() {
  dealCardsToPlayers();
  announceCards();
  announceWinner();
  returnCardsToDeck();
}

buildDeck(values, suits);
playGame();

//Bonus: Keep track of how many games each player won. Log out the current score after each game. Maybe local storage