///index.js

$(function () {
    ////////bar active/////////////

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
        console.log(scrollTop);
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

    var swiper = new Swiper(".mySwiper", {

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
        },
        loop: true,
        centeredSlides: true, //슬라이드 가운데 정렬
        slidesPerView: "auto", // 한 번에 보여질 슬라이드 개수 
        spaceBetween: 40,   // 슬라이드 간 간격

        pagination: {
            el: ".mySwiper .bar",
            type: "progressbar",
        },

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

});