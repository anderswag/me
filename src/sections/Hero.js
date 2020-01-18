import React from "react";
import "css/Hero.css";
const GalaxyImage = require("images/galaxy.jpg");

function Hero() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${GalaxyImage})` }}>
      <div className="hero_content">
        <div>
          <h1 className="hero_name">Anderson</h1>
          <h1 className="hero_name">Hung</h1>
        </div>
        <br />
        <div>
          <p className="hero_jobTitle">Software Engineer</p>
          <p className="hero_company">Jumbleberry</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
