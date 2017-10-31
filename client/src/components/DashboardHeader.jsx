import React, { Component } from 'react';
import { Redirect }             from 'react-router-dom';
import { logout }           from '../services/AuthenticationHelper';
import './dashboard.css';
class DashboardHeader extends Component {
  constructor(props){
   super(props);
   this.state = {
    loggedOut: false
   }
  }

  tuneIcon () {
    return (
      <div onClick={() => this.setState({loggedOut: true})} className="toolbox-icon-container">
        <svg fill="#191426" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"/>
        </svg>
      </div>
    )
  }

  renderToolbox() {
    return (
      <div className="upper-toolbar-container">
        {this.tuneIcon()}
        <div className="account-name-container">
          <div className="account-name-text">AccountName</div>
        </div>
      </div>
    )
  }

  renderLogoAndText() {
    return (
      <div className="dashboard-logo-and-text-container">
        <div className="dashboard-logo-container">
          <div className="logo dashboard-logo"></div>
        </div>
        <div className="dashboard-text-container">
          <span className="dashboard-text">D A S H B O A R D</span>
        </div>
      </div>
    )
  }

  render() {
    console.log("this.state: ", this.state);
    if (this.state.loggedOut) {
      logout()
      return <Redirect to={{pathname: '/'}}/>
    }
    else {
      return (
        <div className="dashboard-header">
          {this.renderLogoAndText()}
          {this.renderToolbox()}
        </div>
      )
    }

  }
}

export default DashboardHeader;