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
            <span>{this.props.data.name}</span>
            <span className="profile-desc">Age</span>
            <span>{this.props.data.age} Years Old</span>
            <span className="profile-desc">KTP</span>
            <span>{this.props.data.ktp}</span>
            <span className="profile-desc">Phone Number</span>
            <span>+62{this.props.data.phone}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile