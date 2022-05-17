import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "./header.styles";
import { NavLink } from "react-router-dom";
import { NavHashLink, HashLink } from "react-router-hash-link";

export function Header() {
  const [isactive, setactive] = useState(false);

  function toggleTheme() {
    let html = document.getElementsByTagName("html")[0];
    html.classList.toggle("light");
  }

  function closeMenu() {
    setactive(false);
  }

  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth="true" to="#home" className="logo">
          <span>T</span>
          <span>arik</span>
        </HashLink>

        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />

        <label htmlFor="switch">Toggle</label>

        <nav className={isactive ? "active" : ""}>
          <NavHashLink smooth="true" to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth="true" to="#about" onClick={closeMenu}>
            About me
          </NavHashLink>
          <NavHashLink smooth="true" to="#portfolio" onClick={closeMenu}>
            Portfolio
          </NavHashLink>
          <NavHashLink smooth="true" to="#contacts" onClick={closeMenu}>
            Contacts
          </NavHashLink>
          {/* <a href={Curriculo} download className="button">
            CV
          </a> */}
        </nav>

        <div
          aria-expanded={isactive ? "true" : "false"}
          aria-haspopup="true"
          aria-label={isactive ? "close menu" : "open menu"}
          className={isactive ? "menu active" : "menu"}
          onClick={() => {
            setactive(!isactive);
          }}
        ></div>
      </Router>
    </Container>
  );
}
