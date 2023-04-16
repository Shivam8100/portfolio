import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
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
            href="mailto:Vivekkushwah714@gmail.com.com"
            className="footer__social-link"
            target={"_blank"}
          >
            <i className="bx bxs-envelope"></i>
          </a>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/vivek-kushwah-997b14211/"
            className="footer__social-link"
            target={"_blank"}
          >
            <i className="bx bxl-linkedin-square"></i>
          </a>
          <a
            href="https://github.com/vivekkushwah16"
            rel="noreferrer"
            c
            className="footer__social-link"
            target={"_blank"}
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Shivam Ranjan.  All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
