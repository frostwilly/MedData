import React, { Component } from 'react';
import './prescriptions.scss';

class Prescriptions extends Component {
  render() {
    return (
      <div className="prescriptions-card">
        <table>
          <tbody>
            <tr>
              <td>Paracetamol CAP(500 mg)</td>
              <td>2018/08/01</td>
              <td>2018/08/05</td>
            </tr>
            <tr>
              <td colSpan="2">
                <span className="prescriptions-desc">Drug Type</span>
                <span>Generic</span>
                <span className="prescriptions-desc">Uses</span>
                <span>Take three times per day</span>
                <span className="prescriptions-desc">Hospital</span>
                <span>Siloam</span>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>Amoxicilin CAP (500 mg)</td>
              <td>2018/07/01</td>
              <td>2018/07/05</td>
            </tr>
            <tr>
              <td colSpan="2">
                <span className="prescriptions-desc">Drug Type</span>
                <span>Brand</span>
                <span className="prescriptions-desc">Uses</span>
                <span>Take three times per day for 3 days, must be finished</span>
                <span className="prescriptions-desc">Hospital</span>
                <span>Siloam</span>
              </td>
              <td>1 Rx</td>
            </tr>
            <tr>
              <td>Metformin HCl TAB (1000 mg)</td>
              <td>2018/06/23</td>
              <td>2018/06/23</td>
            </tr>
            <tr>
              <td colSpan="2">
                <span className="prescriptions-desc">Drug Type</span>
                <span>Generic</span>
                <span className="prescriptions-desc">Uses</span>
                <span>Take one time per day, by mouth</span>
                <span className="prescriptions-desc">Hospital</span>
                <span>Siloam</span>
              </td>
              <td>2 Rx</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Prescriptions