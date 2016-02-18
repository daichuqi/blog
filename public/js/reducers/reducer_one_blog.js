import Constants from '../actions/constants'
const ActionType = Constants.ActionTypes;

export default function(state=null,action){
  switch(action.type){
    case ActionType.FETCH_ONE_BLOG:
      return action.payload.data; // return state.concat([action.payload.data]);
    case ActionType.CLEAR_BLOG:
      return null;
    case ActionType.SELECT_BLOG:
      return action.payload;
  }
  return state;
}