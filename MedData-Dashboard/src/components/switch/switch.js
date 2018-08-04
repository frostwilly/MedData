import React, { Component } from 'react';
import './switch.scss';

class Switch extends Component {
  render() {
    return (
      <div className="tab-button">
        <span className={this.props.tabSelected === "records" ? 'tab-button-active' : ''} onClick={() => this.props.onClickTabButton("records")}>
          Records
        </span>
        <span className={this.props.tabSelected === "prescriptions" ? 'tab-button-active' : ''} onClick={() => this.props.onClickTabButton("prescriptions")}>
          Prescriptions
        </span>
      </div>
    )
  }
}

export default Switch