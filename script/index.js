///index.js

$(function () {

    //메뉴 active////////////////////////////////////////////////////////////////

    function headerActive() {
        $("header").addClass('active');
        $('.logo img').attr('src', 'image/logo.png');
    }


    function headerDefault() {
        $("header").removeClass('active');
        $('.logo img').attr('src', 'image/logo_w.png');
    }


    $(window).scroll(function () {

        var scrollTop = $(window).scrollTop();

        if (scrollTop > 250) {
            headerActive();
        } else {
            headerDefault();
        }
    });

    $('header').hover(
        function () {
            headerActive();
        },
        function () {
            headerDefault();
        }
    );

    //메뉴 텝설정////////////////////////////////////////////////////////////
    $('.menu >li ').hover(
        function () {

            $(this).find("div").stop().slideDown();
            $("div.wrap").stop().slideDown();
        },
        function () {
            $(this).find("div").stop().slideUp();
            $("div.wrap").stop().slideUp();
        }
    );

    //포트폴리오 배경/////////////////////////////////////////////////////////
    $('.portfolio .content-right .con1').hover(
        function () {
            $('.bg').css({
                background: "url(../image/pf_bg1.jpg) center/cover fixed"
            }, 800);
        },
        function () {
            bg();
        }
    );

    $('.portfolio .content-right .con2').hover(
        function () {
            $('.bg').css({
                background: "url(../image/pf_bg2.jpg) center/cover fixed"
            });
        },
        function () {
            bg();
        }
    );
    $('.portfolio .content-right .con3').hover(
        function () {
            $('.bg').css({
                background: "url(../image/pf_bg3.jpg) center/cover fixed"
            });
        },
        function () {
            bg();
        }
    );
    $('.portfolio .content-right .con4').hover(
        function () {
            $('.bg').css({
                background: "url(../image/pf_bg4.jpg) center/cover fixed"
            });
        },
        function () {
            bg();
        }
    );
    $('.portfolio .content-right .con5').hover(
        function () {
            $('.bg').css({
                background: "url(../image/pf_bg5.jpg) center/cover fixed"
            });
        },
        function () {
            bg();
        }
    );
    $('.portfolio .content-right .con6').hover(
        function () {
            $('.bg').css({
                background: "url(../image/pf_bg6.jpg) center/cover fixed"
            });
        },
        function () {
            bg();
        }
    );

    function bg() {
        $('.bg').css({
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: "-1",
            width: "100%",
            height: "100%",
            background: "url(../image/asset_bg.jpg) center/cover fixed"

        });
    }


    //스와이퍼 /////////////////////////////////////////////////////////
    var swiper = new Swiper(".mySwiper", {


        loop: true,
        centeredSlides: true, //슬라이드 가운데 정렬
        slidesPerView: "auto", // 한 번에 보여질 슬라이드 개수 
        spaceBetween: 20,   // 슬라이드 간 간격

        pagination: {
            el: ".mySwiper .bar",
            type: "progressbar",
        },

        on: {
            init: function () {
                $('.mySwiper .swiper-slide-active').addClass('on').find("a").css({
                    backgroundColor: "red",
                    border: "red"
                });

            },
            slideChangeTransitionEnd: function () {
                $(".swiper-slide").removeClass('on');
                $('.mySwiper .swiper-slide-active').addClass('on');
            }
        }

    });

    function btn() {
        $('.mySwiper .swiper-slide a').css({
            backgroundColor: "red",
            border: "1px solid red"
        });
    }

    function btnDefault() {
        $('.mySwiper .swiper-slide a').css({
            backgroundColor: "#transparent",
            border: "1px solid #fff"
        });
    }

    //스와이퍼 성장성/////////////////////////////////////////////////
    var swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 20,
        slidesPerView: "auto",
        pagination: {
            el: ".pagination2",
            type: "progressbar",
        },
        autoplay: { delay: 3000 },
    });


    var swiper3 = new Swiper(".mySwiper3", {
        loop: true,
        spaceBetween: 20,
        slidesPerView: "auto",
        pagination: {
            el: ".pagination3",
            type: "progressbar",
        },
        autoplay: { delay: 3000 },
    });

     var swiper4 = new Swiper(".mySwiper4", {
        loop: true,
        spaceBetween: 20,
        slidesPerView: "auto",
        pagination: {
            el: ".pagination4",
            type: "progressbar",
        },
        autoplay: { delay: 3000 },
    });

});