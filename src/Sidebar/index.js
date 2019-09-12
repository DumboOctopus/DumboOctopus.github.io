import React from 'react';
import './style.css'
import Profile from '../Profile'

class Sidebar extends React.Component {
  render = () => {
    return (
      <div className='sidebar'>
        <Profile/>
        <ul className='links-container'>
          <li className='links-li'>
          <a className='nav-link' href='#about'>About </a>
          </li>
          <li className='links-li'>
          <a className='nav-link' href='#skills'>Skills</a>
            </li>
          <li className='links-li'>
          <a className='nav-link' href='#workexperience'>Work Experience</a>
            </li>
          <li className='links-li'>
          <a className='nav-link' href='#contact'>Contact </a>
            </li>

        </ul>
      </div>
    )
  }

}

export default Sidebar;
