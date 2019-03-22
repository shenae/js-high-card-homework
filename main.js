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
	console.log(deck);
	return deck;
}
//write function that jack = 10 etc
//math.random or shuffle deck to give cards
function dealCardsToPlayers() {
}
//Player 1 got card Player 2 got card
function announceCards() {
}

function cardToRank(card) {
}
//which player wins
function announceWinner() {
}

function returnCardsToDeck() {
}

function playGame() {
  dealCardsToPlayers();
  announceCards();
  announceWinner();
  returnCardsToDeck();
}

buildDeck(values, suits);
playGame();