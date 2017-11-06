import { SIGNED_IN } from '../constants';

  let user = {
    email: null,
    success: null,
    token: null,
    role: null,
    username: null,
    account: null
  }


export default (state = user, action) => {
  switch (action.type) {
    case SIGNED_IN:
      console.log("reducers/reducer_user: ", action);
      let { user } = action.payload;
      user.loggedIn = true
      return user;
    default:
      return state;
  }
}
