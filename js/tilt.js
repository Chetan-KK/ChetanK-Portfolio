import Tilt from "vanilla-tilt";

let myImg = document.querySelector(".myimg");
let projects = document.querySelectorAll(".project");
let mainTitle = document.querySelector(".main-body .left");
let about = document.querySelector(".main-about .main-description");

Tilt.init(myImg, {
    reverse: true,
    speed: 700,
    reset: false,
    max: 10,
});
Tilt.init(projects, {
    reverse: true,
    speed: 1500,
    reset: false,
    max: 20,
});
Tilt.init(mainTitle, {
    reverse: true,
    speed: 1500,
    reset: false,
    max: 20,
});
Tilt.init(about, {
    reverse: true,
    speed: 1500,
    reset: false,
    max: 5,
});