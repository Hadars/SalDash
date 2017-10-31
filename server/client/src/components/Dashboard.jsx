import React, { Component } from 'react';
import DashboardHeader from './DashboardHeader';
import DashboardSidebar from './DashboardSidebar';
import { Route }    from 'react-router-dom';
import Users                    from './Users';
import Pending                    from './Pending';

class Dashboard extends Component {
  //constructor(props){
  //  super(props);
  //}

  render() {
    return (
      <div className="dashboard fullscreen">
        <DashboardHeader />
        <div className="sidebar-and-mainframe-container">
          <DashboardSidebar />
          <div className="main-frame">
            <Route path={`${this.props.match.url}/pending`} component={Pending}/>
            <Route path={`${this.props.match.url}/users`} component={Users}/>
            <Route path={`${this.props.match.url}/logout`} component={Users}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;