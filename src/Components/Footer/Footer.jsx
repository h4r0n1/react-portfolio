import { BrowserRouter as Router } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";
import githubIcon from "../../Assets/github.png";
import linkedinIcon from "../../Assets/linkedin.png";
import reactIcon from "../../Assets/react-icon.svg";
import { Container } from "./footer.styles";

export function Footer() {
  return (
    <Container className="footer">
      <Router>
        <HashLink smooth="true" to="#home" className="logo">
          <span>h4r0n1</span>
        </HashLink>
      </Router>

      <div>
        <p>
          Made with <img src={reactIcon} alt="React" /> and a lot of
          <span>❤️</span>
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/mdl-diop/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a href="https://github.com/h4r0n1" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </Container>
  );
}
