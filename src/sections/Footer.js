import React from "react";
import Icons from "sections/Icons";
import "css/Footer.css";
const Profile = require("images/profile.jpeg");

function Footer() {
  return (
    <div className="footer">
      <div className="footer_textContainer">
        <p className="footer_heading">Looking to work together?</p>
        <p className="footer_blurb">
          I'd love to grab coffee to talk about anything - from software
          development and tech to the newest Sekiro game or anime. Shoot me an
          email and let’s work something out!
          <span aria-label="wave" role="img">
            👋
          </span>
        </p>
      </div>
      <div
        className="footer_image"
        style={{ backgroundImage: `url(${Profile})` }}
      />
      <Icons />
    </div>
  );
}

export default Footer;
