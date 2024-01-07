import React, { useContext, useState } from "react";
import "./header.css";
import Switch from "../Switch";
import { ModeContext } from "../../App";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = useContext(ModeContext);
  return (
    <>
      <header className={darkMode ? " header header-dark " : "header"}>
        <nav className="nav container">
          <a
            href="index.html"
            className={darkMode ? "nav__logo nav-toggle-active" : "nav__logo"}
          >
            {" < SHIVAM />"}
          </a>
          <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list ">
              <li className="nav__item">
                <a
                  href="#home"
                  className={
                    darkMode
                      ? " nav__link active-link  nav-link-dark-active"
                      : " active-link nav__link"
                  }
                >
                  <i className="uil uil-estate nav__icon"></i>Home
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#about"
                  className={
                    darkMode ? " nav__link  nav-link-dark" : "nav__link"
                  }
                >
                  <i className="uil uil-user nav__icon"></i>About
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#skills"
                  className={
                    darkMode ? " nav__link  nav-link-dark" : "nav__link"
                  }
                >
                  <i className="uil uil-file-alt nav__icon"></i>Skills
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#services"
                  className={
                    darkMode ? " nav__link  nav-link-dark" : "nav__link"
                  }
                >
                  <i className="uil uil-briefcase-alt nav__icon"></i> Services
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#portfolio"
                  className={
                    darkMode ? " nav__link  nav-link-dark" : "nav__link"
                  }
                >
                  <i className="uil uil-scenery nav__icon"></i> Portfolio
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#contact"
                  className={
                    darkMode ? " nav__link  nav-link-dark" : "nav__link"
                  }
                >
                  <i className="uil uil-message nav__icon"></i> Contact
                </a>
              </li>
            </ul>
            <i
              className="uil uil-times nav__close"
              onClick={() => setToggle(false)}
            ></i>
          </div>
          <div className="nav__toggle" onClick={() => setToggle(true)}>
            <i className="uil uil-apps"></i>
          </div>
          <div className="toggle_switch">
            <Switch
              onChange={() => setDarkMode((prev) => !prev)}
              checked={darkMode}
            />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
