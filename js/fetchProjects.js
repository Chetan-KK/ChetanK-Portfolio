import Tilt from "vanilla-tilt";
import projects from "./utils/projects";

const projectsElement = document.getElementById('projectsBox');

function projectsTemplate(title, imgSrc, desc, link) {
  projectsElement.innerHTML = projectsElement.innerHTML +
    `
    <div class="project">
          <img
            src="${imgSrc}"
            alt="project"
            class="project-image"
          />
          <div class="project-description">
            ${desc.slice(0, 400)}${desc.length < 400 ? "" : "..."}
            <div class="main-link cursorRespondLink">
              <a href="${link}" target="_blank"
                >Visit Project</a
              >
            </div>
          </div>
          <div class="project-title">${title}</div>
        </div>
        `;
}


projects.map(project => {
  projectsTemplate(
    project.title,
    project.imgSrc,
    project.desc,
    project.link
  );
});
let projectsBox = document.querySelectorAll(".project");

Tilt.init(projectsBox, {
  reverse: true,
  speed: 1500,
  reset: false,
  max: 20,
});