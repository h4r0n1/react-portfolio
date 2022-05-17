import { BrowserRouter } from "react-router-dom";
import { Container } from "./hero.styles";
import ScrollAnimation from "react-animate-on-scroll";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Illustration from "../../Assets/illustration.svg";
import { NavHashLink } from "react-router-hash-link";
import "animate.css";

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello 👋, I am</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Mountaga Diao Leye DIOP</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Junior Front-End Developper</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">
            Junior Web developer with a little industry experience building
            websites and web applications. Coding and dreaming on React JS.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contacts" className="button">
              Contact
            </NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Ilustração" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
