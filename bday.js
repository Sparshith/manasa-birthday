
/*
	Code to trigger music.
*/

$('#header .arrow').on('click', function () {
	$('.hp-audio').trigger('play');
	$(".main").moveDown();
});	

$(".main").onepage_scroll();



$('#hp .right-column #hp-answer').on('input', function(){
	var rightAnswer = 'Edinburgh Potmakers';
	var inputText = $('#hp-answer').val();
	var cheatCode = 'rvcedebsoc';

	if(inputText.toLowerCase() === rightAnswer.toLowerCase() || inputText.toLowerCase() === cheatCode.toLowerCase()) {
		$('#hp .right-column input[type="text"]').css('border', '5px solid #099E44');
		$('#hp .cross').fadeOut();
		$('#hp .arrows').fadeIn(1500);

		$('#hp-image').attr('src', 'hp_clear.png');

		if(inputText.toLowerCase() === rightAnswer.toLowerCase()) {
			var congratulations_text = 'Bravo, you got it right';
		} else if(inputText.toLowerCase() === cheatCode.toLowerCase()) {
			var congratulations_text = 'Ay, you cheated, but it\'s your budday';
		}

		var options = {
      		strings: [congratulations_text+"! In an attempt to keep Harry Potter and the Deathly Hallows a secret, early proofs were titled Edinburgh Potmakers. You can now move on to the next section now."],
      		typeSpeed: 4
    	}

		$("#hp .success-text").typed(options);
	}
});

$('#hp .arrows').on('click', function() {
	$('.westwing-audio').trigger('play');
	$(".main").moveDown();
});


$('#westwing .arrows').on('click', function() {
	$('.ir-audio').trigger('play');
	$(".main").moveDown();
});


$('#ir .arrows').on('click', function() {
	$(".main").moveDown();
});



$('#westwing .right-column #westwing-answer').on('input', function(){
	var rightAnswer = 'Gail';
	var inputText = $('#westwing-answer').val();
	var cheatCode = 'rvcedebsoc';

	if(inputText.toLowerCase() === rightAnswer.toLowerCase() || inputText.toLowerCase() === cheatCode.toLowerCase()) {
		$('#westwing .right-column input[type="text"]').css('border', '5px solid #099E44');
		$('#westwing .cross').fadeOut();
		$('#westwing .arrows').fadeIn(1500);

		$('#westwing-image').attr('src', 'gailanswer.jpg');

		if(inputText.toLowerCase() === rightAnswer.toLowerCase()) {
			var congratulations_text = 'Bravo, you got it right';
		} else if(inputText.toLowerCase() === cheatCode.toLowerCase()) {
			var congratulations_text = 'Ay, you cheated, but it\'s your budday';
		}

		var options = {
      		strings: [congratulations_text+"! Danny mistook C.J.’s love for Goldfish crackers, and gave her an actual goldfish. You can now move on to the next section now."],
      		typeSpeed: 4
    	}

		$("#westwing .success-text").typed(options);
	}
});

$('#ir .right-column #ir-answer').on('input', function(){
	var rightAnswer = 'Juan Manuel Santos';
	var inputText = $('#ir-answer').val();
	var cheatCode = 'rvcedebsoc';

	if(inputText.toLowerCase() === rightAnswer.toLowerCase() || inputText.toLowerCase() === cheatCode.toLowerCase()) {
		$('#ir .right-column input[type="text"]').css('border', '5px solid #099E44');
		$('#ir .cross').fadeOut();
		$('#ir .arrows').fadeIn(1500);

		$('#ir-image').attr('src', 'ir.png');

		if(inputText.toLowerCase() === rightAnswer.toLowerCase()) {
			var congratulations_text = 'Bravo, you got it right';
		} else if(inputText.toLowerCase() === cheatCode.toLowerCase()) {
			var congratulations_text = 'Ay, you cheated, but it\'s your budday';
		}

		var options = {
      		strings: [congratulations_text+"! Juan Manuel Santos Calderón is the 32nd and current President of Colombia and sole recipient of the 2016 Nobel Peace Prize. You can now move on to the next section now."],
      		typeSpeed: 4
    	}

		$("#ir .success-text").typed(options);
	}
});
