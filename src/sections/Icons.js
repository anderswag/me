import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faMedium
} from "@fortawesome/free-brands-svg-icons";
import "css/Icons.css";

const iconArray = [
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/anderson-hung-b8515564"
  },
  { icon: faGithub, url: "https://github.com/anderswag" },
  { icon: faMedium, url: "https://medium.com/@andersontaylorhung" }
];

const Icons = () => {
  return (
    <div className="icons">
      <div className="icons_container">
        {iconArray.map(i => {
          return (
            <a href={i.url} style={{ color: "inherit" }}>
              <FontAwesomeIcon key={i.url} icon={i.icon} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Icons;
