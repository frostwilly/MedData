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
            <span>{this.props.data.name ? this.props.data.name : 'Mark Lee'}</span>
            <span className="profile-desc">Age</span>
            <span>{this.props.data.age ? this.props.data.age : '86'} Years Old</span>
            <span className="profile-desc">KTP</span>
            <span>{this.props.data.ktp ? this.props.data.ktp : '123456789012345'}</span>
            <span className="profile-desc">Phone Number</span>
            <span>+62{this.props.data.phone ? this.props.data.phone : '087801234567'}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile