$(window).load(function() {
    $('.loader').fadeOut(2000);
});

new WOW().init();
wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
})
wow.init();


// All Sliader
$(document).ready(function() {
    "use strict";


    // Top Slider
    $(".home-slider").on('initialized.owl.carousel changed.owl.carousel', function(e) {
        if (!e.namespace) {
            return;
        }
        var carousel = e.relatedTarget;
        $('.slider-counter').html(carousel.relative(carousel.current()) + 1 + ("<div class='line'></div>") + carousel.items().length);
    }).owlCarousel({
        nav: true,
        loop: true,
        navText: ["<i class='la la-angle-up'></i>", "<i class='la la-angle-down'></i>"],
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        items: 1,
        animateOut: 'animate__fadeIn',
        animateIn: 'animate__fadeIn',
        autoplayHoverPause: true,
        responsiveClass: true
    });

    // Projects Slider 
    $(".projects-slider").owlCarousel({
        nav: true,
        loop: true,
        navText: ["<i class='las la-long-arrow-alt-left'></i>", "<i class='las la-long-arrow-alt-right'></i>"],
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        items: 1,
        center: true,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            1000: {
                items: 3
            }
        }
    });

    // News Slider 
    $(".news-slider").owlCarousel({
        nav: true,
        loop: true,
        navText: ["<i class='las la-long-arrow-alt-left'></i>", "<i class='las la-long-arrow-alt-right'></i>"],
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        items: 1,
        center: true,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            1000: {
                items: 3
            }
        }
    });

    // Clients Slider 
    $(".clients-slider").owlCarousel({
        nav: false,
        loop: true,
        navText: ["<i class='las la-long-arrow-alt-left'></i>", "<i class='las la-long-arrow-alt-right'></i>"],
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        items: 1,
        center: false,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            767: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });

    // Single Slider 
    $(".single-slider").owlCarousel({
        nav: true,
        loop: true,
        navText: ["<i class='las la-long-arrow-alt-left'></i>", "<i class='las la-long-arrow-alt-right'></i>"],
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        items: 1,
        center: false,
        autoplayHoverPause: true,
        responsiveClass: true,
    });

    //Nav
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 50) {
            $(".sticky").addClass("active");
        } else {
            $(".sticky").removeClass("active");
        }
    });

    // Mobile Menu
    if ($('.mobile-menu').length) {

        $('.mobile-menu .menu-box');

        var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
        $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
        $('.sticky-header .main-menu').append(mobileMenuContent);

        //Menu Toggle Btn
        $('.mobile-nav-toggler').on('click', function() {
            $('body').addClass('mobile-menu-visible');
        });

        //Menu Toggle Btn
        $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
            $('body').removeClass('mobile-menu-visible');
        });

    }

    //Drop
    (function($) {

        // Reverse
        // =============================================
        $.fn.reverse = [].reverse;

        // jQuery Extended Family Selectors
        // =============================================
        $.fn.cousins = function(filter) {
            return $(this).parent().siblings().children(filter);
        };

        $.fn.piblings = function(filter) {
            return $(this).parent().siblings(filter);
        };

        $.fn.niblings = function(filter) {
            return $(this).siblings().children(filter);
        };

        // Update
        // =============================================
        $.fn.update = function() {
            return $(this);
        };

        // Dropdown
        // =============================================
        $.fn.dropdown = function(options) {

            // Store object
            var $this = $(this);

            // Settings
            var settings = $.extend({
                className: 'toggled',
            }, options);

            // Simplify variable names
            var className = settings.className;

            // List selectors
            var $ul = $this.find('ul'),
                $li = $this.find('li'),
                $a = $this.find('a');

            // Menu selectors
            var $drawers = $a.next($ul), // All unordered lists after anchors are drawers
                $buttons = $drawers.prev($a), // All anchors previous to drawers are buttons
                $links = $a.not($buttons); // All anchors that are not buttons are links

            // Toggle menu on-click
            $buttons.on('click', function() {
                var $button = $(this),
                    $drawer = $button.next($drawers),
                    $piblingDrawers = $button.piblings($drawers);

                // Toggle button and drawer
                $button.toggleClass(className);
                $drawer.toggleClass(className).css('height', '');

                // Reset children
                $drawer.find($buttons).removeClass(className);
                $drawer.find($drawers).removeClass(className).css('height', '');

                // Reset cousins
                $piblingDrawers.find($buttons).removeClass(className);
                $piblingDrawers.find($drawers).removeClass(className).css('height', '');

                // Animate height auto
                $drawers.update().reverse().each(function() {
                    var $drawer = $(this);
                    if ($drawer.hasClass(className)) {
                        var $clone = $drawer.clone().css('display', 'none').appendTo($drawer.parent()),
                            height = $clone.css('height', 'auto').height() + 'px';
                        $clone.remove();
                        $drawer.css('height', '').css('height', height);
                    } else {
                        $drawer.css('height', '');
                    }
                });
            });

            // Close menu
            function closeMenu() {
                $buttons.removeClass(className);
                $drawers.removeClass(className).css('height', '');
            }

            // Close menu after link is clicked
            $links.click(function() {
                closeMenu();
            });

            // Close menu when off-click and focus-in
            $(document).on('click focusin', function(event) {
                if (!$(event.target).closest($buttons.parent()).length) {
                    closeMenu();
                }
            });
        };
    })(jQuery);

    $('.mobile-menu').dropdown();

    //Header Search
    if ($('.search-box-outer').length) {
        $('.search-box-outer').on('click', function() {
            $('body').addClass('search-active');
        });
        $('.close-search').on('click', function() {
            $('body').removeClass('search-active');
        });
    }
    // Select
    $('select').niceSelect();

    // FancyBox
    $('[data-fancybox="gallaryPhoto"]').fancybox();
    $('[data-fancybox="gallaryVideo"]').fancybox();
    $('[data-fancybox]').fancybox();

    //Odometer
    $(".counter-item").each(function() {
        $(this).isInViewport(function(status) {
            if (status === "entered") {
                for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
                    var el = document.querySelectorAll('.odometer')[i];
                    el.innerHTML = el.getAttribute("data-odometer-final");
                }
            }
        });
    });

    // Rotate
    var header = $('header');
    var body = $('body');
    var hieghtThreshold = $(".hoverSec").offset().top;
    var hieghtThreshold_end = $(".hoverSec").offset().top + $(".hoverSec").height();
    var hieghtThreshold2 = $(".hoverThr").offset().top;
    var hieghtThreshold_end2 = $(".hoverThr").offset().top + $(".hoverThr").height();
    var hieghtThreshold3 = $(".hoverFor").offset().top;
    var hieghtThreshold_end3 = $(".hoverFor").offset().top + $(".hoverFor").height();
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var scroll2 = $(window).scrollTop();
        var scroll3 = $(window).scrollTop();

        if (scroll >= hieghtThreshold && scroll) {
            body.addClass('rotate');
        } else {
            body.removeClass('rotate');
        }

        if (scroll2 >= hieghtThreshold2 && scroll2) {
            body.addClass('rotate2');
        } else {
            body.removeClass('rotate2');
        }

        if (scroll3 >= hieghtThreshold3 && scroll3) {
            body.addClass('rotate3');
        } else {
            body.removeClass('rotate3');
        }
    });
});

