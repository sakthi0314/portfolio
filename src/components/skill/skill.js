import React from "react";
import "./skill.scss";

function Skill({ icon, name, color }) {
  return (
    <li
      className="skill"
      data-sal="slide-up"
      data-sal-duration="1200"
      data-sal-delay="700"
      data-sel-easinng="ease-out-bounce"
    >
      <div className="skill__tooltip">{name}</div>
      <div className="skill__icon" style={{ color }}>
        <ion-icon name={icon}></ion-icon>
      </div>
    </li>
  );
}

export default Skill;
