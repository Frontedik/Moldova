



document.querySelector('#ssil').addEventListener('click', function(e) {



    event.preventDefault();
   var id = e.target.id;


    if(id == 'soroca')
{
   document.getElementById('imgf').src='assets/images/castle.jpg';
    document.getElementById('imgs').src='assets/images/castle2.jpg';
    document.getElementById('imgt').src='assets/images/original.jpg';
    document.getElementById("txt").innerHTML = "The Soroca Fortress is a unique monument of the defense architecture of medieval Moldova. The letter of the Moldovan ruler Peter Rares dated April 23, 1543, addressed to the master of Bistritsa in Transylvania, in which the ruler asked to send craftsmen and apprentices to build fortifications in Soroca, is considered a decisive argument for the dating of the stone fortress. The stone fortress that we see today was built by a group of masons from Transylvania under the guidance of master Jacob, who left an inscription inside the fortress: Jacob built this castle. Before the stone fortress was erected, there was a fortification of wood and earth, which is mentioned only in 1499, although it is believed that it was built earlier. During archaeological excavations, which were carried out in the fortress, the remains of wooden fortifications were found.";
}
    else if(id == 'chisinau'){
        document.getElementById("txt").innerHTML = "A regular walk around the city will allow you to get acquainted with its outstanding architectural sights. On the central avenue, you can see the spectacular building of the main post office, which was built in the middle of the 19th century. It was once decorated with a huge glass globe, which was destroyed during the earthquake in 1976. They did not restore this element; you can see this original globe only by watching the Soviet film A Man Follows the Sun.Fans of hiking in interesting museums should look into the National Museum of Archeology and History of Moldova.  Now the museum has about 260,000 unique exhibits. A significant part of them were discovered during excavations directly on the territory of the republic; in the museum, visitors can see samples of ancient weapons, household items, jewelry and decorative items.";
        document.getElementById('imgf').src='assets/images/Chishinau/102.jpg';
    document.getElementById('imgs').src='assets/images/Chishinau/11.jpg';
    document.getElementById('imgt').src='assets/images/Chishinau/123.jpg';

    }
     else if(id == 'orhei'){
         document.getElementById("txt").innerHTML = "Orheiul Vechi is famous for its cave monasteries.This area was ideal for monasticism in the early Christian community. In those days, when Christians came to this country, it is possible that the caves they were already in the rocks, sculpted by prehistoric tribes living in the area. In the Middle Ages, the spread of Orthodox monastic life and frequent raids by Tartars monks forced to go deep into inaccessible rocks. Within the Orheiul Vechi complex, there are five objectives that are of special interest,scientifically, but also museographically: the Getic fortress, the medieval fortress, the inn and the church; and on the banks of the Evil, large and small caves were formed, dug into the limestone rocks. Next to the bell tower, above the cave church, at the edge of the promontory, there is a massive stone cross, dating from the 18th century.";
         document.getElementById('imgf').src='assets/images/Orhei/11.jpg';
    document.getElementById('imgs').src='assets/images/Orhei/12.jpg';
    document.getElementById('imgt').src='assets/images/Orhei/123.jpg';

    }

//    alert(id);


});





$(document).ready(function () {
    document.getElementById("soroca").click();
    $("#header").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top - 30;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });

});







$(function () {
    let foot = $("#footer");
    let header = $("header");
    let intro = $("#intro");

    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll", function () {
        width = screen.width;
        scrollPos = $(this).scrollTop();
        //        console.log(scrollPos);
        if (width > 1100) {
            if (scrollPos > 400) {
                foot.addClass("fix");
                if (scrollPos > 2340) {
                    foot.removeClass("fix");
                }
            } else {
                foot.removeClass("fix");
            }
        } else if (width == 1024) {
            if (scrollPos > 400) {
                foot.addClass("fix");
                if (scrollPos > 3435) {
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
//AOS.init();

//========Slider=======


let slider = $("#slider");
slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true
});
