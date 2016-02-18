import { combineReducers } from 'redux';
import BlogsReducer from './reducer_blogs';

const rootReducer = combineReducers({
  blogs:BlogsReducer
});

export default rootReducer;
