
$(document).ready(function(){
    $("#header").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top -30;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

});







$(function() {
    let foot = $("#footer");
    let header = $("header");
    let intro = $("#intro");

    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll", function () {
        width=screen.width;
        scrollPos = $(this).scrollTop();
        console.log(scrollPos);
        if (width > 1100){
        if (scrollPos > 400  ) {
            foot.addClass("fix");
          if(scrollPos > 2340 ) {
                foot.removeClass("fix");
            }
        } else {
            foot.removeClass("fix");
        }
        }


        else if (width == 1024){
        if (scrollPos > 400  ) {
            foot.addClass("fix");
          if(scrollPos > 3435 ) {
                foot.removeClass("fix");
            }
        } else {
            foot.removeClass("fix");
        }
        }

          else if (width == 768 || width == 736){
        if (scrollPos > 400  ) {
            foot.addClass("fix");
          if(scrollPos > 3555 ) {
                foot.removeClass("fix");
            }
        } else {
            foot.removeClass("fix");
        }
        }

             else if (width == 667 || width == 720 || width ==640){
        if (scrollPos > 400  ) {
            foot.addClass("fix");
          if(scrollPos > 3555 ) {
                foot.removeClass("fix");
            }
        } else {
            foot.removeClass("fix");
        }
        }




           else if (width == 568 || width == 540){
        if (scrollPos > 100  ) {
            foot.addClass("fix");
          if(scrollPos > 2980 ) {
                foot.removeClass("fix");
            }
        } else {
            foot.removeClass("fix");
        }
        }

          else if (width == 320 || width == 375 || width == 360 || width == 414){
        if (scrollPos > 100  ) {
            foot.addClass("fix");
          if(scrollPos > 2980 ) {
                foot.removeClass("fix");
            }
        } else {
            foot.removeClass("fix");
        }
        }




    });



});

VANTA.BIRDS({
  el: "#intro",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: 0xffffff,
  color1: 0xc2ff00,
  color2: 0xeb4f0e,
  colorMode: "lerpGradient",
  birdSize: 1.10,
  wingSpan: 20.00,
  separation: 43.00,
  alignment: 29.00,
  cohesion: 67.00,
  backgroundAlpha: 0.00
})


 AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'fade-up', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 0, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 0, // offset (in px) from the original trigger point
  delay: 500, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
AOS.init();

//========Slider=======


let slider = $("#slider");
slider.slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
    arrows:false
});



