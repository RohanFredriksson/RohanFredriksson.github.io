import React from 'react';

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
import MakeTenStatic from './../assets/make-ten-static.png';
import SecureMessagingStatic from './../assets/secure-messaging-static.png';
import RocBotStatic from './../assets/rocbot-static.png';

const scroll = (id) => {
  if (typeof id !== 'string') {return;}
  const element = document.getElementById(id.replace(/^#/, ''));
  if (element) {element.scrollIntoView({behavior: 'smooth'});}
};

const Landing = () => {

  return (
    <div style={{position: 'relative', height: '100vh',}}>
      
      <svg preserveAspectRatio="xMidYMid slice" viewBox="10 10 80 80">
        <path fill="#9b5de5" className="out-top" d="M37-5C25.1-14.7,5.7-19.1-9.2-10-28.5,1.8-32.7,31.1-19.8,49c15.5,21.5,52.6,22,67.2,2.3C59.4,35,53.7,8.5,37-5Z"/>
        <path fill="#f15bb5" className="in-top" d="M20.6,4.1C11.6,1.5-1.9,2.5-8,11.2-16.3,23.1-8.2,45.6,7.4,50S42.1,38.9,41,24.5C40.2,14.1,29.4,6.6,20.6,4.1Z"/>
        <path fill="#00bbf9" className="out-bottom" d="M105.9,48.6c-12.4-8.2-29.3-4.8-39.4.8-23.4,12.8-37.7,51.9-19.1,74.1s63.9,15.3,76-5.6c7.6-13.3,1.8-31.1-2.3-43.8C117.6,63.3,114.7,54.3,105.9,48.6Z"/>
        <path fill="#00f5d4" className="in-bottom" d="M102,67.1c-9.6-6.1-22-3.1-29.5,2-15.4,10.7-19.6,37.5-7.6,47.8s35.9,3.9,44.5-12.5C115.5,92.6,113.9,74.6,102,67.1Z"/>
      </svg>

      <div className="navigation-container">
        <ul className="navigation-list">
          <li><a className="navigation-link" href="#make-ten">Resume</a></li>
          <li><p className="navigation-link" onClick={() => {scroll('contact');}}>Contact</p></li>
          <li><p className="navigation-link" onClick={() => {scroll('projects');}}>Projects</p></li>
          <li><p className="navigation-link" onClick={() => {scroll('about');}}>About</p></li>
        </ul>
      </div>

      <div className="title-container">
        <p className="title">Hi, my name is<br/>Rohan&nbsp;Fredriksson</p>
      </div>
      
    </div>
  );

}

const About = () => {

  return (
    <div style={{paddingTop: 60, paddingBottom: 60}} className="content">

      <h1>About</h1>
      <br/>

      <div className='column-container'>
        
        <div className='column'>
          <p>My name is Rohan Fredriksson. I am a software developer located in Sydney. I'm passionate about technology, music, and pretty much anything with artistic vision.</p>
          <br/>
          <p>In 2023, I graduated from the University of Sydney with a Bachelor of Computing, majoring in Computer Science. Whilst studying at the University of Sydney, I was awarded the Dean's List of Excellence in Academic Performance award.</p>
          <br/>
          <p>I am always learning new languages and frameworks.</p>
          <br/>
        </div>

        <div className='column' style={{marginRight: 0}}>
          <ul>
            <li>JavaScript (Node.js, React, React Native, Discord.js)</li>
            <li>C++ and C (GLFW, OpenGL, GLSL, ImGui)</li>
            <li>SQL (MySQL, PostgreSQL, SQLite)</li>
            <li>Python (Flask, Bottle)</li>
            <li>Java (JavaFX)</li>
            <li>HTML and CSS</li>
          </ul> 
        </div>

      </div>

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

const MakeTen = () => {
  return <HoverGif
    animation={MakeTenStatic} 
    frame={MakeTenStatic} 
    alt={'Make Ten Calculator'}
  />
}

const SecureMessaging = () => {
  return <HoverGif
    animation={SecureMessagingStatic}
    frame={SecureMessagingStatic}
    alt={'Secure Message Webchat'}
  />
}

const RocBot = () => {
  return <HoverGif
    animation={RocBotStatic}
    frame={RocBotStatic}
    alt={'RocBot Discord Music Streaming'}
  />
}

const Projects = () => {

  const images = [
    { id: 1, title: 'Pancake Engine', href: 'https://github.com/RohanFredriksson/PancakeEngine', contents: (<PancakeEngine/>)},
    { id: 2, title: 'Fractal Explore', href: 'https://github.com/RohanFredriksson/FractalExplore', contents: (<FractalExplore/>)},
    { id: 3, title: 'GIF to Contribution', href: 'https://github.com/RohanFredriksson/GIF-to-Contribution', contents: (<GIFToContribution/>)},
    { id: 4, title: 'Make Ten Calculator', href: '/#make-ten', contents: <MakeTen/>},
    { id: 5, title: 'Encrypted Web Chat', href: 'https://github.com/RohanFredriksson/SecureMessagingWebsite', contents: <SecureMessaging/>},
    { id: 6, title: 'Discord Music Bot', href: 'https://github.com/RohanFredriksson/RocBot', contents: <RocBot/>},
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