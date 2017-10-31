import { GET_USERS } from '../constants'

export default (state = [], action) => {
  switch (action.type) {
    case GET_USERS:
      console.log("reducers/reducer_users: ", action);
      const { users } = action.payload;
      return users;
    default:
      return state;
  }
}
