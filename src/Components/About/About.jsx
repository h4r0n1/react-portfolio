import { Container } from "./about.styles";

import ScrollAnimation from "react-animate-on-scroll";
import bootstrapIcon from "../../Assets/bootstrap-icon.svg";
import cssIcon from "../../Assets/css-icon.svg";
import htmlIcon from "../../Assets/html-icon.svg";
import jsIcon from "../../Assets/js-icon.svg";
import laravelIcon from "../../Assets/laravel-icon.svg";
import nodeIcon from "../../Assets/node-icon.svg";
import profileImage from "../../Assets/profile2.jpg";
import reactIcon from "../../Assets/react-icon.svg";
import typescriptIcon from "../../Assets/typescript-icon.svg";
import vueIcon from "../../Assets/vue-icon.svg";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft" animateOnce>
          <h2>About</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} animateOnce>
          <p>
            Enthusiastic student recently graduated from the Virtual University
            of Senegal in Linguistics and currently learning Web development
            with some basic skills and the ability to work with a minimal
            supervision. Eager to bring value to your establishment through hard
            work and commitment to quality.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" animateOnce>
          <h3>Skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation
              animateIn="fadeInUp"
              delay={0.2 * 1000}
              animateOnce
            >
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation
              animateIn="fadeInUp"
              delay={0.3 * 1000}
              animateOnce
            >
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation
              animateIn="fadeInUp"
              delay={0.4 * 1000}
              animateOnce
            >
              <img src={bootstrapIcon} alt="Bootstrap" />
            </ScrollAnimation>
          </div>

          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={vueIcon} alt="Vue" />
            </ScrollAnimation>
          </div> */}

          <div className="hability">
            <ScrollAnimation
              animateIn="fadeInUp"
              delay={0.5 * 1000}
              animateOnce
            >
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation
              animateIn="fadeInUp"
              delay={0.6 * 1000}
              animateOnce
            >
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation
              animateIn="fadeInUp"
              delay={0.7 * 1000}
              animateOnce
            >
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation
              animateIn="fadeInUp"
              delay={0.8 * 1000}
              animateOnce
            >
              <img src={laravelIcon} alt="Laravel" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation
              animateIn="fadeInUp"
              delay={0.9 * 1000}
              animateOnce
            >
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000} animateOnce>
          <img src={profileImage} alt="Profile" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
