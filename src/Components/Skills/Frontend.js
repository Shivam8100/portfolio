import React, { useContext } from "react";
import { frontendSkills } from "./constant";
import { ModeContext } from "../../App";

const Frontend = () => {
  const [darkMode] = useContext(ModeContext);
  return (
    <div
      className={
        darkMode ? "skills__content skill_dark_mode" : "skills__content"
      }
    >
      <h3 className="skills__title">Frontend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          {frontendSkills.map((skill, i) => (
            <div key={i} className="skills__data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
                <span className="skills__level">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frontend;
