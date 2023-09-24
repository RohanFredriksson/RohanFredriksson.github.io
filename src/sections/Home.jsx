import React from 'react';

import { Navigation } from '../components/Navigation.jsx'; 

const BackgroundComponent = () => {
  const backgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%', // Set the width to take up the whole viewport width
    height: '100%', // Set the height to take up the whole viewport height
    backgroundColor: '#14131b', // Replace with your desired background color or use your custom background component here
    zIndex: -10
  };

  return <div style={backgroundStyle}></div>;
};

const Home = () => {

  const containerStyle = {
    position: 'relative', // Position relative to place the text on top
    height: '100vh', // Set the container height to the viewport height
    color: 'white', // Text color
    fontSize: '2rem', // Adjust text size as needed
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add text shadow for better visibility
  };

  return (
    <div style={containerStyle}>
      <Navigation/>
      <BackgroundComponent /> {/* Render the BackgroundComponent as the background */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        Hello World
      </div>
    </div>
  );

}

export { Home };