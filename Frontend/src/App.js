import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './views/Home';
import AboutMe from './views/AboutMe';
import Contact from './views/Contact';
import Projects from './views/Projects';
import Footer from './components/Footer';

function App() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    window.scrollTo({
      top: section.offsetTop - 70, // Adjust for navbar height
      behavior: 'smooth'
    });
  };
  return (
    <Router>
      <div className="App">
        <Header scrollToSection={scrollToSection} />
        <Home id="home"/>
        <AboutMe id="about"/>
        <Projects id="projects"/>
        <Contact id="contact"/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
