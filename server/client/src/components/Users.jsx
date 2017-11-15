import React, { Component } from 'react';
import { connect }                  from 'react-redux';
import { getUsers } from '../actions';

class Users extends Component {
  constructor(props){
   super(props);
   this.state = {
    userStatus: null,
    name: null,
    surname: null,
    gender: null,
    middleName: null,
    natureOfBusiness: null,
    companyName: null,
    jobTitle: null,
    email: null,
    phoneNumber: null,
    zipCode: null,
    idType: null,
    idImage: null,
    validDate: null,
    nationality: null,
    dateOfBirth: null,
    residence: null,
    address: null,
    faceImage: null,
    password: null,
    aut10x: null,
    pos: null,
    acquire: null,
    fields: ['userStatus', 'name', 'surname', 'gender', 'middleName', 'natureOfBusiness', 'companyName', 'jobTitle', 'email', 'phoneNumber', 'zipCode', 'idType', 'idImage', 'validDate', 'nationality', 'dateOfBirth', 'residence', 'address', 'faceImage', 'password', 'aut10x', 'pos', 'acquire']
   }
  }

  componentWillMount() {
    const domain = 'http://localhost:3001'
    const path = `/api/getusers`
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

  renderNewUserForm() {
    return (
      <ul>
        {this.state.fields.map((field, index) =>{
          return (
            <li>
              <div className="email-container">
                <label className="email-label">{field}</label>
                <input className="email-input" type="text" name="email" onChange={event => this.setState({[field]: event.target.value})}/>
              </div>
            </li>
          )
        })}
        <li>
          <div className="button-container" onClick={() => this.handleSubmit()}>Create User</div>
        </li>
      </ul>
    )
  }

  handleSubmit() {

  }


  render() {
    return (
      <div>
        <h1>Users</h1>
        {this.props.users[0] &&
          this.props.users.map((user, index) => {
            return(<div key={index}>{user.username}</div>)
          }) || <div>loading...</div>
        }
        <h1>Add User</h1>
        <div className="add-user-container">
          {this.renderNewUserForm()}
        </div>
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