import { CV } from "./Utils/Data/CV";
import Hero from "./components/Hero";
import "./App.scss";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Education from "./components/Education";
import Experience from "./components/Experience";
import More from "./components/More";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Foooter from "./components/Foooter";
import { useState } from "react";
import Hello from "./components/Hello";

const App = () => {
  console.log(CV);
  const { hero, education, experience, languages, habilities, works } = CV;

  const [currentRoute, setCurrentRoute] = useState("about");
  const [mainDisplay, setMainDisplay] = useState("hello");
  const changeDisplay = (event, route) => {
    event.preventDefault();
    setMainDisplay("app");
  };

  return (
    <div>
      {mainDisplay === "hello" && <Hello changeDisplay={changeDisplay} />}
      {mainDisplay === "app" && (
        <div className="app">
          <nav>
            <Navbar setCurrentRoute={setCurrentRoute} />
          </nav>
          <aside>
            <Hero info={hero} />
          </aside>
          <main>
            {currentRoute === "about" && (
              <div className="info">
                <About metadata={hero.aboutMe} />
                <More habilities={habilities} languages={languages} />
                <Education education={education} />
                <Experience experience={experience} />
              </div>
            )}

            {currentRoute === "works" && (
              <div className="works">
                <Works info={works} />
              </div>
            )}
            {currentRoute === "contact" && (
              <div className="contact">
                <Contact />
              </div>
            )}
            {currentRoute === "hello" && (
              <div className="hello">
                <Hello />
              </div>
            )}
          </main>
          <footer>
            <Foooter />
          </footer>
        </div>
      )}
    </div>
  );
};

export default App;
