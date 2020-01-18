import React from "react";
import "css/Work.css";
import { ReactComponent as Arrow } from "images/arrow.svg";
const EmployImage = require("images/employ.png");
const KarmaImage = require("images/karma.png");
const JumbleberryImage = require("images/jumbleberry.png");

const employUrl = "https://employapp.co/";
const karmaUrl = "https://www.karmacasting.com/";
const jumbleberryUrl = "https://jumbleberry.com/";

class Work extends React.Component {
  state = {
    width: window.innerWidth
  };

  componentDidMount() {
    window.addEventListener("resize", this.onWindowResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onWindowResize.bind(this));
  }

  onWindowResize() {
    this.setState({
      width: window.innerWidth
    });
  }

  getUrl(url) {
    return this.state.width < 850 ? url : undefined;
  }

  render() {
    return (
      <div className="work" ref={this.props.workRef}>
        <h1 className="work-heading">Work</h1>

        {/* JB */}
        <div className="work-job">
          <div className="work-job_container">
            <p className="work-job_title">JUMBLEBERRY</p>
            <p className="work-job_description">
              Jumbleberry is a performance marketing company that delivers a
              full-suite of CPA-based monetization solutions designed for direct
              response marketers.
            </p>
            <p className="work-job_description">
              Led architecture and delivered clean code for a highly data
              visualized user interface.
            </p>
            <div>
              <a href={jumbleberryUrl} className="work-job_link">
                View Project
                <Arrow className="work-job_arrow" />
              </a>
            </div>
          </div>
          <a href={this.getUrl(jumbleberryUrl)}>
            <img
              className="work-job_jumbleberry"
              src={JumbleberryImage}
              alt="jumbleberry_screenshot"
            />
          </a>
        </div>

        {/* Employ */}
        <div className="work-job">
          <div className="work-job_container">
            <p className="work-job_title">EMPLOY APP</p>
            <p className="work-job_description">
              Employ is a video-based recruiting platform that brings employers
              and job-seekers closer to each other.
            </p>
            <p className="work-job_description">
              Focused on delivering seamless user experiences on on mobile
              devices using React Native.
            </p>
            <div>
              <a href={employUrl} className="work-job_link">
                View Project
                <Arrow className="work-job_arrow" />
              </a>
            </div>
          </div>
          <a href={this.getUrl(employUrl)}>
            <img
              className="work-job_employ"
              src={EmployImage}
              alt="employ_screenshot"
            />
          </a>
        </div>

        {/* Karma */}
        <div className="work-job">
          <div className="work-job_container">
            <p className="work-job_title">KARMA CASTING</p>
            <p className="work-job_description">
              Karma Casting is a Toronto-based startup that aims to help
              short-term experiential marketing gigs find each other.
            </p>
            <p className="work-job_description">
              Here I had impact on every part of the product - including design,
              frontend, backend, and e2e testing.
            </p>
            <div>
              <a href={karmaUrl} className="work-job_link">
                View Project
                <Arrow className="work-job_arrow" />
              </a>
            </div>
          </div>
          <a href={this.getUrl(karmaUrl)}>
            <img
              className="work-job_karma"
              src={KarmaImage}
              alt="karma_screenshot"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Work;
