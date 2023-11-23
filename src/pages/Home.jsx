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
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>Hello World</div>
    </div>
  );

}

const About = () => {

  return (
    <div className="content">

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
    <div className="content">
      <ImageGallery images={images} />
    </div>
  );

}

const Home = () => {

  useEffect(() => {

    document.title = 'Rohan Fredriksson';

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
    <div style={{overflowX: 'hidden'}}>
      
      <section id="home"><Landing/></section>
      <section id="about"><About/></section>
      <section id="projects"><Projects/></section>
      <section id="footer"><Footer/></section>

    </div>
  );
}

export default Home;