import { combineReducers } from 'redux';
import articleReducer from './reducer_article';
import authorReducer from './reducer_author';

const rootReducer = combineReducers({
  articles: articleReducer,
  authors: authorReducer,
});

export default rootReducer;
