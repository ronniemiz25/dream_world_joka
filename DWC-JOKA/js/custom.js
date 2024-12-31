
	
// Select all links with hashes
jQuery('a[href*="#"].hash')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function (event) {
	// On-page links
	if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
			&&
			location.hostname == this.hostname
			) {
		// Figure out element to scroll to
		var target = jQuery(this.hash);
		target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
		// Does a scroll target exist?
		if (target.length) {
			// Only prevent default if animation is actually gonna happen
			event.preventDefault();
			jQuery('html, body').animate({
				scrollTop: target.offset().top
			}, 1000, function () {
				// Callback after animation
				// Must change focus!
				var $target = jQuery(target);
				$target.focus();
				if ($target.is(":focus")) { // Checking if the target was focused
					return false;
				} else {
					$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
					$target.focus(); // Set focus again
				}
				;
			});
		}
	}
});

$('.hash_area a.hash').on('click', function (e) {
	e.preventDefault();

	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top - 170
	}, 500, 'linear');
});



// backto-top btn script
		var btn = jQuery('#backto-top');
		jQuery(window).scroll(function() {
		  if (jQuery(window).scrollTop() > 150) {
		    btn.addClass('show');
		  } else {
		    btn.removeClass('show');
		  }
		});

		btn.on('click', function(e) {
		  e.preventDefault();
		  jQuery('html, body').animate({scrollTop:0}, '1000');
		});
	// backto-top btn script end


 
		jQuery(document).ready(function($) {
			jQuery('.stellarnav').stellarNav({
			theme: 'dark',
			breakpoint: 991,
			position: 'right',
			});

			jQuery("#navbar_top").scrollToFixed();

			$(window).scroll(function () {
				if ($(window).scrollTop() <= 40) {
					//alert();
					$(".menumain").removeClass("scroll_navbar");
				}
				else {
					$(".menumain").addClass("scroll_navbar");
				}
			});


			var owl = jQuery('.collections');
			owl.owlCarousel({
			margin: 0,
			smartSpeed: 500,
			nav: true,
			dots: false,
			autoplay: true,
			autoplayHoverPause: true,
			loop: true,
			autoplayTimeout:1800,
			responsive: {
			0: {items: 2},
			480: {items: 2},
			576: {items: 2},
			768: {items: 4},
			992: {items: 4},
			1200: {items: 5}
			}
			});

		});











