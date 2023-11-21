import React from 'react';
import './../styles/ImageGallery.css';

const ImageGallery = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.map((image) => (
        <div key={image.id} className="image-container">
          <a href={image.href}>
            {image.contents}
            <div className="image-title">{image.title}</div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;