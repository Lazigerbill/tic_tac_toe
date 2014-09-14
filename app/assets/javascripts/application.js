// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){
	// Function to check if game is won by either side, perform check after every round
	function checkwinner(){
		if($('.A1').hasClass('o') && $('.A2').hasClass('o') && $('.A3').hasClass('o') ||
			$('.B1').hasClass('o') && $('.B2').hasClass('o') && $('.B3').hasClass('o') ||
			$('.C1').hasClass('o') && $('.C2').hasClass('o') && $('.C3').hasClass('o') ||	
			$('.A1').hasClass('o') && $('.B1').hasClass('o') && $('.C1').hasClass('o') ||
			$('.A2').hasClass('o') && $('.B2').hasClass('o') && $('.C2').hasClass('o') ||
			$('.A3').hasClass('o') && $('.B3').hasClass('o') && $('.C3').hasClass('o') ||
			$('.A1').hasClass('o') && $('.B2').hasClass('o') && $('.C3').hasClass('o') ||
			$('.C1').hasClass('o') && $('.B2').hasClass('o') && $('.A3').hasClass('o')) {
				alert("O wins!!");
				// restart;			//define function restart()//
			} else if (
				$('.A1').hasClass('x') && $('.A2').hasClass('x') && $('.A3').hasClass('x') ||
				$('.B1').hasClass('x') && $('.B2').hasClass('x') && $('.B3').hasClass('x') ||
				$('.C1').hasClass('x') && $('.C2').hasClass('x') && $('.C3').hasClass('x') ||	
				$('.A1').hasClass('x') && $('.B1').hasClass('x') && $('.C1').hasClass('x') ||
				$('.A2').hasClass('x') && $('.B2').hasClass('x') && $('.C2').hasClass('x') ||
				$('.A3').hasClass('x') && $('.B3').hasClass('x') && $('.C3').hasClass('x') ||
				$('.A1').hasClass('x') && $('.B2').hasClass('x') && $('.C3').hasClass('x') ||
				$('.C1').hasClass('x') && $('.B2').hasClass('x') && $('.A3').hasClass('x')) {
					alert("X wins!!");
					// restart;
			} else if (counter === 9){
				alert("This is a \"TIE\"!!");
			}
	};


	// Function to check if game is a tie, perform check after every round
	// function checkTie(){
	// 	if (counter === 9) {
	// 		alert("This is a \"TIE\"!!");
	// 	}
	// }


	// $('div').hover(function(){
	// 		$(this).addClass('avail');
	// 			},function(){
	// 		$(this).removeClass('avail');
	// 		}
	// 	);

	// Actual game play begins here!!!
	var counter = 0;
	$('div').one('click',function(){
		counter++;
		if (counter%2===0) {
			$(this).text("X");
			$(this).addClass("x");
		} else {
			$(this).text("O");
			$(this).effect('shake');
		}
		checkwinner();
	});

});
