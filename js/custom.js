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

    /**** mail notification toggle */
    $(".Sb-notification .notification-block").click(function() {
        $(".mail-block").addClass("show");
        $(".mail-overlay").addClass("show");
    });
    $(".mail-overlay").click(function() {
        $(".mail-block").removeClass("show");
        $(".mail-overlay").removeClass("show");
    });

    /**** toggle AVl&UNV buttons */
    $(".Sb-calendar .avalible-box .btn").click(function() {
        $(".Sb-calendar .avalible-box .btn").removeClass("btn-toggled");
        $(this).toggleClass("btn-toggled");
    });
})