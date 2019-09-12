import React from 'react';
import './style.css';
import dblogo from "./dblogo.png"
import uaslogo from "./UASatucla.png"
import codedlogo from "./coded.jpeg"

function WorkExperience () {
  return (
    <div class="body-section-container">
      <h1 id="workexperience" className='body-section-header'>Work Experience</h1>
      <div class="work-experience-flexbox">
        <img className="work-experience-image" src={dblogo} alt="Daily Bruin Logo"/>
        <div className="work-experience-title-description-container">
          <p className="work-experience-title">Daily Bruin</p>
          <p className="work-experience-description">
            Daily Bruin is UCLA's college newspaper.
            On October 2018, I became an <b>Internal Tools Contributor</b>.
            As a contributor, I coded parts of the frontend and backend of
            Daily Bruin's custom <a className="grey-link" href="https://github.com/dailybruin/meow">social media scheduler, meow</a>.
            <div className="work-experience-interrupt">Timeline</div>
            In March 2019, the former Internal Tools Directory was promoted to the Online Director.
            I applied to the vacant position and since then became the <b>Internal Tools Director</b>.
            <br/>
            As the Internal Tools Director, I <b>project manage meow</b> and <b>lead</b> our Internal Tools Team.
            I also communicate with the other sections (teams) in Daily Bruin frequently for feature requests,
            internal tools requests and bugs.
          </p>
        </div>
      </div>
      <div class="work-experience-flexbox">
        <img className="work-experience-image" src={uaslogo} alt="Daily Bruin Logo"/>
        <div className="work-experience-title-description-container">
          <p className="work-experience-title">UAS at UCLA</p>
          <p className="work-experience-description">
            Unmanned Aerial Systems at UCLA is an organization which "competes in international AUVSI SUAS competition to design, manufacture,
            and test cutting-edge drone technology for carrying out mock search-and-rescue missions, in accordance with the competition specs"
            (<a className="grey-link" href="https://uasatucla.org/">Source: UAS at UCLA Website </a>).
           <div className="work-experience-interrupt">Timeline</div>
            On October 2018, I became an <b>Ground Communications member</b> and I coded parts of the frontend and backend of
            UAS's groundstation web application which used Node.js, React.js and socket.io.
            <br/>
            Unfortunately, I left the organization in March due to my promotion to Daily Bruin's Internal Tools Directory.
          </p>
        </div>
      </div>
      <div class="work-experience-flexbox">
        <img className="work-experience-image" src={codedlogo} alt="Daily Bruin Logo"/>
        <div className="work-experience-title-description-container">
          <p className="work-experience-title">Cod.Ed</p>
          <p className="work-experience-description">
            Cod.Ed is a 501c dedicated to teaching computer programming to. elementary, middle and high schoolers.
            Additionally, they teach at many coding at many school sites and serve as a coding backend for
            other non profits. <a className="grey-link" href="https://coded.academy/"> Cod.Ed Website</a>
            <div className="work-experience-interrupt">Timeline</div>
            In <b>2016</b>, I began volunteering as a <b>teaching assitant</b> at Cod.Ed
            <br/>
            In <b>2017</b>, I became a <b>paid teacher</b> at Cod.Ed. I taught Java and Python to elementary, middle and high schoolers.
            <br/>
            In <b>2018</b>, I was assigned to a special project. The National College Foundation (a 501c) need a project managing
            software for a rocketry teams. I was assigned to work with Angel, an employee of the National College Foundation, on
            this web application. Angel served as a link to the clients of this software and together, we finished a
            minimum viable product before the 2 month deadline.
            <br/>
            Since college started, I have been to busy to stay as a teacher. So instead, I was assigned as the
            <b> Cod.Ed Webmaster</b>. Our website is written in Express.js and plain HTML, CSS and Javascript.
            During summer vacation, I go back to Cod.Ed to teach students or train the staff. This year, I
            <b> taught a staff training on Devops.</b> This training covered Node.js, Express.js, MongoDB, AWS EC2
            and docker.
          </p>
        </div>
      </div>

    </div>
  );
}

export default WorkExperience;
