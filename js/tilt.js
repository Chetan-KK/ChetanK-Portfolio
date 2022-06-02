import Tilt from "vanilla-tilt";

let myImg = document.querySelector(".myimg");
let projects = document.querySelectorAll(".project");
let mainBodyTitle = document.querySelector(".main-body .left");
let mainTitle = document.querySelectorAll(".main-title");
let about = document.querySelector(".main-about .main-description");
let input = document.querySelectorAll(".input");

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
Tilt.init(mainBodyTitle, {
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
Tilt.init(input, {
    reverse: true,
    speed: 700,
    reset: false,
    max: 10,
});