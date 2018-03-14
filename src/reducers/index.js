import { combineReducers } from 'redux';
import ItemsReducer from './reducer_items';

const rootReducer = combineReducers({
  featuredItems: ItemsReducer,
});

export default rootReducer;
