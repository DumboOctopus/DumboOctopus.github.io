import React from 'react';
import './style.css';
import linkedinLogo from './linkedinlogo.png'

function Contact () {
  return (
    <div>
      <h1 id="contact" className='body-section-header'>Contact</h1>
      <p className='body-text'>
        <p>You can contact me on Linkedin:</p>
        <a className="grey-link" href="https://www.linkedin.com/in/neilprajapati">
        <img className="contact-image" src={linkedinLogo}/>
        </a>
      </p>

    </div>
  );
}

export default Contact;
