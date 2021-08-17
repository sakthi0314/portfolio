import React from "react";
import { covidTracker, frontendmentor, moviehub } from "./index";
import covidTrackerImage from "../../assets/images/covid.png";
import movieHubImage from "../../assets/images/moviehub_homepage.png";
import frontendmentorImage from "../../assets/images/frontendmentor.png";
import splash from "../../assets/images/Splash-two.svg";
import circle from "../../assets/images/circle.png";
import donut from "../../assets/images/donut.png";
import Project from "../../components/project/project";
import "./projects.scss";

function Projects() {
  return (
    <div className="projects" id="projects">
      <div
        className="projects__splash"
        data-sal="slide-up"
        data-sal-duration="1200"
        data-sal-delay="200"
        data-sel-easinng="ease-out-bounce"
      >
        <img src={splash} alt="splash" />
      </div>

      <div
        className="projects__circle"
        data-sal="slide-up"
        data-sal-duration="1200"
        data-sal-delay="200"
        data-sel-easinng="ease-out-bounce"
      >
        <img src={circle} alt="circle" />
      </div>

      <div className="container">
        <div className="projects__header">
          <h1>My Projects</h1>
        </div>

        <div className="projects__content">
          <Project img={movieHubImage} content={moviehub} dir="row" />
          <Project
            img={covidTrackerImage}
            content={covidTracker}
            dir="row-reverse"
          />
          <Project
            img={frontendmentorImage}
            content={frontendmentor}
            dir="row"
          />
        </div>
      </div>

      <div
        className="projects__donut"
        data-sal="slide-up"
        data-sal-duration="1200"
        data-sal-delay="200"
        data-sel-easinng="ease-out-bounce"
      >
        <img src={donut} alt="donut" />
      </div>
    </div>
  );
}

export default Projects;
