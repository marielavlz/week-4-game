$(document).ready(function() {

	//setup variables
	var wins = 0;
	var losses = 0;
	var counter = 0;

	//$("#wins").append(wins);
	//$("#losses").append(losses);

	//create a target number for the user to 'collect'	
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

	function newGame() {

		crystalOne = Math.floor(Math.random() * 12) + 1;
		crystalTwo = Math.floor(Math.random() * 12) + 1;
		crystalThree = Math.floor(Math.random() * 12) + 1;
		crystalFour = Math.floor(Math.random() * 12) + 1;

		console.log(crystalOne);

		//select each button/crystals using jquery and using the attribute method apply the new crystal value using attr.
		$(".crystals").each( function() {
			var r = Math.floor(Math.random()*12)+1;
			($(this).attr("data-crystalValue", r));
		})
		

		//create a target number for the user to reach.
		targetNumber = Math.floor(Math.random() * 120) + 19;
		$("#random-number").text(targetNumber);

		//reset the counter
		counter = 0;
		$("#score-number").text(counter);

		

	};	

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
			newGame();


		}

		else if (counter > targetNumber) {
			alert("You lose!");
			var newLosses = losses+=1
			$("#losses").text(newLosses);
			newGame();
		}

	});


});