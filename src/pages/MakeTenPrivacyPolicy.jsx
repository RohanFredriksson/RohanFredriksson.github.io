import React, { useEffect } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import './../styles/Default.css';

function MakeTenPrivacyPolicy() {

  useEffect(() => {
    document.title = 'Privacy Policy';
  }, []);

  return (
    <div>
      <section id="header"><Header/></section>

      <section id="policy">

        <div style={{paddingTop: 60, paddingBottom: 60}} className="content">

          <h1>Make Ten Privacy Policy</h1>
          <br/>

          <p>RojuanoDev built the Make Ten app as a paid app. This service is provided by RojuanoDev at a cost and is intended for use as is.</p>
          <br/>
          <p>This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone, including children, decides to use our service.</p>

          <br/>
          <h2>Information Collection and Use</h2>
          <br/>

          <p>We do not collect any personal information from users of our app, including children under the age of 13.</p>

          <br/>
          <h2>Log Data</h2>
          <br/>

          <p>We do not collect any log data from the app.</p>

          <br/>
          <h2>Cookies</h2>
          <br/>

          <p>We do not use cookies in our app.</p>

          <br/>
          <h2>Service Providers</h2>
          <br/>

          <p>We do not employ any third-party companies or individuals to facilitate our service.</p>

          <br/>
          <h2>Security</h2>
          <br/>

          <p>Because Make Ten does not require an internet connection and does not collect any user data, you can be assured that any information used within the app is completely secure. We do not transmit any data over the internet or store any user information on external servers. Your privacy and security are of utmost importance to us. However, please keep in mind that while the app itself does not pose any security risks, the security of the device on which the app is installed is the responsibility of the user. We recommend keeping your device updated with the latest security patches and using appropriate security measures to protect your personal information.</p>

          <br/>
          <h2>Links to Other Sites</h2>
          <br/>

          <p>Make Ten does not contain any links to external websites or services. The app is designed to be self-contained, and all functionality is provided within the app itself. Therefore, you can rest assured that there are no external links that may lead you to other websites or services.</p>

          <br/>
          <h2>Children’s Privacy</h2>
          <br/>

          <p>This app is intended for users of all ages, including children under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to take necessary actions.</p>

          <br/>
          <h2>Changes to This Privacy Policy</h2>
          <br/>

          <p>We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
          <br/>
          <p>This policy is effective as of 18/02/2024.</p>

          <br/>
          <h2>Contact Us</h2>
          <br/>

          <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at rojuano.dev@gmail.com</p>

        </div>

      </section>

      <section id="footer"><Footer/></section>
    </div>
  );

}
  
export default MakeTenPrivacyPolicy;