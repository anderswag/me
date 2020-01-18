import React from "react";
import "css/Bio.css";

const skills = [
  { name: "Javascript", color: "#F0DB4F" },
  { name: "React", color: "#61DBFB" },
  { name: "React Native", color: "#61DBFB" },
  { name: "Redux", color: "#7649bd" },
  { name: "Vue", color: "#41B883" },
  { name: "Vuex", color: "#41B883" },
  { name: "Node", color: "#3C873A" },
  { name: "Express", color: "#3C873A" }
];

class Bio extends React.Component {
  state = {
    isHovering: false
  };

  handleMouseOver() {
    this.setState({
      isHovering: !this.state.isHovering
    });
  }

  render() {
    return (
      <div
        className="bio"
        onMouseEnter={this.handleMouseOver.bind(this)}
        onMouseLeave={this.handleMouseOver.bind(this)}
        ref={this.props.meRef}
      >
        <div className="bio-content">
          <div className="bio-content_text">
            <p>I am a fullstack software developer based in Toronto</p>
            <br />
            <p className="bio-content_text__subtext">
              I specialize in web development and hybrid mobile development.
            </p>
          </div>
          <div className="bio-content_text">
            <p>My stack</p>
            <br />
            <div className="bio-skill">
              {skills.map(skill => (
                <div
                  className="bio-skill_box"
                  key={skill.name}
                  style={{
                    color: this.state.isHovering ? skill.color : undefined
                  }}
                >
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bio;
