import React, { useContext } from "react";
import "./footer.css";
import { ModeContext } from "../../App";
const Footer = () => {
  const [darkMode] = useContext(ModeContext);
  return (
    <footer className={darkMode ? "footer_dark" : "footer"}>
      <div className="footer__container container">
        <h1 className="footer__title">Shivam </h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#protfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            rel="noreferrer"
            href="mailto:shivamranjan81@gmail.com"
            className="footer__social-link"
            target={"_blank"}
          >
            <i className="bx bxs-envelope"></i>
          </a>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/shivam-ranjan-b57a28150/"
            className="footer__social-link"
            target={"_blank"}
          >
            <i className="bx bxl-linkedin-square"></i>
          </a>
          <a
            href="https://github.com/Shivam8100"
            rel="noreferrer"
            c
            className="footer__social-link"
            target={"_blank"}
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Shivam Ranjan. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
