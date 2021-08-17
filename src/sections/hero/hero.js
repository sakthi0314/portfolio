import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import circle from "../../assets/images/circle.png";
import donut from "../../assets/images/donut.png";
import { toast } from "react-toastify";
import Notification from "../../components/notification/notification";
import "./hero.scss";

function Hero() {
  const mail = "sakthivelselvam2001@gmail.com";

  function copy() {
    toast.dark("Copied to clipboard", {
      style: {
        fontSize: 16,
      },
    });
  }

  return (
    <section className="hero">
      <div className="container">
        <Notification />
        <div
          className="hero__title"
          data-sal="slide-up"
          data-sal-duration="1200"
          data-sal-delay="200"
          data-sel-easinng="ease-out-bounce"
        >
          <h1>
            Hi, I'm <span>sakthi</span>, a web developer
          </h1>
        </div>
        <div
          className="hero__dec"
          data-sal="slide-up"
          data-sal-duration="1200"
          data-sal-delay="200"
          data-sel-easinng="ease-out-bounce"
        >
          <p>Frontend React Js Developer</p>
        </div>
        <CopyToClipboard text={mail} onCopy={copy}>
          <div
            className="hero__cta"
            data-sal="slide-up"
            data-sal-duration="1200"
            data-sal-delay="200"
            data-sel-easinng="ease-out-bounce"
          >
            <button className="primary"></button>
          </div>
        </CopyToClipboard>
      </div>

      <div
        className="hero__circle--one"
        data-sal="slide-up"
        data-sal-duration="1200"
        data-sal-delay="400"
        data-sel-easinng="ease-out-bounce"
      >
        <img src={circle} alt="cirlce one" />
      </div>
      <div
        className="hero__circle--two"
        data-sal="slide-up"
        data-sal-duration="1200"
        data-sal-delay="400"
        data-sel-easinng="ease-out-bounce"
      >
        <img src={donut} alt="Donut" />
      </div>
    </section>
  );
}

export default Hero;
