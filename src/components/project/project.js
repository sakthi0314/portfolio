import React from "react";
import "./project.scss";

function Project({ img, content, dir }) {
  return (
    <figure
      data-sal="slide-up"
      data-sal-duration="1200"
      data-sal-delay="200"
      data-sel-easinng="ease-out-bounce"
      className="project"
      style={{ flexDirection: dir }}
    >
      <div className="project__content">
        <h3>{content.title}</h3>
        <p>{content.description}</p>
        <ul className="project__feature">
          {content.features.map((feature) => (
            <li>{feature}</li>
          ))}
        </ul>

        <ul className="project__techs">
          {content.techs.map((tech) => (
            <li>{tech}</li>
          ))}
        </ul>
      </div>
      <div className="project__img">
        <img src={img} alt={content.title} />
      </div>
    </figure>
  );
}

export default Project;
