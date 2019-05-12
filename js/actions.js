$(function () {

    $('.bt_home').click(function () {
        $('.divToSlide').animate({
            left: "0vw"
        }, 1000, "easeInOutExpo");
    });
    $('.bt_about').click(function () {
        $('.divToSlide').animate({
            left: "-100%"
        }, 1000, "easeInOutExpo");
    });
    $('.bt_skill').click(function () {
        $('.divToSlide').animate({
            left: "-200%"
        }, 1000, "easeInOutExpo");
    });
    $('.bt_expert').click(function () {
        $('.divToSlide').animate({
            left: "-300%"
        }, 1000, "easeInOutExpo");
    });
    $('.bt_portfolio').click(function () {
        $('.divToSlide').animate({
            left: "-400%"
        }, 1000, "easeInOutExpo");
    });
    $('.bt_contact').click(function () {
        $('.divToSlide').animate({
            left: "-500%"
        }, 1000, "easeInOutExpo");
    });
});