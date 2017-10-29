import { combineReducers } from 'redux';

import user from './reducer_user'
import users from './reducer_users'
import pendings from './reducer_pendings'

export default combineReducers({
  user,
  users,
  pendings
});

