import React, { Component } from 'react';
import { connect }                  from 'react-redux';
import { getUsers } from '../actions';

class Users extends Component {
  constructor(props){
   super(props);
   this.state = {
    key: 'value'
   }
  }

  componentWillMount() {
    const domain = 'http://localhost:3001'
    const path = `${domain}/api/getusers`
    const headers = new Headers({
      "Authorization": `${localStorage.getItem('id_token')}`
    });
    const init = {
      method: 'GET',
      headers: headers,
    }
    const GETrequest = new Request(path, init);
    return fetch(GETrequest)
      .then((result)=> result.json())
      .then((jsonResult) => {
        this.props.getUsers(jsonResult)
      })
      .catch((err)=> console.log("errorrrrr: ", err))
  }



  render() {
    console.log("this.props from render: ", this.props);
    return (
      <div>
        <h1>Users</h1>
        {(this.props.users[0] &&
          this.props.users.map((user, index) => {
            return(<div key={index}>{user.username}</div>)
          })) || (<div>loading...</div>)
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("%cmapStateToProps", 'color: red; font-size: medium')
  const users = state.users
  return { users }
};

export default connect(mapStateToProps, { getUsers })(Users);