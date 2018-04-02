import _ from 'lodash';
import { GET_AUTHOR, LIST_AUTHOR } from "../actions/action_author";

export default function (state = {}, action) {
  switch (action.type) {
    case GET_AUTHOR:
      return { ...state, [action.payload.id]: action.payload };
    case LIST_AUTHOR:
      return _.mapKeys(action.payload, 'id');
    default:
      return state;
  }
};
