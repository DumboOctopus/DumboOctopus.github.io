import React from 'react';
import me from './me.png';
import './style.css'

class Profile extends React.Component {
  render = () => {
    return (
      <div className='profile'>
        <img className='profile-pic' src={me}/>


        {this.props.isMobile? null: <h1 className='name-text'>Neil Prajapati</h1>}

      </div>
    );
  }
}

export default Profile;
