var arrClubs = [];
var arrDiamonds = [];
var arrHearts = [];
var arrSpades = [];
var arrDeck = [];
var arrJoker = [];

var arrAllCards = [];

var firstEmptyCard = "";
var idNb = 0;
var id = "";
var card = {};


// Clubs in Array
function mvClubsInArr() {
	idNb++;
	id = "card" + idNb;
  card.id = id;
  card.img = "cards/clubs01.png";
  arrClubs.push(card);
  console.log(arrClubs[0]);
}

mvClubsInArr();


var showCards = document.createElement("div");
showCards.setAttribute = ("img", arrClubs[0].img);
document.body.appendChild(showCards);









































































