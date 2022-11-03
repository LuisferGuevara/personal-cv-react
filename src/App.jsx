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
// import Prueba from './components/Prueba';
import Foooter from "./components/Foooter";
import { useState } from "react";

const App = () => {
  console.log(CV);
  const { hero, education, experience, languages, habilities, works  } = CV;
  
  const [currentRoute, setCurrentRoute] = useState("");
  // const changeRoute = (event, route) =>{
  //   event.preventDefault();
  //   setCurrentRoute(route);
  

  return (
    <div className="app">
      <nav>
        <Navbar setCurrentRoute = {setCurrentRoute}/>
      </nav>
      <aside>
        <Hero info={hero} />
      </aside>
      <main>
        {currentRoute === "about" && (
          <div className="info">
            <About metadata={hero.aboutMe} />
            <More habilities={habilities} languages={languages}/>
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
            <Contact/>
          </div>
        )}
      </main>
      <footer>
        <Foooter />
      </footer>
      {/* <Prueba/> */}
    </div>
  );
};

export default App;
