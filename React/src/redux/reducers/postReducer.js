
import { ADD_POST, FETCH_POST } from '../actions/types';

export default function postReducer(state = [], action) {
  switch (action.type) {
    case ADD_POST:
      return [...state, action.payload];
      case FETCH_POST:
      return action.posts;
    default:
      return state;
  }
}
