$(function () {
    $(".slogan").typed({
        strings : ["de Webdesign"," de Programmation"," et de toute solution IT"],
        typespeed : 2,
        loop : true,
        backDelay : 4000,
        showCursor: true,
		// character for cursor
        cursorChar: "|",   
    });
    /*$('.typedText').css({
        'font-size':'18px',
        'font-color':'black'
    });*/
    $(function blink(){
        $('.typed-cursor').fadeOut(250).fadeIn(250, blink);
    });
    var sizeInit = $('.main-container').height();

    $('.bt_home').click(function () {
        $('.divToSlide').animate({
            left: "0vw"
        }, 1000, "easeInOutExpo");
        var s = $('#section-home').height() - sizeInit + 50;
        $('.main-container').css('height', s + 'px');
    });
    $('.bt_about').click(function () {
        $('.divToSlide').animate({
            left: "-100%"
        }, 1000, "easeInOutExpo");
        var s = $('#section-aboutMe').height() - sizeInit + 50;
        $('.main-container').css('height', s + 'px');
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
        var expert_size = $('#section-experience').height();
        var newSize = sizeInit + (expert_size - sizeInit);
        $('.main-container').css('height', newSize + 50 + 'px');

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