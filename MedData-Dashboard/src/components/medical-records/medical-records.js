import React, { Component } from 'react';
import Profile from '../profile/profile'
import Vital from '../vital/vital'
import Switch from '../switch/switch'
import Records from '../records/records'
import './medical-records.scss';
import Prescriptions from '../prescriptions/prescriptions';
import InputForm from '../input-form/input-form';

class MedicalRecords extends Component {
  constructor() {
    super()
    this.state = {
      tabSelected: "records"
    }
  }

  handleTabButton = (tab) => {
    this.setState({
      tabSelected: tab
    })
  }

  render() {
    return (
      <div className="wrapper">
        <Profile />
        <Vital />
        <Switch tabSelected={this.state.tabSelected} onClickTabButton={this.handleTabButton} />
        {
          this.state.tabSelected === "records" ? <Records /> :
            this.state.tabSelected === "prescriptions" ?
              <Prescriptions /> : ''
        }

        <InputForm />

      </div>
    )
  }
}

export default MedicalRecords