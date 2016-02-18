import React from 'react';
import BlogListItem from './blog_list_item';
import {compareTimeMs} from '../utils/AppUtils'


const BlogList = ({blogs}) => {
  if(blogs.length === 0){
    return(
      <div></div>
    )
  }
  const blogItems = blogs.sort(compareTimeMs).map((blog,i)=>{
    return (
      <BlogListItem key={i} blog={blog}></BlogListItem>
    )
  });
  return(
    <ul className="col-lg-8 col-md-10 list-group">
      {blogItems}
    </ul>
  );
};


export default BlogList;




