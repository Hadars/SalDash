import React, { Component } from 'react';
import LogInForm            from './LogInForm';
import AltLogin            from './AltLogin';
import { connect }                  from 'react-redux';

class LogIn extends Component {
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
          <LogInForm />
          <div className="or">OR</div>
          <AltLogin />
          <div className="footer">Salaryo inc 2017. All rights reserved</div>
        </div>
        <div className="right CoverImage FlexEmbed FlexEmbed--4by3">
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { }
};

export default connect(mapStateToProps, null)(LogIn);