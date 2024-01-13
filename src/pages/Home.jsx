import React, { useEffect } from 'react';

import './../styles/Default.css';
import './../styles/Navigation.css';

import ImageGallery from '../components/ImageGallery';
import HoverGif from '../components/HoverGif';
import Footer from '../components/Footer';

import PancakeEngineAnimation from './../assets/pancake.gif';
import PancakeEngineStatic from './../assets/pancake-static.png';
import FractalExploreAnimation from './../assets/fractal-explore.gif';
import FractalExploreStatic from './../assets/fractal-explore-static.png';
import GIFToContributionAnimation from './../assets/gif-to-contribution.gif';
import GIFToContribtutionStatic from './../assets/gif-to-contribution-static.png';

const scroll = (id) => {
  if (typeof id !== 'string') {return;}
  const element = document.getElementById(id.replace(/^#/, ''));
  if (element) {element.scrollIntoView({behavior: 'smooth'});}
};

const Navigation = () => {

  return (
    <ul className="navigation">
      <li onClick={() => {window.history.pushState(null, null, '#home'); scroll('home');}}>Home</li>
      <li onClick={() => {window.history.pushState(null, null, '#about'); scroll('about');}}>About</li>
      <li onClick={() => {window.history.pushState(null, null, '#projects'); scroll('projects');}}>Projects</li>
    </ul>
  );

}

const LandingBackground = () => {
  return <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#14131b', zIndex: -10}}></div>;
};

const Landing = () => {

  return (
    <div style={{position: 'relative', height: '100vh', color: 'white', fontSize: '2rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',}}>
  
      <LandingBackground/>
    
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <h1>Hi, my name is</h1>
        <h1>Rohan Fredriksson</h1>
      </div>

    </div>
  );

}

const About = () => {

  return (
    <div style={{paddingTop: 60, paddingBottom: 60}} className="content">
      <h1>About</h1>
      <br/>
      <p>My name is Rohan Fredriksson. I am a software developer located in Sydney. I'm passionate about technology, music, and pretty much anything with artistic vision.</p>
      <br/>
      <p>In 2023, I graduated from the University of Sydney with a Bachelor of Computing, majoring in Computer Science. Whilst studying at the University of Sydney, I was awarded the Dean's List of Excellence in Academic Performance award.</p>
      <br/>
      <p>I am always learning new languages and frameworks</p>
      <br/>
      <ul>
        <li>JavaScript (Node.js, React, React Native, Discord.js)</li>
        <li>C++ and C (GLFW, OpenGL, GLSL, ImGui)</li>
        <li>SQL (MySQL, PostgreSQL, SQLite)</li>
        <li>Python (Flask, Bottle)</li>
        <li>Java (JavaFX)</li>
        <li>HTML and CSS</li>
      </ul>
    </div>
  );

}

const PancakeEngine = () => {

  return (
    <HoverGif 
      animation={PancakeEngineAnimation} 
      frame={PancakeEngineStatic} 
      alt={'Pancake Engine'}
    />
  );

}

const FractalExplore = () => {

  return (
    <HoverGif 
      animation={FractalExploreAnimation} 
      frame={FractalExploreStatic} 
      alt={'Fractal Explore'}
    />
  );

}

const GIFToContribution = () => {

  return (
    <div style={{backgroundColor: '#0d1117'}}>
      <HoverGif 
        animation={GIFToContributionAnimation} 
        frame={GIFToContribtutionStatic} 
        alt={'GIF to Contribution'}
      />
    </div>
  );

}

const Projects = () => {

  const images = [
    { id: 1, title: 'Pancake Engine', href: 'https://github.com/RohanFredriksson/PancakeEngine', contents: (<PancakeEngine/>)},
    { id: 2, title: 'Fractal Explore', href: 'https://github.com/RohanFredriksson/FractalExplore', contents: (<FractalExplore/>)},
    { id: 3, title: 'GIF to Contribution', href: 'https://github.com/RohanFredriksson/GIF-to-Contribution', contents: (<GIFToContribution/>)},
  ];  

  return (
    <div style={{paddingTop: 60, paddingBottom: 60}} className="content">
      <h1>Projects</h1>
      <br/>
      <p>It is a passion of mine to work on projects in my free time, and I love learning new frameworks, languages and technologies. Most of my projects are open source and can be found on my <a href="https://github.com/RohanFredriksson/">GitHub Profile</a>. A carefully curated selection of my best projects are displayed below.</p>
      <br/>
      <ImageGallery images={images} />
    </div>
  );

}

const Contact = () => {

  return (
    <div style={{paddingTop: 60, paddingBottom: 60}} className="content">
      <h1>Please Get in Touch!</h1>
      <br/>
      <p>If you want to work on a project together or just want to connect, feel free to reach out on <a href="https://www.linkedin.com/in/rohanfredriksson/">LinkedIn</a>.</p>
    </div>
  )

}

const Home = () => {

  useEffect(() => {

    scroll(window.location.hash);

    const change = () => {
      const next = window.location.hash;
      console.log("Fragment Identifier Changed: ", next);
    }

    window.addEventListener('hashchange', change);

    return () => {
      window.removeEventListener('hashchange', change);
    }

  }, []);

  return (
    <div style={{overflowX: 'hidden', backgroundColor: '#FBFAFE'}}>

      <section style={{backgroundColor: '#101517'}} id="home"><Landing/></section>
      <section style={{backgroundColor: '#ffffff'}} id="about"><About/></section>
      <section style={{backgroundColor: '#f6f7f7'}} id="projects"><Projects/></section>
      <section style={{backgroundColor: '#efeae1'}} id="contact"><Contact/></section>
      <section id="footer"><Footer/></section>

    </div>
  );
}

export default Home;