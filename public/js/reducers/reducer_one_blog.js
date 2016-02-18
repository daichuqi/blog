import {FETCH_ONE_BLOG} from '../actions/index'
import {CLEAR_BLOG} from '../actions/index'

export default function(state=[],action){
  switch(action.type){
    case FETCH_ONE_BLOG:
      return [].concat.apply([], [action.payload.data,...state]); // return state.concat([action.payload.data]);
    case CLEAR_BLOG:
      return []
  }
  return state;
}