import React, { useEffect } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import './../styles/MakeTen.css';

function MakeTen() {

    useEffect(() => {
      document.title = 'Make Ten';
    }, []);
  
    return (
      <div>

        <section id="header"><Header/></section>

        <section style={{width: '100vw', height: 'calc(100vh - 176px)'}}>

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

        </section>

        <section id="footer"><Footer/></section>

      </div>
    );

  }
  
  export default MakeTen;