import _ from 'lodash';
import { LIST_CATALOG } from "../actions/action_catalog";

export default function (state = {}, action) {
  switch (action.type) {
    case LIST_CATALOG:
      return _.mapKeys(action.payload, 'id');
    default:
      return state;
  }
}
