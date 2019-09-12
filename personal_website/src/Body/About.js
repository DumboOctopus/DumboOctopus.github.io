import React from 'react';
import './style.css';

function About () {
  return (
    <div className="body-section-container">
      <p id="about" className='intro-header'>
      Hello I'm <b>Neil</b>,<br/>
      a <b>sophomore Computer Science major</b> at <br/>
      <b>UCLA</b> (University of California, Los Angeles)
     </p>

     <div className="next-section-button-container">
     <a href="#skills" className="next-section-button">Skills</a>
     </div>
     <br/>
     <br/>
     <br/>
     <br/>
   </div>
  );
}

export default About;
