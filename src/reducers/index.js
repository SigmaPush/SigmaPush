import { combineReducers } from 'redux';
import ArticleReducer from './reducer_articles';

const rootReducer = combineReducers({
  articles: ArticleReducer,
});

export default rootReducer;
