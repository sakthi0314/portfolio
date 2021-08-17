import React, { useEffect, useState } from "react";
import splash from "../../assets/images/spash-one.svg";
import logo from "../../assets/images/logo.svg";
import "./navbar.scss";

function Navbar() {
  const [show, setShow] = useState(false);
  const [toogleMenu, setToggleMenu] = useState(false);

  function handleNavbarhide() {
    if (window.scrollY > 120) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  function handleToogleMenu() {
    setToggleMenu(!toogleMenu);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleNavbarhide);
    return () => {
      window.removeEventListener("scroll", handleNavbarhide);
    };
  }, []);

  return (
    <>
      <header className={`header ${show && "headerBg"}`}>
        <nav
          className="navbar"
          data-sal="slide-down"
          data-sal-duration="1200"
          data-sal-delay="400"
          data-sel-easinng="ease-out-bounce"
        >
          <div className="container">
            <div className="navbar__logo">
              <img src={logo} alt="" />
            </div>
            <div
              className={`navbar__humberger ${toogleMenu && "menuGlow"}`}
              onClick={handleToogleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>

            <ul
              className={`navbar__mobile ${toogleMenu && "mobileMenuShow"}`}
              onClick={handleToogleMenu}
            >
              <li>
                <a rel="noreferrer" href="#about">
                  About
                </a>
              </li>
              <li>
                <a rel="noreferrer" href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a rel="noreferrer" href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a rel="noreferrer" href="#contact">
                  Contact
                </a>
              </li>

              <li>
                <button className="primary">Resume</button>
              </li>
            </ul>

            <ul className="navbar__list">
              <li>
                <a rel="noreferrer" href="#about">
                  About
                </a>
              </li>
              <li>
                <a rel="noreferrer" href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a rel="noreferrer" href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a rel="noreferrer" href="#contact">
                  Contact
                </a>
              </li>
              <div>
                <button className="primary">
                  <a
                    rel="noreferrer"
                    href="https://drive.google.com/file/d/1ElBVVp0XQ7BJPaGevyB319ZYuTEHuEek/view?usp=drivesdk"
                    target="_blank"
                    style={{ color: "currentcolor" }}
                  >
                    Resume
                  </a>
                </button>
              </div>
            </ul>
          </div>
        </nav>
      </header>
      <div className="header__splash">
        <img src={splash} alt="splash" />
      </div>
    </>
  );
}

export default Navbar;
