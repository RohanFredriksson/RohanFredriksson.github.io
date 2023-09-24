import React from "react";

import { Home } from './sections/Home.jsx';

//import logo from './assets/logo.svg';
import './App.css';

function App() {
  return (
    <div style={{overflowX: 'hidden'}}>
      <section id="home"><Home/></section>
      <section id="about">
        <h2>About</h2>
        <p>Content for Section 2</p>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <p>Content for Section 3</p>
      </section>
    </div>
  );
}

export default App;
