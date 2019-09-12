import React from 'react';
import me from './me.png';
import './style.css'

function Profile() {
  return (
    <div className='profile'>
      <img className='profile-pic' src={me}/>
      
      <h1 className='name-text'>Neil Prajapati</h1>

    </div>
  );
}

export default Profile;
