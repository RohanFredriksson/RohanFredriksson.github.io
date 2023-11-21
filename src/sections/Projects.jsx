import React from 'react';

import ImageGallery from '../components/ImageGallery';
import './../index.css';

const images = [
    { id: 1, src: 'https://www.gstatic.com/webp/gallery3/1.sm.png', title: 'Pancake Engine', href: 'https://github.com/RohanFredriksson/PancakeEngine' },
    { id: 2, src: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png', title: 'Fractal Explore', href: 'https://github.com/RohanFredriksson/FractalExplore' },
    { id: 3, src: 'image1.jpg', title: 'GIF to Contribution', href: 'https://github.com/RohanFredriksson/GIF-to-Contribution' },
    { id: 4, src: 'image2.jpg', title: 'Image 4 Title', href: '' },
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