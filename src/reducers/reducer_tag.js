import _ from 'lodash';
import { LIST_TAG } from "../actions/action_tag";

export default function (state = {}, action) {
  switch (action.type) {
    case LIST_TAG:
      return _.mapKeys(action.payload, 'id');
    default:
      return state;
  }
};
