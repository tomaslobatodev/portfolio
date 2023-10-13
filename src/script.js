const projectsElement = document.getElementById("projects-list")

const projects = [
  {
    title: "CV App",
    img: "./assets/cv-app.png",
    link: "https://cv-app-a62.pages.dev/",
  },
  {
    title: "Weather API App",
    img: "./assets/weather-app.png",
    link: "https://tomaslobatodev.github.io/weather-app/",
  },
  {
    title: "Etch A Sketch",
    img: "./assets/etch-a-sketch.png",
    link: "https://tomaslobatodev.github.io/Etch-a-Sketch/",
  },
]

projects.forEach((project) => {
  newProject = `
    <li class="project">
      <img src="${project.img}">
      <div>
        <h2>${project.title}</h2>
        <a href="${project.link}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg></a>
      </div>
    </li>
  `
  projectsElement.innerHTML += newProject
})
