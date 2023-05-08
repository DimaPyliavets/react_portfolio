import "./navigation.css";
import "./navigation_1024px.css";
import Logo from "../../assets/logo-react.svg";
import HomeLogo from "../../assets/home.svg";
import AboutLogo from "../../assets/about-me.svg";
import ProjectsLogo from "../../assets/project.svg";
import ContactLogo from "../../assets/contact.svg";
import Menu from "../../assets/menu.svg";
import React, { useState } from "react";

const Navigation = () => {
  const [toggle, showMenu] = useState(false);

  return (
    <div className="navigation">
      <a href="#home" className="nav_logo">
        <img src={Logo} alt="logo" />
      </a>
      <nav className="nav">
        <div className="nav_menu">
          <button className={toggle ? "nav_toggle" : "nav_toggle"} onClick={() => showMenu(!toggle)}>
            <img src={Menu} alt="menu" className="burgerMenu" />
          </button>
          <ul className={toggle ? "nav_list-open nav_list" : "nav_list"}>
            <li className="nav_item" onClick={() => showMenu(!toggle)}>
              <a href="#home" className="nav_link">
                <i className="icon-home">
                  <img src={HomeLogo} alt="home" />
                </i>
                <p>Home</p>
              </a>
            </li>
            <li className="nav_item" onClick={() => showMenu(!toggle)}>
              <a href="#about" className="nav_link">
                <i className="icon-about">
                  <img src={AboutLogo} alt="about" />
                </i>
                <p>About</p>
              </a>
            </li>
            <li className="nav_item" onClick={() => showMenu(!toggle)}>
              <a href="#project" className="nav_link">
                <i className="icon-project">
                  <img src={ProjectsLogo} alt="project" />
                </i>
                <p>Projects</p>
              </a>
            </li>
            <li className="nav_item" onClick={() => showMenu(!toggle)}>
              <a href="#contact" className="nav_link">
                <i className="icon-contact">
                  <img src={ContactLogo} alt="contact" />
                </i>
                <p>Contact</p>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
