import axios from 'axios';
import Constants from './constants'
const ActionType = Constants.ActionTypes;

export function updateBlog(blog){
  return{
    type:ActionType.UPDATE_BLOG,
    payload:blog
  }
}

export function selectBlog(blog){
  return{
    type:ActionType.SELECT_BLOG,
    payload:blog
  }
}

export function fetchBlogs(){
  const data = axios.post('/getAllBlogs')
  return{
    type:ActionType.FETCH_BLOGS,
    payload:data,
  };
}

export function addBlog(blog){
  return{
    type:ActionType.ADD_BLOG,
    payload:blog,
  };
}

export function fetchOneBlog(id){
  const data = axios.post('/getOneBlog',{
    id:id
  });
  return{
    type:ActionType.FETCH_ONE_BLOG,
    payload:data,
  };
}

export function clearBlog(){
    return{
    type:ActionType.CLEAR_BLOG,
  };
}

export function clearBlogs(){
    return{
    type:ActionType.CLEAR_BLOGS,
  };
}

export function deleteBlog(id){
  return{
    type:ActionType.DELETE_BLOG,
    payload:id,
  };
}

