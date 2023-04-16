import React, { useState } from "react";
import "./qualification.css";
const Qualification = () => {
  const [toggle, setToggle] = useState(1);
  const toggleTab = (index) => {
    setToggle(index);
  };
  return (
    <div className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggle === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>
          <div
            className={
              toggle === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>
        <div className="qualification__sections ">
          <div
            className={
              toggle === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  B.Tech (Electronics and communication Engineering)
                </h3>
                <span className="qualification_subtitle">
                  Maharishi Dayanand University, Rohtak.(75.4%)
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2015 - 2019
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  GATE Qualified
                </h3>
                <span className="qualification_subtitle">
                  
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2020
                </div>
              </div>
            </div>{" "}
          </div>{" "}
          <div
            className={
              toggle === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Javascript Intern</h3>
                <span className="qualification_subtitle">
                  Milestone OS noida
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 01/2021 - 06/2021,
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Frontend developer</h3>
                <span className="qualification_subtitle">
                  Antino Labs private limited
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 11/2021 - Present
                </div>
              </div>
            </div>{" "}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Frontend React Developer</h3>
                <span className="qualification_subtitle">Freelance</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 01/2021 - 11/21
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
