$(window).scroll(function() {
	homeTwoScroll();
});

function homeTwoScroll() {
	var wScroll = $(window).scrollTop();

	$('homeTwoPicture').css('background-position', 'center -' + wScroll + '0px');
}