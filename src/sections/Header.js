import React from "react";
import "css/Header.css";
import Resume from "files/Anderson_Resume.pdf";

function Header(props) {
  return (
    <div className="header">
      <div className="header-content">
        <a onClick={() => props.onMeClick()}>ME</a>
        <a onClick={() => props.onWorkClick()}>WORK</a>
        <a href={Resume}>RESUME</a>
      </div>
    </div>
  );
}

export default Header;
