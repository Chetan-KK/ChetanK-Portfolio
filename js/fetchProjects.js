const url = '/projects.json';

const projectsElement = document.getElementById('projectsBox');

function projectsTemplate(title, imgSrc, disc, link) {
    projectsElement.innerHTML = projectsElement.innerHTML +
        `
    <div class="project">
          <img
            src="${imgSrc}"
            alt="project"
            class="project-image"
          />
          <div class="project-description">
            ${disc}
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

fetch(url)
    .then(response => response.json())
    .then(projects => {
        console.log(projects);
        projects.map(project => {
            projectsTemplate(
                project.title,
                project.imgSrc,
                project.disc,
                project.link
            );
        });
    }
    );