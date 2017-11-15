import React, { Component } from 'react';
import ForgotPassForm      from './ForgotPassForm';

class ForgotPassword extends Component {
  constructor(props){
   super(props);
   this.state = {
    email: ''
   }
  }

  render() {
    return (
      <div className='reset-box-sizing'>
        <div className="left">
          <div className="logo-container">
            <div className="logo"></div>
            <div className="logo-text">D A S H B O A R D</div>
          </div>
          <ForgotPassForm />
          <div className="footer">Salaryo inc 2017. All rights reserved</div>
        </div>
        <div className="right"></div>
      </div>
    );
  }
}

export default ForgotPassword;