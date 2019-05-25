$(function () {
    $(".slogan").typed({
        strings: ["de Webdesign", " de Programmation", " et de toute solution IT"],
        typespeed: 2,
        loop: true,
        backDelay: 4000,
        showCursor: true,
        // character for cursor
        cursorChar: "|",
    });

    /* chartPie */
    $('.chart').easyPieChart({
        trackColor: '#252934',
        barColor: '#fff',
        scaleColor: false,
        lineWidth: 5,
        lineCap: 'square',
    });
    $('canvas').mouseover(function () {
        var a = "#" + $(this).parent().attr('id') + " .percent";
        $(a).css('font-size', '55px');
    });
    $('canvas').mouseout(function () {
        var a = "#" + $(this).parent().attr('id') + " .percent";
        $(a).css('font-size', '40px');
    });
    /**************************************************************/

    /*$('.typedText').css({
        'font-size':'18px',
        'font-color':'black'
    });*/
    $(function blink() {
        $('.typed-cursor').fadeOut(250).fadeIn(250, blink);
    });
    var sizeInit = $('.main-container').height();
    newSizeContainer = function(theTarget){
        sizeTarget = $(theTarget).height();
        if (sizeTarget>sizeInit){
        $('.main-container').css('height',sizeTarget+'px');
        }else {
            $('.main-container').css('height',100+'vh');
        }
        
    }
    
    $('.bt_home').click(function () {
        $('.divToSlide').animate({
            left: "0vw"
        }, 1000, "easeInOutExpo");
         newSizeContainer('#section-home');

    });
    $('.bt_about').click(function () {
        $('.divToSlide').animate({
            left: "-100%"
        }, 1000, "easeInOutExpo");
        newSizeContainer('#section-aboutME')

    });
    $('.bt_skill').click(function () {
        $('.divToSlide').animate({
            left: "-200%"
        }, 1000, "easeInOutExpo");
        newSizeContainer('#section-skill')
        
    });
    $('.bt_expert').click(function () {
        $('.divToSlide').animate({
            left: "-300%"
        }, 1000, "easeInOutExpo");
        newSizeContainer('#section-experience')

    });
    $('.bt_portfolio').click(function () {
        $('.divToSlide').animate({
            left: "-400%"
        }, 1000, "easeInOutExpo");
        newSizeContainer('#section-portfolio');
    });
    
    $('.bt_contact').click(function () {
        $('.divToSlide').animate({
            left: "-500%"
        }, 1000, "easeInOutExpo");
        newSizeContainer('#section-contact')
    });
});
