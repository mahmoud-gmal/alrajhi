$(window).load(function() {
    $('.loading').fadeOut(1000);
    setInterval(function() {
        $('body').addClass("animated")
    }, 1000);
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
$(document).ready(function() {
    "use strict";

    /*---------------------------------------------
    All Sliader
    --------------------------------------------- */


    // Top Slider
    $(".home-slider").owlCarousel({
        nav: false,
        loop: true,
        navText: ["<i class='la la-angle-left'></i>", "<i class='la la-angle-right'></i>"],
        dots: true,
        autoplay: 4000,
        items: 1,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayHoverPause: true,
        center: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            }
        }
    });


    // Single Slider
    $(".single-slider").owlCarousel({
        nav: true,
        loop: true,
        navText: ["<i class='la la-arrow-left'></i>", "<i class='la la-arrow-right'></i>"],
        dots: true,
        autoplay: 4000,
        items: 1,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayHoverPause: true,
        center: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            }
        }
    });

    // Pro Slider 
    $(".pro-slider").owlCarousel({
        nav: false,
        loop: true,
        navText: ["<i class='la la-arrow-left'></i>", "<i class='la la-arrow-right'></i>"],
        dots: false,
        autoplay: 4000,
        items: 1,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4
            }
        }
    });

    // Pro Slider In
    $(".pro-slider-in").owlCarousel({
        nav: true,
        loop: false,
        navText: ["<i class='la la-arrow-left'></i>", "<i class='la la-arrow-right'></i>"],
        dots: false,
        autoplay: 4000,
        items: 1,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4
            }
        }
    });

    // Pro Slider 
    $(".pro-slider").owlCarousel({
        nav: true,
        loop: true,
        navText: ["<i class='la la-angle-left'></i>", "<i class='la la-angle-right'></i>"],
        dots: false,
        autoplay: 4000,
        items: 1,
        autoplayHoverPause: true,
        center: false,
        responsiveClass: true,
        responsive: {
            0: {
                center: false,
                items: 1,
            },
            600: {
                center: false,
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });


    // Team Slider
    $(".team-slider").owlCarousel({
        nav: false,
        loop: false,
        navText: ["<i class='la la-angle-left'></i>", "<i class='la la-angle-right'></i>"],
        dots: true,
        autoplay: 4000,
        items: 1,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayHoverPause: true,
        center: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4,
            }
        }
    });

    // Gallery Slider 
    $(".gallery-slider").owlCarousel({
        nav: true,
        loop: true,
        navText: ["<i class='la la-angle-left'></i>", "<i class='la la-angle-right'></i>"],
        dots: false,
        autoplay: 4000,
        items: 1,
        autoplayHoverPause: true,
        center: true,
        responsiveClass: true,
        responsive: {
            0: {
                center: false,
                items: 2,
            },
            600: {
                center: false,
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    // Part Slider 
    $(".part-slider").owlCarousel({
        nav: false,
        loop: true,
        navText: ["<i class='la la-angle-left'></i>", "<i class='la la-angle-right'></i>"],
        dots: false,
        autoplay: 4000,
        items: 1,
        autoplayHoverPause: true,
        center: true,
        responsiveClass: true,
        responsive: {
            0: {
                center: false,
                items: 2,
            },
            600: {
                center: false,
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });


    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        arrows: false,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true,
        verticalSwiping: true,
        responsive: [{
                breakpoint: 992,
                settings: {
                    vertical: false,
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 380,
                settings: {
                    vertical: false,
                    slidesToShow: 3,
                }
            }
        ]
    });


    //Nav
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 50) {
            $(".sticky").addClass("active");
        } else {
            $(".sticky").removeClass("active");
        }
    });

    /* --------------------------------------------
    Search
    --------------------------------------------- */
    if ($('.search-box-outer').length) {
        $('.search-box-outer').on('click', function() {
            $('body').addClass('search-active');
        });
        $('.close-search').on('click', function() {
            $('body').removeClass('search-active');
        });
    }

    /* --------------------------------------------
     Mobile Menu
    --------------------------------------------- */
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

    /* --------------------------------------------
     Drop
    --------------------------------------------- */
    $('.mobile-menu li.menu-item-has-children').on('click', function(event) {
        $(this).siblings().removeClass('open');
        $(this).toggleClass('open');
    });

    /* --------------------------------------------
     Odometer
    --------------------------------------------- */
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


    /* --------------------------------------------
     Select
    --------------------------------------------- */
    $('select').niceSelect();


    /* --------------------------------------------
     FancyBox
    --------------------------------------------- */
    $('[data-fancybox="gallaryPhoto"]').fancybox();
    $('[data-fancybox="gallaryVideo"]').fancybox();
    $('[data-fancybox]').fancybox();

    /* --------------------------------------------
     for upload file
    --------------------------------------------- */

    $(document).on('change', ':file', function() {
        var input = $(this),
            numFiles = input.get(0).files ? input.get(0).files.length : 1,
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [numFiles, label]);
    });
    $(':file').on('fileselect', function(event, numFiles, label) {

        var input = $(this).parents('.input-group').find(':text'),
            log = numFiles > 1 ? numFiles + ' files selected' : label;

        if (input.length) {
            input.val(log);
        } else {
            //            if (log) alert(log);
        }
    });

    $('.form-control').focus(function() {
        $(this).parents('.form-group').addClass('focused');
    });

    $('.form-control').blur(function() {
        var inputValue = $(this).val();
        if (inputValue == "") {
            $(this).removeClass('filled');
            $(this).parents('.form-group').removeClass('focused');
        } else {
            $(this).addClass('filled');
        }
    });
    $(document).on('change', '.btn-file :file', function() {
        var fileName = $('#uploadfile').val();
        $('.filename').val(fileName);
    });

    /* --------------------------------------------
    Phone
    --------------------------------------------- */
    $(".phone").intlTelInput({
        preferredCountries: ["sa", "gb"],
        separateDialCode: true,
        hiddenInput: "full",
    });

    /* --------------------------------------------
    Show Password
    --------------------------------------------- */

    $(".toggle-password").click(function() {
        $(this).toggleClass("la-eye la-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

    /* --------------------------------------------
    RangeInput
    --------------------------------------------- */

    if ($('.custom-range-slider').length > 0) {
        $(".custom-range-slider").ionRangeSlider({});
    }


    /* ---------------------------------------------
     Scrool To Top Button Function
    --------------------------------------------- */
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $(".toTop").addClass("active");
        } else {
            $(".toTop").removeClass("active");
        }
    });

    $(".toTop").click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    $('.marquee').marquee({
        duration: 15000,
        gap: 50,
        delayBeforeStart: 0,
        duplicated: true,
        pauseOnHover: true
    });

});


/* ---------------------------------------------
 image Parallax
--------------------------------------------- */
(function($) {
    var parallax = -0.5;

    var $bg_images = $(".parallax-image");
    var offset_tops = [];
    $bg_images.each(function(i, el) {
        offset_tops.push($(el).offset().top);
    });

    $(window).scroll(function() {
        var dy = $(this).scrollTop();
        $bg_images.each(function(i, el) {
            var ot = offset_tops[i];
            $(el).css("background-position", "-50% " + (dy - ot) * parallax + "px");
        });
    });
})(jQuery);


// bg
var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;

    translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

    $('.animation-h .icon').css({
        '-webit-transform': translate,
        '-moz-transform': translate,
        'transform': translate
    });

    window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

    var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
    var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
    lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
    lFollowY = (10 * lMouseY) / 100;

});

moveBackground();