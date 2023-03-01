$(document).ready(function() {
    $(".subscribe-btn").click(function() {
        $(".subscribe-block").addClass("d-none");
        $(".notification-block").removeClass("d-none");
    });
    $(".navbar-toggler").click(function() {
        $(".small-menus").toggleClass("show");
        $("body").toggleClass("hide-scroll");
    });

    /*** make navbar fixed when scroll */
    /**** navbar fixed on top  */
    $(document).scroll(function() {
        var scroll = $(this).scrollTop();
        var topDist = $(".navbar").position();
        if (scroll > 100) {
            $('.navbar').addClass('fixed-top');
        } else {
            $('.navbar').removeClass('fixed-top');
        }
    });
})