import {FETCH_ONE_BLOG} from '../actions/index'
import {CLEAR_BLOG,SELECT_BLOG} from '../actions/index'

export default function(state=null,action){
  switch(action.type){
    case FETCH_ONE_BLOG:
      return action.payload.data; // return state.concat([action.payload.data]);
    case CLEAR_BLOG:
      return null;
    case SELECT_BLOG:
      return action.payload;
  }
  return state;
}