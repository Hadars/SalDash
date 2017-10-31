import React, { Component } from 'react';
import { Link }    from 'react-router-dom';

class ForgotPassForm extends Component {
  constructor(props){
   super(props);
   this.state = {
    email: ''
   }
  }

  handleClick() {
    console.log("this.state: ", this.state);
  }

  render() {
    return (
      <div className="login-section forgot-pass-section">
        <div className="email-container">
          <label className="email-label">Type your email</label>
          <input className="email-input" type="text" name="email" onChange={event => this.setState({email: event.target.value})}/>
        </div>
        <div className="button-container" onClick={() => this.handleClick()}>Reset Password</div>
        <div className="forgot-container">
          <span className="request"><Link to="/login">Back to login</Link></span>
        </div>
      </div>
    );
  }
}

export default ForgotPassForm;