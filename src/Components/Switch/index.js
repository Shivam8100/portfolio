import React from "react";
import "./switch.css";

function Switch({ onChange, checked }) {
  return (
    <>
      <label class="switch">
        <input type="checkbox" onChange={() => onChange()} checked={checked} />
        <span class="slider round"></span>
      </label>
    </>
  );
}

export default Switch;
