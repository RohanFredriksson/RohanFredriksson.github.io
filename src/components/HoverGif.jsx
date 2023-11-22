import React from 'react';
import './../styles/HoverGif.css';

const HoverGif = ({ animation, frame, alt }) => {
  return (
    <div className="gif-container" style={{width: '100%', height: '100%'}}>
      <img
        className="gif-image static"
        src={frame}
        alt={alt}
      />
      <img
        className="gif-image animated"
        src={animation}
        alt={alt}
      />
    </div>
  );
};

export default HoverGif;