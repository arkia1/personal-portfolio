//import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navigation from "./components/common/Navigation.jsx";
import HeroSection from "./components/hero/HeroSection.jsx";
import AboutMe from "./components/about/AboutMe.jsx";
import Projects from "./components/projects/Projects.jsx";
import ContactMe from "./components/contact/ContactMe.jsx";

function App() {
  return (
    <>
      <div className={`w-screen h-screen flex flex-col`}>
        <Navigation />
        <HeroSection />
        <div className={`scrollbar-hide`}>
          <AboutMe />
          <Projects />
          <ContactMe />
        </div>
      </div>
    </>
  );
}

export default App;
