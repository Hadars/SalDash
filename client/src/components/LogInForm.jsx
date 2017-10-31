import React, { Component } from 'react';
import { Link }             from 'react-router-dom';
import { signIn }           from '../services/AuthenticationHelper';
import Expire               from './Expire';
import { connect } from 'react-redux';
import { logUser } from '../actions';
import { Redirect}    from 'react-router-dom'

class LogInForm extends Component {
  constructor(props){
   super(props);
   this.state = {
      email: '',
      password: '',
      error: null,
      loggedIn: false
    }
  }

  handleSubmit () {
    const { email, password } = this.state
    this.setState({error: null})
    signIn(email, password)
    .then((result) => {
      const user = {
        email,
        success: result.success,
        token: result.token,
        role: result.role
      }
      return this.props.logUser(user)
    })
    .catch((err) => this.setState({error: err.message }))
  }

  errorDiv() {
    const { error } = this.state
    return(
      <Expire delay={5000}>{error}</Expire>
    )
  }

  renderLogin() {
    return (
      <div className="login-section">
        <div className="email-container">
          <label className="email-label">Email</label>
          <input className="email-input" type="text" name="email" onChange={event => this.setState({email: event.target.value})}/>
        </div>

        <div className="password-container">
          <label className="pass-label">Password</label>
          <input className="email-input" type="password" name="pass" onChange={event => this.setState({password: event.target.value})}/>
        </div>
        {this.state.error && this.errorDiv() }
        <div className="button-container" onClick={() => this.handleSubmit()}>Go to dashboard</div>

        <div className="forgot-container">
          <span className="request"><Link to="/request_demo">Request a demo</Link></span>
          <span className="forgot"><Link to="/forgot_password">Forgot password</Link></span>
        </div>
      </div>
    )
  }

  redirectToDashboard() {
    return <Redirect to={{pathname: '/dashboard'}}/>
  }

  render() {
    console.log("%crender! LoginForm.jsx", 'color: blue; font-size: medium')
    console.log("this.props: ", this.props);
    if (!this.props.user.loggedIn) {
      return this.renderLogin()
    }
    else {
      return this.redirectToDashboard()
    }

  }
}

function mapStateToProps(state) {
  const { user } = state
  return { user }
};

export default connect(mapStateToProps, { logUser })(LogInForm);