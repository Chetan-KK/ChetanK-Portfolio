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

