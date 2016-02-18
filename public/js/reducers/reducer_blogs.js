import {FETCH_BLOGS,CLEAR_BLOGS,ADD_BLOG,DELETE_BLOG} from '../actions/index'


export default function(state=[],action){
  switch(action.type){
    case FETCH_BLOGS:
      // return state.concat([action.payload.data]);
      return [].concat.apply([], [action.payload.data,...state])
    case CLEAR_BLOGS:
      return []
    case ADD_BLOG:
      return [action.payload,...state]
    case DELETE_BLOG:
      return [...state].filter(function (blog) {
        return blog._id !== action.payload.id;
      });
  }
  return state;
}
