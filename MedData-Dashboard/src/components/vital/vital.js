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
            <span>{this.props.data.height ? this.props.data.height : '160'} cm</span>
            <span className="vital-desc">Weight</span>
            <span>{this.props.data.weight ? this.props.data.weight : '80'} kg</span>
            <span className="vital-desc">Blood Type</span>
            <span>{this.props.data.blood_type ? this.props.data.blood_type : 'O+'}</span>
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