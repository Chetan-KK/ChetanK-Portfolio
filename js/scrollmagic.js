import ScrollMagic from "scrollmagic";


const controller = new ScrollMagic.Controller();

if (window.innerWidth > 705) {
    scroll(-300);
}
else {
    scroll(-1);
}

function scroll(off) {
    new ScrollMagic.Scene({
        triggerElement: ".main-about",
        offset: off
    }).setClassToggle(".main-about", "fade-in").addTo(controller);

}