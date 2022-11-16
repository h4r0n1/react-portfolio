import { Container } from "./contacts.styles";
import emailIcon from "../../Assets/email-icon.svg";
import phoneIcon from "../../Assets/phone-icon.svg";
import { FaEnvelope } from "react-icons/fa";
import { Form } from "../Form/Form";

export function Contacts() {
  return (
    <Container id="contacts">
      <header>
        <h2>Contact Me</h2>
        <p>
          If you've seen my potential or want to talk to me, don't hesitate to
          send me a message.
        </p>
      </header>
      <div className="contacts">
        <div>
          {/* <img src={emailIcon} alt="Email" /> */}
          <FaEnvelope />
          <a href="mailto:mdl.diop97@gmail.com">mdl.diop97@gmail.com</a>
        </div>
        {/* <div>
          <img src={phoneIcon} alt="Email" />
          <a href="tel:+221782528384">(+221) 78 252 83 84</a>
        </div> */}
      </div>
      <Form />
    </Container>
  );
}
