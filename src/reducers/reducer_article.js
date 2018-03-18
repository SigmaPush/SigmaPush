import _ from 'lodash';
import { GET_ARTICLE, LIST_ARTICLE } from "../actions/action_article";

export default function (state = {}, action) {
  switch (action.type) {
    case GET_ARTICLE:
      return { ...state, [action.payload.id]: action.payload };
    case LIST_ARTICLE:
      return _.mapKeys(action.payload, 'id');
    default:
      return state;
  }
};
