import {FETCH_BLOGS} from '../actions/index'

export default function(state=[],action){
  switch(action.type){
    case FETCH_BLOGS:
      // return state.concat([action.payload.data]);
      return action.payload.data;
  }
  return state;
}