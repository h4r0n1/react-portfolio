import { Container } from "./porfolio.styles";
import githubIcon from "../../Assets/github-icon.svg";
import externalLinkIcon from "../../Assets/external-link-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import { projects } from "./Projects";

export function Portfolio() {
  //   console.log(projects);
  return (
    <Container id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project) => (
          <ScrollAnimation animateIn="flipInX">
            {/* {console.log(project.id)} */}
            <div className="project" key={project.id}>
              <header>
                <svg
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#23ce6b "
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <div className="project-links">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={githubIcon} alt="GitHub" />
                    </a>
                  )}
                  {project.deployLink && (
                    <a
                      href={project.deployLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={externalLinkIcon} alt="Visitar site" />
                    </a>
                  )}
                </div>
              </header>
              <div className="body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <footer>
                <ul className="tech-list">
                  {project.techno.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
