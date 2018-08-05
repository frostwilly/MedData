import React, { Component } from 'react';
import './records.scss';

class Records extends Component {
  render() {
    return (
      <div className="records-card">
        <table>
          <tbody>
            <tr>
              <td>Medistra Hospital</td>
              <td>2018/08/01</td>
            </tr>
            <tr>
              <td colSpan="2">Patient appears flushed and is experiencing headaches, with symptoms of running nose. Temperature taken is 38.0 &deg;C. Prescribed cold medication and Paracetamol to patients for 3 days. 1 day of Medical Leave is awarded.</td>
            </tr>
            <tr>
              <td>Siloam Hospital</td>
              <td>2018/07/26</td>
            </tr>
            <tr>
              <td colSpan="2">He has experienced some nausea with the abdominal pain but has not vomited. He endorses constipation. Accompanying symptoms of fever (38 degree Celsius). Prescribed stomach flu medication to the patient.</td>
            </tr>
            <tr>
              <td>Siloam Hospital</td>
              <td>2018/06/23</td>
            </tr>
            <tr>
              <td colSpan="2">Patient foot appears fully recovered and the cast was removed.</td>
            </tr>
            <tr>
              <td>Siloam Hospital</td>
              <td>2018/04/20</td>
            </tr>
            <tr>
              <td colSpan="2">Patient left foot was swollen and appeared to be sprained. X-Ray result confirmed the sprain and a cast was given to the patient, which would be removed in 2 months. Prescribed pain killers to the patient for a duration of 2 months, and a 1 week medical leave was issued.</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Records