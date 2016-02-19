import React from 'react';
import BlogListItem from './blog_list_item';
import {compareTimeMs} from '../utils/AppUtils'
import PageBar from '../containers/pagination'

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
    <div className="col-lg-7 col-md-10 paddingZero">
      <ul className="list-group">
        {blogItems}
      </ul>
      <PageBar />
    </div>
  );
};


export default BlogList;




