import React, { Component }         from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch}    from 'react-router-dom'
import { connect }                  from 'react-redux';
import Dashboard                    from './Dashboard';
import LogIn                      from './LogIn';
import RequestDemo                      from './RequestDemo';
import ForgotPassword                      from './ForgotPassword';
import './testlogin.css';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: {
        loggedIn: null,
        username: '',
        token: '',
        expires: ''
      }
    }
  }

  render() {
    console.log("%crender! App.jsx", 'color: blue; font-size: medium')
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/dashboard" component={Dashboard}/>
            <Route exact path="/login" component={LogIn}/>
            <Route exact path="/request_demo" component={RequestDemo}/>
            <Route exact path="/forgot_password" component={ForgotPassword}/>
            {
              (localStorage.getItem('id_token') === null &&
              (<Redirect to={{pathname: '/login'}}/>)) ||
              (<Redirect to={{pathname: '/dashboard'}}/>)
            }
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  // const { loggedIn, username, token, expires, email } = state;
  // console.log("state: ", state);
  return { }
};

export default connect(mapStateToProps, null)(App);