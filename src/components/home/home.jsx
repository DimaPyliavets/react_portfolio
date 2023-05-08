import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./home.css";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Typewriter from "typewriter-effect";

class Home extends Component {
  componentDidMount() {
    AOS.init({
      disable: false,
      startEvent: "onScroll",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 1000,
      duration: 400,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }

  render() {
    return (
      <section className="home" id="home">
        <div className="home_background"></div>
        <div
          className="home_container"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">
          <div className="home_info_container">
            <h1 className="home_info">
              <Typewriter
                options={{
                  strings: ["I'm a front-end/mobile developer"],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                }}
              />
            </h1>
            <HeaderSocials/>
            <ScrollDown/>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
