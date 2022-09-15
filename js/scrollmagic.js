import ScrollMagic from "scrollmagic";


const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: ".main-about",
    offset: -400
}).setClassToggle(".main-about", "fade-in").addTo(controller);