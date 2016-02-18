import Constants from '../actions/constants'
const ActionType = Constants.ActionTypes;

export default function(state=[],action){
  switch(action.type){
    case ActionType.FETCH_BLOGS:
      // return state.concat([action.payload.data]);
      return [].concat.apply([], [action.payload.data,...state])
    case ActionType.CLEAR_BLOGS:
      return []
    case ActionType.ADD_BLOG:
      return [action.payload,...state]
    case ActionType.DELETE_BLOG:
      return [...state].filter(function (blog) {
        return blog._id !== action.payload.id;
      });
    case ActionType.UPDATE_BLOG:
      return [...state].map(function(blog,i){
        if(blog._id === action.payload.id){
          blog.title = action.payload.title
          blog.text = action.payload.text
          return blog
        }
        return blog
      })
  }
  return state;
}
