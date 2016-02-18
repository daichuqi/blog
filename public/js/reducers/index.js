import { combineReducers } from 'redux';
import BlogsReducer from './reducer_blogs';
import SelectBlogReducer from './reducer_one_blog';

const rootReducer = combineReducers({
  blogs:BlogsReducer,
  blog:SelectBlogReducer
});

export default rootReducer;
