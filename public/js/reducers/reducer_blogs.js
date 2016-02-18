import {FETCH_BLOGS,CLEAR_BLOGS} from '../actions/index'

export default function(state=[],action){
  switch(action.type){
    case FETCH_BLOGS:
      // return state.concat([action.payload.data]);
      return action.payload.data;
    case CLEAR_BLOGS:
      return [];
  }
  return state;
}