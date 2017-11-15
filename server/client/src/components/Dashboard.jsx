import React, { Component } from 'react';
import DashboardHeader from './DashboardHeader';
import DashboardSidebar from './DashboardSidebar';
import { Route }    from 'react-router-dom';
import Users                    from './Users';
import Pending                    from './Pending';
import Logout                    from './Logout';
import { connect }                  from 'react-redux';
import { withRouter } from 'react-router-dom'

class Dashboard extends Component {

  render() {
    if (!this.props.user.token) {
      this.props.history.replace('/')
    }
    return (
      <div className="dashboard fullscreen">
        <DashboardHeader account={this.props.user.account}/>
        <div className="sidebar-and-mainframe-container">
          <DashboardSidebar />
          <div className="main-frame">
            <Route path={`${this.props.match.url}/pending`} component={Pending}/>
            <Route path={`${this.props.match.url}/users`} component={Users}/>
            <Route path={`${this.props.match.url}/logout`} component={Logout}/>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state;
  if (!user.name) {
    user.token = localStorage.getItem('id_token')
    user.role = localStorage.getItem('role')
    user.name = localStorage.getItem('username')
    user.account = localStorage.getItem('account_name')
  }
  return { user }
};

export default withRouter(connect(mapStateToProps,null)(Dashboard))