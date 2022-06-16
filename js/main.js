

$(document).ready(function(){

	// Der Button wird mit JavaScript erzeugt und vor dem Ende des body eingebunden.
	var back_to_top_button = ['<a href="#top" class="back-to-top">Nach oben</a>'].join("");
	$("body").append(back_to_top_button)

	// Der Button wird ausgeblendet
	$(".scrollTop").hide();

	// Funktion für das Scroll-Verhalten
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) { // Wenn 100 Pixel gescrolled wurde
				$('.scrollTop').fadeIn();
			} else {
				$('.scrollTop').fadeOut();
			}
		});

		$('.scrollTop').click(function () { // Klick auf den Button
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

});