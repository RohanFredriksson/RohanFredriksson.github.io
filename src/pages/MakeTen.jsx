import React, { useEffect } from 'react';

import './../styles/MakeTen.css';

function MakeTen() {

    useEffect(() => {
      document.title = 'Make Ten';
    }, []);
  
    return (
      <div className="maketen-whole" style={{width: '100vw', height: '100vh'}}>
        <div className="maketen-gallery maketen-content">
          <div className="maketen-container">
            <div className="maketen-inner">
              <p>hello</p>
            </div>
          </div>
          <div className="maketen-container">
            <div className="maketen-inner">
              <p>hello</p>
            </div>
          </div>
        </div>
      </div>
    );

  }
  
  export default MakeTen;