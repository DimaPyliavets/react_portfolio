import React from "react";
import { projectData } from "./projects-data";

const ShowcaseCarousel = () => {
  return (
    <div className="carousel_cont_main">
      <div className="projects_carousel">
        {projectData.map((project) => (
          <div className="project_carousel_item" key={project.id}>
            <div className="project_carousel_item_content">
              <img
                src={project.image}
                alt=""
                className="project_carousel_item_image"
              />
              <div className="project_carousel_item_text">
                <h3 className="project_carousel_item_title">{project.title}</h3>
                <p className="project_carousel_item_desc">
                  {project.description}
                </p>
                <a className="project_carousel_item_link" href={project.link}>
                  Go to GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowcaseCarousel;
