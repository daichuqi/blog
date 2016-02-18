import {FETCH_BLOGS,CLEAR_BLOGS,ADD_BLOG,DELETE_BLOG,UPDATE_BLOG} from '../actions/index'


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
    case UPDATE_BLOG:
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
