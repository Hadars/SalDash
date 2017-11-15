import { SIGNED_IN } from '../constants'
import { GET_USERS } from '../constants'
import { GET_PENDINGS } from '../constants'
import { LOG_OUT } from '../constants'


export function logUser(user)  {
  const action = {
    type: SIGNED_IN,
    payload: {
      user
    }
  }
  console.log("(actions/index.js): action in logUser", action);
  return action;
}

export function logOutUser(user)  {
  const action = {
    type: LOG_OUT,
    payload: {
      user
    }
  }
  console.log("(actions/index.js): action in logOutUser", action);
  return action;
}


export function getUsers(users)  {
  const action = {
    type: GET_USERS,
    payload: {
      users
    }
  }
  console.log("(actions/index.js): action in getUsers", action);
  return action;
}

export function getPendings(pendings)  {
  const action = {
    type: GET_PENDINGS,
    payload: {
      pendings
    }
  }
  console.log("(actions/index.js): action in getUsers", action);
  return action;
}