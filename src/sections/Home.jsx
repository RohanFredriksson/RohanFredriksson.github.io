import React from 'react';

import Navigation from '../components/Navigation.jsx'; 

const BackgroundComponent = () => {
  const backgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#14131b',
    zIndex: -10
  };

  return <div style={backgroundStyle}></div>;
};

const Home = () => {

  const containerStyle = {
    position: 'relative',
    height: '100vh',
    color: 'white',
    fontSize: '2rem',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  };

  return (
    <div style={containerStyle}>
      <Navigation/>
      <BackgroundComponent/>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        Hello World
      </div>
    </div>
  );

}

export default Home;