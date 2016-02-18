import {FETCH_ONE_BLOG} from '../actions/index'
import {CLEAR_BLOG} from '../actions/index'

export default function(state=[],action){
  switch(action.type){
    case FETCH_ONE_BLOG:
      return action.payload.data; // return state.concat([action.payload.data]);
    case CLEAR_BLOG:
      return []
  }
  return state;
}