import React from 'react';

import ImageGallery from '../components/ImageGallery';
import HoverGif from '../components/HoverGif';

import './../index.css';

import PancakeEngineAnimation from './../assets/pancake.gif';
import PancakeEngineStatic from './../assets/pancake-static.png';
import FractalExploreAnimation from './../assets/fractal-explore.gif';
import FractalExploreStatic from './../assets/fractal-explore-static.png';
import GIFToContributionAnimation from './../assets/gif-to-contribution.gif';
import GIFToContribtutionStatic from './../assets/gif-to-contribution-static.png';

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

const images = [
    { id: 1, title: 'Pancake Engine', href: 'https://github.com/RohanFredriksson/PancakeEngine', contents: (<PancakeEngine/>)},
    { id: 2, title: 'Fractal Explore', href: 'https://github.com/RohanFredriksson/FractalExplore', contents: (<FractalExplore/>)},
    { id: 3, title: 'GIF to Contribution', href: 'https://github.com/RohanFredriksson/GIF-to-Contribution', contents: (<GIFToContribution/>)},
    { id: 4, title: 'Pancake Engine', href: 'https://github.com/RohanFredriksson/PancakeEngine', contents: (<GIFToContribution/>)},
];

const Projects = () => {

  return (
    <div className="content">
        <h2>Projects</h2>
        <ImageGallery images={images} />
        
    </div>
    
  );

}

export default Projects;