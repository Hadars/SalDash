import { GET_PENDINGS } from '../constants'

export default (state = [], action) => {
  switch (action.type) {
    case GET_PENDINGS:
      console.log("reducers/reducer_pendings: ", action);
      const { pendings } = action.payload;
      return pendings;
    default:
      return state;
  }
}
