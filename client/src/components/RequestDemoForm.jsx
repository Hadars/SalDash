import React, { Component } from 'react';
import { Link }    from 'react-router-dom';
import { requestDemo }  from '../services/AuthenticationHelper';

class RequestDemoForm extends Component {
  constructor(props){
   super(props);
   this.state = {
    fullname: '',
    company: '',
    phone: '',
    email: ''
   }
  }

  handleClick () {
    const {fullname, company, phone, email} = this.state
    requestDemo({fullname, company, phone, email})
  }

  render() {
    return (
      <div className="login-section request-demo-section">

        <div className="email-container">
          <label className="email-label">Full Name</label>
          <input className="email-input" type="text" name="email" onChange={event => this.setState({fullname: event.target.value})}/>
        </div>

        <div className="email-container">
          <label className="email-label">Company</label>
          <input className="email-input" type="text" name="email" onChange={event => this.setState({company: event.target.value})}/>
        </div>

        <div className="email-container">
          <label className="email-label">Phone</label>
          <input className="email-input" type="text" name="email" onChange={event => this.setState({phone: event.target.value})}/>
        </div>

        <div className="email-container">
          <label className="email-label">Email</label>
          <input className="email-input" type="text" name="email" onChange={event => this.setState({email: event.target.value})}/>
        </div>

        <div className="button-container" onClick={() => this.handleClick()}>Request a demo</div>

        <div className="forgot-container">
          <span className="request"><Link to="/login">Back to login</Link></span>
        </div>

      </div>
    )
  }
}

export default RequestDemoForm;