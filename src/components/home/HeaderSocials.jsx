import React from "react";
import Facebook from "../../assets/facebook.svg";
import LinkedIn from "../../assets/linkedin.svg";
import GitHib from "../../assets/github.svg";

const HeaderSocials = () => {
  return (
    <div className="home_socials">
      <a
        href="https://www.facebook.com/DimaPilyavets26/"
        className="home_social-link"
        target="blank"
      >
        <img src={Facebook} alt="facebook" className="image_link" />
      </a>
      <a
        href="https://www.linkedin.com/in/dmytro-pyliavets-8748071b1/"
        className="home_social-link"
        target="blank"
      >
        <img src={LinkedIn} alt="linkedin" className="image_link" />
      </a>
      <a
        href="https://github.com/DimaPyliavets"
        className="home_social-link"
        target="blank"
      >
        <img src={GitHib} alt="github" className="image_link" />
      </a>
    </div>
  );
};

export default HeaderSocials;
