import { Container } from "./footer.styles";

import reactIcon from "../../Assets/react-icon.svg";
import linkedinIcon from "../../Assets/linkedin.png";
import githubIcon from "../../Assets/github.png";

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>T</span>
        <span>arik</span>
      </a>
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
