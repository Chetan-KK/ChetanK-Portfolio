import '../css/main.css';
import '../css/header.css';
import '../css/mainBody.css';
import '../css/about.css';
import '../css/projects.css';
import '../css/contact.css';
import '../css/footer.css';
import '../css/media900.css';
import '../css/media710.css';
import '../css/media640.css';
import '../css/media590.css';


const navToggleOpen = document.querySelector('.navToggleOpen');
const navToggleClose = document.querySelectorAll('.navToggleClose');
const nav = document.querySelector('.nav');

navToggleOpen.addEventListener("click", () => {
    nav.style.transform = 'translateX(0%)';
});
navToggleClose.forEach((button) => {
    button.addEventListener("click", () => {
        nav.style.transform = 'translateX(100%)';
    });
});

console.log("%c This webiste is created by Chetan K", `
    font-size:1.2rem;
    padding:5px 20px;
    margin:2rem 0;
    background-color:black;
    border:2px solid white;
    box-shadow: 0 0 40px white;
    border-radius:5px;
`);