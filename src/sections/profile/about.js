import React from "react";
import me from "../../assets/images/me.jpg";
import splash from "../../assets/images/Splash-two.svg";
import circle from "../../assets/images/circle.png";
import donut from "../../assets/images/donut.png";
import "./about.scss";

function About() {
  return (
    <section className="about" id="about">
      <div
        className="about__splash"
        data-sal="slide-up"
        data-sal-duration="1200"
        data-sal-delay="200"
        data-sel-easinng="ease-out-bounce"
      >
        <img src={splash} alt="splash" />
      </div>
      <div
        className="about__circle"
        data-sal="slide-up"
        data-sal-duration="1200"
        data-sal-delay="500"
        data-sel-easinng="ease-out-bounce"
      >
        <img src={circle} alt="splash" />
      </div>
      <div
        className="about__donut"
        data-sal="slide-up"
        data-sal-duration="1200"
        data-sal-delay="500"
        data-sel-easinng="ease-out-bounce"
      >
        <img src={donut} alt="splash" />
      </div>
      <div className="container">
        <div
          className="about__profile"
          data-sal="slide-up"
          data-sal-duration="1200"
          data-sal-delay="700"
          data-sel-easinng="ease-out-bounce"
        >
          <div className="about__profile--img">
            <img src={me} alt="sakthi" />
          </div>
        </div>
        <div className="about__content">
          <h1
            className="about__content--title"
            data-sal="slide-up"
            data-sal-duration="1200"
            data-sal-delay="700"
            data-sel-easinng="ease-out-bounce"
          >
            About me
          </h1>
          <p
            className="about__content--desc"
            data-sal="slide-up"
            data-sal-duration="1200"
            data-sal-delay="700"
            data-sel-easinng="ease-out-bounce"
          >
            Hello, world! I am <span>Sakthi</span>, a Frontend Developer from
            Chennai, India, And I am a self-taught web developer with a strong
            eye for innovative design and a keen understanding of techniques
            geared toward optimum .
          </p>
          <div
            className="about__content--cta"
            data-sal="slide-up"
            data-sal-duration="1200"
            data-sal-delay="200"
            data-sel-easinng="ease-out-bounce"
          >
            <button className="primary">
              <a href="#contact" style={{ color: "currentcolor" }}>
                Hire me
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
