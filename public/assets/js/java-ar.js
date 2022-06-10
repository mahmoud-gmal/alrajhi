$(function() {
    $(".menu-ul li.sliding").on("click mouseover", function(e) {
        var item = $(this);
        $(".lavalamp-bar").css("width", item.outerWidth());
        $(".lavalamp-bar").css("right", $(window).width() - (item.offset().left + $(".menu-ul li.sliding").outerWidth()) - item.outerWidth());

        if (e.type == "click") {
            $(".menu-ul li.sliding").removeClass("active");
            item.addClass("active");
        }
    });

    $(".menu-ul li.sliding").on("mouseout", function() {
        $(".menu-ul li.sliding.active").click();
    });

    $(".menu-ul li.sliding.active").click();
})