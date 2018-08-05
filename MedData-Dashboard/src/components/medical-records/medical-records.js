import React, { Component } from 'react';
import Profile from '../profile/profile'
import Vital from '../vital/vital'
import Switch from '../switch/switch'
import Records from '../records/records'
import './medical-records.scss';
import Prescriptions from '../prescriptions/prescriptions';
import InputForm from '../input-form/input-form';

var link = "http://612004f4.ngrok.io/";

class MedicalRecords extends Component {
  constructor() {
    super()
    this.state = {
      tabSelected: "records",
      show: true,
      data: {},
    }
  }

  handleTabButton = (tab) => {
    this.setState({
      tabSelected: tab
    })
  }

  componentWillMount() {
    fetch(link+'user_data/10', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(
      (res) => {
        res.json().then(result => {
          this.setState({
            data: result
          })
          // if (result.error) {
          //   this.props.setBukalapakIsFindingApplicant({ isFindingApplicant: false })
          //   this.props.setNewAlert("Username tidak terdaftar")
          // }
          // else {
          //   this.props.setNewAlert("", false);
          //   this.props.setBukalapakUsernameNotInputted({
          //     usernameNotInputted: false
          //   })
          //   this.props.setBukalapakPrefill({
          //     username: result.usernameData,
          //     email: result.email,
          //     shop_name: result.storename
          //   })
          //   this.skipIntro();
          // }
        }).catch(console.log)
      }
    )
  }

  render() {
    return (
      <div className="wrapper">
        <Profile data={this.state.data} />
        <Vital data={this.state.data} />
        <Switch tabSelected={this.state.tabSelected} onClickTabButton={this.handleTabButton} />
        {
          this.state.tabSelected === "records" ? <Records /> :
            this.state.tabSelected === "prescriptions" ?
              <Prescriptions /> : ''
        }
        <InputForm reset={this.reset} />

      </div>
    )
  }
}

export default MedicalRecords