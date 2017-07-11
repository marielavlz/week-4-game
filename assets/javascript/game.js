$(document).ready(function() {

	//setup variables
	var wins = 0;
	var losses = 0;
	var counter = 0;

	//$("#wins").append(wins);
	//$("#losses").append(losses);

	//First we generate a random number to guess.
	var targetNumber = Math.floor(Math.random() * 120) + 19;
	$("#random-number").text(targetNumber);

	//Now each crystal has to be assigned their unique value randomly
	var crystalOne = Math.floor(Math.random() * 12) + 1;
	var crystalTwo = Math.floor(Math.random() * 12) + 1;
	var crystalThree = Math.floor(Math.random() * 12) + 1;
	var crystalFour = Math.floor(Math.random() * 12) + 1;

	//using these variables, I'm going to make an array.
	var numberOptions = [crystalOne, crystalTwo, crystalThree, crystalFour];

	//Create a for loop to create crystals for every numberOption
	for (var i = 0; i < numberOptions.length; i++) {
		var imageCrystal = $("<img>");
		
		imageCrystal.addClass("crystals");
		
		imageCrystal.attr("src", "http://images.clipartpanda.com/crystal-clipart-Bcgj4gXc8.png");
		
		imageCrystal.attr("data-crystalValue", numberOptions[i]);

		$(".crystal1").append(imageCrystal);
	}
	console.log(imageCrystal);

	//reset the game after a win or loss without losing count of the number of wins or losses

	function resetGame() {
		crystalOne = Math.floor(Math.random() * 12) + 1;
		crystalTwo = Math.floor(Math.random() * 12) + 1;
		crystalThree = Math.floor(Math.random() * 12) + 1;
		crystalFour = Math.floor(Math.random() * 12) + 1;

		numberOptions[i]

		counter = 0;
		//var crystalValue = 0;
		//counter += crystalValue;

		$("#score-number").text(counter);
		targetNumber = Math.floor(Math.random() * 120) + 19;
		$("#random-number").text(targetNumber);


	};
	console.log(resetGame);

	//use a click function so when a crystal is clicked, the random number assigned is added to a counter

	$(".crystals").on("click", function() {

		var crystalValue = ($(this).attr("data-crystalValue"));
		crystalValue = parseInt(crystalValue);
		counter += crystalValue; //adds every new random value together.

		console.log(crystalValue);

		$("#score-number").text(counter);

		if (counter === targetNumber) {
			alert("You win!");
			var newWins = wins+=1
			$("#wins").text(newWins);
			resetGame();
		}

		else if (counter > targetNumber) {
			alert("You lose!");
			var newLosses = losses+=1
			$("#losses").text(newLosses);
			resetGame();
		}

	});


	


});