import React, { useEffect } from 'react';

import Home from './sections/Home.jsx';
import Projects from './sections/Projects.jsx';
import Footer from './sections/Footer.jsx';

//import logo from './assets/logo.svg';
import './App.css';

function App() {

  useEffect(() => {
    document.title = 'Rohan Fredriksson';
  }, []);

  return (
    <div style={{overflowX: 'hidden'}}>
      <section id="home"><Home/></section>
      <section id="about">
        <h2>About</h2>
        <p>Content for Section 2</p>
      </section>
      <section id="projects"><Projects/></section>
      <section id="footer"><Footer/></section>
    </div>
  );
}

export default App;
