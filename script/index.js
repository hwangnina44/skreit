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
        loop: true,
        centeredSlides: true, //슬라이드 가운데 정렬

        slidesPerView: 2.5, // 한 번에 보여질 슬라이드 개수 
        spaceBetween: 50,   // 슬라이드 간 간격
        on: {
            init: function () {
                $('.swiper-slide').eq(this.realIndex).addClass('on');
            },
            slideChange: function () {
                $('.swiper-slide').removeClass('on');
                $('.swiper-slide').eq(this.realIndex).addClass('on');
            }
        },
        pagination: {
            el: ".mySwiper .bar",
            type: "progressbar",
        },

    });



});