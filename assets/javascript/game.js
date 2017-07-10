$(document).ready(function() {

	//First we generate a random number to guess.
	var targetNumber = Math.floor(Math.random() * 120) + 19;
	$("#random-number").text(targetNumber);
	var counter = 0

	//Now each crystal has to be assigned their unique value randomly
	var numberOptions = Math.floor(Math.random() * 12) + 1;


});