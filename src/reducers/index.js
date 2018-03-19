import { combineReducers } from 'redux';
import articleReducer from './reducer_article';
import authorReducer from './reducer_author';
import catalogReducer from './reducer_catalog';
import tagReducer from './reducer_tag';

const rootReducer = combineReducers({
  articles: articleReducer,
  authorArticles: articleReducer,
  authors: authorReducer,
  catalogs: catalogReducer,
  tags: tagReducer,
});

export default rootReducer;
