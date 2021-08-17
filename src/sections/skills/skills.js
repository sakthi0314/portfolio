import React from "react";
import Skill from "../../components/skill/skill";
import splash from "../../assets/images/splash-three.svg";
import { skills } from "./index";
import "./skills.scss";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills__splash">
        <img src={splash} alt="splash" />
      </div>

      <div className="container">
        <div
          className="skills__header"
          data-sal="slide-up"
          data-sal-duration="1200"
          data-sal-delay="500"
          data-sel-easinng="ease-out-bounce"
        >
          <h1>Proficient skills</h1>
        </div>

        <ul
          className="skills__list"
          data-sal="slide-up"
          data-sal-duration="1200"
          data-sal-delay="200"
          data-sel-easinng="ease-out-bounce"
        >
          {skills.map((skill) => (
            <Skill
              key={skill.id}
              name={skill.name}
              icon={skill.icon}
              color={skill.color}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
