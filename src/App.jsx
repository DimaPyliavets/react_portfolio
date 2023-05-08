import React, { useState, useEffect } from "react";
import "./index.css";
import "./App.css";
import Navigation from "./components/navigation/navigation";
import Home from "./components/home/home";
import About from "./components/about_me/about";
import Loading from "./components/loading/loading";
import Project from "./components/projects/project";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Navigation />
      <main className="main">
        <Home />
        <About />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
