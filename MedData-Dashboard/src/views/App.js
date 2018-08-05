import React, { Component } from 'react';
import MedicalRecords from '../components/medical-records/medical-records'
import './App.scss';
import TopBar from '../components/topbar/topbar';

class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <MedicalRecords />
      </div>
    )
  }
}

export default App
