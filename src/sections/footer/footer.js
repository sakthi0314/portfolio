import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer__links">
          <li>
            <a
              rel="noreferrer"
              href="https://twitter.com/sakthi0314"
              target="_blank"
            >
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              href="https://github.com/sakthi0314"
              target="_blank"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/sakthivel-s-b8921a1ab"
              target="_blank"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              href="https://www.instagram.com/sakthi0314/"
              target="_blank"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
        <p>Designed and built by Sakthi</p>
      </div>
    </footer>
  );
}

export default Footer;
