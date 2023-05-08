import React, { Component } from "react";
import "./about.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ProfileImage from "../../assets/user-circle.svg";
import MyCV from "../../assets/Dmytro-Pyliavets-CV.pdf"

class About extends Component {
  componentDidMount() {
    AOS.init({
      delay: 300,
      duration: 100,
    });
  }

  render() {
    return (
      <section className="about" id="about">
        <div className="about_background"></div>
        <div className="about_container" >
          <div className="about_container_main" data-aos="fade" >
            <div className="about_info_container">
              <div className="about_profile_image_container">
                <img
                  src={ProfileImage}
                  alt="profile_image"
                  className="profile-image"
                />
              </div>
              <div className="about_name">
                <h1>Dmytro Pyliavets</h1>
                <ul>
                  <li>Front-end/Mobile Developer</li>
                  <li>Languages: Ukrainian (native), Polish (communicative), English</li>
                </ul>
                <p className="about_me">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eius fuga explicabo, porro ad aliquam recusandae. Ipsum, aliquid veniam. Cum blanditiis eveniet laborum consequatur consequuntur aperiam dicta ab quae pariatur!
                </p>
              </div>
            </div>
            <span className="skkils">Skils</span>
            <div className="about_skills">
              <div className="skill-item">
                <h2 className="skill-title">Mobile</h2>
                <ul className="skill-list">
                  <li>Flutter</li>
                  <li>Java</li>
                  <li>Kotlin</li>
                </ul>
              </div>
              <div className="skill-item">
                <h2 className="skill-title">Front-end</h2>
                <ul className="skill-list">
                  <li>Figma</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>PHP</li>
                  <li>React JS</li>
                </ul>
              </div>
              <div className="skill-item">
                <h2 className="skill-title">Tools</h2>
                <ul className="skill-list">
                  <li>Github</li>
                  <li>Photoshop</li>
                  <li>Lightroom</li>
                  <li>Premiere Pro</li>
                </ul>
              </div>
            </div>
            <div className="about_button_download">
              <a href={MyCV} download class="download-cv-btn">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
