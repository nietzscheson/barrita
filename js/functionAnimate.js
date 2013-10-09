$(window,document,undefined).ready(function(){
var antes = (new Date()).getTime();
var despues = (new Date()).getTime();
tiempo = (antes-despues) / 1000;

	$('.barrita').animate({width:35+'%'},tiempo,function(){
		$('.barrita').animate({width: 100+'%'},tiempo,function(){
		$('.barrita').fadeOut(1000);
	});

});



});

