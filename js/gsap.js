import gsap from "gsap";

function loaded() {
    gsap.to(".loading", { y: "-100%", duration: 1, delay: 2 });
    gsap.to("html", { overflowY: "scroll", duration: 0, delay: 2 });
    gsap.from(".header", { y: "-100%", duration: .5, delay: 2.9 });
    gsap.from(".logo", { x: "-100%", opacity: 0, duration: .5, delay: 3.5 });
    gsap.from(".link", { opacity: "0", duration: .5, delay: 4, stagger: .2 });
    gsap.from(".main-title", { y: "-50%", opacity: 0, duration: 1, delay: 4 });
    gsap.from(".main-body .main-description", { y: "-100%", opacity: 0, duration: 1, delay: 4 });
}
loaded();