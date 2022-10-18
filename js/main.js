let logo = document.getElementById('logo');

window.addEventListener('scroll', () => {
    if (window.innerWidth < 705) {
        if (window.scrollY > 100) {
            logo.style.fontSize = '1rem';
            // logo.style.margin = '0 !important';
        } else {
            logo.style.fontSize = '2rem';
            // logo.style.margin = '0.5rem 0 1.3rem 0';
        }
    }
});


function changeColor() {
    console.log('e');
}



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

