let logo = document.getElementById('logo');

window.addEventListener('scroll', () => {
    if (window.innerWidth < 705) {
        if (window.scrollY > 100) {
            logo.style.fontSize = '1rem';
        } else {
            logo.style.fontSize = '2rem';
        }
    }
});





















// //loading


// const loadingPage = document.getElementById("loading");
// const html = document.querySelector("html");
// let root = document.querySelector(":root");

// // function changeColorToRed() {
// //     root.style.setProperty("--primary-color", "#ff0000");
// // }
// // function changeColorToCyan() {
// //     root.style.setProperty("--primary-color", "#00ffff");
// // }
// // function changeColorToYellow() {
// //     root.style.setProperty("--primary-color", "#ffff00");
// // }
// // function changeColorToPurple() {
// //     root.style.setProperty("--primary-color", "#ff00ff");
// // }

