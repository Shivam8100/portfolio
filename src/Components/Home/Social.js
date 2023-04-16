import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        rel="noreferrer"
        href="mailto:shivamranjan81@gmail.com"
        className="home__social-icon"
        target={"_blank"}
      >
        <i className="bx bxs-envelope"></i>
      </a>
      <a
        rel="noreferrer"
        href="https://www.linkedin.com/in/shivam-ranjan-b57a28150/"
        className="home__social-icon"
        target={"_blank"}
      >
        <i className="uil uil-linkedin"></i>
      </a>
      <a
        rel="noreferrer"
        href="https://github.com/Shivam8100"
        className="home__social-icon"
        target={"_blank"}
      >
        <i className="uil uil-github"></i>
      </a>
    </div>
  );
};

export default Social;
