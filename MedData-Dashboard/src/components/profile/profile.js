import React, { Component } from 'react';
import './profile.scss';
import face from '../../assets/mystery-man.jpg';

class Profile extends Component {
  render() {
    return (
      <div className="profile-card">
        <div className="profile-wrapper">
          <img src={face} className="profile-picture" alt="face" />
          <div className="profile-data">
            <span>Mark Lee</span>
            <span className="profile-desc">Age</span>
            <span>22 Years Old</span>
            <span className="profile-desc">KTP</span>
            <span>0123456789012345</span>
            <span className="profile-desc">Phone Number</span>
            <span>+6287801234567</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile