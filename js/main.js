$(document).ready(function() {
	var deg = 40;
	var scrollPart = $("#carousel");
	setInterval(function(){
		scrollPart.css('transform', 'rotateY('+ deg +'deg)');
		deg+=40;
	}, 2000);
	scrollPart.on('mouseover', 'figure', function(event) {
		$(this).css('transform', 'scale(1.5,1.5,1.2)');
	});
});