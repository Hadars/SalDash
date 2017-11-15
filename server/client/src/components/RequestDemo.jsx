import React, { Component } from 'react';
import RequestDemoForm      from './RequestDemoForm';

class RequestDemo extends Component {
  //constructor(props){
  //  super(props);
  //}

  render() {
    return (
      <div className='reset-box-sizing'>
        <div className="left">
          <div className="logo-container">
            <div className="logo"></div>
            <div className="logo-text">D A S H B O A R D</div>
          </div>
          <RequestDemoForm />
          <div className="footer">Salaryo inc 2017. All rights reserved</div>
        </div>
        <div className="right"></div>
      </div>
    );
  }
}

export default RequestDemo;