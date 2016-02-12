import React from 'react';
import BlogListItem from './blog_list_item';

const BlogList = (props) => {
  const blogItems = props.blogs.map((blog)=>{
    return (
      <BlogListItem key={blog._id} blog={blog}></BlogListItem>
    )
  });
  return(
    <ul className="col-md-4 list-group">
      {blogItems}
    </ul>
  );
};


export default BlogList;




