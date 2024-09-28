import React from "react";
import Navbar from './components/Navbar/Navbar'
import Hero from "./components/Hero/Hero"
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Skill from "./components/Skill/Skill"
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "aos/dist/aos.css"
import Aos from "aos"



function App() {
  React.useEffect(()=>{
    Aos.init({
      offset:100,
      duration:500,
      easing: 'ease-in-sine',
      delay:100

    });
    Aos.refresh();

  }, []);
  return (
    <div>
      <Navbar/>
      <div id="hero"><Hero/></div>
      <div id="about"><About/></div>
      <div id="services"><Services/></div>
      <div id="skill"><Skill/></div>
      <div id="projects"><Projects/></div>
      <div id="contact"><Contact/></div>
      <Footer/>   
    </div>
    
  );
}

export default App;
