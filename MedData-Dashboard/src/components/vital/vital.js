import React, { Component } from 'react';
import './vital.scss';

class Vital extends Component {
  render() {
    return (
      <div className="vital-card">
        <span className="vital">Vital Statistics</span>
        <div className="vital-wrapper">
          <div className="vital-first-column">
            <span className="vital-desc">Height</span>
            <span>{this.props.data.height} cm</span>
            <span className="vital-desc">Weight</span>
            <span>{this.props.data.weight} kg</span>
            <span className="vital-desc">Blood Type</span>
            <span>{this.props.data.blood_type}</span>
          </div>
          <div className="vital-second-column">
            <span className="vital-desc">Allergies</span>
            <span>Pollen.</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Vital