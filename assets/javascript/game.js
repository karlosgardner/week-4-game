//  crystal object
var crystal = {
	win:0,
	lose:0,
	totalScore:0,
	crystals: [1, 2, 3, 4], // element for each crystal

	randomNumber:function(first, second){
		var result = Math.floor(Math.random() * second) + first;
		return result;
	}, // get a random number for a crystal
	result:0


};

// Get a whole number for  the total score.
crystal.totalScore = crystal.randomNumber(19, 120);
$(".totalscore").html(crystal.totalScore);



// Get a random number for every single crystal in the array.
function random(){
	for(var i = 0; i < crystal.crystals.length; i++){
	crystal.crystals[i] = crystal.randomNumber(1, 12);
	};

} // end of the random function
random();


// Pull the crystal p element from the DOM
var hiddenNumber = $(".crystal p");

//console.log(hiddenNumber);

// Output the  hidden number for each crystal an put them in the DOM
function crystalRandom(){
	for(var i = 0;  i < hiddenNumber.length; i++){

		// Put the value to the crystal in the index page
		$(hiddenNumber[i]).html(crystal.crystals[i]);
	}
}

crystalRandom();


// Reset game
function reset(){
	random()
	crystal.totalScore = crystal.randomNumber(19, 120);
	$(".totalscore").html(crystal.totalScore);


	crystalRandom();

	crystal.result = 0;
	$(".result").html(crystal.result);
} //  reset function



// add value to the total Score
$(".crystal").on("click", function(){



	var value = $(this).children(this).text(),
		number = parseInt(value);

		crystal.result += number;

	$(".result").html(crystal.result);


	if(crystal.totalScore === crystal.result){

		crystal.win++;
		$('.win').html("You win : " + crystal.win);
		reset();


	}

	else if(crystal.result > crystal.totalScore ){
		crystal.lose++;
		$('.lose').html("You lose: " + crystal.lose);
		reset();

	}



});
