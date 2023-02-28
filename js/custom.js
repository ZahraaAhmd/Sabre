$(document).ready(function() {
    $(".subscribe-btn").click(function() {
        $(".subscribe-block").addClass("d-none");
        $(".notification-block").removeClass("d-none");
    });
    $(".navbar-toggler").click(function() {
        $(".small-menus").toggleClass("show");
        $("body").toggleClass("hide-scroll");
    })
})