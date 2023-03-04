import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
import { BrowserRouter } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import Illustration from "../../Assets/illustration.svg";
import { Container } from "./hero.styles";

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp" animateOnce>
          <p>Hello 👋, I am</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000} animateOnce>
          <h1>Mountaga Diao Leye DIOP</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000} animateOnce>
          <h3>Full Stack Developper</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000} animateOnce>
          <p className="small-resume">
            Full Stack Web developer with a little industry experience building
            websites and web applications. Coding and dreaming on React JS.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000} animateOnce>
          <BrowserRouter>
            <NavHashLink smooth to="#contacts" className="button">
              Contact
            </NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000} animateOnce>
          <img src={Illustration} alt="Illustration" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
