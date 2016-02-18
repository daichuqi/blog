import axios from 'axios';

export const FETCH_BLOGS = 'FETCH_BLOGS';
export const FETCH_ONE_BLOG = 'FETCH_ONE_BLOG';
export const CLEAR_BLOG = 'CLEAR_BLOG';
export const CLEAR_BLOGS = 'CLEAR_BLOGS';
export const ADD_BLOG = 'ADD_BLOG';

export function fetchBlogs(){
  const data = axios.post('/getAllBlogs')
  return{
    type:FETCH_BLOGS,
    payload:data,
  };
}

export function addBlog(blog){
  return{
    type:ADD_BLOG,
    payload:blog,
  };
}

export function fetchOneBlog(id){
  const data = axios.post('/getOneBlog',{
    id:id
  });
  return{
    type:FETCH_ONE_BLOG,
    payload:data,
  };
}

export function clearBlog(){
    return{
    type:CLEAR_BLOG,
  };
}

export function clearBlogs(){
    return{
    type:CLEAR_BLOGS,
  };
}