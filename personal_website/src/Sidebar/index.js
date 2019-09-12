import React from 'react';
import './style.css'
import Profile from '../Profile'

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render = () => {
    let isMobile = this.state.width <= 820; //this is also in the media queries
    return (
      <div className='sidebar'>
        <Profile isMobile={isMobile}/>
        {isMobile? null:this.renderLinks()}
      </div>
    )
  }

  renderLinks = () => {
    return (
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
    );
  }

}

export default Sidebar;
