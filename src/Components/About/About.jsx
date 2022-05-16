import { Container } from "./about.styles";

import profileImage from "../../Assets/profile1.jpg";
import cssIcon from "../../Assets/css-icon.svg";
import htmlIcon from "../../Assets/html-icon.svg";
import jsIcon from "../../Assets/js-icon.svg";
import nodeIcon from "../../Assets/node-icon.svg";
import reactIcon from "../../Assets/react-icon.svg";
import bootstrapIcon from "../../Assets/bootstrap-icon.svg";
import laravelIcon from "../../Assets/laravel-icon.svg";
import typescriptIcon from "../../Assets/typescript-icon.svg";
import vueIcon from "../../Assets/vue-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About Me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>
            Enthusiastic student recently graduated from the Virtual University
            of Senegal in Linguistics and currently learning Web development
            with some basic skills and the ability to work with a minimal
            supervision. Eager to bring value to your establishment through hard
            work and commitment to quality.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.4 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            minima, velit quae ipsa consequuntur asperiores consequatur magnam
            reprehenderit culpa iure magni autem harum itaque adipisci expedita
            modi atque delectus aliquid!
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            commodi, sint a itaque accusamus, quidem asperiores suscipit aliquid
            debitis nisi neque vero recusandae perspiciatis. Eos, eveniet
            quibusdam. Voluptates, doloremque consectetur?
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>Skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>

          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={vueIcon} alt="Vue" />
            </ScrollAnimation>
          </div> */}

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
              <img src={laravelIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
              <img src={bootstrapIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div> */}

          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div> */}
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src={profileImage} alt="Profile" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
