import React, { Component } from 'react';
import { logout }           from '../services/AuthenticationHelper';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { logOutUser } from '../actions';


class Logout extends Component {

  componentWillMount() {
    logout()
    this.props.logOutUser()
    this.props.history.replace('/')
  }

  render() {
    return null
  }
}

function mapStateToProps(state) {
  return { }
};

export default withRouter(connect(mapStateToProps, { logOutUser })(Logout))