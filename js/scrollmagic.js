import ScrollMagic from "scrollmagic";


const controller = new ScrollMagic.Controller();

const Scene = new ScrollMagic.Scene({
    triggerElement: ".main-about",
    offset: -300
}).setClassToggle(".main-about", "fade-in")
    .addTo(controller);