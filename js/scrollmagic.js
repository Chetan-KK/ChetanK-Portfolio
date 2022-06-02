import ScrollMagic from "scrollmagic";


const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: ".main-about",
    offset: -200
}).setClassToggle(".main-about", "fade-in").addTo(controller);