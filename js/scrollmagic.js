import ScrollMagic from "scrollmagic";


const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: ".main-about",
    offset: -300
}).setClassToggle(".main-about", "fade-in")
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: ".project",
    // offset: -300
}).setClassToggle(".project", ".projectScroll")
    .addTo(controller);