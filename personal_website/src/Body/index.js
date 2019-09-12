import React from 'react';
import './style.css';
import About from './About';
import Skills from './Skills';
import WorkExperience from './WorkExperience'
import Contact from "./Contact";

class Body extends React.Component {
  render = ()=>{
    return (
      <div className='body'>
        <About/>
        <br/><br/><br/><br/><br/><br/>
        <Skills/>
        <WorkExperience/>
        <Contact/>
      </div>
    );
  }
}

export default Body;
