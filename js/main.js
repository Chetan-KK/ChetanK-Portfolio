import { Configuration, OpenAIApi } from 'openai';
import '../css/main.css';
import '../css/header.css';
import '../css/mainBody.css';
import '../css/about.css';
import '../css/projects.css';
import '../css/contact.css';

import '../css/footer.css';
import '../css/ai.css';
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


const aiForm = document.getElementById('aiForm');

aiForm.addEventListener('submit', (e) => {
    e.preventDefault();
    callAi();
});

const contactForm = document.getElementById('contactForm');
const contactSubmit = document.querySelector('.contactSubmit');


contactForm.addEventListener('submit', (e) => {
    contactSubmit.value = 'sending..';
    contactForm.classList.add('disable');
    setTimeout(() => {
        contactSubmit.value = 'sent to chetan!';
    }, 4000);
    setTimeout(() => {
        contactSubmit.value = 'send other message';
        contactForm.classList.remove('disable');

    }, 10000);
    e.preventDefault();
});

const aiInput = document.getElementById('aiInput');
const aiOutput = document.getElementById('aiOutput');

aiOutput.innerText = 'Result will be here!';

async function callAi() {
    aiOutput.innerText = 'Loading info please wait...';
    const configuration = new Configuration({
        organization: "org-k8MGUGI03Itd74phUwMjtJWX",
        apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${aiInput.value}`,
        temperature: 0,
        max_tokens: 1000,
    });
    aiOutput.innerText = response.data.choices[0].text;
}
