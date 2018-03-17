import { combineReducers } from 'redux';
import articlesReducer from './reducer_articles';
import authorsReducer from './reducer_authors';

const rootReducer = combineReducers({
  featuredItems: articlesReducer,
  popularAuthors: authorsReducer,
});

export default rootReducer;
