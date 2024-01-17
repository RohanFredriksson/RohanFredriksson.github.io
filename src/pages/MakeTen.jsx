import React, { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';

import { compute } from './../modules/compute';

import Header from '../components/Header';
import Footer from '../components/Footer';

import './../styles/MakeTen.css';

function MakeTen() {

  const [code, setCode] = useState('');
  const [answer, setAnswer] = useState('');

  const updateCode = (c) => {
    
    if (!/^[0-9]*$/.test(c)) {return;}
    setCode(c);

    if (!/^[0-9][0-9][0-9][0-9]$/.test(c)) {setAnswer(''); return;}
    setAnswer(compute(c, 10));

  }

  useEffect(() => {
    document.title = 'Make Ten';
  }, []);

  return (
    <div>
      <section id="header"><Header/></section>

      <section className="maketen">

        <div className='maketen-content'>

          <div style={{paddingTop: 60, paddingBottom: 60}} className='maketen-column-container'>
          
            <div className='maketen-column'>

              <h1>Make Ten Calculator</h1>
              <br/>
              <p>Enter a four digit train code below to find a solution.</p>
              <br/>

              <OtpInput
                value={code}
                onChange={updateCode}
                numInputs={4}
                inputStyle={{
                  fontFamily: 'Inter',
                  fontSize: 'calc(12px + 0.390625vw)',
                  width: 'calc(30px + 0.390625vw)',
                  height: 'calc(32px + 0.390625vw)',
                  borderWidth: 1, 
                  borderRadius: 5,
                  marginRight: 'calc(2%)', 
                }}
                inputType='tel'
                renderInput={(props) => <input {...props} />}
              />

              <br/>

              {answer !== null && answer !== '' && <p>There is a solution!<br/><br/>{answer} = 10<br/><br/></p>}
              {answer === null && <p>There is no solution for this one.<br/><br/><br/><br/></p>}
              {answer === '' && <p><br/><br/><br/><br/></p>}

            </div>

            <div className='maketen-column' style={{marginRight: 0}}>
              <h1>About</h1>
              <br/>
              <p>The Sydney Trains Make Ten Challenge has become a beloved pastime for commuters seeking a way to make their time on the train more enjoyable.<br/><br/>Each carriage is assigned a unique four-digit number. Using all of the digits from this number, players aim to find equations that sum to 10 using basic arithmetic operations.<br/><br/>This calculator only checks the following operators: addition, subtraction, multiplication and division.<br/><br/>If this calculator is useful to you, please consider buying the Make Ten app. The application has extra features such as a camera scanner and a solution spoiler guard, if you want to know whether a solution exists without being spoiled.</p>
            </div>

          </div>

        </div>

      </section>

      <section id="footer"><Footer/></section>
    </div>
  );

}
  
export default MakeTen;