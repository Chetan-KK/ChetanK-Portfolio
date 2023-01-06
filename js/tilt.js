import Tilt from "vanilla-tilt";

let myImgBox = document.querySelector(".myImgBox");
let mainBodyTitle = document.querySelector(".main-body .left");
let mainTitle = document.querySelectorAll(".main-title");
let about = document.querySelector(".main-about .main-description");
let input = document.querySelectorAll(".input");

function checkTilt() {
    if (window.innerWidth > 605) {

        Tilt.init(myImgBox, {
            reverse: true,
            speed: 700,
            reset: false,
            max: 10,
        });
        Tilt.init(mainBodyTitle, {
            reverse: true,
            speed: 1500,
            reset: false,
            max: 2,
        });
        Tilt.init(mainTitle, {
            reverse: true,
            speed: 1500,
            reset: false,
            max: 5,
        });
        Tilt.init(about, {
            reverse: true,
            speed: 1500,
            reset: false,
            max: 5,
        });
        Tilt.init(input, {
            reverse: true,
            speed: 700,
            reset: true,
            max: 3,
        });
    }
}

checkTilt();
window.addEventListener('resize', () => {
    checkTilt();
});
