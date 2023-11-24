import React from 'react';

const Footer = () => {

  const containerStyle = {
    position: 'relative',
    height: '10vh',
    backgroundColor: '#14131b',
    color: 'white',
    fontSize: '2rem',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  };

  return (
    <div style={containerStyle}>
      <p>Rohan Fredriksson</p>
    </div>
  );

}

export default Footer;