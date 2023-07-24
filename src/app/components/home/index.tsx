import React from 'react';
import Hero from '../hero-banner';
import About from '../about-me';
import Projects from '../projects';


const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default HomePage;