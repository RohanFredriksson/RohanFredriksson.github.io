import React, { useState, useEffect } from 'react';

import './../styles/Footer.css';

import GitHubLogo from './../assets/github.png';
import LinkedInLogo from './../assets/linkedin.png';

const Footer = () => {

  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {

    const handleResize = () => {
      setShouldRender(window.innerWidth > 470);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  return (
    <div className="footer">

      <p>Rohan Fredriksson</p>

      <div>

        <a href={'https://www.linkedin.com/in/rohanfredriksson/'}
          style={{display: 'block', width: '48px', height: '48px', float: 'left', marginRight: '12px'}}
        >
          <img
            style={{position: 'relative', width: '48px', height: '48px'}}
            src={LinkedInLogo}
            alt={"LinkedIn"}
          />
        </a>

        <a href={'https://github.com/RohanFredriksson'}
          style={{display: 'block', width: '48px', height: '48px', overflow: 'hidden', borderRadius: '12px'}}
        >
          <div
            className="connection"
            style={{backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '48px', height: '48px'}}
          >
            <img
              style={{position: 'relative', width: '38px', height: '38px'}}
              src={GitHubLogo}
              alt={"GitHub"}
            />
          </div>
        </a>

      </div>

      {shouldRender &&
        <p>Living Legend</p>
      }

    </div>
  );

}

export default Footer;