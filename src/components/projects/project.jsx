import React, { Component } from "react";
import "./project.css";
import ShowcaseCarousel from "./ShowcaseCarousel";

class Project extends Component {
  render() {
    return (
      <section className="project" id="project">
        <div className="project_background">
          <div className="project_container_content">
            <div className="project_container">
              <div className="project_myworks_title">
                <h1>My Recent Projects</h1>
              </div>
              <div className="project_showcase_container">
                <ShowcaseCarousel />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Project;
