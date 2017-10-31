import React, { Component } from 'react';
import { connect }                  from 'react-redux';
import { getPendings } from '../actions';

class Pending extends Component {
  constructor(props){
   super(props);
   this.state = {
    key: 'value'
   }
  }

  componentWillMount() {
    const domain = 'http://localhost:3001'
    const path = `${domain}/api/pendings`
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
        this.props.getPendings(jsonResult)
      })
      .catch((err)=> console.log("errorrrrr: ", err))
  }

  renderPending(pending) {
    return (
      <ul>
        <li>{pending.id}</li>
        <li>{pending.fullname}</li>
        <li>{pending.company}</li>
        <li>{pending.phone}</li>
        <li>{pending.email}</li>
        <li>{pending.createdAt}</li>
        <li>{pending.updatedAt}</li>
      </ul>
    )
  }

  render() {
    console.log("this.props: ", this.props);
    return (
      <div>
        <h1>Pending Requests</h1>
        {(this.props.pendings &&
          this.props.pendings.map((pending, index) => {
            return(this.renderPending(pending))
          })) || (<div>loading...</div>)
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("%cmapStateToProps", 'color: red; font-size: medium')
  const pendings = state.pendings
  return { pendings }
};

export default connect(mapStateToProps, { getPendings })(Pending);