function revolveText(options = {
    target: undefined,
    span: 100,
    north: 0,
    spiral: false
}) {
    const {
        target,
        span,
        north,
        spiral,
        size
    } = options;
    const message = target.textContent;
    const quaterWidth = target.clientWidth / 4;
    const diameter = size || quaterWidth;
    const messageChunks = message.split(String());
    const { length } = messageChunks;
    const offsetEnd = 1;
    const l = length + offsetEnd;
    const CIRC_MAX = 360;
    const PERC_MAX = 100;
    const ofDeg = span * CIRC_MAX / PERC_MAX;
    const ofNorth = north * CIRC_MAX / PERC_MAX;
    const segDeg = ofDeg / l;
    const fontSize = 16;
    let a = 0;
    let i = 0;

    target.setAttribute('style', `
		padding-left: ${diameter / 2}px;
		display: inline-block;
		width: ${diameter / 2}px;
		height: ${diameter}px;
		transform: rotate3d(0, 0, 1, -${segDeg + ofNorth}deg);
		border-radius: 9e9em;
		font-size: 1rem;
	`);
    target.classList.add('fx-Revolve');
    target.textContent = '';
    while (a < ofDeg) {
        a += segDeg;
        const charWrapper = document.createElement('span');
        charWrapper.textContent = messageChunks[i];
        i++;
        charWrapper.classList.add('fx-RevolveCharWrap');
        charWrapper.setAttribute('style', `
			display: inline-block;
			transform: 
				rotate3d(0, 0, 1, ${a}deg) 
				${spiral ? 'translateY(' + (i) + 'px)': ''};
			${spiral ? 'font-size:' + (fontSize - (i / 10) ) + 'px': ''};
			position: absolute;
			height: ${diameter / 2}px;
			transform-origin: bottom left;
			font-size: 1em;
		`);
        target.appendChild(charWrapper);
    }
}



revolveText({
    target: document.querySelector('.hoverSec .anim-inner h6'),
    span: 50, // percent
    north: 0, // cc rotate in percent
    spiral: false,
    size: 200 // fixed size
});
revolveText({
    target: document.querySelector('.hoverThr .anim-inner h6'),
    span: 50, // percent
    north: 0, // cc rotate in percent
    spiral: false,
    size: 200 // fixed size
});
revolveText({
    target: document.querySelector('.hoverFor .anim-inner h6'),
    span: 50, // percent
    north: 0, // cc rotate in percent
    spiral: false,
    size: 200 // fixed size
});