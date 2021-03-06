import React, { Component } from 'react';
import './topbar.scss';
import logo from '../../assets/logo.png'

class TopBar extends Component {
  componentDidMount() {
    const { topbar } = this.refs;

    // Detect window scroll
    window.addEventListener('scroll', e => {
      if (window.scrollY > 0) {
        topbar.style.boxShadow = '0 7px 25px 0 rgba(0, 0, 0, 0.05)';
      } else {
        topbar.removeAttribute('style');
      }
    });
  }
  render() {
    return (
      <div className="topbar" ref="topbar">
        <img src={logo} alt="logo" />
        <a href="https://app.box.com/s/vboedq5biiuyoe6mtonmuz2013uyfb40" target="_blank">Export as PDF</a>
        <a href="#">Export as CSV</a>
        <a href="#" style={{ float: "right" }}>Logout</a>
        <span style={{ float: "right" }}>Medistra Hospital</span>
      </div>
    )
  }
}

export default TopBar