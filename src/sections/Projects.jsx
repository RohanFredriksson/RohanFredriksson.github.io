import React from 'react';

import ImageGallery from '../components/ImageGallery';
import './../index.css';

const images = [
    { id: 1, src: 'https://www.gstatic.com/webp/gallery3/1.sm.png', title: 'Pancake Engine' },
    { id: 2, src: 'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png', title: 'Fractal Explore' },
    { id: 3, src: 'image1.jpg', title: 'Image 3 Title' },
    { id: 4, src: 'image2.jpg', title: 'Image 4 Title' },
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