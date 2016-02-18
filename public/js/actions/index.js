import axios from 'axios';

export const FETCH_BLOGS = 'FETCH_BLOGS';
export function fetchBlogs(){
  const data = axios.post('/getAllBlogs')
  return{
    type:FETCH_BLOGS,
    payload:data
  };
}