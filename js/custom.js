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

    /**** stopWatch customize */
    $(".nice-button").click(function() {
        $(".nice-button").toggleClass("d-none");

    });
    $("#start").click(function() {
        $(".clock-hand").addClass("start");
        $(".clock-hand").removeClass("puase");
        $(".option-block").addClass("played");

    });
    $("#puase").click(function() {
        $(".clock-hand").removeClass("start");
        $(".clock-hand").addClass("puase");
        $(".option-block").removeClass("played");
    });
})