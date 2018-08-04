import React, { Component } from 'react';
import './vital.scss';

class Vital extends Component {
  render() {
    return (
      <div className="vital-card">
        <div className="vital-wrapper">
          <div className="vital-first-column">
            <span className="vital-desc">Height</span>
            <span>170 cm</span>
            <span className="vital-desc">Weight</span>
            <span>60 kg</span>
            <span className="vital-desc">Blood Type</span>
            <span>O+</span>
          </div>
          <div className="vital-second-column">
            <span className="vital-desc">Allergies</span>
            <span>Pollen, Bacteria, and Water.</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Vital